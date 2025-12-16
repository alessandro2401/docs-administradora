# Plano de Ação Definitivo - v12.0

## Sistema de Gestão Integrado para POTERE LOCADORA

**Autor:** Manus AI
**Data:** 16 de Dezembro de 2025
**Versão:** 12.1 - FINAL, CONSOLIDADO E REVISADO

---

## ÍNDICE

0.  [Estrutura da Documentação](#0-estrutura-da-documentação)

1.  [Sumário Executivo](#1-sumário-executivo)
2.  [Visão Geral do Projeto](#2-visão-geral-do-projeto)
3.  [Estratégia de Domínios](#3-estratégia-de-domínios)
4.  [Arquitetura Técnica Obrigatória](#4-arquitetura-técnica-obrigatória)
5.  [Padrões de Código e Organização](#5-padrões-de-código-e-organização)
6.  [Design e Experiência do Usuário (100% Alinhamento)](#6-design-e-experiência-do-usuário-100-alinhamento)
7.  [Domínios Obrigatórios do Sistema](#7-domínios-obrigatórios-do-sistema)
8.  [Funcionalidades Detalhadas](#8-funcionalidades-detalhadas)
9.  [Modelo de Dados](#9-modelo-de-dados)
10. [Sistema de Permissões e Controle de Acesso](#10-sistema-de-permissões-e-controle-de-acesso)
11. [Módulo de Controle de Veículos](#11-módulo-de-controle-de-veículos)
12. [Módulo de Gestão Financeira e Rentabilidade](#12-módulo-de-gestão-financeira-e-rentabilidade)
13. [Sistema de Notificações e Automações](#13-sistema-de-notificações-e-automações)
14. [Segurança, Auditoria e Conformidade](#14-segurança-auditoria-e-conformidade)
15. [Padrões de Qualidade e Testes](#15-padrões-de-qualidade-e-testes)
16. [Cronograma de Desenvolvimento Revisado (12 Sprints)](#16-cronograma-de-desenvolvimento-revisado-12-sprints)
17. [Estimativas de Recursos](#17-estimativas-de-recursos)
18. [Riscos e Mitigações](#18-riscos-e-mitigações)
19. [Critérios de Evolução Pós-Lançamento](#19-critérios-de-evolução-pós-lançamento)
20. [Conclusão](#20-conclusão)

---

## 0. ESTRUTURA DA DOCUMENTAÇÃO

Este Plano de Ação v12.1 é o **documento mestre** e a fonte única da verdade para o projeto. Ele faz parte de um pacote de documentação v2.0 consolidado e revisado, que possui a seguinte estrutura:

```
/POTERE_LOCADORA_FINAL_V2/
│
├── README.md (Ponto de entrada e índice principal)
├── RESUMO_EXECUTIVO_FINAL.md (Visão de alto nível para stakeholders)
│
├── planejamento/
│   ├── PLANO_DE_ACAO_V12.1.md (Este documento mestre)
│   ├── CRONOGRAMA_REVISADO_MVP_SPRINTS_1_10.md (Cronograma oficial)
│   └── _archive/ (Documentos obsoletos para referência histórica)
│
├── arquitetura/
│   ├── ARQUITETURA_DETALHADA.md (Detalhes técnicos consolidados)
│   └── ... (diagramas)
│
└── ... (outras pastas: branding, design, governanca)
```

**Regra de Ouro:** Qualquer informação em outros documentos que conflite com este Plano de Ação v12.1 deve ser desconsiderada.

---

## 1. SUMÁRIO EXECUTIVO

Este documento constitui o guia mestre para o projeto, desenvolvimento e implementação do **Sistema de Gestão Integrado (SGI)** para a **POTERE LOCADORA**. O objetivo é criar uma plataforma digital de ponta-a-ponta que não apenas modernize as operações existentes, mas que também estabeleça uma vantagem competitiva sustentável no nicho de locação de veículos para motoristas de aplicativos.

Este Plano de Ação v12.1 incorpora as **diretrizes técnicas obrigatórias** estabelecidas no Documento Técnico de Execução, garantindo que todas as decisões arquiteturais, de código e de processo sejam rigorosas, previsíveis e orientadas a resultados operacionais reais.

O SGI é composto por três pilares interconectados:

1.  **Frontend do Cliente (Portal de Autoatendimento):** Uma interface web moderna, responsiva e intuitiva, projetada para oferecer uma experiência de locação sem atritos. O portal permitirá que os motoristas realizem todo o ciclo de locação online, desde a reserva e pagamento até a gestão de seus contratos e veículos.
2.  **Backoffice Administrativo (Painel de Gestão):** Uma central de comando robusta para a equipe da POTERE. O painel permitirá a gestão centralizada de clientes, frota, contratos, finanças e operações, com automações inteligentes para reduzir a carga de trabalho manual e minimizar erros.
3.  **Backend Unificado (API):** Uma API (Application Programming Interface) escalável e segura, construída com tecnologias modernas, que servirá como o cérebro do sistema, orquestrando toda a lógica de negócio e a comunicação entre o frontend, o backoffice e os serviços de terceiros.

**Investimento e Retorno (ROI):**

-   **Investimento Estimado:** O projeto tem uma duração estimada de **24 semanas**, envolvendo uma equipe multidisciplinar de **8 a 12 profissionais**. O custo total do projeto (CAPEX) deve ser calculado com base no custo dessa equipe ao longo do período.
-   **ROI Esperado (Projeção de 18 meses pós-lançamento):**
    -   **Aumento de 40-60% na Eficiência Operacional:** Através da automação de tarefas como faturamento, cobrança, agendamento de manutenção e análise de documentos.
    -   **Redução de 30% em Custos Administrativos:** Minimizando a necessidade de intervenção manual em processos repetitivos.
    -   **Expansão de 25% na Base de Clientes:** A experiência digital superior e o processo de onboarding simplificado atrairão e reterão mais motoristas.
    -   **Melhoria de 50% no Tempo de Onboarding:** O processo de cadastro, análise de crédito e assinatura de contrato, que hoje pode levar dias, será reduzido para horas.

Este documento servirá como a "fonte da verdade" para todas as equipes envolvidas, garantindo que a visão, a arquitetura e os requisitos sejam compreendidos e executados com precisão.

---

## 2. VISÃO GERAL DO PROJETO

### 2.1. Objetivos Estratégicos e KPIs

Cada objetivo estratégico será medido por Key Performance Indicators (KPIs) específicos para garantir que o projeto está gerando o valor esperado.

| Objetivo Estratégico | Descrição Detalhada | KPIs Primários |
| :--- | :--- | :--- |
| **Modernização Digital** | Sair de processos manuais e planilhas para uma plataforma centralizada, transformando a POTERE LOCADORA em uma empresa orientada a dados (data-driven). | - **% de Processos Automatizados:** Atingir 80% de automação nos processos de faturamento, cobrança e gestão de contratos.<br>- **Tempo de Geração de Relatórios:** Reduzir o tempo para gerar relatórios financeiros e operacionais de dias para minutos. |
| **Experiência do Cliente (CX)** | Oferecer a melhor experiência de locação do mercado para motoristas de aplicativos, com uma jornada 100% digital, simples, rápida e transparente. | - **NPS (Net Promoter Score):** Aumentar o NPS em 20 pontos no primeiro ano.<br>- **CSAT (Customer Satisfaction Score):** Manter um CSAT acima de 90% para interações de suporte.<br>- **Tempo de Onboarding:** Reduzir o tempo médio de onboarding de 48 horas para menos de 4 horas. |
| **Eficiência Operacional** | Automatizar tarefas repetitivas, otimizar a alocação de recursos (humanos e frota) e reduzir a taxa de erros manuais. | - **Taxa de Ocupação da Frota:** Aumentar a taxa de ocupação em 15%.<br>- **Custo por Contrato:** Reduzir o custo administrativo por contrato em 30%.<br>- **Nº de Erros Manuais:** Reduzir em 90% os erros de faturamento e cobrança. |
| **Conformidade e Segurança** | Garantir a segurança total dos dados dos clientes e da empresa, e estar em total conformidade com a Lei Geral de Proteção de Dados (LGPD). | - **Zero Incidentes de Vazamento de Dados:** Manter um histórico limpo de incidentes de segurança.<br>- **100% de Conformidade com LGPD:** Passar em auditorias internas e externas de conformidade. |
| **Escalabilidade do Negócio** | Construir uma plataforma tecnológica robusta e flexível, capaz de suportar o crescimento da frota e da base de clientes em 10x sem a necessidade de grandes refatorações. | - **Tempo de Resposta da API:** Manter a latência média da API abaixo de 200ms, mesmo com o aumento da carga.<br>- **Custo de Infraestrutura por Cliente:** Manter o custo de nuvem por cliente estável ou decrescente à medida que a base cresce. |

### 2.2. Público-Alvo (Personas)

-   **Primário: Motorista de Aplicativo (Persona: Carlos, 35 anos)**
    -   **Necessidades:** Agilidade para alugar, custos transparentes, carro confiável, suporte rápido para não perder dias de trabalho, processo sem burocracia.
    -   **Dores:** Processos de locadoras tradicionais são lentos, exigem muita papelada, e o suporte não entende suas urgências.

-   **Secundário: Gestor de Frota de Pequena Empresa (Persona: Ana, 42 anos)**
    -   **Necessidades:** Preços competitivos para múltiplos veículos, gestão simplificada da frota, faturamento centralizado e relatórios de uso.
    -   **Dores:** Dificuldade em controlar os custos e a utilização dos veículos pelos funcionários.

-   **Interno: Equipe POTERE (Persona: Lucas, 28 anos, Analista Operacional)**
    -   **Necessidades:** Uma ferramenta única para gerenciar todas as operações, automação de tarefas repetitivas, acesso rápido a informações para tomada de decisão.
    -   **Dores:** Perde muito tempo compilando dados de diferentes planilhas, processos manuais geram erros e retrabalho.

---

## 3. ESTRATÉGIA DE DOMÍNIOS

A estratégia de domínios foi desenhada para maximizar a presença online, proteger a marca, melhorar o SEO (Search Engine Optimization) e fornecer clareza para os diferentes públicos.

| Domínio | Uso Proposto | Configuração Técnica | Justificativa Estratégica |
| :--- | :--- | :--- | :--- |
| **poterelocadora.com** | **Domínio Principal (Canônico)** | Apontado para o servidor de produção do Frontend (Vercel). Será o domínio principal configurado no Google Search Console. | Curto, profissional e fácil de lembrar. Centraliza a autoridade de SEO e a força da marca em um único endereço. |
| **poterelocadora.com.br** | **Redirecionamento 301** | Configurado no provedor de domínio para redirecionar permanentemente (código 301) para `https://www.poterelocadora.com`. | Garante que todo o tráfego e "link juice" de SEO sejam consolidados no domínio principal, evitando conteúdo duplicado. Captura usuários que digitam a extensão `.com.br` por hábito. |
| **poteredriver.com** | **Portal do Motorista / Landing Page** | Pode ser usado como o domínio principal do portal do cliente (`driver.poteredriver.com`) ou como uma landing page de marketing focada na aquisição de motoristas. | Cria uma marca específica para o público-alvo principal, facilitando campanhas de marketing direcionadas e melhorando a comunicação. |
| **poteredriver.com.br** | **Redirecionamento 301** | Redirecionará permanentemente para `https://www.poteredriver.com`. | Mesma justificativa do `poterelocadora.com.br`, consolidando a marca `poteredriver`. |
| **poterelocadora.app** | **Backoffice e Futuros Apps** | O subdomínio `app.poterelocadora.app` será usado para hospedar o painel administrativo. O domínio raiz pode ser usado para uma futura Progressive Web App (PWA). | A extensão `.app` é moderna e semanticamente correta para aplicações. Separar o backoffice em um domínio diferente aumenta a segurança e a clareza da arquitetura. |
| **potereapp.com.br** | **Redirecionamento 301** | Redirecionará para `poterelocadora.app` ou para as páginas da App Store / Google Play no futuro. | Captura tráfego de usuários que possam procurar pelo aplicativo com a extensão `.com.br`. |
| **poterealugueldeveiculos.com.br** | **Redirecionamento 301 (SEO)** | Redirecionará permanentemente para `https://www.poterelocadora.com`. | Domínio rico em palavras-chave. Embora longo, é valioso para capturar tráfego de busca orgânica de cauda longa. O redirecionamento 301 transfere essa relevância para o domínio principal. |

---

## 4. ARQUITETURA TÉCNICA OBRIGATÓRIA

A arquitetura foi projetada com base em princípios de escalabilidade, manutenibilidade, segurança e performance, utilizando um stack tecnológico moderno e comprovado. **Esta arquitetura é imutável nesta fase do projeto.**

### 4.1. Princípios Arquiteturais Obrigatórios

O sistema deve ser desenvolvido como uma **aplicação modular orientada a domínios**, mesmo operando inicialmente como um único serviço (monolito modular). Não é permitido código genérico centralizado que misture responsabilidades. Cada domínio deve ser identificável, isolável e compreensível de forma independente.

**Não serão adotados microserviços no início.** A modularização é lógica e estrutural, não distribuída. A arquitetura deve permitir evolução futura sem refatorações disruptivas.

### 4.2. Diagrama da Arquitetura

```mermaid
graph TD
    subgraph "Usuários"
        A[Cliente (Motorista)]
        B[Admin (Equipe POTERE)]
    end

    subgraph "Cloudflare"
        C[WAF / CDN / DNS]
    end

    subgraph "Plataforma Vercel"
        D[Frontend Next.js - Portal do Cliente]
        E[Frontend Next.js - Backoffice Admin]
    end

    subgraph "Plataforma Railway / Render"
        F[Backend TRPC/Node.js]
    end

    subgraph "Serviços de Nuvem (AWS / Cloudflare)"
        G[Banco de Dados PostgreSQL - Neon]
        H[Armazenamento de Arquivos - Cloudflare R2]
        I[Serviço de E-mail - SendGrid]
        J[Serviço de SMS - Twilio]
        K[Autenticação - NextAuth.js]
        L[Gateway de Pagamento - Stripe / Mercado Pago]
        M[API de Consulta - Fipe Online]
    end

    A -->|HTTPS| C --> D
    B -->|HTTPS| C --> E
    D -->|API Calls| F
    E -->|API Calls| F
    F --> G
    F --> H
    F --> I
    F --> J
    F --> K
    F --> L
    F --> M
```

### 4.3. Stack Tecnológico Imutável

| Camada | Tecnologia | Versão | Justificativa Técnica |
| :--- | :--- | :--- | :--- |
| **Frontend** | Next.js | 14+ | Framework React líder de mercado, com renderização híbrida (SSR/SSG), performance otimizada e excelente ecossistema. **Será usado tanto no frontend quanto no backend (API Routes).** |
| | TypeScript | 5.x | Adiciona tipagem estática ao JavaScript, aumentando a robustez do código e a produtividade do desenvolvedor. **Obrigatório em todo o projeto.** |
| | Tailwind CSS | 3.x | Framework CSS utility-first que permite a criação de interfaces complexas de forma rápida e consistente, sem sair do HTML. |
| | Shadcn UI | Última | Coleção de componentes de UI reutilizáveis, acessíveis e customizáveis, construídos sobre Radix UI e Tailwind CSS. |
| **Backend** | Node.js | 20.x (LTS) | Ambiente de execução JavaScript no servidor, permitindo o uso de uma única linguagem em todo o stack. |
| | TRPC | 10.x | **Meio exclusivo de comunicação entre camadas.** Permite a criação de APIs type-safe de ponta-a-ponta sem a necessidade de gerar schemas ou clientes, conectando diretamente o backend e o frontend. |
| | Prisma | 5.x | **Única camada de acesso ao banco.** ORM (Object-Relational Mapper) de próxima geração para Node.js e TypeScript, facilitando a interação com o banco de dados. |
| | Zod | 3.x | **Fonte única de verdade para validação e tipagem.** Biblioteca de validação de schemas que se integra perfeitamente com TRPC e Prisma. |
| **Banco de Dados** | PostgreSQL | 16 | **Banco relacional principal.** Banco de dados relacional open-source mais avançado do mundo, conhecido por sua robustez, extensibilidade e conformidade com o padrão SQL. |
| **Infraestrutura** | Vercel | N/A | Plataforma otimizada para hospedar aplicações Next.js, com deploy contínuo, CDN global e escalabilidade automática. |
| | Railway / Render | N/A | Plataformas de "Platform as a Service" (PaaS) que simplificam o deploy e a gestão de aplicações backend e bancos de dados. |
| | Neon | N/A | Plataforma de PostgreSQL serverless que separa o armazenamento da computação, oferecendo escalabilidade, branching e custos otimizados. |
| | Cloudflare R2 | N/A | Armazenamento de objetos compatível com a API do S3, mas sem custos de tráfego de saída, ideal para armazenar documentos e fotos. |
| **Autenticação** | NextAuth.js | 5.x | Solução completa de autenticação para Next.js, com suporte a OAuth, email/senha, JWT e muito mais. |
| **Pagamentos** | Stripe / Mercado Pago | N/A | Gateways de pagamento líderes de mercado, com APIs robustas e seguras para processamento de transações. |
| **Testes** | Jest / Vitest | Última | Frameworks de teste para testes unitários e de integração no backend e frontend. |
| | Cypress / Playwright | Última | Ferramentas para testes end-to-end (E2E) que simulam a interação real do usuário no navegador. |

### 4.4. Robustez de Integrações Externas

Nenhuma integração externa pode ser tratada como confiável. Todas devem ter tratamento explícito de erro, timeout, retry e registro de falha.

**Diretrizes obrigatórias para integrações:**

-   **Idempotência:** Pagamentos devem ser idempotentes. Nenhuma cobrança pode ser duplicada por erro de rede ou reprocessamento.
-   **Retry com Backoff:** Implementar retry com backoff exponencial para APIs de terceiros (FIPE, gateways de pagamento, SMS, e-mail).
-   **Timeouts:** Definir timeouts adequados para todas as requisições externas (máximo de 30 segundos).
-   **Circuit Breaker:** Implementar o padrão Circuit Breaker para evitar sobrecarga de sistemas externos em caso de falha.
-   **Eventos Internos:** Integrações devem gerar eventos internos. O sistema não pode depender de resposta síncrona para manter consistência básica.

---

## 5. PADRÕES DE CÓDIGO E ORGANIZAÇÃO

### 5.1. Estrutura de Pastas por Domínio

A estrutura do repositório deve refletir os domínios do negócio, não componentes genéricos ou camadas técnicas isoladas. Cada domínio deve conter suas próprias rotas, schemas, serviços, regras de negócio e testes.

**Estrutura de pastas obrigatória:**

```
/src
  /domains
    /auth
      /schemas
      /services
      /routes
      /tests
    /customers
      /schemas
      /services
      /routes
      /tests
    /fleet
      /schemas
      /services
      /routes
      /tests
    /contracts
      /schemas
      /services
      /routes
      /tests
    /financial
      /schemas
      /services
      /routes
      /tests
    /notifications
      /schemas
      /services
      /routes
      /tests
  /shared
    /components
    /hooks
    /utils
    /types
```

### 5.2. Separação de Responsabilidades

**Não é permitido lógica de negócio em componentes de interface.** Componentes React devem ser responsáveis apenas por renderização, estado de UI e interação com hooks. Regras de negócio vivem no backend ou em camadas compartilhadas claramente definidas.

**Exemplo correto:**

```typescript
// ❌ ERRADO: Lógica de negócio no componente
function VehicleCard({ vehicle }) {
  const calculatePrice = () => {
    // Lógica complexa de cálculo de preço
    return vehicle.basePrice * (1 + vehicle.taxRate);
  };
  
  return <div>{calculatePrice()}</div>;
}

// ✅ CORRETO: Lógica no backend, componente apenas renderiza
function VehicleCard({ vehicle }) {
  return <div>{vehicle.finalPrice}</div>;
}
```

### 5.3. Validação com Zod (Fonte Única de Verdade)

Schemas de validação devem ser únicos e reutilizados. **Zod será usado como fonte única de verdade para validação e tipagem sempre que possível.** Não é permitido duplicar regras de validação entre frontend e backend.

**Exemplo:**

```typescript
// /domains/customers/schemas/customer.schema.ts
import { z } from 'zod';

export const customerSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10,11}$/),
  cpf: z.string().regex(/^\d{11}$/),
});

export type Customer = z.infer<typeof customerSchema>;
```

Este schema será usado tanto no frontend (validação de formulário) quanto no backend (validação de API).

### 5.4. Nomenclatura Orientada ao Negócio

Nomes de arquivos, funções e variáveis devem refletir o domínio do negócio e não detalhes técnicos. Código deve ser legível para alguém que conhece o negócio, não apenas a tecnologia.

**Exemplos:**

-   ❌ `processData()` → ✅ `calculateVehicleRentability()`
-   ❌ `updateStatus()` → ✅ `activateContract()`
-   ❌ `fetchItems()` → ✅ `getAvailableVehicles()`

---

## 6. DESIGN E EXPERIÊNCIA DO USUÁRIO (100% ALINHAMENTO)

O design da interface e a experiência do usuário foram elevados para **100% de alinhamento com as melhores práticas globais**, incorporando 5 melhorias críticas que posicionam o site da POTERE LOCADORA no mesmo nível das maiores locadoras do mundo.

### 6.1. Princípios de UX como Regra Técnica

Toda decisão técnica que impacta o fluxo do motorista deve priorizar **simplicidade, rapidez e tolerância a erro**. O sistema deve assumir uso em celular, com pressa e distrações.

**Diretrizes obrigatórias:**

-   **Coleta Mínima de Dados no Onboarding:** Não é permitido exigir preenchimento excessivo de dados no onboarding. Coleta mínima viável primeiro. Complementação depois.
-   **Tolerância a Falhas:** Uploads de documentos e fotos devem ser tolerantes a falhas de conexão. Estados intermediários devem existir. Nunca perder dados do usuário por falha momentânea.
-   **Mobile-First:** Toda interface deve ser projetada primeiro para mobile, depois adaptada para desktop.

### 6.2. As 5 Melhorias para 100% de Alinhamento

| Categoria | Melhoria | Impacto | Justificativa |
| :--- | :--- | :--- | :--- |
| **CRO (Conversão)** | **1. Comparação de Veículos** | +3% | Ajuda na tomada de decisão, aumenta a confiança e reduz o tempo de escolha. |
| **UX (Experiência)** | **2. Busca por Mapa Interativo** | +3% | Oferece uma experiência mais visual e intuitiva, especialmente para usuários que não sabem o endereço exato. |
| **Confiança** | **3. Selos de Segurança e Parcerias** | +2% | Aumenta a percepção de segurança e credibilidade da marca. |
| **Personalização** | **4. Ofertas Baseadas em Localização** | +2% | Aumenta a relevância das ofertas e a taxa de conversão. |
| **Mobile-First** | **5. Login Social e Biométrico** | +2% | Reduz o atrito no login, aumenta a segurança e melhora a experiência do usuário. |

### 6.3. Mockups Finais (100% Alinhamento)

Os mockups finais implementam todas as 5 melhorias, resultando em uma interface moderna, intuitiva e otimizada para conversão.

- **Mockup da Homepage:** `design/mockup_homepage_100_porcento.png`
- **Mockup do Fluxo de Reserva:** `design/mockup_booking_final.png`
- **Mockup dos Detalhes do Veículo:** `design/mockup_vehicle_details_final.png`

---

## 7. DOMÍNIOS OBRIGATÓRIOS DO SISTEMA

O sistema é composto por 6 domínios principais, cada um com responsabilidades claramente definidas e isoladas.

| Domínio | Responsabilidades | O que NÃO faz |
| :--- | :--- | :--- |
| **Autenticação** | Login, sessões, permissões, auditoria de acesso. | Nenhum outro domínio implementa lógica própria de autenticação. |
| **Clientes** | Cadastro, documentos, status, histórico e relacionamento. | Não contém lógica financeira nem de frota. |
| **Frota** | Veículos, status, inspeções, quilometragem, documentos e manutenções. | Não conhece contratos nem pagamentos. |
| **Contratos** | Vínculo entre cliente e veículo, datas, regras, renovações e encerramentos. | É o ponto de ligação entre cliente, frota e financeiro, mas não executa lógica financeira profunda. |
| **Financeiro** | Faturamento, cobranças, inadimplência, pagamentos e conciliações. | Não decide regras de negócio fora do aspecto financeiro. |
| **Notificações** | Recebe eventos e decide como comunicar (e-mail, SMS, push). | Não conhece o motivo do evento em profundidade. |

---

## 8. FUNCIONALIDADES DETALHADAS

### 8.1. Portal do Cliente

-   **Busca e Reserva:**
    -   Busca por localização, data e hora.
    -   Filtros avançados (tipo de veículo, faixa de preço, transmissão, etc.).
    -   Mapa interativo com veículos disponíveis.
    -   Comparação de até 4 veículos lado a lado.
-   **Checkout:**
    -   Processo em 3 etapas: Dados do Cliente -> Pagamento -> Confirmação.
    -   Upload de documentos (CNH, comprovante de residência).
    -   Pagamento com cartão de crédito (Stripe) ou Pix (Mercado Pago).
    -   Geração e assinatura digital do contrato.
-   **Painel do Cliente:**
    -   Dashboard com resumo de reservas e notificações.
    -   Lista de reservas (ativas, futuras, passadas).
    -   Gestão do veículo atual (registro de KM, inspeção visual).
    -   Histórico de pagamentos e faturas.
    -   Central de notificações.

### 8.2. Backoffice Administrativo

-   **Dashboard Principal:**
    -   KPIs em tempo real: taxa de ocupação, faturamento, novos clientes, etc.
    -   Gráficos de performance (receita, ocupação, etc.).
    -   Alertas e tarefas pendentes.
-   **CRM:**
    -   Lista de clientes com busca e filtros.
    -   Página de detalhes do cliente com histórico completo.
    -   Sistema de análise e aprovação de crédito.
    -   Gestão de documentos dos clientes.
-   **Gestão de Frota:**
    -   Lista de veículos com status (disponível, alugado, em manutenção).
    -   Cadastro de novos veículos com todas as especificações.
    -   Agendamento e histórico de manutenções.
    -   Gestão de documentos dos veículos (CRLV, seguro, IPVA).
-   **Gestão Financeira:**
    -   Dashboard financeiro com ROI, TCO e depreciação.
    -   Gestão de faturas e pagamentos.
    -   Controle de contas a pagar e a receber.
    -   Relatórios financeiros completos.

---

## 9. MODELO DE DADOS

O banco de dados PostgreSQL será estruturado com 21 tabelas principais para cobrir todas as necessidades do sistema.

**Tabelas Principais:**
- `users`, `customers`, `vehicles`, `contracts`, `payments`, `invoices`
- `mileage_history`, `vehicle_inspections`, `inspection_photos`, `vehicle_documents`
- `fines`, `claims`, `maintenance_records`, `notifications`
- `fipe_history`, `depreciation_history`, `financings`, `consortiums`
- `roles`, `permissions`, `user_roles`

*O schema detalhado com todos os campos e relacionamentos está documentado no arquivo `arquitetura/ARQUITETURA_DETALHADA.md` e será implementado no `schema.prisma` do projeto.*

---

## 10. SISTEMA DE PERMISSÕES E CONTROLE DE ACESSO

O sistema utilizará um modelo de Role-Based Access Control (RBAC) com 8 perfis de usuário pré-definidos.

| Perfil | Descrição | Acesso Principal |
| :--- | :--- | :--- |
| **Super Admin** | Acesso total ao sistema, incluindo configurações críticas. | Tudo |
| **Admin** | Gestão operacional completa (exceto configurações críticas). | Quase tudo |
| **Gerente Comercial** | Foco em vendas, contratos e clientes. | Módulos de CRM e Contratos |
| **Gerente Financeiro** | Foco em finanças, pagamentos e rentabilidade. | Módulo Financeiro e Relatórios |
| **Gerente de Frota** | Foco em veículos, manutenção e inspeções. | Módulo de Frota e Controle de Veículos |
| **Atendente** | Suporte ao cliente e operações básicas. | Acesso limitado a CRM e Reservas |
| **Motorista (Cliente)** | Acesso ao portal do cliente. | Apenas seus próprios dados |
| **Auditor (Somente Leitura)** | Visualização de dados para auditoria. | Acesso de leitura a todos os módulos |

---

## 11. MÓDULO DE CONTROLE DE VEÍCULOS

Este módulo é crítico para a operação e segurança da frota.

-   **Registro Semanal de Quilometragem:**
    -   O cliente será notificado toda segunda-feira para registrar a quilometragem atual do veículo.
    -   O sistema calculará a média de KM rodado e alertará sobre desvios.
-   **Inspeção Visual com 5 Fotos:**
    -   No início de cada locação, o cliente deverá fazer o upload de 5 fotos obrigatórias do veículo:
        1.  **Frontal**
        2.  **Traseira**
        3.  **Lateral Esquerda**
        4.  **Lateral Direita**
        5.  **Painel (com quilometragem visível)**
    -   As fotos serão armazenadas com data e hora para servirem como prova em caso de avarias.
-   **Gestão de Documentos:**
    -   O sistema armazenará cópias digitais do CRLV, apólice de seguro e comprovante de pagamento de IPVA de cada veículo.
    -   Alertas automáticos serão enviados ao gestor de frota antes do vencimento de cada documento.

---

## 12. MÓDULO DE GESTÃO FINANCEIRA E RENTABILIDADE

Este módulo transforma o sistema em uma ferramenta de gestão estratégica.

-   **Integração com a Tabela FIPE:**
    -   Uma rotina automática (CRON job) consultará a API da FIPE no primeiro dia de cada mês.
    -   O valor de mercado de cada veículo da frota será atualizado e armazenado na tabela `fipe_history`.
-   **Cálculo de Depreciação e Rentabilidade:**
    -   **Depreciação:** O sistema usará o método de depreciação linear, padrão contábil.
    -   **Rentabilidade (ROI por Veículo):** O sistema calculará o ROI de cada veículo em tempo real: `ROI = (Receita Total Gerada - Custo Total de Propriedade) / Custo de Aquisição`.
    -   **Dashboard de Rentabilidade:** Ranking dos veículos mais e menos rentáveis, comparativo FIPE vs. Valor Contábil e Payback Period.

---

## 13. SISTEMA DE NOTIFICAÇÕES E AUTOMAÇÕES

### 13.1. Canais de Notificação

-   **E-mail Transacional (SendGrid):** Para comunicações formais (contratos, faturas, redefinição de senha).
-   **SMS (Twilio):** Para alertas urgentes (cobrança, agendamento de manutenção, documento pendente).
-   **Notificações no Portal:** Alertas e mensagens dentro da própria plataforma.

### 13.2. Automações (CRON Jobs)

| Job | Frequência | Ação Detalhada |
| :--- | :--- | :--- |
| **Gerar Faturas** | Diária | Verifica contratos que iniciarão um novo ciclo no dia seguinte e gera a fatura correspondente. |
| **Enviar Lembretes de Vencimento** | Diária | Envia e-mail/SMS para clientes cujas faturas vencem em 3 dias. |
| **Processar Inadimplência** | Diária | Verifica faturas vencidas há mais de 5 dias e inicia o processo de cobrança (suspensão do contrato, etc.). |
| **Atualizar Tabela FIPE** | Mensal (dia 1º) | Executa a rotina de atualização dos valores de mercado dos veículos. |
| **Calcular Depreciação** | Mensal (dia 1º) | Calcula e registra a depreciação mensal de cada veículo da frota. |
| **Lembrete de Registro de KM** | Semanal (Segunda-feira) | Envia notificação para os clientes registrarem a quilometragem da semana. |
| **Lembrete de Manutenção** | Diária | Verifica veículos cuja próxima manutenção preventiva está próxima (baseado em KM ou data) e alerta o gestor de frota. |

---

## 14. SEGURANÇA, AUDITORIA E CONFORMIDADE

### 14.1. Autenticação e Autorização

| Categoria | Implementação Detalhada |
| :--- | :--- |
| **Autenticação** | - **NextAuth.js:** Para login seguro com OAuth (Google, Facebook) e email/senha.<br>- **Autenticação de Dois Fatores (2FA):** **Obrigatório para usuários administrativos** (via app de autenticação como Google Authenticator).<br>- **JWT (JSON Web Tokens):** Tokens de curta duração (15 min) para acesso à API, com refresh tokens de longa duração (7 dias) armazenados de forma segura (HttpOnly cookie). |
| **Autorização** | - **RBAC (Role-Based Access Control):** Implementado no backend com um middleware que verifica as permissões do usuário a cada requisição na API. **Controle de acesso por perfil deve ser rigoroso e explícito.** |

### 14.2. Segurança de Dados

-   **Criptografia em Trânsito:** TLS 1.2 ou superior em toda a comunicação.
-   **Criptografia em Repouso:** **Dados sensíveis devem ser criptografados em repouso.** Não é permitido armazenar documentos ou informações pessoais (CNH, CPF) sem proteção adequada. Usar AES-256 para criptografia a nível de aplicação.
-   **Armazenamento de Arquivos:** URLs de acesso aos arquivos no Cloudflare R2 serão pré-assinadas e com tempo de expiração curto (máximo de 1 hora).

### 14.3. Logs de Auditoria Obrigatórios

**Toda ação administrativa relevante deve gerar log de auditoria.** Quem acessou, quando, o que visualizou ou alterou.

**Eventos que devem ser auditados:**

-   Login e logout de usuários administrativos
-   Criação, edição e exclusão de clientes
-   Criação, edição e exclusão de veículos
-   Criação, edição e exclusão de contratos
-   Aprovação e rejeição de crédito
-   Alterações em configurações críticas do sistema
-   Acesso a dados sensíveis (visualização de documentos de clientes)

**Estrutura do log de auditoria:**

```json
{
  "timestamp": "2025-12-16T15:30:00Z",
  "user_id": "user_123",
  "user_email": "admin@potere.com",
  "action": "UPDATE_CUSTOMER",
  "resource_type": "customer",
  "resource_id": "customer_456",
  "changes": {
    "status": { "from": "pending", "to": "approved" }
  },
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0..."
}
```

**O sistema deve ser auditável. Logs não são opcionais nem temporários.** Logs de auditoria devem ser retidos por no mínimo 5 anos.

### 14.4. Conformidade com LGPD

-   **Portal de Privacidade:** O cliente poderá visualizar, exportar e solicitar a exclusão de seus dados.
-   **Gestão de Consentimento:** O cliente poderá gerenciar seus consentimentos (marketing, etc.) de forma granular.
-   **Anonimização de Dados:** Processos para anonimizar dados em ambientes de teste e para relatórios agregados.

### 14.5. Prevenção de Ataques

-   **OWASP Top 10:** O desenvolvimento seguirá as melhores práticas para prevenir os 10 ataques mais comuns (SQL Injection, XSS, CSRF).
-   **Validação de Input:** Validação rigorosa de todos os dados de entrada no backend usando Zod.
-   **Rate Limiting:** Limitação do número de requisições por IP para prevenir ataques de força bruta e DoS.

---

## 15. PADRÕES DE QUALIDADE E TESTES

### 15.1. Cobertura de Testes Obrigatória

**Código sem teste não é considerado concluído para regras de negócio críticas.** Testes unitários e de integração devem existir desde o início.

**Metas de cobertura:**

-   **Regras de Negócio Críticas:** 100% de cobertura (cálculo de preços, faturamento, depreciação, ROI)
-   **Serviços e Rotas de API:** Mínimo de 80% de cobertura
-   **Componentes de UI:** Mínimo de 60% de cobertura

**Tipos de testes obrigatórios:**

-   **Testes Unitários:** Para funções puras e lógica de negócio isolada (Jest/Vitest)
-   **Testes de Integração:** Para rotas de API e interações com o banco de dados (Jest + Prisma)
-   **Testes End-to-End (E2E):** Para fluxos críticos do usuário (Cypress/Playwright)
    -   Fluxo completo de reserva
    -   Fluxo de pagamento
    -   Fluxo de registro de quilometragem
    -   Fluxo de inspeção visual

### 15.2. Política de Pull Requests

**Não é permitido merge de código grande sem revisão.** Pull requests devem ser pequenos, legíveis e focados.

**Regras obrigatórias:**

-   PRs devem ter no máximo 400 linhas de código
-   PRs devem ser revisados por pelo menos 1 desenvolvedor sênior
-   PRs devem passar em todos os testes automatizados
-   PRs devem ter descrição clara do que foi implementado e por quê
-   PRs com alterações em regras de negócio críticas devem ser revisados pelo Tech Lead

### 15.3. Observabilidade Obrigatória

**Observabilidade é obrigatória desde o primeiro deploy.** Logs estruturados, monitoramento de erros e métricas básicas devem estar ativos.

**Ferramentas obrigatórias:**

-   **Sentry:** Rastreamento de erros em tempo real (frontend e backend)
-   **DataDog / New Relic:** Monitoramento de performance (APM), métricas de API e banco de dados
-   **Logs Estruturados:** Usar Winston ou Pino para logs estruturados em JSON

**Métricas obrigatórias:**

-   Tempo de resposta da API (p50, p95, p99)
-   Taxa de erro da API
-   Tempo de resposta do banco de dados
-   Taxa de conversão (funil de reserva)
-   Taxa de abandono de carrinho

---

## 16. CRONOGRAMA DE DESENVOLVIMENTO REVISADO (12 SPRINTS)

O desenvolvimento do Sistema de Gestão Integrado da POTERE LOCADORA será executado em **12 sprints de 2 semanas cada**, totalizando **24 semanas (6 meses)** de desenvolvimento. O cronograma foi **revisado para focar no MVP técnico inquestionável**, adiando funcionalidades de BI e dashboards complexos para a fase pós-lançamento.

### MVP Técnico Inquestionável

O MVP técnico inclui obrigatoriamente:
1. **Fluxo completo de locação funcional**
2. **Controle operacional de frota confiável**
3. **Faturamento básico correto**

Qualquer funcionalidade fora disso só entra após estabilização em produção.

### FASE 1: FUNDAÇÃO E INFRAESTRUTURA (Sprints 1-2, Semanas 1-4)

**Sprint 1 - Setup Inicial e Arquitetura Base:**
- Repositório Git configurado com monorepo orientado a domínios
- Ambientes provisionados (dev, staging, production)
- CI/CD pipeline com GitHub Actions
- Banco de dados PostgreSQL/Neon inicial
- Arquitetura base Next.js + TRPC + Prisma + Zod

**Sprint 2 - Design System e Autenticação:**
- Design system completo com Shadcn UI
- Sistema de autenticação (OAuth + email/senha)
- 2FA (autenticação de dois fatores) obrigatório para admins
- Sistema de permissões (RBAC) com 8 perfis
- Logs de auditoria implementados
- Páginas de login, registro e recuperação de senha

---

### FASE 2: PORTAL DO CLIENTE (Sprints 3-6, Semanas 5-12)

**Sprint 3 - Homepage e Busca de Veículos:**
- Homepage com 100% de alinhamento às melhores práticas
- Sistema de busca com filtros avançados
- Mapa interativo com pins de veículos disponíveis
- Sistema de comparação de veículos
- Integração FIPE inicial

**Sprint 4 - Detalhes do Veículo e Início da Reserva:**
- Página de detalhes do veículo completa
- Sistema de reviews e avaliações
- Etapa 1 da reserva (seleção de datas e extras)
- Cálculo de preço dinâmico
- Sistema de promoções e cupons

**Sprint 5 - Checkout e Pagamento:**
- Etapa 2 da reserva (dados do cliente com coleta mínima)
- Etapa 3 da reserva (pagamento idempotente)
- Integração Stripe e Mercado Pago com retry e circuit breaker
- Geração automática de contratos em PDF
- Sistema completo de reservas
- Upload tolerante a falhas

**Sprint 6 - Painel do Cliente:**
- Dashboard do cliente
- Minhas reservas (ativas, futuras, passadas)
- Inspeção visual com 5 fotos obrigatórias (upload tolerante a falhas)
- Registro de quilometragem semanal
- Sistema de notificações e lembretes

---

### FASE 3: BACKOFFICE ADMINISTRATIVO (Sprints 7-10, Semanas 13-20)

**Sprint 7 - Dashboard Administrativo e CRM:**
- Dashboard admin com KPIs básicos (não complexo)
- Módulo CRM completo
- Sistema de análise de crédito
- Gestão de documentos dos clientes
- Logs de auditoria para todas as ações

**Sprint 8 - Gestão de Frota e Veículos:**
- CRUD completo de veículos
- Controle de manutenções
- Gestão de documentos dos veículos (CRLV, seguro, IPVA)
- Histórico completo com timeline
- Alertas automáticos de vencimento

**Sprint 9 - Gestão Financeira Básica:**
- Dashboard financeiro básico (faturamento, cobranças)
- Cálculo de ROI por veículo
- Cálculo de TCO (Total Cost of Ownership)
- Integração FIPE completa com atualização mensal automática
- Curva de depreciação
- Gestão de faturas e pagamentos

**Sprint 10 - Multas, Sinistros e Contratos:**
- Módulo de gestão de multas
- Módulo de gestão de sinistros
- Gestão de contratos com assinatura digital
- Sistema de renovação automática de contratos
- Notificações automáticas

---

### FASE 4: TESTES E LANÇAMENTO (Sprints 11-12, Semanas 21-24)

**Sprint 11 - Testes de Integração e Segurança:**
- Testes de integração end-to-end (Cypress/Playwright)
- Testes de fluxos críticos (reserva, pagamento, inspeção)
- Testes de segurança (pentest)
- Auditoria de conformidade LGPD
- Correções de bugs críticos
- Cobertura de testes > 80% para regras de negócio

**Sprint 12 - Testes Finais, Lançamento e Treinamento:**
- Testes de performance e carga
- Otimizações finais
- Documentação completa (técnica e de usuário)
- Treinamento da equipe POTERE
- Deploy em produção
- Monitoramento ativo (Sentry + DataDog)
- Lançamento oficial

---

### FASE 5: PÓS-LANÇAMENTO (Após Estabilização)

**Funcionalidades que entram APÓS o MVP estável:**

-   **Relatórios e BI Avançados:** 15+ relatórios operacionais e financeiros, 5 dashboards de BI interativos
-   **Análises Sofisticadas:** Previsão de demanda, análise de churn, segmentação avançada de clientes
-   **Integrações Avançadas:** Telemática, IoT, APIs de terceiros não críticas
-   **Otimizações de UX:** A/B testing, personalização avançada, recomendações de veículos

**Critério para entrada de novas funcionalidades:**

-   MVP estável em produção por pelo menos 2 meses
-   Uso real e dados confiáveis
-   Justificativa operacional clara (redução de risco, ganho de eficiência comprovado ou melhoria direta na experiência do usuário)

---

## 17. ESTIMATIVAS DE RECURSOS

### 17.1. Equipe de Desenvolvimento (Estimada)

| Papel | Quantidade | Responsabilidade Detalhada |
| :--- | :--- | :--- |
| **Gerente de Projeto / Scrum Master** | 1 | Liderança, planejamento, comunicação com stakeholders, gestão do cronograma e orçamento, remoção de impedimentos. |
| **Arquiteto de Soluções / Tech Lead** | 1 | Definição e manutenção da arquitetura técnica, garantia de qualidade de código, revisão de pull requests, mentoria da equipe técnica. **Responsável por garantir conformidade com as diretrizes técnicas obrigatórias.** |
| **Designer de UX/UI** | 1-2 | Pesquisa com usuários, criação de fluxos de navegação, wireframes, mockups de alta fidelidade, protótipos interativos e o Design System. |
| **Desenvolvedor Backend** | 2-3 | Desenvolvimento da API TRPC, modelagem e migrações do banco de dados, implementação da lógica de negócio, automações e integrações com serviços de terceiros. |
| **Desenvolvedor Frontend** | 2-3 | Desenvolvimento das interfaces do portal do cliente e do backoffice administrativo em Next.js, consumindo a API do backend e implementando o Design System. |
| **Engenheiro de QA** | 1 | Criação do plano de testes, execução de testes manuais e automatizados (usando Cypress ou Playwright), testes de regressão e reporte de bugs. **Responsável por garantir cobertura de testes > 80%.** |
| **Engenheiro de DevOps** | 1 (part-time) | Configuração da infraestrutura como código, criação dos pipelines de CI/CD (GitHub Actions), configuração do monitoramento e alertas (Sentry, DataDog). |

**Total:** 8-12 profissionais

### 17.2. Custos de Infraestrutura e Serviços (Estimativa Mensal)

| Serviço | Fornecedor | Custo Estimado (Mensal) | Justificativa |
| :--- | :--- | :--- | :--- |
| **Hospedagem Frontend** | Vercel | $20 - $100 | O plano Pro da Vercel é ideal para produção, oferecendo deploy contínuo, CDN global e escalabilidade. |
| **Hospedagem Backend** | Railway / Render | $50 - $200 | Ambas as plataformas oferecem um bom equilíbrio entre facilidade de uso e poder, com auto-scaling e integração com bancos de dados. |
| **Banco de Dados** | Neon (PostgreSQL) | $20 - $150 | O plano "Launch" da Neon é um bom ponto de partida, permitindo escalar a computação e o armazenamento conforme a necessidade. |
| **Armazenamento de Arquivos** | Cloudflare R2 | $0.015 por GB | Custo de armazenamento competitivo e, crucialmente, sem custos de tráfego de saída, o que representa uma economia enorme em comparação com o S3. |
| **Envio de E-mail** | SendGrid | $15 - $50 | O plano "Essentials" permite o envio de um volume considerável de e-mails transacionais com boa reputação. |
| **Envio de SMS** | Twilio | $1 por número + uso | O custo é baseado no volume de SMS enviados, mas é a plataforma mais confiável para alertas críticos. |
| **API FIPE** | Fipe Online | $10 - $30 | Planos acessíveis para o volume de consultas mensais que o sistema precisará fazer. |
| **Monitoramento** | Sentry + DataDog | $50 - $200 | Combinação de planos básicos de ambas as ferramentas para ter rastreamento de erros e monitoramento de performance. **Obrigatório desde o primeiro deploy.** |

**Custo Total Mensal Estimado (Infraestrutura):** **$165 - $730** (A variação depende do uso e do crescimento da plataforma).

---

## 18. RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Plano de Mitigação |
| :--- | :--- | :--- | :--- |
| **Atraso no Cronograma** | Média | Alto | - **Metodologia Ágil:** Sprints curtos permitem a identificação rápida de desvios.<br>- **Monitoramento Contínuo:** O Gerente de Projeto acompanhará o progresso diariamente.<br>- **Priorização (MoSCoW):** Focar nas funcionalidades "Must-have" do MVP para garantir que seja entregue no prazo. |
| **Aumento de Escopo (Scope Creep)** | Alta | Alto | - **Controle de Mudanças:** Qualquer nova solicitação deve passar por um processo formal de análise de impacto (custo, prazo) e aprovação.<br>- **MVP Inquestionável:** O escopo do MVP é fixo e imutável. Novas funcionalidades só entram após estabilização. |
| **Problemas de Integração com APIs** | Média | Médio | - **Prova de Conceito (PoC):** Realizar uma PoC no início do projeto para validar a integração com as APIs mais críticas (FIPE, gateways de pagamento).<br>- **Robustez Obrigatória:** Implementar retry, timeout e circuit breaker desde o início. |
| **Indisponibilidade de Membros da Equipe** | Baixa | Alto | - **Documentação Contínua:** Manter a documentação do projeto e do código sempre atualizada para facilitar a entrada de novos membros.<br>- **Pair Programming:** Incentivar a programação em pares para compartilhar conhecimento e evitar que uma única pessoa seja o ponto de falha. |
| **Performance Abaixo do Esperado** | Média | Alto | - **Testes de Carga:** Realizar testes de carga e estresse antes do lançamento para identificar gargalos.<br>- **Monitoramento (APM):** Utilizar o DataDog desde o início para monitorar a performance da API e do banco de dados em tempo real. |
| **Não Conformidade com Diretrizes Técnicas** | Baixa | Crítico | - **Tech Lead como Guardião:** O Tech Lead é responsável por garantir que todas as diretrizes técnicas obrigatórias sejam seguidas.<br>- **Code Reviews Rigorosos:** Todos os PRs devem ser revisados quanto à conformidade com os padrões estabelecidos. |

---

## 19. CRITÉRIOS DE EVOLUÇÃO PÓS-LANÇAMENTO

Este documento estabelece critérios rigorosos para a evolução do sistema após o lançamento do MVP.

### 19.1. Princípio Fundamental

**Funcionalidades novas só entram quando o MVP estiver estável em produção, com uso real e dados confiáveis.**

### 19.2. Critérios de Estabilidade

O MVP será considerado estável quando atender aos seguintes critérios por **pelo menos 2 meses consecutivos**:

-   **Disponibilidade:** > 99.5% (uptime)
-   **Taxa de Erro da API:** < 0.5%
-   **Tempo de Resposta (p95):** < 500ms
-   **Taxa de Conversão:** Estável ou crescente
-   **NPS:** > 50
-   **Bugs Críticos:** Zero bugs críticos em aberto

### 19.3. Critérios para Novas Funcionalidades

Toda mudança relevante deve responder a **pelo menos um motivo claro**:

1.  **Redução de Risco Operacional:** A funcionalidade reduz um risco identificado no uso real do sistema.
2.  **Ganho de Eficiência Comprovado:** A funcionalidade demonstra, com dados, que aumentará a eficiência operacional.
3.  **Melhoria Direta na Experiência do Usuário:** A funcionalidade resolve uma dor real identificada através de feedback de usuários.

**Mudança sem justificativa operacional não é prioridade.**

### 19.4. Processo de Aprovação de Novas Funcionalidades

1.  **Proposta:** Qualquer stakeholder pode propor uma nova funcionalidade.
2.  **Análise de Impacto:** O Tech Lead e o Gerente de Projeto avaliam o impacto técnico, o custo e o prazo.
3.  **Justificativa Operacional:** A proposta deve incluir dados que comprovem a necessidade (feedback de usuários, métricas, análise de risco).
4.  **Aprovação:** A funcionalidade só é aprovada se atender aos critérios de estabilidade e tiver justificativa operacional clara.
5.  **Priorização:** A funcionalidade entra no backlog e é priorizada de acordo com o valor de negócio.

---

## 20. CONCLUSÃO

Este Plano de Ação v12.0 representa o guia definitivo para a concepção, desenvolvimento e lançamento do Sistema de Gestão Integrado da POTERE LOCADORA. Ele consolida todas as análises, decisões e planejamentos realizados, e incorpora as **diretrizes técnicas obrigatórias** que garantem previsibilidade, qualidade e coerência ao longo de todo o desenvolvimento.

A implementação bem-sucedida deste plano transformará a POTERE LOCADORA em uma líder digital em seu segmento, equipada com uma plataforma escalável, eficiente e centrada no cliente. O foco na automação, na análise de dados e em uma experiência de usuário de classe mundial garantirá uma vantagem competitiva duradoura e um retorno significativo sobre o investimento.

### Diferenciais do Plano de Ação v12.0

1.  **Arquitetura Orientada a Domínios:** Modularização lógica que permite evolução sem refatorações disruptivas.
2.  **Stack Tecnológico Imutável:** Next.js, TRPC, Prisma, Zod e PostgreSQL garantem type-safety de ponta-a-ponta.
3.  **MVP Técnico Inquestionável:** Foco no fluxo de locação, controle de frota e faturamento. BI e dashboards complexos entram após estabilização.
4.  **Padrões de Código Rigorosos:** Estrutura de pastas por domínio, Zod como fonte única de verdade, nomenclatura orientada ao negócio.
5.  **Segurança e Auditoria Obrigatórias:** 2FA para admins, logs de auditoria para todas as ações críticas, criptografia de dados sensíveis.
6.  **Qualidade e Testes Obrigatórios:** Cobertura de testes > 80%, PRs pequenos e revisados, observabilidade desde o primeiro deploy.
7.  **Robustez de Integrações:** Idempotência, retry, timeout e circuit breaker para todas as integrações externas.
8.  **Critérios de Evolução Claros:** Novas funcionalidades só entram após MVP estável e com justificativa operacional comprovada.

### Próximos Passos

A equipe do projeto tem em mãos um roteiro claro, preciso e rigoroso. O próximo passo é iniciar a execução, mantendo a disciplina, a comunicação e o foco na entrega de valor em cada sprint.

**Este documento existe para proteger o time de decisões impulsivas, retrabalho e debates repetitivos. Ele não impede evolução, ele organiza.**

**Seguir este guia não é opcional. É o que garante que o sistema da Potere seja sólido, escalável e confiável, não apenas tecnicamente correto.**

O sucesso deste projeto não é apenas um objetivo técnico, mas um imperativo estratégico para o futuro da POTERE LOCADORA.

---

**Desenvolvido por:** Manus AI
**Data:** 16 de Dezembro de 2025
**Versão:** 12.1 - FINAL, CONSOLIDADO E REVISADO
