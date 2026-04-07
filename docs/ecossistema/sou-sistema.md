# SOU — Sistema de Organização Unificada

> Documentação técnica completa do Sistema SOU, a plataforma corporativa que consolida mais de 25 sites independentes do ecossistema Administradora Mutual / Grupo MMB em um único sistema web integrado. Inclui arquitetura, módulos, banco de dados, integrações, automações e guia de manutenção.

## Informações Gerais

| Campo | Detalhe |
| --- | --- |
| **URL Principal** | [souorganize-huedqzb2.manus.space](https://souorganize-huedqzb2.manus.space) |
| **Domínio Personalizado** | sou.inf.br (em configuração) |
| **Repositório GitHub** | [github.com/alessandro2401/sou-sistema](https://github.com/alessandro2401/sou-sistema) |
| **Status** | Ativo — Produção |
| **Tipo de Acesso** | Restrito (Manus OAuth + RBAC) |
| **Última Atualização** | Abril de 2026 |
| **Versão** | Checkpoint `b31ffd47` |

---

## Propósito e Público-Alvo

O SOU (Sistema de Organização Unificada) é a plataforma central de operações do Grupo MMB e da Administradora Mutual. Seu propósito é consolidar em uma única interface todos os sistemas, ferramentas, dashboards e processos operacionais que anteriormente estavam dispersos em mais de 25 sites independentes, cada um com sua própria stack, autenticação e manutenção.

O público-alvo inclui a diretoria executiva do Grupo MMB, gestores de departamento, equipes operacionais (sinistro, financeiro, comercial, atendimento), equipe de TI e parceiros externos. O sistema resolve o problema da fragmentação de informações, oferecendo um ponto único de acesso com autenticação centralizada, controle de permissões granular e visão 360° de todas as operações.

---

## Stack Técnica

| Camada | Tecnologia | Justificativa |
| --- | --- | --- |
| **Frontend** | React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui | Componentes modernos, type-safe, design system consistente |
| **Backend** | Express 4 + tRPC 11 + Superjson | API type-safe end-to-end, sem contratos manuais |
| **Banco de Dados** | Neon PostgreSQL + Drizzle ORM | Serverless, 55 tabelas, migrações automáticas |
| **Autenticação** | Manus OAuth + JWT + RBAC (5 níveis) | SSO corporativo com controle granular |
| **Cache** | Upstash Redis | Rate limiting e cache distribuído |
| **Storage** | Manus S3 | Avatares, arquivos, documentos |
| **E-mail** | Resend | Alertas DOU, notificações transacionais |
| **LLM** | Manus Forge | Busca automática de notícias, categorização |
| **Monitoramento** | Sentry | Rastreamento de erros em produção |
| **Hospedagem** | Manus Platform | Deploy contínuo, SSL automático |
| **Versionamento** | GitHub (repositório privado) | Controle de versão e backup |

---

## Layout e Design

O design do Sistema SOU segue uma abordagem **dark mode** profissional, com foco em produtividade e redução de fadiga visual para uso prolongado. A interface é construída sobre o design system shadcn/ui com customizações específicas para o ecossistema do Grupo MMB.

**Sidebar:** A navegação principal é uma barra lateral vertical fixa à esquerda, organizada em 7 categorias (Principal, Institucional, Operacional, RH, Informação, Ferramentas, Administração) com 30 itens de menu. Cada item possui ícone Lucide e rótulo de texto. A sidebar é retrátil em dispositivos móveis via botão hambúrguer. No rodapé, exibe o perfil do usuário logado com avatar, nome e role.

**Header:** O cabeçalho fixo contém o título da seção atual, a busca global unificada (ativável por `Ctrl+K` / `Cmd+K`), sino de notificações com badge de contagem, e menu do usuário com opções de perfil e logout.

**Cores:** A paleta primária utiliza tons de azul escuro para fundos (`oklch(0.145 0.013 253.97)`), branco para texto principal, e azul (`#0056B3`) como cor de destaque para ações e links. Cards utilizam bordas sutis e sombras suaves para hierarquia visual.

**Tipografia:** A fonte principal é Inter (Google Fonts), com hierarquia bem definida entre títulos (bold, 24-32px), subtítulos (semibold, 18-20px) e corpo (regular, 14-16px).

**Responsividade:** O layout é totalmente responsivo. Em telas menores, a sidebar é ocultada e acessível via menu hambúrguer. Tabelas utilizam scroll horizontal, e cards se reorganizam em grid responsivo.

**Login:** A tela de login utiliza um design split-screen com gradiente azul (`#0056B3`) à esquerda exibindo o branding do Grupo MMB (13 logos de marcas) e o formulário de autenticação Manus OAuth à direita.

---

## Arquitetura do Sistema

### Estrutura de Arquivos

```
client/
  src/
    pages/          ← 32 páginas frontend (módulos)
    components/     ← Componentes reutilizáveis + shadcn/ui
    contexts/       ← React contexts (Auth, Theme)
    hooks/          ← Custom hooks
    lib/trpc.ts     ← Cliente tRPC
    App.tsx          ← Rotas e layout (35 rotas)
    index.css        ← Tema global (dark mode)
server/
  routers.ts         ← 2.428 linhas — Procedures tRPC
  db.ts              ← 3.142 linhas — Query helpers Drizzle ORM
  dou-collector.ts   ← Coletor real da Imprensa Nacional
  dou-alert-processor.ts ← Processador de alertas DOU
  dou-email-service.ts   ← Serviço de e-mail para alertas
  dou-pdf-export.ts      ← Exportação PDF de publicações
  dou-scheduler.ts       ← Scheduler automático de coletas
drizzle/
  schema.ts          ← 1.139 linhas — 55 tabelas
shared/              ← Constantes e tipos compartilhados
storage/             ← Helpers S3
```

### Banco de Dados

O sistema utiliza **55 tabelas** no Neon PostgreSQL, organizadas nos seguintes domínios:

| Domínio | Tabelas | Descrição |
| --- | --- | --- |
| **Autenticação** | `users`, `sessions` | Usuários com 5 roles, sessões JWT |
| **Gestão Segura** | `processos`, `processo_historico` | 166 processos reais importados |
| **Salvados** | `salvados` | 198 veículos com status e valores |
| **Financeiro** | `calculos` | Cálculos de indenização |
| **AURA** | `apolices`, `cotacoes`, `sinistros_aura` | Gestão de seguros |
| **Locadora** | `veiculos`, `alugueis`, `manutencoes` | 5 contratos reais |
| **Notícias** | `noticias`, `fontes_noticias` | 52+ artigos, 25 fontes |
| **Monitor DOU** | `dou_publicacoes`, `dou_seguradoras`, `dou_associacoes`, `dou_agencias`, `dou_alertas`, `dou_collection_logs`, `dou_tags`, `dou_palavras_chave`, `dou_buscas` | 239 seguradoras, 2.181 associações, 14 agências |
| **Monitor Sites** | `monitored_sites`, `site_checks` | 47 sites monitorados |
| **Orçamentário** | `orc_departamentos`, `orc_contas`, `orc_despesas`, `orc_receitas`, `orc_colaboradores`, `orc_kpis`, `orc_kpi_valores`, `orc_cenarios_plr`, `orc_escritorios_externos`, `orc_auditoria` | 3.084 despesas, 261 contas, 57 colaboradores |
| **Due Diligence** | `due_diligence`, `due_diligence_items` | Checklists de viabilidade |
| **PLR** | `plr_periodos`, `plr_metas` | Simulação de participação nos lucros |
| **Visitantes** | `visitantes`, `visitas` | Registro com foto via webcam |
| **Assinaturas** | `assinaturas_salvas` | Templates de assinatura de e-mail |
| **Prompts** | `prompts` | 858 prompts em 44 categorias |
| **Auditoria** | `audit_logs` | Logs de todas as ações do sistema |
| **Notificações** | `notifications` | Notificações in-app |
| **Hub Sistemas** | `sistemas` | 34 sistemas cadastrados |

### Autenticação e Controle de Acesso

O sistema utiliza Manus OAuth para autenticação SSO, com 5 níveis de acesso:

| Role | Permissões |
| --- | --- |
| **Super Admin** | Acesso total, gestão de usuários, configurações do sistema |
| **Admin** | CRUD completo em todos os módulos, importação/exportação |
| **Editor** | Criar e editar registros, sem excluir ou gerenciar usuários |
| **Viewer** | Apenas visualização, sem ações de escrita |
| **Guest** | Acesso limitado a módulos públicos |

A matriz de permissões é granular por módulo e ação (criar, ler, atualizar, excluir), implementada via middleware `adminProcedure` e `protectedProcedure` no tRPC.

---

## Módulos do Sistema

O Sistema SOU possui **30 módulos** organizados em 7 categorias na sidebar. Abaixo, a documentação detalhada de cada um.

### Principal

#### Dashboard (`/`)

O painel principal oferece uma visão consolidada de todas as operações, com 5 KPIs principais (Processos Ativos, Salvados em Estoque, Notícias do Dia, Sites Monitorados, Alertas Pendentes), 4 gráficos interativos via Recharts (distribuição por status, evolução temporal, categorias, performance), atalhos rápidos para os módulos mais usados, e exportação do relatório consolidado em PDF. A busca global unificada (`Ctrl+K`) pesquisa simultaneamente em 7 módulos.

#### Hub de Sistemas (`/hub`)

Catálogo centralizado de todos os 34 sistemas do ecossistema Administradora Mutual. Cada sistema é apresentado em card com nome, URL, descrição, status em tempo real (online/offline/degradado), categoria e responsável. O modal de detalhes exibe histórico de uptime, tecnologias utilizadas e links de acesso. Os dados são dinâmicos e atualizados via CRUD no backend.

#### Visão 360° (`/visao-360`)

Réplica de `360.administradoramutual.com.br`. Dashboard estratégico com KPIs reais organizados em 5 dimensões: Financeiro (receita, despesa, margem), Atendimento (SLA, satisfação, tempo médio), Sinistro (frequência, severidade, reserva), Jurídico (processos ativos, provisão, êxito), e Estratégico (market share, crescimento, NPS). Inclui filtros de período, gráficos interativos e botões de sincronização.

### Institucional

#### Grupo MMB (`/grupo-mmb`)

Réplica de `grupommb.administradoramutual.com.br`. Portal institucional com 8 abas: Visão Executiva (missão, visão, valores, KPIs do grupo), Arquitetura (organograma, hubs, departamentos), Ecossistema (13 marcas com logos e descrições), Governança (comitês, políticas, compliance), Modelo Econômico (receitas, custos, margens por empresa), Sobre (história, timeline, marcos), Contato (formulário, endereços, telefones) e Pós-Venda (processos, SLA, indicadores).

#### Marcas (`/marcas`)

Réplica de `marca.administradoramutual.com.br`. Catálogo completo das 13 marcas do Grupo MMB com sub-navegação por marca. Cada marca exibe: logo em múltiplas variações (46 PNGs no CDN), paleta de cores com códigos hex, tipografia, propósito, missão, visão, valores, e botão para download do manual em PDF (11 marcas com manual disponível). As marcas documentadas são: Alpha Proteções, Grupo MMB, Movimento Mais Brasil, Movimento Mais Seguro, Mais Brasil Motorcycle, Potere BP Mensal, Soluções Corretora, Juntos Pod+, SOU Portal, Administradora Mutual, AURA Seguradora, Potere Consórcio e Potere Seguro Auto.

#### Estrutura SOU (`/estrutura-sou`)

Réplica de `sou.administradoramutual.com.br`. Portal de documentação do projeto SOU com 10 abas: Visão Geral (status, marcos, KPIs do projeto), Contratos (repositório de documentos legais com status e download), Cronogramas (Gráfico de Gantt interativo com 12 meses de planejamento), Diagramas (arquitetura, fluxos de dados, integrações), Documentação (registro técnico e funcional), Anexos (documentos complementares), Manual da Marca (link para o manual SOU), Modelo de Entrada (especificação de dados), Portais e Sistemas (23 sites documentados) e Locadora POTERE (dashboard embarcado).

### Operacional

#### Gestão Segura (`/gestao-segura`)

Réplica de `gestaosegura.administradoramutual.com.br`. Sistema CRUD completo de processos de sinistro com 166 processos reais importados. Funcionalidades: busca avançada com filtros por status/criticidade/responsável, importação CSV e Google Sheets, exportação CSV/XLSX (Excel), aba "Dados Originais" conectada à API JSON real (166 processos, 25+ campos), gráficos de distribuição por criticidade e status, timeline de histórico por processo, e cards de estatísticas.

#### Salvados (`/salvados`)

Réplica de `salvados.administradoramutual.com.br`. Gestão de veículos salvados com 198 veículos reais importados. Funcionalidades: CRUD completo com fotos, filtros por status (Novo no Pátio, Venda Autorizada, Vendido, Em Análise, Devolvido), aba "Planilha Original" conectada ao Google Sheets (6 abas: Novos No Pátio, Venda Autorizada, etc.), cards de estatísticas (total, valor estimado, por status), busca por placa/modelo/marca, e exportação de dados.

#### Financeiro (`/financeiro`)

Sistema de cálculos de indenização vinculado a processos e salvados. Funcionalidades: CRUD de cálculos com tipo (perda total/parcial), calculadora integrada com fórmulas do mercado segurador, vinculação com processos da Gestão Segura e veículos dos Salvados, dashboard com totais por tipo e status, e exportação PDF dos cálculos.

#### Calculadoras (`/calculadoras`)

Réplica de `sma.administradoramutual.com.br` e `total.administradoramutual.com.br`. Duas calculadoras profissionais em abas separadas:

**SMA (Socorro Mútuo Acordo — Indenização Parcial):** Fórmulas reais do mercado (MEDIAN dos 3 menores orçamentos, aplicação de 80% ou 75%, taxas administrativas de 13,53% e 14,65%, 3 opções de indenização, contraproposta entre 100% e 112%, cálculo de Tabela Price para parcelamento). Envio automático para Google Sheets via API (`api-calculadoras-sheets.vercel.app`), impressão formatada e geração de PDF.

**SMT (Socorro Mútuo Total — Indenização Total):** 7 tipos de depreciação (uso, estado, funilaria, pintura, pneus, vidros, acessórios), 6 categorias de desconto, taxa de antecipação de 12,7%, cálculo de Tabela Price. Envio para Google Sheets, impressão e PDF.

#### POTERE Locadora (`/locadora`)

Réplica de `locadora.administradoramutual.com.br`. Gestão de frota com 5 contratos reais cadastrados (FIAT CRONOS 2023, VW GOL 2022 x2, VW VOYAGE 2023, VW VOYAGE 2022). Funcionalidades: CRUD de veículos, aluguéis e manutenções, KPIs (total veículos, aluguéis ativos, receita mensal, lucro), status de sincronização com Google Drive, e dashboard financeiro.

#### POPs (`/pops`)

Réplica de `sinistro.administradoramutual.com.br`, `financeiro.administradoramutual.com.br` e `comercial.administradoramutual.com.br`. Procedimentos Operacionais Padrão organizados em 3 abas:

**Sinistro:** Fluxo completo de atendimento de sinistro com KPIs reais (tempo médio, taxa de resolução, custo médio), fluxogramas visuais e botões de download PDF.

**Financeiro:** Procedimentos do departamento financeiro com fluxos de pagamento, cobrança e conciliação.

**Comercial:** 6 POPs comerciais da Alpha Proteções com diagramas visuais, metas e indicadores.

#### AURA Seguradora (`/aura`)

Réplica de `s4.administradoramutual.com.br`. Dividido em duas seções:

**Visão Institucional (9 abas):** Sobre, Produtos, Coberturas, Rede Credenciada, Canais de Atendimento, Regulamentação, Parceiros, FAQ e Contato (com formulário funcional).

**Gestão Operacional:** CRUD completo de apólices, cotações e sinistros, calculadora de prêmios integrada, dashboard com KPIs de produção.

### RH

#### DP-MMB (`/dp-mmb`)

Réplica de `dp-mmb.administradoramutual.com.br`. Portal do Departamento Pessoal do Grupo MMB com 25 documentos organizados por categoria (Admissão, Benefícios, Folha de Pagamento, Férias, Rescisão, Documentos Gerais). Cada documento possui título, descrição, categoria e link para download/visualização.

#### DP-Alpha (`/dp-alpha`)

Réplica de `dp-alpha.administradoramutual.com.br`. Portal do Departamento Pessoal da Alpha Proteções com 25 documentos, mesma estrutura do DP-MMB mas com documentos específicos da operação Alpha.

#### Visitantes (`/visitantes`)

Sistema de registro de visitantes com check-in e check-out. Funcionalidades: formulário de registro com nome, documento, empresa, motivo, responsável, captura de foto via webcam (preview, captura, recaptura), cálculo automático de duração da visita, reutilização de cadastro por documento (visitante recorrente), histórico completo de visitas com filtros por data e status.

#### PLR (`/plr`)

Sistema de Participação nos Lucros e Resultados. Funcionalidades: criação de períodos PLR com data início/fim, definição de metas com peso e percentual de atingimento, calculadora de simulação (valor base x atingimento ponderado), dashboard com resumo por período, e exportação PDF do relatório.

### Informação

#### Notícias (`/noticias`)

Réplica de `noticias.administradoramutual.com.br`. Portal de notícias com duas visões:

**Portal View:** Hero com notícia em destaque, grid de cards com imagem/título/resumo/data, busca por texto, filtros por categoria (Lei 15.040, LC 213, SUSEP, CNSP, Mercado de Seguros, Proteção Patrimonial), 25 fontes de notícias com filtros por tipo.

**Admin View:** CRUD completo de notícias com campos fonte, fonteUrl, autor, tags, toggle publicado/rascunho, e botão "Buscar Notícias" para execução manual do buscador automático.

**Buscador Automático:** Executado diariamente às 7h (10h UTC) via scheduler. Utiliza o LLM Manus Forge para buscar notícias sobre 3 tópicos (regulamentações SUSEP/CNSP, mercado de seguros, proteção patrimonial), categoriza automaticamente em 6 categorias, e detecta duplicatas por similaridade de título.

#### Monitor DOU (`/dou`)

Réplica exata de `diariomont-xfarhndy.manus.space`. Sistema de monitoramento do Diário Oficial da União com 6 abas:

**Dashboard:** Botões de coleta (Sincronizar Manual, Coletar Hoje, Últimos 7 Dias, Processar Alertas), 6 cards de estatísticas (publicações, seguradoras, associações, agências, alertas, palavras-chave), status de coletas automáticas com histórico visual, busca manual no DOU via API da Imprensa Nacional, gerenciamento de palavras-chave com sugestões do Grupo MMB (48 termos).

**Busca Avançada:** Filtros por seção (DOU1, DOU2, DOU3, Extra), relevância (Alta, Média, Baixa), status de leitura (lidas/não lidas), favoritas, com modal de detalhes expandido e exportação PDF/TXT.

**Seguradoras:** 239 seguradoras SUSEP cadastradas com busca por nome/CNPJ, filtro por UF, estatísticas por estado, e modal de adição.

**Associações:** 2.181 associações de proteção veicular com distribuição por estado (gráfico), busca avançada, cards responsivos com CNPJ/status/UF, e paginação.

**Órgãos Reguladores:** 14 agências cadastradas (ANS, BACEN, CVM, CNSP, SUSEP, PREVIC, etc.) com nome, sigla, URL, descrição e padrões de busca.

**Alertas:** Criação de alertas personalizados por palavra-chave, ativação/desativação individual, processamento manual, histórico de alertas enviados, e exclusão.

**Backend:** Coletor real que faz scraping da Imprensa Nacional (`in.gov.br`), processador de alertas com matching de palavras-chave, serviço de e-mail via Resend para notificações, exportação PDF de publicações, e scheduler automático configurável.

#### Monitor de Sites (`/monitor`)

Réplica de `sites.administradoramutual.com.br`. Painel de monitoramento de 47 sites do ecossistema com health check automático a cada 5 minutos. Funcionalidades: cards com status em tempo real (online/offline/degradado), tempo de resposta, uptime percentual, alertas automáticos via `notifyOwner` quando um site fica offline, notificação de recuperação quando volta ao ar, histórico de checks com gráfico de disponibilidade, e CRUD de sites monitorados.

### Ferramentas

#### Assinaturas (`/assinaturas`)

Réplica de `assinaturas.administradoramutual.com.br`. Gerador de assinaturas de e-mail profissionais com 3 templates (Clássico, Moderno, Minimalista), preview em tempo real, cópia para clipboard em HTML e Rich Text, cores customizáveis por empresa, 9 empresas pré-cadastradas do Grupo MMB, e funcionalidade de salvar/carregar assinaturas.

#### Due Diligence (`/due-diligence`)

Réplica de `formulario.administradoramutual.com.br`. Sistema de análise de viabilidade de carteira com checklist de 30 itens em 5 categorias (Documentação, Financeiro, Operacional, Jurídico, Compliance), scoring automático com classificação de risco (Baixo/Médio/Alto/Crítico), formulário de aquisição completo com 8 seções replicando o original, e exportação PDF do relatório.

#### Orçamentário (`/orcamentario`)

Réplica de `grupommb2026.manus.space`. Dashboard orçamentário completo com 12 abas e sidebar vertical fixa:

**Dashboard:** 5 KPIs (Receita Orçada, Despesa Orçada, Receita Realizada, Despesa Realizada, Lucro Realizado), tabela de departamentos com variação e status, badges de Hub (Comercial/Administrativo).

**Lançamentos:** Listagem de todas as despesas com filtros por departamento, conta, mês e tipo.

**Departamentos:** 12 departamentos com orçado vs realizado, progress bars e alertas de desvio.

**Receita:** KPI cards, receita por empresa (7 cards: Alpha Proteções, Potere BP Mensal, etc.), tabela expansível por mês.

**Colaboradores:** 57 colaboradores com 5 KPI cards, busca, filtros por departamento, resumo por dept em grid.

**Simulador PLR:** 5 cenários em cards coloridos (Conservador, Moderado, Otimista, Agressivo, Meta), tabela individual por colaborador.

**KPIs:** 10 KPIs em 4 categorias (Operacional, Comercial, Financeiro, Estratégico) com gráficos de evolução.

**Painel Executivo:** Dashboard executivo com KPIs por categoria, desempenho por departamento, análise de tendências.

**Estrutura:** Organograma visual completo (Hubs, departamentos, marcas, escritórios externos).

**Relatório:** Exportação CSV Mensal/Anual, tabelas por Hub, análise comparativa orçado vs realizado.

**Importar Previstos:** Upload de dados previstos, seleção de mês, importação em massa.

**Saúde dos Dados:** Análise completa com gráficos de aderência, desvios, projeção e preenchimento automático. Score: 100%.

**Auditoria:** 1.191 registros com 5 KPI cards, 4 filtros combobox, entries expansíveis com JSON, exportação CSV.

#### Prompts (`/prompts`)

Réplica de `prompts.administradoramutual.com.br`. Biblioteca de 858 prompts únicos organizados em 44 categorias. Funcionalidades: busca por texto, filtro por categoria, copiar para clipboard com um clique, contador de uso por prompt, switch público/privado, e CRUD completo para administradores.

#### Documentação (`/documentacao`)

Réplica de `docs.administradoramutual.com.br`. Portal de documentação interna com 23 sites documentados em 10 seções. Inclui painel GitHub Sync Status com indicadores (19 repos, 47 webhooks, 156 commits, 100% uptime), botão "Ver no GitHub" para cada site, e referências a webhooks de sincronização.

### Administração

#### Gestão de Usuários (`/usuarios`)

Painel de administração de usuários com CRUD completo. Funcionalidades: listagem com busca e filtros por role, criação de novos usuários, edição de perfil e permissões, ativação/desativação de contas, promoção/rebaixamento de roles (Super Admin, Admin, Editor, Viewer, Guest), e histórico de último acesso.

#### Auditoria (`/auditoria`)

Sistema de logs pesquisáveis de todas as ações realizadas no sistema. Funcionalidades: filtros por ação (criar, editar, excluir), módulo, usuário e período, badges coloridos por tipo de ação, detalhes expandíveis com diff JSON (valor anterior vs novo valor), paginação, e exportação.

#### Configurações (`/configuracoes`)

Painel de configurações do sistema (em desenvolvimento). Previsto para incluir: preferências globais, gestão de integrações, configurações de notificação, e personalização da interface.

---

## Funcionalidades Transversais

### Busca Global Unificada

Acessível via atalho `Ctrl+K` / `Cmd+K` em qualquer página. Pesquisa simultaneamente em 7 módulos (processos, salvados, notícias, POPs, sistemas, veículos, apólices). Resultados exibidos em overlay modal com ícone do módulo, título e subtítulo. Navegação direta ao clicar em um resultado. Tecla `ESC` para fechar.

### Notificações em Tempo Real

Sistema de notificações in-app com badge no sino do header. Polling automático a cada 30 segundos. Filtros por tipo (info, warning, error, success). Integração automática com health check de sites (alerta quando offline, notificação de recuperação). Página dedicada (`/notificacoes`) com gestão em massa (marcar como lida, excluir).

### Exportação de Dados

Suporte a múltiplos formatos de exportação em diversos módulos:

| Formato | Módulos |
| --- | --- |
| **PDF** | Dashboard, Calculadoras SMA/SMT, Due Diligence, PLR, Monitor DOU |
| **CSV** | Gestão Segura, Orçamentário (Relatório, Auditoria) |
| **XLSX** | Gestão Segura |
| **Impressão** | Calculadoras SMA/SMT |

### Importação de Dados

| Método | Módulos |
| --- | --- |
| **CSV com preview** | Gestão Segura, Orçamentário (Importar Previstos) |
| **Google Sheets (URL)** | Gestão Segura, Salvados |
| **API JSON** | Gestão Segura (Dados Originais) |
| **Bulk insert** | Monitor DOU (Seguradoras, Associações) |

---

## Automações Ativas no Servidor

| Automação | Frequência | Módulo | Descrição |
| --- | --- | --- | --- |
| **Health Check** | A cada 5 minutos | Monitor de Sites | Verifica 47 sites, alerta via `notifyOwner` quando offline, notifica recuperação |
| **Busca de Notícias** | Diária às 7h (10h UTC) | Notícias | Busca via LLM sobre mercado de seguros, categoriza em 6 categorias, detecta duplicatas |
| **Coleta DOU** | Scheduler configurável | Monitor DOU | Coleta publicações da Imprensa Nacional, processa alertas por palavra-chave |

---

## Integrações Externas

| Integração | Tipo | Módulo | Detalhes |
| --- | --- | --- | --- |
| **API Imprensa Nacional** | Scraping/API | Monitor DOU | `in.gov.br` — Coleta de publicações do DOU |
| **Google Sheets** | API pública | Salvados, Gestão Segura | Leitura direta de planilhas compartilhadas |
| **API Calculadoras Sheets** | REST API | Calculadoras | `api-calculadoras-sheets.vercel.app` — Registro de cálculos |
| **Manus Forge LLM** | API interna | Notícias | Busca e categorização automática de notícias |
| **Neon PostgreSQL** | Banco de dados | Todo o sistema | 55 tabelas, serverless |
| **Upstash Redis** | Cache | Segurança | Rate limiting distribuído |
| **Resend** | E-mail | Monitor DOU | Alertas e notificações transacionais |
| **Sentry** | Monitoramento | Todo o sistema | Rastreamento de erros em produção |
| **Manus S3** | Storage | Todo o sistema | Avatares, arquivos, documentos |
| **GitHub** | Versionamento | Todo o sistema | Repositório privado com histórico completo |

---

## Dados Reais em Produção

O sistema opera exclusivamente com dados reais de produção, não dados fictícios:

| Entidade | Quantidade | Origem |
| --- | --- | --- |
| Processos (Gestão Segura) | 166 | API JSON real + importação CSV |
| Salvados (Veículos) | 198 | Google Sheets + importação |
| Seguradoras SUSEP | 239 | SUSEP + seed script |
| Associações de Proteção Veicular | 2.181 | Banco de dados original DOU |
| Agências Reguladoras | 14 | Seed (ANS, BACEN, CVM, CNSP, SUSEP, PREVIC, etc.) |
| Palavras-chave DOU | 48 | Termos do Grupo MMB |
| Prompts | 858 | Site original (44 categorias) |
| Despesas Orçamentárias | 3.084 | Backup orçamentário 2026 |
| Contas Contábeis | 261 | Backup orçamentário 2026 |
| Colaboradores | 57 | Backup orçamentário 2026 |
| Receitas | 84 | 7 empresas x 12 meses |
| Cenários PLR | 5 | Backup orçamentário 2026 |
| Escritórios Externos | 7 | Backup orçamentário 2026 |
| Auditoria Orçamentária | 1.191 | Backup orçamentário 2026 |
| Notícias | 52+ | Importação automática via LLM + manual |
| Sites Monitorados | 47 | Ecossistema Administradora Mutual |
| Contratos Locadora | 5 | Dados reais (FIAT CRONOS, VW GOL, VW VOYAGE) |
| Fontes de Notícias | 25 | Portais de notícias do setor |

---

## Testes Automatizados

O projeto possui **19 arquivos de teste** com cobertura dos módulos críticos:

| Arquivo | Módulo | Testes |
| --- | --- | --- |
| `auth.logout.test.ts` | Autenticação | Logout, sessão |
| `rbac.test.ts` | RBAC | 17 testes de permissões |
| `gestao-segura.test.ts` | Gestão Segura | CRUD processos |
| `assinaturas.test.ts` | Assinaturas | 19 testes de templates |
| `orcamentario.test.ts` | Orçamentário | 33 testes (stats, CRUD, simulador) |
| `monitor-dou.test.ts` | Monitor DOU | 20 testes (stats, publicações, seguradoras, alertas) |
| `newsFetcher.test.ts` | Notícias | Buscador automático |
| `secrets.test.ts` | Segurança | Gestão de secrets |
| `fase3-12.test.ts` | Módulos por fase | Testes de integração |
| `faseE-unificacao.test.ts` | Unificação | Testes de paridade |

---

## Repositório GitHub

O código fonte completo está disponível no repositório privado:

**[https://github.com/alessandro2401/sou-sistema](https://github.com/alessandro2401/sou-sistema)**

### Métricas do Código

| Métrica | Valor |
| --- | --- |
| Linhas de código (sem testes) | 44.505 |
| Linhas de testes | 5.267 |
| Total de linhas | 49.772 |
| Páginas frontend | 32 arquivos .tsx |
| Tabelas no banco | 55 |
| Rotas no App.tsx | 35 |
| Arquivos de teste | 19 |

---

## Domínios e Acesso

| Ambiente | URL |
| --- | --- |
| **Produção** | [souorganize-huedqzb2.manus.space](https://souorganize-huedqzb2.manus.space) |
| **Domínio Personalizado** | sou.inf.br (em configuração DNS) |
| **Dev Server** | Acessível via Manus Platform |

---

## Histórico de Desenvolvimento

O projeto foi desenvolvido ao longo de 13 fases principais, totalizando 575 itens de trabalho:

| Fase | Nome | Descrição |
| --- | --- | --- |
| **Fase 1** | Fundação | Schema, autenticação, layout, CRUD base de todos os módulos |
| **Fase A** | Dados do Ecossistema | Correção e importação de dados reais |
| **Fase B** | Módulos Operacionais | Calculadoras SMA/SMT, Locadora POTERE, POPs |
| **Fase C** | Módulos Estratégicos | AURA Seguradora, Orçamentário, Busca Global |
| **Fase D** | Orçamentário Completo | 12 abas, dados reais, paridade com grupommb2026 |
| **Fase E** | Unificação | 7 novos módulos (Documentação, Grupo MMB, Marcas, DP, Estrutura SOU, Visão 360°) |
| **Fase F** | Dados Reais | Importação de conteúdo real em todos os módulos novos |
| **Fase G** | Revisão Profunda | Auditoria de 14 submódulos, logos reais, fórmulas reais |
| **Fase H** | Assets de Marcas | 46 PNGs + 10 PDFs do Google Drive para CDN |
| **Fase I** | Validação de Paridade | Comparação site a site com todos os 25+ originais |
| **Fase J** | Dados Locadora | 5 contratos reais + configuração de domínio |
| **Fase K-L** | Auditoria Final | Divergências residuais, limpeza de dados de teste |
| **Fase M** | Login Customizado | Design split-screen com branding do Grupo MMB |

---

## Manutenção e Operação

### Deploy

O deploy é realizado via Manus Platform. Para publicar uma nova versão:

1. Fazer as alterações no código
2. Salvar um checkpoint via `webdev_save_checkpoint`
3. Clicar no botão **Publish** na interface do Manus

### Banco de Dados

O banco de dados é gerenciado via Drizzle ORM. Para alterações no schema:

1. Editar `drizzle/schema.ts`
2. Executar `pnpm db:push` para aplicar as migrações
3. Verificar os dados via painel Database do Manus

### Monitoramento

O sistema é monitorado via Sentry para erros em produção. Os logs do servidor estão disponíveis em `.manus-logs/` com os seguintes arquivos: `devserver.log` (servidor), `browserConsole.log` (cliente), `networkRequests.log` (HTTP), `sessionReplay.log` (interações).

### Backup

O banco de dados Neon PostgreSQL possui snapshots automáticos. Para backup manual, utilizar a exportação CSV/XLSX disponível nos módulos ou acessar o banco diretamente via connection string no painel Settings > Database do Manus.

---

## Observações e Recomendações

O Sistema SOU atingiu maturidade de produção com 100% do plano de ação concluído (575/575 itens). As seguintes evoluções são recomendadas:

1. **Ativação do scheduler DOU em produção** — O coletor automático está implementado mas precisa ser ativado com coletas reais diárias.
2. **Verificação do domínio Resend** — Para envio real de alertas DOU por e-mail, o domínio precisa ser verificado no Resend.
3. **Configuração DNS do sou.inf.br** — A vinculação do domínio personalizado depende de ação manual no painel de DNS.
4. **CI/CD automatizado** — Pipeline de deploy via GitHub Actions para automatizar o processo de publicação.
5. **Backup automatizado** — Rotina de backup periódico do banco de dados para proteção contra perda de dados.
6. **2FA** — O campo `twoFactorEnabled` existe no schema mas a funcionalidade não está ativa.
