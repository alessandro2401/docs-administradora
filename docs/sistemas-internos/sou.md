# SOU — Sistema de Organização Unificada

**URL:** [souorganize-huedqzb2.manus.space](https://souorganize-huedqzb2.manus.space)
**Repositório:** [github.com/alessandro2401/sou-sistema](https://github.com/alessandro2401/sou-sistema)
**Status:** Ativo — Produção

## Visão Geral

O SOU (Sistema de Organização Unificada) é a plataforma central de operações do Grupo MMB e da Administradora Mutual. Consolida mais de 25 sites independentes do ecossistema em um único sistema web integrado, com autenticação centralizada (Manus OAuth + RBAC de 5 níveis), 55 tabelas no banco de dados e 30 módulos organizados em 7 categorias.

## Stack Técnica

| Camada | Tecnologia |
| --- | --- |
| Frontend | React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui |
| Backend | Express 4 + tRPC 11 + Superjson |
| Banco de Dados | Neon PostgreSQL + Drizzle ORM (55 tabelas) |
| Autenticação | Manus OAuth + JWT + RBAC (5 níveis) |
| Cache | Upstash Redis |
| Storage | Manus S3 |
| E-mail | Resend |
| LLM | Manus Forge |
| Monitoramento | Sentry |
| Hospedagem | Manus Platform |

## Módulos (30)

### Principal
- **Dashboard** (`/`) — Visão 360° com KPIs, gráficos Recharts, busca global (`Ctrl+K`)
- **Hub de Sistemas** (`/hub`) — 34 sistemas com status em tempo real
- **Visão 360°** (`/visao-360`) — KPIs em 5 dimensões (Financeiro, Atendimento, Sinistro, Jurídico, Estratégico)

### Institucional
- **Grupo MMB** (`/grupo-mmb`) — 8 abas (Visão Executiva, Arquitetura, Ecossistema, Governança, Modelo Econômico, Sobre, Contato, Pós-Venda)
- **Marcas** (`/marcas`) — 13 marcas com logos reais (46 PNGs), manuais PDF
- **Estrutura SOU** (`/estrutura-sou`) — 10 abas com Gantt interativo, contratos, diagramas

### Operacional
- **Gestão Segura** (`/gestao-segura`) — 166 processos reais, import CSV/Sheets, export XLSX
- **Salvados** (`/salvados`) — 198 veículos, aba Planilha Original (Google Sheets)
- **Financeiro** (`/financeiro`) — Cálculos de indenização, vinculação com processos/salvados
- **Calculadoras** (`/calculadoras`) — SMA (parcial) + SMT (total), fórmulas reais, envio Google Sheets
- **POTERE Locadora** (`/locadora`) — 5 contratos reais, gestão de frota
- **POPs** (`/pops`) — 3 abas (Sinistro, Financeiro, Comercial), fluxogramas, PDFs
- **AURA Seguradora** (`/aura`) — Institucional (9 abas) + Gestão Operacional (CRUD)

### RH
- **DP-MMB** (`/dp-mmb`) — 25 documentos do Departamento Pessoal
- **DP-Alpha** (`/dp-alpha`) — 25 documentos do Departamento Pessoal
- **Visitantes** (`/visitantes`) — Check-in/out com foto via webcam
- **PLR** (`/plr`) — Simulação de participação nos lucros

### Informação
- **Notícias** (`/noticias`) — Portal + Admin, buscador automático diário via LLM
- **Monitor DOU** (`/dou`) — 6 abas, 239 seguradoras, 2.181 associações, coletor real
- **Monitor de Sites** (`/monitor`) — 47 sites, health check a cada 5 min

### Ferramentas
- **Assinaturas** (`/assinaturas`) — 3 templates, 9 empresas, copiar HTML/Rich Text
- **Due Diligence** (`/due-diligence`) — 30 itens, scoring automático, formulário de aquisição
- **Orçamentário** (`/orcamentario`) — 12 abas, 3.084 despesas, dados reais 2026
- **Prompts** (`/prompts`) — 858 prompts em 44 categorias
- **Documentação** (`/documentacao`) — 23 sites documentados, GitHub Sync

### Administração
- **Usuários** (`/usuarios`) — CRUD com 5 roles
- **Auditoria** (`/auditoria`) — Logs pesquisáveis com diff JSON
- **Configurações** (`/configuracoes`) — Preferências do sistema

## Automações

| Automação | Frequência | Descrição |
| --- | --- | --- |
| Health Check | A cada 5 min | 47 sites monitorados, alertas automáticos |
| Busca de Notícias | Diária 7h | LLM busca e categoriza notícias do setor |
| Coleta DOU | Configurável | Scraping da Imprensa Nacional |

## Acesso

O acesso é restrito via Manus OAuth. O controle de permissões é granular por módulo e ação, com 5 níveis de role (Super Admin, Admin, Editor, Viewer, Guest). A tela de login utiliza design split-screen com branding do Grupo MMB.

## Documentação Completa

Para documentação técnica detalhada de todos os módulos, banco de dados, integrações e automações, consulte a [documentação completa do SOU no Ecossistema](/ecossistema/sou-sistema).
