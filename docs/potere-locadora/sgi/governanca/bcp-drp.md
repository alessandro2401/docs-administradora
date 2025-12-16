## Plano de Continuidade de Negócios (BCP) e Plano de Recuperação de Desastres (DRP)

### 1. Introdução

Este documento detalha as estratégias e procedimentos para garantir a continuidade das operações críticas da POTERE LOCADORA e a rápida recuperação de seus sistemas de TI em caso de um desastre ou interrupção significativa. O objetivo é minimizar o impacto financeiro e operacional, proteger a reputação da marca e manter a confiança dos clientes.

### 2. Análise de Impacto nos Negócios (BIA)

| Processo de Negócio Crítico | RTO (Recovery Time Objective) | RPO (Recovery Point Objective) | Impacto da Interrupção |
| :--- | :--- | :--- | :--- |
| **Reservas Online** | < 15 minutos | < 5 minutos | Perda de receita direta, dano à reputação, frustração do cliente. |
| **Acesso ao Portal do Cliente** | < 30 minutos | < 5 minutos | Incapacidade do cliente de gerenciar contratos, registrar KM, etc. Aumento de chamados no suporte. |
| **Operações do Backoffice** | < 2 horas | < 15 minutos | Atraso na análise de crédito, faturamento e gestão da frota. Impacto operacional interno. |
| **Processamento de Pagamentos** | < 5 minutos | < 1 minuto | Perda de receita, risco de inadimplência, problemas de conciliação. |

-   **RTO (Recovery Time Objective):** O tempo máximo que o sistema pode ficar indisponível após um desastre.
-   **RPO (Recovery Point Objective):** A quantidade máxima de perda de dados aceitável, medida em tempo (ex: 5 minutos de dados).

### 3. Plano de Continuidade de Negócios (BCP)

O BCP foca em manter as operações funcionando durante uma interrupção.

-   **Falha do Gateway de Pagamento (Stripe):**
    -   **Detecção:** Monitoramento sintético que testa o fluxo de pagamento a cada 5 minutos.
    -   **Ação:** O sistema automaticamente desabilitará o Stripe no frontend e manterá apenas o Mercado Pago como opção. Uma notificação será enviada para a equipe financeira.
-   **Indisponibilidade da API FIPE:**
    -   **Detecção:** O CRON job de atualização detectará o erro.
    -   **Ação:** O sistema utilizará o último valor FIPE registrado no banco de dados e continuará tentando a atualização a cada hora. A rentabilidade será calculada com o valor do mês anterior, e um alerta será exibido no dashboard do admin.
-   **Indisponibilidade do Serviço de E-mail (SendGrid):**
    -   **Detecção:** Monitoramento de falhas de envio de e-mail.
    -   **Ação:** O sistema colocará os e-mails em uma fila e tentará reenviá-los com uma estratégia de backoff exponencial. Se a falha persistir por mais de 1 hora, o sistema pode ser configurado para usar um provedor de e-mail secundário (ex: Amazon SES).

### 4. Plano de Recuperação de Desastres (DRP)

O DRP foca na recuperação da infraestrutura de TI após um desastre.

-   **Estratégia de Backup:**
    -   **Banco de Dados (Neon):** A plataforma Neon realiza backups contínuos automaticamente (Point-in-Time Recovery - PITR). Isso permite restaurar o banco de dados para qualquer segundo nos últimos 7 dias (ou mais, dependendo do plano), atendendo ao nosso RPO de < 5 minutos.
    -   **Armazenamento de Arquivos (Cloudflare R2):** O R2 possui replicação geográfica automática, garantindo alta durabilidade e disponibilidade dos arquivos. Backups adicionais podem ser configurados para outra região de nuvem (ex: AWS S3) para redundância extra.
    -   **Código-Fonte:** O código está versionado no GitHub, que possui sua própria redundância. O pipeline de CI/CD pode ser acionado a qualquer momento para recriar a aplicação do zero.

-   **Cenário de Desastre: Perda Total da Região da Nuvem do Backend (Railway/Render)**
    -   **RTO Alvo:** < 2 horas
    -   **Procedimento de Recuperação:**
        1.  **Declaração do Desastre (T+0):** O monitoramento automático (UptimeRobot, DataDog) detecta a falha e alerta o Engenheiro de DevOps de plantão.
        2.  **Ativação do DRP (T+5 min):** O DevOps confirma a falha e inicia o plano de recuperação.
        3.  **Provisionamento de Nova Infraestrutura (T+15 min):** Utilizando o Terraform (Infraestrutura como Código), o DevOps provisiona uma nova instância do backend em uma região diferente ou em um provedor de nuvem alternativo (ex: se estava no Railway, sobe no Render).
        4.  **Deploy da Aplicação (T+45 min):** O pipeline de CI/CD do GitHub Actions é acionado para fazer o deploy da última versão estável do código na nova infraestrutura.
        5.  **Restauração do Banco de Dados (T+1h 15 min):** O banco de dados Neon não é afetado, pois é um serviço separado. A nova instância do backend é apenas apontada para o mesmo connection string do Neon.
        6.  **Atualização do DNS (T+1h 45 min):** O DNS no Cloudflare é atualizado para apontar a API para o novo endereço do backend.
        7.  **Validação e Retorno à Operação (T+2h):** A equipe realiza testes para garantir que o sistema está funcionando e declara o fim do desastre.

-   **Equipe de Resposta a Desastres:**
    -   **Líder de Resposta:** Arquiteto de Soluções
    -   **Comunicação:** Gerente de Projeto
    -   **Execução Técnica:** Engenheiro de DevOps, Desenvolvedores Backend Sêniores.
