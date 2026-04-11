# Dashboard Orçamentário 2026

> Sistema de gestão financeira e orçamentária do Grupo MMB & Alpha Proteções. Acesso restrito à diretoria.

## Acesso Rápido

| Item | Detalhe |
|---|---|
| **URL** | [https://grupommb2026.manus.space](https://grupommb2026.manus.space) |
| **Repositório** | [github.com/alessandro2401/dashboard-orcamento-2026](https://github.com/alessandro2401/dashboard-orcamento-2026) |
| **Status** | Ativo |
| **Acesso** | Login obrigatório (diretores) |

## O que é

O Dashboard Orçamentário 2026 é uma aplicação web full-stack que centraliza o controle financeiro e orçamentário do Grupo MMB & Alpha Proteções para o exercício de 2026. O sistema permite:

- Acompanhar receitas realizadas vs. orçadas por empresa e mês
- Controlar despesas por departamento, conta contábil e período
- Importar previstos via planilhas Excel por empresa
- Simular cenários de PLR (Participação nos Lucros e Resultados)
- Monitorar KPIs estratégicos (NPS, eficiência operacional)
- Auditar todas as ações realizadas no sistema
- Gerar relatórios consolidados em PDF

## Credenciais de Acesso

| Perfil | E-mail | Hub |
|---|---|---|
| Diretora Administrativa | diretoria@administradoramutual.com.br | Hub Administrativo (Grupo MMB) |
| Diretor Comercial | alpha@administradoramutual.com.br | Hub Comercial (Alpha Proteções) |

## Posição Financeira Atual (11/04/2026)

| Indicador | Valor |
|---|---|
| Receita Realizada Jan–Mar | R$ 7.114.664,65 |
| Despesa Realizada Jan–Mar | R$ 4.160.916,45 |
| **Lucro Realizado** | **R$ 2.953.748,20** |
| **Margem Realizada** | **41,52%** |
| Receita Orçada 2026 | R$ 21.600.000,00 |
| Despesa Orçada 2026 | R$ 21.214.181,91 |

## Páginas Disponíveis

| Página | Rota | Função |
|---|---|---|
| Estrutura | `/estrutura` | Organograma — hubs, departamentos, colaboradores |
| Dashboard | `/dashboard` | KPIs, gráficos de receita vs. despesa |
| Lançamentos | `/lancamentos` | Registro de transações financeiras |
| Departamentos | `/departamentos` | Orçamento e despesas por departamento |
| Receita | `/receita` | Receita mensal por empresa |
| Colaboradores | `/colaboradores` | Gestão de colaboradores (147 cadastrados) |
| Simulador PLR | `/plr` | Projeção de PLR por cenário |
| KPIs | `/kpis` | Indicadores estratégicos |
| Painel Executivo | `/executivo` | Dashboard consolidado para diretoria |
| Relatório | `/relatorio` | Geração de relatórios em PDF |
| Auditoria | `/auditoria` | Log de todas as ações (1.266 registros) |
| Importar Previstos | `/importar` | Importação via Excel por empresa |
| Saúde dos Dados | `/saude` | Diagnóstico de lacunas nos dados |

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Frontend | React 19 + TypeScript + Vite + Tailwind CSS |
| Backend | Node.js + Express + tRPC |
| Banco de Dados | TiDB Cloud (MySQL) |
| ORM | Drizzle ORM + 12 migrações SQL |
| Autenticação | JWT + OAuth |
| Testes | Vitest — 84 testes automatizados |

## Backup de Dados

O repositório GitHub contém um backup completo e atualizado de todos os dados operacionais na pasta `data/`:

| Arquivo | Registros |
|---|---|
| `accounts.json` | 261 contas contábeis |
| `budget_entries.json` | 3.084 lançamentos orçados |
| `actual_entries.json` | 453 lançamentos realizados |
| `forecast_entries.json` | 558 previstos importados |
| `employees.json` | 147 colaboradores |
| `audit_logs.json` | 1.266 registros de auditoria |
| **Total** | **6.228+ registros** |

## Documentação Completa

Para a documentação técnica detalhada, incluindo histórico de desenvolvimento, estrutura organizacional completa e dados financeiros por empresa, consulte:

→ [Ecossistema — Dashboard Orçamentário 2026](/ecossistema/dashboard-orcamentario)

---

*Atualizado em 11 de Abril de 2026.*
