
> Este documento detalha o cronograma de desenvolvimento das **Sprints 1 a 10**, que compõem o **MVP Técnico Inquestionável** do Sistema de Gestão Integrado da POTERE LOCADORA, conforme definido no Plano de Ação v12.0.

# Cronograma Detalhado do MVP (Sprints 1-10)

**Autor:** Manus AI
**Data:** 16 de Dezembro de 2025
**Versão:** 1.0 (Revisado)

---

## Visão Geral do MVP

O objetivo do MVP é entregar um sistema funcional e confiável que cubra as operações mais críticas do negócio. As entregas estão focadas em três pilares:

1.  **Fluxo completo de locação funcional:** Desde a busca do veículo até o pagamento e a confirmação da reserva.
2.  **Controle operacional de frota confiável:** Ferramentas para a equipe POTERE gerenciar os veículos, manutenções e documentos.
3.  **Faturamento básico correto:** Geração de faturas e controle de pagamentos.

Funcionalidades complexas de BI, relatórios avançados e análises sofisticadas foram **deliberadamente adiadas** para a fase pós-lançamento, garantindo foco total na estabilidade e na entrega de valor essencial.

---

## FASE 1: FUNDAÇÃO E INFRAESTRUTURA (Sprints 1-2)

Esta fase estabelece as bases técnicas e de design do projeto, criando a infraestrutura necessária para o desenvolvimento dos domínios de negócio.

---

### Sprint 1 (Semanas 1-2): Setup Inicial e Arquitetura Base

**Objetivo:** Estabelecer a infraestrutura técnica, ambientes de desenvolvimento e a arquitetura base do sistema, seguindo as diretrizes técnicas obrigatórias.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Repositório Git Configurado** | Monorepo com estrutura orientada a domínios | DevOps + Tech Lead |
| **Ambientes Provisionados** | Dev, Staging e Production configurados | DevOps |
| **CI/CD Pipeline** | GitHub Actions com deploy automático para Vercel e Railway | DevOps |
| **Banco de Dados Inicial** | PostgreSQL/Neon provisionado com schema inicial | Backend |
| **Arquitetura Base** | Projeto Next.js 14+ com App Router, TRPC, Prisma e Zod | Frontend + Backend |
| **Observabilidade Inicial** | Sentry e DataDog configurados em todos os ambientes | DevOps |

#### Tarefas Detalhadas

**DevOps:**
- Criar repositório Git no GitHub com estrutura de monorepo orientada a domínios.
- Configurar branch protection rules (main, develop).
- Provisionar Vercel para frontend (3 ambientes).
- Provisionar Railway/Render para backend (3 ambientes).
- Provisionar Neon PostgreSQL (3 databases).
- Configurar GitHub Actions para CI/CD com testes obrigatórios.
- Configurar Sentry e DataDog para monitoramento de erros e performance.

**Backend:**
- Inicializar projeto Node.js com TypeScript.
- Configurar TRPC, Prisma e Zod.
- Criar schema inicial do banco de dados (tabelas: `users`, `roles`, `permissions`).
- Executar primeira migração.
- Criar seed inicial para dados de teste.

**Frontend:**
- Inicializar projeto Next.js 14+ com TypeScript.
- Configurar Tailwind CSS e Shadcn UI.
- Criar estrutura de pastas (app, components, lib, hooks).
- Configurar TRPC client.

**Tech Lead:**
- Revisar e aprovar arquitetura.
- Definir padrões de código (ESLint, Prettier) e política de PRs.
- Criar documento de convenções de desenvolvimento.

#### Critérios de Aceitação

✅ Repositório Git com estrutura de domínios aprovada.
✅ 3 ambientes funcionando (dev, staging, production).
✅ CI/CD executando deploy automático com sucesso após passagem nos testes.
✅ Banco de dados acessível e com schema inicial.
✅ Aplicação Next.js rodando em todos os ambientes.
✅ API TRPC respondendo a requisições de teste.
✅ Sentry reportando erros e DataDog coletando métricas básicas.

---
### Sprint 2 (Semanas 3-4): Design System e Autenticação

**Objetivo:** Criar o design system completo e implementar o sistema de autenticação com OAuth, 2FA e logs de auditoria.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Design System Completo** | Biblioteca de componentes reutilizáveis com Shadcn UI | Frontend + Designer |
| **Sistema de Autenticação** | OAuth (Google, Facebook) + autenticação por email/senha | Backend |
| **2FA (Autenticação de Dois Fatores)** | Implementação de TOTP obrigatória para usuários administradores | Backend |
| **Sistema de Permissões (RBAC)** | Implementação do controle de acesso baseado em 8 perfis | Backend |
| **Logs de Auditoria** | Implementação do sistema de logs para ações de autenticação | Backend |
| **Páginas de Autenticação** | Login, registro, recuperação de senha, configuração 2FA | Frontend |

#### Tarefas Detalhadas

**Designer:**
- Criar guia de estilo visual completo no Figma.
- Criar biblioteca de componentes no Figma.
- Criar protótipo de fluxo de autenticação.

**Frontend:**
- Implementar componentes base do Shadcn UI.
- Customizar tema do Tailwind com cores da marca.
- Implementar páginas de login, registro, recuperação de senha e configuração 2FA.

**Backend:**
- Configurar NextAuth.js para OAuth e email/senha.
- Implementar TOTP para 2FA (biblioteca speakeasy).
- Criar tabelas: `users`, `sessions`, `accounts`, `verification_tokens`.
- Criar sistema de roles e permissions (8 perfis).
- Implementar middleware de autenticação e autorização.
- Criar tabela `audit_logs` e implementar serviço de log para eventos de autenticação.

**QA:**
- Criar plano de testes para autenticação.
- Testar fluxo completo de registro, login, recuperação de senha e 2FA.
- Testar controle de acesso por roles.
- Validar que logs de auditoria são gerados corretamente.

#### Critérios de Aceitação

✅ Design system documentado e implementado.
✅ Usuário consegue se registrar, fazer login e recuperar senha.
✅ 2FA funcionando e obrigatório para admins.
✅ Sistema de roles e permissions funcionando.
✅ Logs de auditoria são criados para login e falhas de login.
✅ Testes de autenticação com cobertura > 90%.

---

## FASE 2: PORTAL DO CLIENTE (Sprints 3-6)

Esta fase foca no desenvolvimento do portal voltado para os clientes (motoristas de aplicativos), implementando o fluxo completo de locação.

---

### Sprint 3 (Semanas 5-6): Homepage e Busca de Veículos

**Objetivo:** Desenvolver a homepage com 100% de alinhamento às melhores práticas globais e implementar o sistema de busca de veículos.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Homepage Completa** | Implementação do mockup com 100% de alinhamento | Frontend |
| **Sistema de Busca** | Busca por localização, datas e filtros avançados | Backend + Frontend |
| **Mapa Interativo** | Mapa com pins mostrando veículos disponíveis | Frontend |
| **Comparação de Veículos** | Sistema para comparar até 3 veículos lado a lado | Frontend |
| **Domínio de Frota (Backend)** | CRUD completo de veículos e disponibilidade | Backend |
| **Integração FIPE Inicial** | Primeira integração para buscar valores de veículos | Backend |

#### Tarefas Detalhadas

**Backend:**
- Criar tabelas: `vehicles`, `vehicle_availability`, `vehicle_photos`, `fipe_history`.
- Implementar endpoints TRPC para CRUD de veículos.
- Implementar lógica de busca com filtros (tipo, preço, transmissão).
- Implementar cálculo de disponibilidade por período.
- Integrar API FIPE com tratamento de erro, retry e timeout.
- Implementar sistema de upload de fotos (Cloudflare R2).

**Frontend:**
- Implementar hero section com formulário de busca.
- Implementar grid de veículos com cards e filtros.
- Integrar Google Maps API para mapa interativo.
- Implementar sistema de comparação (checkbox + modal).
- Implementar banner de ofertas por geolocalização.
- Implementar footer com selos de segurança.

**QA:**
- Testar busca de veículos com diferentes filtros.
- Testar cálculo de disponibilidade.
- Testar mapa interativo em diferentes navegadores.
- Testar sistema de comparação.
- Testar responsividade em mobile, tablet e desktop.

#### Critérios de Aceitação

✅ Homepage implementada conforme mockup 100%.
✅ Busca de veículos retorna resultados corretos.
✅ Filtros funcionam corretamente.
✅ Mapa mostra veículos disponíveis com pins.
✅ Usuário consegue comparar até 3 veículos.
✅ Página 100% responsiva.
✅ Performance Lighthouse > 90.

---
### Sprint 4 (Semanas 7-8): Detalhes do Veículo e Início da Reserva

**Objetivo:** Desenvolver a página de detalhes do veículo e a primeira etapa do fluxo de reserva.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Página de Detalhes do Veículo** | Página completa com galeria de fotos, especificações e reviews | Frontend |
| **Sistema de Reviews** | Sistema para clientes avaliarem veículos e serviço | Backend + Frontend |
| **Etapa 1 da Reserva** | Seleção de datas, horários e itens extras | Frontend |
| **Cálculo de Preço Dinâmico** | Lógica de negócio para calcular o preço final da reserva | Backend |
| **Domínio de Contratos (Backend)** | Estrutura inicial do domínio de contratos | Backend |

#### Tarefas Detalhadas

**Backend:**
- Criar tabelas: `reviews`, `contract_extras`.
- Implementar endpoints TRPC para CRUD de reviews.
- Implementar lógica de cálculo de preço dinâmico (baseado em dias, extras, promoções).
- Criar estrutura inicial do domínio de contratos com a tabela `contracts`.

**Frontend:**
- Implementar página de detalhes do veículo com todas as seções.
- Implementar galeria de fotos com zoom.
- Implementar seção de reviews com média de avaliação.
- Implementar formulário para submissão de reviews.
- Implementar a primeira etapa do fluxo de reserva (modal ou página).

**QA:**
- Testar página de detalhes em diferentes navegadores e dispositivos.
- Testar submissão e exibição de reviews.
- Testar cálculo de preço dinâmico com diferentes cenários.

#### Critérios de Aceitação

✅ Página de detalhes do veículo implementada conforme mockup.
✅ Usuário consegue submeter e ver reviews.
✅ Cálculo de preço dinâmico é preciso e testado.
✅ Primeira etapa da reserva funcionando corretamente.

---

### Sprint 5 (Semanas 9-10): Checkout e Pagamento

**Objetivo:** Implementar as etapas finais do fluxo de reserva, incluindo coleta de dados, pagamento e geração de contrato.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Etapa 2 da Reserva** | Formulário de dados do cliente com coleta mínima | Frontend |
| **Etapa 3 da Reserva** | Integração com gateways de pagamento | Frontend |
| **Integração de Pagamento** | Integração com Stripe e Mercado Pago (idempotente) | Backend |
| **Geração de Contrato** | Geração automática de contrato em PDF | Backend |
| **Upload de Documentos** | Upload de CNH e comprovante de residência (tolerante a falhas) | Backend + Frontend |

#### Tarefas Detalhadas

**Backend:**
- Implementar integração com Stripe e Mercado Pago, garantindo idempotência.
- Implementar serviço de geração de PDF para contratos.
- Implementar lógica para salvar o contrato no banco de dados.
- Implementar serviço de upload de documentos para Cloudflare R2 com tratamento de falhas.

**Frontend:**
- Implementar formulário de dados do cliente (etapa 2).
- Implementar interface de upload de documentos.
- Implementar interface de seleção de método de pagamento (etapa 3).
- Integrar com Stripe Elements e/ou SDK do Mercado Pago.
- Implementar página de confirmação de reserva.

**QA:**
- Testar fluxo completo de reserva com diferentes métodos de pagamento.
- Testar geração e download do contrato em PDF.
- Testar upload de documentos com sucesso e com falha.
- Validar que pagamentos não são duplicados.

#### Critérios de Aceitação

✅ Fluxo de reserva completo funcionando de ponta a ponta.
✅ Pagamentos processados com sucesso e de forma segura.
✅ Contrato em PDF gerado corretamente.
✅ Upload de documentos funcionando de forma robusta.

---

### Sprint 6 (Semanas 11-12): Painel do Cliente

**Objetivo:** Desenvolver o painel do cliente, permitindo que ele gerencie suas reservas e interaja com o veículo alugado.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Dashboard do Cliente** | Página principal com resumo de reservas e notificações | Frontend |
| **Minhas Reservas** | Lista de reservas ativas, futuras e passadas | Backend + Frontend |
| **Inspeção Visual** | Fluxo para o cliente enviar 5 fotos obrigatórias do veículo | Backend + Frontend |
| **Registro de Quilometragem** | Fluxo para o cliente registrar a quilometragem semanal | Backend + Frontend |
| **Sistema de Notificações** | Implementação do domínio de notificações (e-mail, SMS) | Backend |

#### Tarefas Detalhadas

**Backend:**
- Criar tabelas: `mileage_history`, `vehicle_inspections`, `inspection_photos`, `notifications`.
- Implementar endpoints TRPC para o painel do cliente.
- Implementar lógica para registro de KM e inspeção visual.
- Implementar serviço de envio de notificações (SendGrid, Twilio) com tratamento de erro.

**Frontend:**
- Implementar layout do painel do cliente.
- Implementar dashboard com dados mockados e depois reais.
- Implementar página "Minhas Reservas".
- Implementar formulário de inspeção visual com upload de fotos.
- Implementar formulário de registro de quilometragem.

**QA:**
- Testar todas as funcionalidades do painel do cliente.
- Validar que as notificações são enviadas corretamente.
- Testar upload de fotos da inspeção.
- Testar registro de KM.

#### Critérios de Aceitação

✅ Painel do cliente funcionando e exibindo dados corretos.
✅ Cliente consegue ver e gerenciar suas reservas.
✅ Cliente consegue realizar a inspeção visual e registrar a quilometragem.
✅ Notificações transacionais (reserva confirmada, lembrete de KM) funcionando.

---
## FASE 3: BACKOFFICE ADMINISTRATIVO (Sprints 7-10)

Esta fase foca no desenvolvimento do painel administrativo, entregando as ferramentas essenciais para a equipe POTERE gerenciar as operações.

---

### Sprint 7 (Semanas 13-14): Dashboard Administrativo e CRM

**Objetivo:** Desenvolver o dashboard administrativo básico e o módulo de CRM para gestão de clientes.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Dashboard Admin Básico** | Dashboard com KPIs essenciais (ocupação, novas reservas, faturamento) | Backend + Frontend |
| **Módulo CRM Completo** | CRUD de clientes, busca, filtros e visualização de detalhes | Backend + Frontend |
| **Sistema de Análise de Crédito** | Interface para aprovar ou rejeitar clientes com base nos documentos | Backend + Frontend |
| **Gestão de Documentos** | Visualização e gestão dos documentos enviados pelos clientes | Frontend |
| **Logs de Auditoria** | Implementação de logs para todas as ações de CRM | Backend |

#### Tarefas Detalhadas

**Backend:**
- Implementar endpoints TRPC para o dashboard e CRM.
- Implementar lógica de aprovação/rejeição de clientes.
- Implementar serviço de log de auditoria para todas as ações de CRM.

**Frontend:**
- Implementar layout do backoffice.
- Implementar dashboard administrativo com gráficos básicos.
- Implementar tabela de clientes com busca, filtros e paginação.
- Implementar página de detalhes do cliente com todas as informações.
- Implementar interface de análise de crédito.

**QA:**
- Testar todas as funcionalidades do CRM.
- Validar que o dashboard exibe dados corretos.
- Verificar se os logs de auditoria são gerados para todas as ações.

#### Critérios de Aceitação

✅ Dashboard administrativo funcionando.
✅ CRUD de clientes completo e funcional.
✅ Fluxo de análise de crédito funcionando.
✅ Logs de auditoria implementados e corretos.

---

### Sprint 8 (Semanas 15-16): Gestão de Frota e Veículos

**Objetivo:** Desenvolver o módulo completo de gestão de frota e veículos.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **CRUD de Veículos** | CRUD completo de veículos com todas as especificações | Backend + Frontend |
| **Controle de Manutenções** | Agendamento e histórico de manutenções preventivas e corretivas | Backend + Frontend |
| **Gestão de Documentos** | Gestão de CRLV, seguro e IPVA dos veículos | Backend + Frontend |
| **Histórico do Veículo** | Timeline com todo o histórico do veículo (locações, manutenções, etc.) | Backend + Frontend |

#### Tarefas Detalhadas

**Backend:**
- Criar tabela `maintenance_records`.
- Implementar endpoints TRPC para gestão de frota.
- Implementar lógica de agendamento de manutenção.
- Implementar alertas automáticos de vencimento de documentos.

**Frontend:**
- Implementar tabela de veículos com busca e filtros.
- Implementar formulário de criação/edição de veículos.
- Implementar página de detalhes do veículo com histórico e manutenções.
- Implementar interface para agendar manutenções.

**QA:**
- Testar CRUD completo de veículos.
- Testar agendamento e visualização de manutenções.
- Validar alertas de vencimento de documentos.

#### Critérios de Aceitação

✅ CRUD de veículos completo e funcional.
✅ Sistema de gestão de manutenções funcionando.
✅ Gestão de documentos de veículos implementada.

---

### Sprint 9 (Semanas 17-18): Gestão Financeira Básica

**Objetivo:** Implementar as funcionalidades essenciais do domínio financeiro para o MVP.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Dashboard Financeiro Básico** | Dashboard com faturamento, cobranças e inadimplência | Backend + Frontend |
| **Cálculo de ROI e TCO** | Lógica para calcular a rentabilidade por veículo | Backend |
| **Integração FIPE Completa** | Rotina automática para atualizar valores de mercado | Backend |
| **Gestão de Faturas** | Visualização e gestão de faturas e pagamentos | Backend + Frontend |

#### Tarefas Detalhadas

**Backend:**
- Criar tabelas: `invoices`, `payments`, `depreciation_history`.
- Implementar endpoints TRPC para o módulo financeiro.
- Implementar lógica de cálculo de ROI e TCO.
- Criar CRON job para atualização mensal da tabela FIPE.
- Implementar lógica de geração de faturas.

**Frontend:**
- Implementar dashboard financeiro com gráficos básicos.
- Implementar tabela de faturas com status de pagamento.
- Implementar página de detalhes da fatura.

**QA:**
- Testar dashboard financeiro com dados de teste.
- Validar cálculos de ROI e TCO.
- Testar geração e visualização de faturas.

#### Critérios de Aceitação

✅ Dashboard financeiro básico funcionando.
✅ Cálculos de ROI e TCO corretos.
✅ Rotina de atualização da FIPE funcionando.
✅ Gestão de faturas implementada.

---

### Sprint 10 (Semanas 19-20): Multas, Sinistros e Contratos

**Objetivo:** Implementar os módulos de gestão de multas, sinistros e contratos.

#### Entregas Principais

| Entrega | Descrição | Responsável |
| :--- | :--- | :--- |
| **Módulo de Gestão de Multas** | Registro e atribuição de multas aos clientes | Backend + Frontend |
| **Módulo de Gestão de Sinistros** | Registro e acompanhamento de sinistros | Backend + Frontend |
| **Gestão de Contratos** | Visualização, renovação e encerramento de contratos | Backend + Frontend |
| **Assinatura Digital** | Integração com serviço de assinatura digital (se aplicável no MVP) | Backend |

#### Tarefas Detalhadas

**Backend:**
- Criar tabelas: `fines`, `claims`.
- Implementar endpoints TRPC para multas, sinistros e contratos.
- Implementar lógica para atribuir multas a faturas de clientes.
- Implementar lógica de renovação e encerramento de contratos.

**Frontend:**
- Implementar interface para registrar multas e sinistros.
- Implementar tabela de contratos com busca e filtros.
- Implementar página de detalhes do contrato com opções de gestão.

**QA:**
- Testar registro e atribuição de multas.
- Testar registro e acompanhamento de sinistros.
- Testar fluxo de renovação e encerramento de contratos.

#### Critérios de Aceitação

✅ Módulo de gestão de multas funcionando.
✅ Módulo de gestão de sinistros funcionando.
✅ Gestão de contratos (visualização, renovação, encerramento) implementada.

---


---

## Próximos Passos (Fora do MVP)

Após a conclusão da Sprint 10, o desenvolvimento do MVP Técnico Inquestionável estará completo. As Sprints 11 e 12 serão dedicadas exclusivamente a testes rigorosos, correções de bugs e preparação para o lançamento, conforme detalhado no Plano de Ação v12.0.
