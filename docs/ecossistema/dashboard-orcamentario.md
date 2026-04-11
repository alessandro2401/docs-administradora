# Dashboard Orçamentário 2026

> Documentação completa e atualizada do Dashboard Orçamentário 2026 — sistema de gestão financeira e orçamentária do Grupo MMB & Alpha Proteções. Última atualização: **11 de Abril de 2026**.

## Informações Gerais

| Campo | Detalhe |
|---|---|
| **URL de Produção** | [https://grupommb2026.manus.space](https://grupommb2026.manus.space) |
| **Repositório GitHub** | [alessandro2401/dashboard-orcamento-2026](https://github.com/alessandro2401/dashboard-orcamento-2026) (privado) |
| **Status** | Ativo |
| **Tipo de Acesso** | Requer Login (credenciais de diretoria) |
| **Última Atualização** | 11 de Abril de 2026 |
| **Versão** | 44 commits — 254 arquivos — 4,4 MB |
| **Testes** | 84 testes automatizados (100% passando) |

## Propósito e Público-Alvo

O **Dashboard Orçamentário 2026** é uma plataforma de gestão financeira e orçamentária de missão crítica, desenvolvida exclusivamente para a **diretoria do Grupo MMB & Alpha Proteções**.

Seu objetivo central é consolidar e apresentar, em tempo real, todas as informações sobre a **saúde financeira e operacional do grupo para o exercício de 2026**. A plataforma resolve o problema da descentralização de dados, oferecendo um ponto único de verdade para análise, controle e tomada de decisões estratégicas.

O público-alvo é composto por **diretores e gestores de alto nível**, que utilizam a ferramenta como painel de controle central para o acompanhamento de receitas, despesas, orçamentos, previstos, PLR e KPIs organizacionais.

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| **Frontend** | React 19 + TypeScript + Vite |
| **Estilização** | Tailwind CSS + Radix UI + shadcn/ui |
| **Backend** | Node.js + Express + tRPC |
| **ORM** | Drizzle ORM |
| **Banco de Dados** | TiDB Cloud (MySQL) — gateway02.us-east-1.prod.aws.tidbcloud.com |
| **Hospedagem** | Manus Space (Vercel-compatible) |
| **Autenticação** | JWT + OAuth Manus |
| **Gráficos** | Recharts + Chart.js |
| **Testes** | Vitest (84 testes) |

## Estrutura do Repositório

```
dashboard-orcamento-2026/
├── client/src/
│   ├── pages/          # 15 páginas React
│   ├── components/     # Componentes UI e de negócio
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilitários (format, trpc, pdfExport)
│   └── contexts/       # Contextos de autenticação e tema
├── server/
│   ├── _core/          # Express, tRPC, OAuth, storage
│   ├── routers.ts      # Todos os endpoints da API
│   ├── db.ts           # Conexão com banco de dados
│   ├── fillGaps.ts     # Lógica de preenchimento de lacunas
│   └── *.test.ts       # 84 testes automatizados
├── shared/             # Tipos e constantes compartilhadas
├── drizzle/            # Schema MySQL + 12 migrações SQL
├── data/               # Backup completo dos dados (19 arquivos JSON)
└── .env.example        # Template de variáveis de ambiente
```

## Páginas do Sistema

| Página | Rota | Descrição |
|---|---|---|
| **Estrutura** | `/estrutura` | Organograma interativo — hubs, departamentos, colaboradores e parceiros externos |
| **Dashboard** | `/dashboard` | Painel principal com KPIs, gráficos de receita vs. despesa e evolução mensal |
| **Lançamentos** | `/lancamentos` | Registro e auditoria de transações financeiras por conta e departamento |
| **Departamentos** | `/departamentos` | Exploração detalhada de cada departamento com orçamento e despesas |
| **Receita** | `/receita` | Análise de receita mensal por empresa (MMB, Alpha, Potere, Soluções, etc.) |
| **Colaboradores** | `/colaboradores` | Gestão de colaboradores com cargo, salário e dados para PLR |
| **Simulador PLR** | `/plr` | Projeção de Participação nos Lucros e Resultados por cenário |
| **KPIs** | `/kpis` | Monitoramento de indicadores estratégicos (NPS, eficiência, etc.) |
| **Painel Executivo** | `/executivo` | Dashboard consolidado de alto nível para diretoria |
| **Relatório** | `/relatorio` | Geração de relatórios consolidados em PDF |
| **Auditoria** | `/auditoria` | Log completo de todas as ações realizadas no sistema |
| **Importar Previstos** | `/importar` | Importação de previstos via planilha Excel por empresa |
| **Saúde dos Dados** | `/saude` | Diagnóstico de lacunas e inconsistências nos dados |
| **Login** | `/login` | Autenticação de diretores |
| **PLR Público** | `/plr-publico` | Painel PLR de acesso público para colaboradores |

## Estrutura Organizacional

### Hub Administrativo — Grupo MMB

| Departamento | Colaboradores Internos | Suporte Externo | Descrição |
|---|---|---|---|
| Administrativo | 3 | — | Gestão das instalações físicas da sede |
| Atendimento ao Cliente | 9 | — | Suporte centralizado a todos os clientes |
| Financeiro e Contábil | 3 | 1 escritório externo | Fluxo de caixa e contabilidade |
| Departamento Pessoal | 1 | 1 escritório externo | Folha de pagamento e benefícios |
| Sinistro | 3 | 1 regulagem + 3 sindicâncias | Análise e processamento de sinistros |
| Assistência 24h | 1 | 1 empresa 24h | Guincho, chaveiro, pane seca, reboque |
| Jurídico | 1 | 1 escritório externo | Consultoria preventiva e reativa |
| Qualidade | 1 | 1 escritório externo | ISO 9001, Reclame Aqui, Google |
| Cobrança | 1 | 1 escritório de cobrança | Recuperação de créditos de todos os clientes |

### Hub Comercial — Alpha Proteções

| Departamento | Colaboradores | Descrição |
|---|---|---|
| Vendas | 25 | Venda de todos os produtos do grupo |
| Comunicação e Marketing | 3 | Podcast, tráfego pago, divulgação de todas as marcas |
| Tecnologia da Informação | 2 | Suporte e desenvolvimento (departamento novo) |

## Dados Financeiros em Produção (Posição: 11/04/2026)

### KPIs Consolidados

| Indicador | Valor |
|---|---|
| Receita Orçada Total 2026 | R$ 21.600.000,00 |
| Receita Realizada Jan–Mar | R$ 7.114.664,65 |
| Despesa Orçada Total 2026 | R$ 21.214.181,91 |
| Despesa Forecast Total | R$ 7.701.005,24 |
| Despesa Realizada Jan–Mar | R$ 4.160.916,45 |
| Lucro Orçado | R$ 385.818,09 |
| **Lucro Realizado Jan–Mar** | **R$ 2.953.748,20** |
| Margem Orçada | 1,79% |
| **Margem Realizada** | **41,52%** |

### Evolução Mensal 2026

| Mês | Orçado Despesa | Forecast | Realizado Despesa | Orçado Receita | Realizado Receita |
|---|---|---|---|---|---|
| Janeiro | R$ 1.773.764,63 | R$ 2.329.836,21 | R$ 1.846.639,07 | R$ 1.800.000,00 | R$ 1.616.497,39 |
| Fevereiro | R$ 1.763.775,62 | R$ 1.947.450,46 | R$ 1.628.774,94 | R$ 1.800.000,00 | R$ 2.541.666,90 |
| Março | R$ 1.763.775,62 | R$ 1.683.219,08 | R$ 685.502,44 | R$ 1.800.000,00 | R$ 2.956.500,36 |
| Abril | R$ 1.802.661,08 | R$ 1.740.499,49 | — | R$ 1.800.000,00 | — |
| Maio–Dezembro | R$ 1.763.775,62/mês | — | — | R$ 1.800.000,00/mês | — |

### Receita por Empresa (Jan–Mar 2026)

| Empresa | Janeiro | Fevereiro | Março |
|---|---|---|---|
| Movimento Mais Brasil (MMB) | R$ 1.024.708,42 | R$ 1.863.351,51 | R$ 2.750.199,92 |
| Alpha Proteções | R$ 243.796,18 | R$ 293.636,00 | R$ 18.125,00 |
| Grupo MMB | R$ 341.812,38 | R$ 367.982,38 | R$ 164.151,33 |
| Soluções Corretora | R$ 6.180,41 | R$ 10.275,69 | R$ 19.911,31 |
| Potere Auto | — | R$ 6.421,32 | R$ 4.112,80 |
| **Total** | **R$ 1.616.497,39** | **R$ 2.541.666,90** | **R$ 2.956.500,36** |

## Inventário do Banco de Dados

| Tabela | Registros | Descrição |
|---|---|---|
| `hubs` | 2 | Hubs organizacionais |
| `departments` | 12 | Departamentos por hub |
| `accounts` | 261 | Contas contábeis por departamento |
| `budget_entries` | 3.084 | Valores orçados por conta/mês (Jan–Dez 2026) |
| `actual_entries` | 453 | Valores realizados (Jan–Mar 2026) |
| `forecast_entries` | 558 | Previstos importados via Excel |
| `monthly_revenue` | 12 | Receita mensal por empresa |
| `employees` | 147 | Colaboradores para cálculo de PLR |
| `kpi_entries` | 20 | Indicadores de desempenho (NPS, eficiência) |
| `parameters` | 7 | Parâmetros do sistema |
| `audit_logs` | 1.266 | Histórico completo de ações |
| **Total** | **6.228+** | **19 arquivos JSON de backup** |

## Parâmetros do Sistema

| Parâmetro | Valor | Descrição |
|---|---|---|
| `receita_mensal` | R$ 1.800.000 | Receita líquida mensal projetada |
| `meta_lucro_pct` | 20% | Meta de lucro líquido |
| `plr_pct` | 10% | PLR sobre o lucro |
| `teto_despesas` | R$ 1.440.000 | Teto de despesas mensais |
| `teto_marketing` | R$ 50.000 | Teto mensal de marketing |

## Controle de Acesso

| Perfil | E-mail | Hub |
|---|---|---|
| Diretora Administrativa | diretoria@administradoramutual.com.br | Hub Administrativo (Grupo MMB) |
| Diretor Comercial | alpha@administradoramutual.com.br | Hub Comercial (Alpha Proteções) |

## Migrações do Banco de Dados

O projeto possui 12 migrações SQL aplicadas sequencialmente:

| Migração | Descrição |
|---|---|
| `0000` | Schema inicial (hubs, departments, accounts, budget_entries, actual_entries) |
| `0001` a `0011` | Evolução incremental: forecast, revenue, employees, PLR, KPIs, audit, parameters, documents, notifications |

## Backup de Dados

O repositório contém um backup completo e atualizado de todos os dados operacionais na pasta `data/`. Os arquivos são exportados via API pública do sistema e incluem todos os 6.228+ registros do banco de dados.

Para restaurar os dados em um novo ambiente:

```bash
# 1. Clonar o repositório
git clone https://github.com/alessandro2401/dashboard-orcamento-2026.git

# 2. Instalar dependências
pnpm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com as credenciais do banco de dados

# 4. Aplicar schema
pnpm db:push

# 5. Executar seed inicial
node server/seed.mjs

# 6. Importar previstos de Abril 2026
node import-abril-2026.mjs
```

## Histórico de Desenvolvimento

| Data | Marco |
|---|---|
| Fev 2026 | Criação inicial do sistema — estrutura organizacional e orçamento base |
| Fev 2026 | Importação dos previstos de Janeiro 2026 (R$ 1.549.964,36) |
| Fev 2026 | Importação dos previstos de Fevereiro 2026 (R$ 1.827.106,21) |
| Mar 2026 | Criação de 12 novas contas no Hub Comercial Alpha (solicitação Diretor Junio Tosta) |
| Mar 2026 | Criação de 6 novas contas específicas (VEN-031 a ADM-036) |
| Abr 2026 | Importação dos previstos de Abril 2026 — R$ 1.740.499,49 (314 lançamentos, 5 empresas) |
| Abr 2026 | Criação de 3 novas contas no Hub Comercial |
| Abr 2026 | Backup completo dos dados exportado para o repositório GitHub |
| **11/04/2026** | **Auditoria completa — 100% dos dados e código-fonte no repositório** |

---

*Documentação atualizada em 11 de Abril de 2026 — Equipe Técnica da Administradora Mutual.*
