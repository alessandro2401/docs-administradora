# Sistema de Gestão de Veículos Salvados

## 1. Visão Geral

O **Sistema de Gestão de Veículos Salvados** (`salvados.administradoramutual.com.br`) é uma aplicação web desenvolvida para centralizar e otimizar a gestão de veículos indenizados da Administradora Mutual, substituindo o fluxo manual via Google Sheets.

### 1.1 Objetivos

- **Centralizar** a gestão de veículos salvados
- **Automatizar** a importação de dados de leilão
- **Padronizar** o processo de aprovação de vendas
- **Melhorar** a visibilidade e análise de dados
- **Reduzir** o tempo gasto em tarefas manuais

### 1.2 Status Atual

- **Frontend:** Deployado na Vercel (interface visual)
- **Backend:** Pendente de configuração e deploy
- **Repositório:** https://github.com/alessandro2401/salvados-site

---

## 2. Arquitetura Técnica

### 2.1 Stack Tecnológica

| Componente | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework Full-stack** | **React 19 + Vite + TypeScript** | Alinhamento com o ecossistema Vercel e o site `s4`. Oferece roteamento avançado, renderização híbrida (SSR/SSG/ISR) e segurança de tipos. |
| **Estilização** | **Tailwind CSS** | Desenvolvimento rápido e consistente, utilizando classes utilitárias para garantir um design responsivo e moderno. |
| **Banco de Dados** | **PostgreSQL** (Gerenciado, ex: Neon/Supabase) | Robustez, escalabilidade e suporte nativo a JSONB (ideal para armazenar dados flexíveis de planilhas de leilão). |
| **ORM/Acesso a Dados** | **Drizzle ORM** | ORM moderno, *type-safe* e leve, que permite escrever consultas SQL de forma segura e com tipagem completa. |
| **Hospedagem/CI/CD** | **Vercel** | Integração contínua e *deploy* automatizado, aproveitando a infraestrutura já utilizada pela Administradora Mutual. |
| **Autenticação** | **Integração com `sistemas.administradoramutual.com.br`** | Utilizar o sistema de autenticação existente para garantir um *Single Sign-On* (SSO) e gestão centralizada de usuários. |

### 2.2 Estrutura de Diretórios

```
salvados-site/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── contexts/       # Contextos React
│   ├── lib/            # Utilitários e helpers
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada
├── server/             # Serviços backend (opcional)
├── db/                 # Schemas do banco de dados
└── public/             # Arquivos estáticos
```

---

## 3. Funcionalidades

### 3.1 Dashboard
- Visão geral dos veículos no pátio
- Métricas de performance
- Alertas e notificações

### 3.2 Importação de Leilão
- Upload de planilhas Excel
- Parsing automático de dados
- Validação e cálculo de valores

### 3.3 Cadastro Manual
- Formulário de cadastro de veículos
- Busca automática de valor FIPE
- Validação de campos

### 3.4 Importação Google Sheets
- Integração com Google Sheets API
- Extração de múltiplas abas
- Sincronização automática

### 3.5 Relatórios
- Análise de desvio por tipo de veículo
- Histórico de leilões
- Exportação em PDF/Excel

---

## 4. Próximos Passos

### 4.1 Tarefas Críticas

1. **Configurar Backend Completo**
   - Conectar com PostgreSQL (Neon ou Supabase)
   - Implementar APIs tRPC
   - Configurar variáveis de ambiente

2. **Corrigir Schema do Banco de Dados**
   - Criar schema correto para veículos salvados
   - Implementar migrations com Drizzle

3. **Configurar Variáveis de Ambiente**
   - FIPE_API_TOKEN
   - GOOGLE_SERVICE_ACCOUNT_KEY
   - DATABASE_URL

### 4.2 Tarefas Importantes

1. **Adicionar Tratamento de Erros**
   - Implementar ErrorBoundary global
   - Adicionar try-catch em operações críticas

2. **Implementar Testes**
   - Testes unitários com Vitest
   - Testes de integração

3. **Melhorar UX**
   - Adicionar loading states
   - Implementar skeleton screens

---

## 5. Guia de Deploy

### 5.1 Requisitos

- Conta na Vercel
- Repositório GitHub (`alessandro2401/salvados-site`)
- Banco de dados PostgreSQL (Neon ou Supabase)
- Credenciais de API (FIPE, Google Sheets)

### 5.2 Passos

1. **Conectar Repositório**
   - Na Vercel, crie um novo projeto e importe o repositório `alessandro2401/salvados-site`.

2. **Configurar Projeto**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Configurar Variáveis de Ambiente**
   - Adicione as seguintes variáveis de ambiente na Vercel:
     - `DATABASE_URL`
     - `FIPE_API_TOKEN`
     - `GOOGLE_SERVICE_ACCOUNT_KEY`

4. **Configurar Domínio**
   - Adicione o domínio `salvados.administradoramutual.com.br` nas configurações do projeto.

5. **Fazer Deploy**
   - O deploy será automático a cada push para a branch `master`.

---

## 6. Histórico de Alterações

- **30/12/2025:**
  - Criação do repositório GitHub
  - Reorganização da estrutura do projeto
  - Deploy inicial do frontend na Vercel
  - Análise completa do código
  - Criação da documentação inicial

---

## 7. Contato

- **Desenvolvedor:** Manus AI
- **Data:** 30 de Dezembro de 2025
