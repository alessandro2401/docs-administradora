# POP Evento e Sinistro

> Documentação completa do POP de Evento e Sinistro, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo | Detalhe |
|-------|---------|
| **URL** | [https://sinistro.administradoramutual.com.br/](https://sinistro.administradoramutual.com.br/) |
| **Status** | Ativo |
| **Tipo de Acesso** | Público |
| **Última Verificação** | 24 de Fevereiro de 2026 |

## Propósito e Público-Alvo

O site "POP Evento e Sinistro" é um Procedimento Operacional Padrão (POP) interativo e centralizado para o departamento de Evento e Sinistro do Grupo MMB. Seu propósito é fornecer um guia claro e detalhado sobre todos os processos, fluxos, indicadores e sistemas utilizados pelo departamento. O público-alvo são os colaboradores do próprio departamento (analistas, supervisores, coordenação), bem como outros departamentos que interagem com a área de sinistros (Atendimento, Jurídico, Financeiro, Diretoria).

O sistema resolve a necessidade de ter um ponto de referência único e atualizado para a operação, garantindo a padronização dos procedimentos, a conformidade com as metas e a eficiência no tratamento de eventos e sinistros.

## Stack Técnica

| Tecnologia | Uso |
|-----------|-----|
| **Framework** | Next.js |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS |
| **Hospedagem** | Vercel |
| **Outras Libs** | Chart.js (para os gráficos de KPIs) |

## Layout e Design

O layout é limpo, profissional e focado na apresentação clara das informações. A página é de rolagem única (one-page scroll), com um menu de navegação fixo no topo que permite o acesso rápido às diferentes seções.

- **Header:** O cabeçalho contém o logo do "Grupo MMB" e da "Administradora Mutual" à esquerda, e o menu de navegação ("Início", "Fluxo", "KPIs", "Processos", "Auditoria", "Sistemas", "Documentação") à direita.
- **Cores:** A paleta de cores principal é baseada em tons de azul (cor primária `#2563eb`), branco e cinza, transmitindo seriedade e confiança. Os gráficos de KPI utilizam cores de destaque para indicar o status (verde para "OK", por exemplo).
- **Tipografia:** A fonte principal é sans-serif, provavelmente Inter ou similar, garantindo excelente legibilidade em telas.
- **Responsividade:** O site é totalmente responsivo, adaptando-se bem a diferentes tamanhos de tela, desde desktops a dispositivos móveis. Em telas menores, o menu de navegação se transforma em um menu "hambúrguer".
- **Tema:** O site utiliza um tema claro, sem opção de modo escuro.

## Funcionalidades

### Dashboard de KPIs
O site exibe um dashboard em tempo real com os principais Indicadores de Desempenho (KPIs) do departamento. Cada KPI é apresentado em um card com o valor atual, a meta e um indicador de status visual.
- **TMAI (Tempo Médio de Análise Inicial):** Mede o tempo para a primeira análise do processo.
- **TMAR (Tempo Médio até Autorização):** Mede o tempo até a autorização do reparo/pagamento.
- **Taxa de Retrabalho:** Percentual de processos que precisaram ser refeitos.
- **Conformidade Documental:** Percentual de documentos em conformidade com as regras.
- **Prazo SMT:** Percentual de processos de SMT (Sinistro de Média e Grande Monta) concluídos no prazo.
- **Resposta Financeiro:** Tempo médio de resposta do departamento Financeiro.

### Fluxograma Operacional Interativo
Uma representação visual do fluxo completo do processo de sinistros, desde a recepção do evento até o seu encerramento. O fluxograma mostra a interação entre os diferentes departamentos (Atendimento, Analista, Supervisor, etc.).

### Tabela de Processos Recentes
Uma tabela exibe uma amostra dos últimos processos tratados, permitindo um acompanhamento rápido do status e dos tempos de cada etapa (TMAI, TMAR).

### Checklist de Auditoria
Uma seção dedicada à auditoria mensal, com um checklist de conformidade que abrange diversas áreas como Gestão de Processos, Gestão de Documentos, Comunicação, Jurídico, Financeiro, etc. Um indicador geral mostra o índice de conformidade do mês.

### Catálogo de Sistemas Utilizados
Descreve as principais ferramentas e plataformas que suportam a operação, incluindo:
- **SGA - Hinova Soluções Digitais:** Sistema principal de gestão.
- **Cilia:** Sistema para análise técnica e orçamentos.
- **Gestão Segura:** Plataforma de sincronização e orçamentação.
- **Visto:** Sistema para fotos de vistoria.
- **Trello:** Para gestão de cards e processos.
- **Discord:** Para comunicação interna.
- **Clicksign:** Para assinaturas digitais.
- **Planilhas Google (Z:):** Servidor de documentos.

### Seção de Documentação
Disponibiliza para download em formato PDF os principais documentos do departamento, como o Manual Completo de Fluxos, o POP completo, Relatórios de KPIs, Checklist de Auditoria e Manual de Treinamento.

## Seções e Páginas

Como é um site de página única, as "páginas" são seções acessíveis pelo menu de navegação.

| Seção | Descrição | Rota (Âncora) |
|-------|-----------|---------------|
| **Início** | Seção inicial com o título do POP e os cards de KPIs. | `#` |
| **Fluxo** | Exibe o fluxograma operacional do departamento. | `#fluxo` |
| **KPIs** | Detalha os gráficos dos indicadores de desempenho. | `#kpis` |
| **Processos** | Apresenta a tabela com os processos recentes. | `#processos` |
| **Auditoria** | Mostra o checklist e o índice de conformidade da auditoria. | `#auditoria` |
| **Sistemas** | Descreve os sistemas e ferramentas utilizados pela equipe. | `#sistemas` |
| **Documentação** | Links para download dos manuais e relatórios. | `#documentacao` |

## Integrações

O site em si não possui integrações diretas via API, mas ele documenta o uso de vários sistemas externos que são cruciais para o fluxo de trabalho:
- **SGA (Hinova), Cilia, Gestão Segura, Visto:** Sistemas de gestão de sinistros e vistorias.
- **Trello:** Para organização de tarefas.
- **Discord:** Para comunicação interna.
- **Clicksign:** Para assinaturas digitais.
- **Google Workspace (Planilhas):** Para armazenamento e controle de documentos.

## Observações e Recomendações

- O site é um excelente exemplo de um POP digital e interativo, facilitando o acesso e a compreensão dos processos.
- Os links para download dos documentos na seção "Documentação" estão quebrados (apontam para `#`). É crucial corrigir esses links para que os usuários possam baixar os manuais.
- Seria interessante adicionar tooltips ou modais nos KPIs e no fluxograma para fornecer mais detalhes sobre cada item ao passar o mouse.
- A tabela de "Processos Recentes" poderia ter filtros por tipo de processo (Sinistro, SMT, Vidro) ou status para facilitar a análise.
