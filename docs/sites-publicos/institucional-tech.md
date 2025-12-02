# Documentação Técnica - Site Institucional

**URL:** [www.administradoramutual.com.br](https://www.administradoramutual.com.br/)

---

## 1. Visão Geral da Arquitetura

O site institucional é uma **Single Page Application (SPA)** construída com **React** e **Vite**. A renderização é totalmente client-side, o que proporciona uma experiência de usuário rápida e fluida após o carregamento inicial.

### Principais Tecnologias

| Categoria | Tecnologia | Versão | Descrição |
|---|---|---|---|
| **Framework** | React | 19.1.1 | Biblioteca para construção de interfaces |
| **Build Tool** | Vite | 7.1.7 | Dev server e build tool de alta performance |
| **Linguagem** | TypeScript | 5.9.3 | Superset do JavaScript com tipagem estática |
| **Roteamento** | Wouter | 3.3.5 | Router minimalista para React |
| **Styling** | Tailwind CSS | 4.1.14 | Framework CSS utility-first |
| **Componentes** | Radix UI | - | Componentes acessíveis e sem estilo |
| **Ícones** | Lucide React | 0.453.0 | Biblioteca de ícones |

### Estrutura de Diretórios

A arquitetura do projeto segue um padrão modular e organizado:

```bash
src/
├── App.tsx              # Componente raiz, onde as rotas são definidas
├── main.tsx             # Ponto de entrada da aplicação
├── index.css            # Estilos globais e configuração do Tailwind
├── const.ts             # Constantes globais
├── _core/               # Configurações core (ex: tema, fontes)
├── components/          # Componentes React reutilizáveis (ex: Button, Card)
│   └── ui/              # Componentes de UI base (shadcn/ui)
├── contexts/            # Context API para gerenciamento de estado global
├── hooks/               # Custom Hooks (ex: useTheme)
├── lib/                 # Funções utilitárias (ex: clsx, tailwind-merge)
└── pages/               # Componentes que representam as páginas do site
```

---

## 2. Fluxo de Renderização

1. **Requisição Inicial:** O usuário acessa a URL.
2. **Carregamento:** O `index.html` é servido, juntamente com os assets JavaScript e CSS.
3. **Inicialização do React:** O `main.tsx` inicializa a aplicação React.
4. **Roteamento:** O `App.tsx` utiliza o **Wouter** para determinar qual componente de página deve ser renderizado com base na URL.
5. **Renderização:** O React renderiza os componentes no DOM.
6. **Navegação:** Cliques em links são interceptados pelo Wouter, que atualiza a URL e renderiza a nova página sem um full page reload.

---

## 3. Gerenciamento de Estado

- **Estado Local:** Utiliza `useState` e `useReducer` para gerenciar o estado dos componentes.
- **Estado Global:** Utiliza a **Context API** do React para estados que precisam ser compartilhados entre múltiplos componentes, como o tema (claro/escuro).

---

## 4. Styling e Design System

O design system é construído sobre três pilares:

- **Tailwind CSS:** Para estilização rápida e consistente com classes utilitárias.
- **Radix UI:** Fornece a base de componentes acessíveis e sem estilo, como `Dialog`, `DropdownMenu`, etc.
- **Componentes Customizados:** Construídos em `src/components/` para encapsular lógica e estilo, seguindo a filosofia de composição.

O `tailwind-merge` e `clsx` são utilizados para gerenciar classes CSS de forma inteligente, evitando conflitos.

---

## 5. Build e Deploy

- **Build:** O comando `npm run build` utiliza o **Vite** para compilar e otimizar o código TypeScript e React, gerando arquivos estáticos (HTML, JS, CSS) no diretório `dist/`.
- **Deploy:** O projeto está configurado para deploy contínuo no **Vercel**. Cada push para a branch `main` no GitHub aciona um novo build e deploy automaticamente.

---

## 6. Dependências Chave

- **`react` / `react-dom`:** Core do framework.
- **`vite`:** Essencial para o ambiente de desenvolvimento e build.
- **`typescript`:** Garante a qualidade e manutenibilidade do código.
- **`wouter`:** Gerencia a navegação da SPA.
- **`tailwindcss`:** Base do sistema de design.
- **`@radix-ui/*`:** Fornece componentes de UI acessíveis.

---

*Última atualização: 02 de Dezembro de 2025*
