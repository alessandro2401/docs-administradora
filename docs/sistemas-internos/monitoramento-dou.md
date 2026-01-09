# Sistema de Monitoramento do Diário Oficial da União

**URL:** [dou.administradoramutual.com.br](https://dou.administradoramutual.com.br)  
**Versão:** 1.0.0  
**Última atualização:** Janeiro de 2026

## Visão Geral

O Sistema de Monitoramento do Diário Oficial da União é uma plataforma especializada para acompanhamento automatizado de publicações oficiais relacionadas ao mercado de seguros brasileiro. O sistema coleta, processa e organiza publicações do DOU, facilitando o monitoramento regulatório e a identificação de atos normativos relevantes para o setor de seguros e proteção patrimonial.

A plataforma foi desenvolvida para atender às necessidades da Administradora Mutual no acompanhamento de decisões da SUSEP (Superintendência de Seguros Privados), CNSP (Conselho Nacional de Seguros Privados), Ministério da Fazenda e demais órgãos reguladores, além de monitorar menções a seguradoras específicas.

## Funcionalidades Principais

### 1. Coleta Automatizada de Dados

O sistema realiza coleta automática de publicações do DOU através de múltiplas fontes:

- **Arquivos XML mensais** da Imprensa Nacional (dados históricos)
- **API REST** para coleta em tempo real de publicações recentes
- **Agendamento automático** com execução diária às 8h (horário de Brasília)
- **Processamento inteligente** com filtros específicos para o setor de seguros

### 2. Processamento ETL (Extract, Transform, Load)

O módulo de processamento realiza extração inteligente de informações:

- **Reconhecimento de entidades:** Identifica automaticamente SUSEP, CNSP, Ministério da Fazenda, seguradoras e tipos de atos normativos
- **Extração de CNPJs:** Localiza e valida CNPJs mencionados nas publicações
- **Classificação automática:** Categoriza publicações por tipo (Portaria, Resolução, Circular, Despacho, etc.)
- **Vinculação com base de dados:** Associa publicações com 189 seguradoras cadastradas

### 3. Busca Avançada

Interface poderosa de busca com múltiplos filtros:

- **Filtro por período:** Seleção de intervalo de datas com date picker
- **Filtro por órgão:** SUSEP, CNSP, Ministério da Fazenda, outros
- **Filtro por seguradora:** Busca por seguradoras específicas (189 cadastradas)
- **Filtro por tipo de ato:** Portaria, Resolução, Circular, Despacho, Instrução Normativa
- **Busca textual:** Pesquisa por palavras-chave no texto completo das publicações
- **Resultados paginados:** Navegação eficiente com 20 resultados por página

### 4. Dashboard Executivo

Painel gerencial com métricas e visualizações em tempo real:

- **Cards de métricas principais:**
  - Total de publicações monitoradas
  - Número de seguradoras cadastradas
  - Órgãos reguladores acompanhados
  - Alertas ativos configurados

- **Publicações recentes:** Lista das últimas publicações coletadas
- **Botões de ação rápida:** Coleta manual de dados (exemplo, hoje, últimos 7 dias)

### 5. Analytics e Visualizações

Página dedicada com gráficos interativos construídos com Recharts:

- **Distribuição por órgão regulador:** Gráfico de pizza mostrando volume de publicações por fonte
- **Volume mensal de publicações:** Gráfico de linhas com tendência temporal
- **Tipos de atos normativos:** Gráfico de barras com distribuição por categoria
- **Seguradoras mais citadas:** Ranking das empresas com maior número de menções

### 6. Sistema de Alertas Personalizáveis

Configuração flexível de notificações automáticas:

- **Criação de alertas customizados** com múltiplos critérios
- **Monitoramento por palavras-chave:** Termos específicos de interesse
- **Monitoramento por seguradora:** Alertas para empresas específicas
- **Monitoramento por órgão:** Notificações de publicações de órgãos selecionados
- **Notificações por email:** Envio automático com templates HTML profissionais
- **Processamento agendado:** Verificação a cada 30 minutos

### 7. Visualização de Publicações

Página de detalhes completa para cada publicação:

- **Metadados estruturados:** Data, seção, tipo de ato, órgãos citados
- **Texto integral completo:** Exibição formatada do conteúdo oficial
- **Entidades reconhecidas:** Destaque de seguradoras e órgãos mencionados
- **Link para fonte oficial:** Acesso direto à publicação no DOU
- **Exportação para PDF:** Download individual de publicações

### 8. Exportação de Dados

Funcionalidades de exportação para análise externa:

- **Exportação individual:** PDF de publicações específicas
- **Exportação em lote:** Múltiplas publicações em um único arquivo
- **Formato profissional:** Layout estruturado com cabeçalho e metadados

## Arquitetura Técnica

### Stack Tecnológico

**Frontend:**
- React 19 com TypeScript
- Tailwind CSS 4 para estilização
- tRPC para comunicação type-safe com backend
- Recharts para visualizações de dados
- Wouter para roteamento
- shadcn/ui para componentes de interface

**Backend:**
- Node.js com Express 4
- tRPC 11 para APIs type-safe
- Drizzle ORM para acesso ao banco de dados
- MySQL/TiDB como banco de dados principal
- node-cron para agendamento de tarefas
- fast-xml-parser para processamento de XML
- nodemailer para envio de emails
- jsPDF para geração de PDFs

**Infraestrutura:**
- Plataforma Manus (hospedagem gerenciada)
- Banco de dados MySQL gerenciado
- Autenticação OAuth Manus
- SMTP configurado para envio de emails

### Estrutura do Banco de Dados

O sistema utiliza 4 tabelas principais:

**1. publications (Publicações)**
- `id`: Identificador único
- `date`: Data da publicação
- `section`: Seção do DOU (1, 2, 3, Extra)
- `actType`: Tipo de ato (Portaria, Resolução, etc.)
- `title`: Título da publicação
- `content`: Texto integral completo
- `url`: Link para fonte oficial
- `organsText`: Órgãos citados (texto)
- `insurersText`: Seguradoras citadas (texto)
- `createdAt`: Data de cadastro

**2. insurers (Seguradoras)**
- `id`: Identificador único
- `name`: Razão social
- `cnpj`: CNPJ (único)
- `susepCode`: Código SUSEP
- `address`: Endereço completo
- `phone`: Telefone de contato
- `active`: Status (ativo/inativo)

**3. organs (Órgãos Reguladores)**
- `id`: Identificador único
- `name`: Nome do órgão
- `acronym`: Sigla (SUSEP, CNSP, etc.)
- `description`: Descrição
- `active`: Status

**4. alerts (Alertas)**
- `id`: Identificador único
- `userId`: Usuário proprietário
- `name`: Nome do alerta
- `keywords`: Palavras-chave (JSON)
- `insurerIds`: Seguradoras monitoradas (JSON)
- `organIds`: Órgãos monitorados (JSON)
- `email`: Email para notificações
- `active`: Status
- `lastTriggered`: Última execução

### Módulos e Serviços

**1. dou-collector.ts**
- Coleta de dados do DOU via XML e API
- Parsing e normalização de publicações
- Filtros específicos para setor de seguros

**2. dou-real-collector.ts**
- Integração com API oficial da Imprensa Nacional
- Download de arquivos XML mensais
- Processamento em lote

**3. scheduler.ts**
- Gerenciamento de jobs agendados
- Coleta diária automática (8h)
- Processamento de alertas (30 min)
- Modo desenvolvimento (1 min para testes)

**4. alert-processor.ts**
- Verificação de alertas configurados
- Matching de publicações com critérios
- Disparo de notificações

**5. email-service.ts**
- Envio de emails via SMTP
- Templates HTML profissionais
- Suporte a múltiplos destinatários

**6. pdf-export.ts**
- Geração de PDFs com jsPDF
- Layout profissional estruturado
- Exportação individual e em lote

## Base de Dados de Seguradoras

O sistema possui cadastro completo de **189 seguradoras ativas** no Brasil, coletadas de fontes oficiais:

- Dados extraídos da SUSEP e CNSeg
- Informações completas: razão social, CNPJ, código SUSEP
- Endereços e telefones de contato
- Atualização periódica da base

**Principais seguradoras cadastradas:**
- Bradesco Seguros
- Porto Seguro
- SulAmérica Seguros
- Allianz Seguros
- Tokio Marine
- Liberty Seguros
- Mapfre Seguros
- HDI Seguros
- E muitas outras...

## Guia de Uso

### Acessando o Sistema

1. Acesse [dou.administradoramutual.com.br](https://dou.administradoramutual.com.br)
2. Faça login com suas credenciais Manus OAuth
3. Você será direcionado ao Dashboard principal

### Coletando Dados

**Coleta Manual:**
1. No Dashboard, clique em um dos botões:
   - **"Coletar Dados de Exemplo":** Cria publicações fictícias para demonstração
   - **"Coletar Hoje":** Busca publicações do dia atual
   - **"Últimos 7 Dias":** Coleta publicações da última semana

2. Aguarde o processamento (pode levar alguns minutos)
3. As métricas serão atualizadas automaticamente

**Coleta Automática:**
- O sistema executa coleta diária automaticamente às 8h
- Não requer intervenção manual
- Logs disponíveis no console do servidor

### Realizando Buscas

1. Acesse o menu **"Busca"** na barra lateral
2. Configure os filtros desejados:
   - Selecione período com o date picker
   - Escolha órgãos reguladores
   - Selecione seguradoras específicas
   - Defina tipo de ato normativo
   - Digite palavras-chave

3. Clique em **"Buscar"**
4. Navegue pelos resultados paginados
5. Clique em uma publicação para ver detalhes completos

### Configurando Alertas

1. Acesse o menu **"Alertas"** na barra lateral
2. Clique em **"Novo Alerta"**
3. Preencha o formulário:
   - **Nome:** Identificação do alerta
   - **Email:** Endereço para notificações
   - **Palavras-chave:** Termos a monitorar (separados por vírgula)
   - **Seguradoras:** Selecione empresas específicas
   - **Órgãos:** Escolha órgãos reguladores

4. Clique em **"Salvar"**
5. O alerta será processado automaticamente a cada 30 minutos

### Visualizando Analytics

1. Acesse o menu **"Analytics"** na barra lateral
2. Explore os gráficos interativos:
   - Passe o mouse sobre os elementos para ver detalhes
   - Use os filtros de período para análise temporal
   - Identifique tendências e padrões

### Exportando Publicações

**Exportação Individual:**
1. Acesse uma publicação específica
2. Clique no botão **"Exportar PDF"**
3. O arquivo será baixado automaticamente

**Exportação em Lote:**
1. Na página de busca, selecione múltiplas publicações
2. Clique em **"Exportar Selecionadas"**
3. Um PDF consolidado será gerado

## Casos de Uso

### 1. Monitoramento Regulatório
**Cenário:** Acompanhar todas as decisões da SUSEP que impactam o setor de seguros

**Solução:**
- Configure um alerta com palavra-chave "SUSEP"
- Filtre por órgão "SUSEP" na busca
- Receba notificações automáticas por email
- Visualize tendências no Analytics

### 2. Compliance Corporativo
**Cenário:** Monitorar menções à sua seguradora no DOU

**Solução:**
- Configure alerta específico para sua empresa
- Receba notificação imediata de qualquer publicação
- Exporte publicações relevantes para arquivo
- Mantenha histórico organizado

### 3. Inteligência de Mercado
**Cenário:** Analisar atividade regulatória de concorrentes

**Solução:**
- Configure alertas para seguradoras concorrentes
- Analise volume de publicações no Analytics
- Identifique padrões e tendências
- Gere relatórios periódicos

### 4. Pesquisa Jurídica
**Cenário:** Buscar atos normativos sobre tema específico

**Solução:**
- Use busca avançada com palavras-chave
- Filtre por tipo de ato (Resolução, Circular, etc.)
- Exporte resultados para análise offline
- Acesse fonte oficial para validação

## Roadmap e Melhorias Futuras

### Curto Prazo (1-3 meses)
- [ ] Implementar coleta de Diários Oficiais Estaduais (SP, RJ, MG)
- [ ] Adicionar relatórios agendados semanais/mensais
- [ ] Implementar sistema de tags personalizadas
- [ ] Criar API pública para integração externa

### Médio Prazo (3-6 meses)
- [ ] Análise de sentimento com IA nas publicações
- [ ] Sumarização automática de textos longos
- [ ] Integração com sistema de gestão documental
- [ ] Dashboard customizável por usuário

### Longo Prazo (6-12 meses)
- [ ] Machine Learning para predição de tendências regulatórias
- [ ] Chatbot para consultas em linguagem natural
- [ ] Integração com sistemas de BI corporativos
- [ ] App mobile para notificações push

## Perguntas Frequentes (FAQ)

**Q: Com que frequência o sistema coleta novos dados?**  
R: A coleta automática ocorre diariamente às 8h. Você também pode executar coletas manuais a qualquer momento através do Dashboard.

**Q: Quantas seguradoras estão cadastradas no sistema?**  
R: Atualmente o sistema monitora 189 seguradoras ativas no Brasil, com dados completos de CNPJ, código SUSEP e informações de contato.

**Q: Posso configurar múltiplos alertas?**  
R: Sim, não há limite para o número de alertas. Você pode criar alertas diferentes para diversos critérios e destinatários.

**Q: Os emails de alerta são enviados em tempo real?**  
R: Os alertas são processados a cada 30 minutos. Publicações que atendem aos critérios configurados disparam notificações automaticamente.

**Q: Posso exportar dados para análise em Excel?**  
R: Atualmente o sistema oferece exportação em PDF. Exportação para CSV/Excel está no roadmap de melhorias futuras.

**Q: O sistema armazena o texto completo das publicações?**  
R: Sim, o sistema armazena o texto integral de todas as publicações coletadas, permitindo buscas textuais completas.

**Q: Como posso sugerir melhorias ou reportar problemas?**  
R: Entre em contato com a equipe técnica através do [portal de suporte](https://docs.administradoramutual.com.br/suporte/) ou abra uma issue no repositório GitHub.

## Suporte e Contato

Para suporte técnico, dúvidas ou solicitação de acesso:

- **Documentação:** [docs.administradoramutual.com.br](https://docs.administradoramutual.com.br)
- **Portal de Sistemas:** [sistemas.administradoramutual.com.br](https://sistemas.administradoramutual.com.br)
- **Email:** suporte@administradoramutual.com.br

## Informações Técnicas

**Repositório GitHub:** (Privado)  
**Ambiente de Produção:** Plataforma Manus  
**Domínio:** dou.administradoramutual.com.br  
**Versão Atual:** 1.0.0  
**Data de Lançamento:** Janeiro de 2026  
**Desenvolvido por:** Equipe Técnica Administradora Mutual com Manus AI

---

*Última atualização desta documentação: 09 de Janeiro de 2026*
