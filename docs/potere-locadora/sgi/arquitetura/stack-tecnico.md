# Stack Tecnológico - Potere Locadora SGI

**Versão:** 1.0  
**Data:** 17 de Dezembro de 2025  
**Autor:** Manus AI

## Visão Geral

O Sistema de Gestão Integrado (SGI) da Potere Locadora foi construído utilizando tecnologias modernas e escaláveis, seguindo as melhores práticas da indústria. A arquitetura foi projetada para suportar o crescimento do negócio e facilitar a manutenção a longo prazo.

## Arquitetura Geral

O sistema adota uma arquitetura **monolítica modular** orientada a domínios, onde cada módulo de negócio (Frota, Contratos, Financeiro, etc.) possui sua própria estrutura de código, mas compartilha a mesma base de dados e infraestrutura. Esta abordagem oferece os benefícios de um monolito (simplicidade de deploy, transações ACID) com a organização de microsserviços (separação de responsabilidades, facilidade de manutenção).

## Stack Frontend

### Framework e Bibliotecas Core

O frontend foi desenvolvido com **Next.js 14**, utilizando o novo **App Router** que oferece melhor performance e experiência de desenvolvimento. O Next.js foi escolhido por sua capacidade de renderização híbrida (SSR, SSG, CSR), otimização automática de imagens e excelente suporte a TypeScript.

**React 19** é a biblioteca de UI utilizada, trazendo melhorias significativas em performance e novas funcionalidades como Server Components e Actions. A combinação de Next.js com React permite criar interfaces rápidas e responsivas.

**TypeScript 5.9** garante type safety em todo o código frontend, reduzindo bugs em produção e melhorando a experiência de desenvolvimento com autocomplete e verificação de tipos em tempo real.

### Estilização e Componentes

**Tailwind CSS 4** é o framework de estilização adotado, permitindo criar interfaces consistentes e responsivas com classes utilitárias. A versão 4 traz melhorias significativas em performance e novas funcionalidades como o sistema de temas inline.

As variáveis de tema foram configuradas para refletir a identidade visual da Potere Locadora:

| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-potere-blue` | #022a65 | Cor principal da marca |
| `--color-potere-orange` | #fba206 | Cor de destaque |
| `--color-potere-gray` | #4a5761 | Textos secundários |
| `--color-potere-bg` | #f8f9fa | Fundo das páginas |

**Shadcn UI** fornece componentes pré-construídos e acessíveis (botões, cards, diálogos, formulários) que seguem as diretrizes de acessibilidade WCAG 2.1. Os componentes são totalmente customizáveis e integrados com Tailwind CSS.

**Lucide React** é a biblioteca de ícones utilizada, oferecendo mais de 1.000 ícones consistentes e otimizados para React.

### Tipografia

A fonte **Poppins** (Google Fonts) foi escolhida como tipografia oficial da marca, sendo carregada via CDN do Google Fonts com os seguintes pesos:

*   **Light (300):** Textos secundários e legendas
*   **Regular (400):** Corpo de texto
*   **Medium (500):** Subtítulos
*   **SemiBold (600):** Títulos de seções
*   **Bold (700):** Títulos principais
*   **Light Italic (300i):** Ênfases sutis

## Stack Backend

### API e Comunicação

**TRPC 11** é a solução adotada para comunicação entre frontend e backend, oferecendo APIs totalmente type-safe sem necessidade de geração de código ou definição manual de contratos. Com TRPC, os tipos TypeScript são compartilhados automaticamente entre cliente e servidor, eliminando erros de integração.

A arquitetura TRPC utiliza **procedures** (funções que podem ser chamadas do frontend) organizadas em **routers** por domínio de negócio. Existem dois tipos principais de procedures:

*   **publicProcedure:** Endpoints acessíveis sem autenticação
*   **protectedProcedure:** Endpoints que exigem usuário autenticado

**Superjson** é utilizado como transformador de dados, permitindo serializar e desserializar tipos complexos como `Date`, `Map`, `Set` e `BigInt` automaticamente.

### Banco de Dados e ORM

**Drizzle ORM 0.44** foi escolhido como ORM por sua leveza, type safety e excelente integração com TypeScript. Diferente de ORMs tradicionais como Prisma ou TypeORM, o Drizzle gera tipos TypeScript diretamente do schema sem necessidade de um passo de geração separado.

O banco de dados utilizado é **MySQL 8.0+** hospedado em **TiDB Cloud**, uma solução serverless compatível com MySQL que oferece escalabilidade horizontal automática e alta disponibilidade. A conexão é feita via SSL para garantir segurança.

O schema inicial inclui a tabela `users` com os seguintes campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK, Auto) | Chave primária |
| `openId` | VARCHAR(64) UNIQUE | Identificador OAuth |
| `name` | TEXT | Nome do usuário |
| `email` | VARCHAR(320) | Email do usuário |
| `loginMethod` | VARCHAR(64) | Método de login utilizado |
| `role` | ENUM('user', 'admin') | Papel do usuário (RBAC) |
| `createdAt` | TIMESTAMP | Data de criação |
| `updatedAt` | TIMESTAMP | Data de atualização |
| `lastSignedIn` | TIMESTAMP | Último login |

### Validação de Dados

**Zod 4.1** é a biblioteca de validação utilizada como **fonte única de verdade** para todos os schemas de dados. Os schemas Zod são definidos uma única vez e reutilizados em:

*   Validação de entrada de procedures TRPC
*   Validação de formulários no frontend
*   Validação de dados antes de inserir no banco
*   Geração automática de tipos TypeScript

Esta abordagem elimina duplicação de código e garante consistência entre todas as camadas da aplicação.

## Autenticação e Autorização

### Manus OAuth

O sistema utiliza **Manus OAuth** como provedor de autenticação, oferecendo login seguro sem necessidade de gerenciar senhas ou implementar fluxos OAuth manualmente. O fluxo de autenticação funciona da seguinte forma:

1. Usuário clica em "Fazer Login" e é redirecionado para o portal OAuth da Manus
2. Após autenticação bem-sucedida, o usuário é redirecionado de volta para `/api/oauth/callback`
3. O callback valida o token OAuth e cria uma sessão via cookie HTTP-only
4. Requisições subsequentes incluem o cookie de sessão automaticamente
5. O middleware TRPC valida a sessão e injeta `ctx.user` em procedures protegidas

### RBAC (Role-Based Access Control)

O sistema implementa controle de acesso baseado em papéis (RBAC) com dois níveis iniciais:

*   **user:** Usuário padrão com acesso limitado
*   **admin:** Administrador com acesso total ao sistema

O campo `role` na tabela `users` determina as permissões de cada usuário. Procedures que exigem papel de administrador utilizam `adminProcedure` ao invés de `protectedProcedure`.

## Ferramentas de Desenvolvimento

### Build e Bundling

**Vite 7.1** é o bundler utilizado para desenvolvimento e build de produção, oferecendo hot module replacement (HMR) instantâneo e builds otimizados. O Vite foi escolhido por sua velocidade superior comparado a bundlers tradicionais como Webpack.

**esbuild** é utilizado para compilar o código do servidor (Node.js) de forma extremamente rápida.

### Gerenciamento de Pacotes

**pnpm 10.4** é o gerenciador de pacotes utilizado, oferecendo instalações mais rápidas e uso eficiente de espaço em disco através de hard links. O pnpm também possui melhor isolamento de dependências comparado ao npm.

### Qualidade de Código

**Prettier 3.6** garante formatação consistente de código em todo o projeto, eliminando discussões sobre estilo de código.

**Vitest 2.1** é o framework de testes unitários utilizado, oferecendo compatibilidade total com Vite e execução extremamente rápida de testes.

## Estrutura de Pastas

```
potere-locadora-marca/
├── client/                    # Código frontend
│   ├── public/               # Assets estáticos
│   └── src/
│       ├── _core/           # Código core da plataforma
│       ├── components/      # Componentes React reutilizáveis
│       │   └── ui/         # Componentes Shadcn UI
│       ├── contexts/       # React Contexts
│       ├── hooks/          # Custom React Hooks
│       ├── lib/            # Utilitários e helpers
│       ├── pages/          # Páginas da aplicação
│       ├── App.tsx         # Componente raiz e rotas
│       ├── index.css       # Estilos globais e tema
│       └── main.tsx        # Entry point
├── server/                   # Código backend
│   ├── _core/              # Código core da plataforma
│   ├── db.ts               # Helpers de banco de dados
│   ├── routers.ts          # TRPC routers
│   └── storage.ts          # Helpers de armazenamento S3
├── drizzle/                  # Schema e migrações do banco
│   ├── schema.ts           # Definição de tabelas
│   └── migrations/         # Arquivos de migração
├── shared/                   # Código compartilhado
│   ├── const.ts            # Constantes
│   └── types.ts            # Tipos TypeScript
└── package.json             # Dependências e scripts
```

## Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `pnpm dev` | Inicia servidor de desenvolvimento |
| `build` | `pnpm build` | Build de produção |
| `start` | `pnpm start` | Inicia servidor de produção |
| `check` | `pnpm check` | Verifica tipos TypeScript |
| `format` | `pnpm format` | Formata código com Prettier |
| `test` | `pnpm test` | Executa testes unitários |
| `db:push` | `pnpm db:push` | Gera e aplica migrações do banco |

## Variáveis de Ambiente

O sistema utiliza as seguintes variáveis de ambiente (gerenciadas automaticamente pela plataforma Manus):

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL` | String de conexão MySQL/TiDB |
| `JWT_SECRET` | Segredo para assinatura de tokens JWT |
| `VITE_APP_ID` | ID da aplicação Manus |
| `OAUTH_SERVER_URL` | URL do servidor OAuth |
| `VITE_OAUTH_PORTAL_URL` | URL do portal de login |
| `OWNER_OPEN_ID` | OpenID do proprietário |
| `OWNER_NAME` | Nome do proprietário |

## Próximos Passos

Com a arquitetura base estabelecida, os próximos passos incluem:

1. **Desenvolvimento do Módulo de Gestão de Frota:** Criar tabelas, procedures e interfaces para gerenciar veículos
2. **Implementação de Testes:** Escrever testes unitários para procedures TRPC
3. **Configuração de CI/CD:** Automatizar testes e deploys
4. **Observabilidade:** Integrar Sentry e DataDog para monitoramento
