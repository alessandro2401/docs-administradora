# Documentação Técnica - AURA Seguradora (S4)

**URL:** [s4.administradoramutual.com.br](https://s4.administradoramutual.com.br/)

---

## 1. Visão Geral da Arquitetura

O site da AURA Seguradora é uma aplicação web moderna construída com **Next.js 14**, utilizando o **App Router**. Isso permite uma arquitetura híbrida que combina renderização no servidor (SSR), geração de site estático (SSG) e renderização no cliente (CSR) para otimizar a performance e o SEO.

### Principais Tecnologias

| Categoria | Tecnologia | Versão | Descrição |
|---|---|---|---|
| **Framework** | Next.js | 14.2.10 | Framework React para produção |
| **Linguagem** | TypeScript | 5.6.2 | Superset do JavaScript com tipagem estática |
| **UI/Styling** | Tailwind CSS | 3.4.14 | Framework CSS utility-first |
| **Animações** | Framer Motion | 11.3.31 | Biblioteca de animações para React |
| **Formulários** | React Hook Form | 7.53.0 | Gerenciamento de formulários performático |
| **Validação** | Zod | 3.23.8 | Validação de schemas com TypeScript |
| **Gráficos** | Recharts | 2.12.7 | Biblioteca de gráficos para React |
| **Ícones** | Lucide React | 0.451.0 | Biblioteca de ícones |

### Estrutura de Diretórios (App Router)

A arquitetura é baseada em arquivos e diretórios dentro da pasta `app/`:

```bash
app/
├── layout.tsx           # Layout raiz da aplicação
├── page.tsx             # Página inicial (rota '/')
├── consultorias/        # Rota '/consultorias'
│   └── page.tsx         # Componente da página de consultorias
├── [outras-rotas]/      # Padrão de rotas dinâmicas
│   └── page.tsx
├── globals.css          # Estilos globais
└── api/                 # API Routes para backend
    └── [rota]/route.ts

components/              # Componentes React reutilizáveis
lib/
├── data/                # Dados estáticos (ex: consultorias.ts)
└── utils/               # Funções utilitárias

public/                  # Arquivos estáticos (imagens, fontes)
```

---

## 2. Fluxo de Renderização (Next.js 14)

- **Server Components:** Por padrão, todos os componentes dentro de `app/` são **React Server Components (RSCs)**. Eles são renderizados no servidor e enviam HTML para o cliente, resultando em um carregamento inicial mais rápido e melhor SEO.
- **Client Components:** Componentes que necessitam de interatividade (ex: `useState`, `useEffect`, event handlers) devem ser marcados com a diretiva `"use client"` no topo do arquivo.
- **Renderização Híbrida:** O Next.js decide a melhor estratégia de renderização para cada página (estática ou dinâmica) com base no uso de funções como `cookies()`, `headers()` ou dados dinâmicos.

---

## 3. Gerenciamento de Formulários

O site utiliza uma stack robusta para formulários:

1. **React Hook Form:** Controla o estado do formulário de forma performática, minimizando re-renderizações.
2. **Zod:** Define o schema de validação dos dados do formulário, garantindo que os dados estejam no formato correto.
3. **@hookform/resolvers:** Integra o Zod com o React Hook Form para validação automática.

Esse padrão garante formulários seguros, eficientes e com excelente experiência de usuário.

---

## 4. Styling e Animações

- **Tailwind CSS:** Utilizado para toda a estilização, seguindo a abordagem utility-first.
- **Framer Motion:** Adiciona animações complexas e interativas, como transições de página e micro-interações, melhorando a experiência visual do site.

---

## 5. Build e Deploy

- **Build:** O comando `npm run build` executa o `next build`, que compila a aplicação, otimiza os assets e gera a saída de produção no diretório `.next/`.
- **Deploy:** O projeto é implantado no **Vercel**, a plataforma criadora do Next.js. O deploy é contínuo, sendo acionado a cada push na branch `main`.

---

## 6. Comparativo com o Site Institucional

| Característica | Site S4 (Next.js) | Site Institucional (Vite) |
|---|---|---|
| **Renderização** | Híbrida (SSR/SSG) | Client-Side (CSR) |
| **SEO** | Otimizado (SSR) | Limitado (CSR) |
| **Performance Inicial** | Mais rápida | Mais lenta |
| **Complexidade** | Maior | Menor |
| **Backend** | Integrado (API Routes) | Não possui |

---

*Última atualização: 03 de Novembro de 2025*
