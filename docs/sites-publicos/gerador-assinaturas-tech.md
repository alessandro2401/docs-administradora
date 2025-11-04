---
sidebar: auto
---

# Documentação Técnica - Gerador de Assinaturas

**URL:** [assinatura.administradoramutual.com.br](https://assinatura.administradoramutual.com.br)

## 1. Visão Geral da Arquitetura

O Gerador de Assinaturas é uma ferramenta de frontend interativa, desenvolvida como uma **Single Page Application (SPA)**. Seu objetivo é permitir que os colaboradores do Grupo MMB criem assinaturas de e-mail personalizadas de forma padronizada, com a opção de exportar o resultado como uma imagem PNG ou como código HTML.

A aplicação é totalmente client-side, com a lógica de atualização do preview e geração dos artefatos sendo executada diretamente no navegador.

### Principais Tecnologias (Estimadas)

A funcionalidade de preview em tempo real e exportação de imagem/HTML sugere a seguinte stack:

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework** | React ou Vue.js | A reatividade da interface, onde a digitação nos campos do formulário atualiza instantaneamente o preview, é uma característica central desses frameworks. |
| **Geração de Imagem** | `html-to-image` ou `html2canvas` | Para a funcionalidade "Baixar PNG", uma biblioteca que converte um nó do DOM (a div do preview) em uma imagem é necessária. `html-to-image` é uma opção moderna e popular. |
| **Copiar para Área de Transferência** | `clipboard-copy` ou API nativa | A funcionalidade "Copiar HTML" utiliza uma biblioteca ou a API de Clipboard do navegador para copiar o código HTML da assinatura. |
| **Styling** | CSS Modules ou Tailwind CSS | O layout é dividido em seções claras (formulário, preview, código), e o estilo é bem encapsulado. |
| **Build Tool** | Vite ou Create React App | Ferramentas padrão para o desenvolvimento e build de SPAs. |

## 2. Fluxo de Funcionalidade

O fluxo de uso da aplicação é simples e direto:

1.  **Preenchimento do Formulário:** O usuário insere suas informações nos campos de texto (Nome, Cargo, E-mail).
2.  **Atualização do Preview:** O estado do framework (React/Vue) é atualizado a cada alteração nos campos. Esses dados são passados como props para o componente de preview, que se re-renderiza em tempo real, mostrando a aparência exata da assinatura.
3.  **Geração de PNG:** Ao clicar em "Baixar PNG", a função associada utiliza uma biblioteca como `html-to-image` para:
    a.  Identificar o elemento do DOM que contém o preview da assinatura.
    b.  Converter este elemento em uma imagem PNG (formato de dados Base64).
    c.  Criar um link de download temporário com a imagem e simular um clique para que o navegador baixe o arquivo.
4.  **Cópia de HTML:** Ao clicar em "Copiar HTML", o código HTML pré-formatado da assinatura (que é exibido na seção "Código HTML") é copiado para a área de transferência do usuário.

## 3. Estrutura de Diretórios (Proposta para React)

```bash
src/
├── components/              # Componentes de UI
│   ├── SignatureForm.tsx    # Formulário de entrada de dados
│   ├── SignaturePreview.tsx # Componente que renderiza o preview
│   └── CodeBlock.tsx        # Bloco que exibe o código HTML
├── hooks/                   # Custom Hooks
│   └── useSignature.ts    # Hook para gerenciar o estado (dados do usuário)
├── utils/                   # Funções utilitárias
│   ├── imageGenerator.ts  # Lógica para converter HTML em PNG
│   └── clipboard.ts       # Lógica para copiar para a área de transferência
├── App.tsx                  # Componente principal que monta a página
└── main.tsx                 # Ponto de entrada da aplicação
```

## 4. Análise do Código HTML Gerado

O código HTML gerado para a assinatura utiliza uma **tabela (`<table>`)** para garantir a máxima compatibilidade entre diferentes clientes de e-mail (Outlook, Gmail, Apple Mail, etc.). Esta é uma prática recomendada e tradicional para e-mail marketing e assinaturas, pois muitos clientes de e-mail têm suporte limitado a CSS moderno e layouts baseados em `div`.

O código utiliza estilos inline (`style="..."`), o que também é uma prática padrão para HTML de e-mail, garantindo que os estilos sejam aplicados corretamente.

**Ponto de Atenção:** O código gerado inclui uma URL de imagem placeholder (`https://seu-dominio.com/logo-mmb.png`). Para que a assinatura funcione corretamente, o logo do Grupo MMB precisa estar hospedado em um servidor público, e a URL no código deve ser a URL real da imagem.

## 5. Considerações de Manutenção

-   **URL do Logo:** A URL do logo está "hardcoded" no template HTML. Se a localização do logo mudar, o código da aplicação precisará ser atualizado. O ideal é que esta URL seja uma variável de ambiente ou uma constante em um arquivo de configuração.
-   **Template HTML:** O template da assinatura está diretamente no código. Se o design da assinatura precisar ser alterado, será necessário editar o código-fonte. Manter o template em um arquivo separado (`.html` ou como uma string em um arquivo de template) pode facilitar a manutenção.

_Última atualização: 04 de Novembro de 2025_
