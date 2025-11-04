---
sidebar: auto
---

# Documentação Técnica - Manual da Marca

**URL:** [marca.administradoramutual.com.br](https://marca.administradoramutual.com.br)

## 1. Visão Geral da Arquitetura

O site do Manual da Marca é uma página estática, de apresentação única, cujo propósito é servir como uma referência visual rápida para a identidade da marca Administradora Mutual. Devido à sua natureza, a arquitetura é extremamente simples e direta, focada na entrega de conteúdo visual de forma eficiente.

Trata-se de um site **totalmente estático**, composto por um único arquivo HTML, com CSS e talvez um pouco de JavaScript para interações mínimas. Não há backend, banco de dados ou lógica de negócio complexa.

### Principais Tecnologias

A análise do site revela uma stack de tecnologia minimalista, adequada ao seu propósito.

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Linguagem padrão para a estruturação do conteúdo da página. |
| **Estilo** | CSS3 | Utilizado para toda a estilização, incluindo o layout em cards, cores, fontes e espaçamentos. |
| **Linguagem** | JavaScript (Opcional) | Pode ser utilizado para pequenas interações, como efeitos de hover ou um scroll suave, mas não é essencial para a funcionalidade principal. |
| **Hospedagem** | Vercel | O site está hospedado na Vercel, que oferece uma plataforma otimizada para o deploy de sites estáticos. |

## 2. Estrutura do Código

O código-fonte de um site como este é tipicamente muito simples.

### Arquivo HTML (`index.html`)

O arquivo HTML contém toda a estrutura semântica da página, dividida em seções que correspondem a cada parte do manual:

-   **Header:** Com o título principal "Manual da Marca".
-   **Seção do Logo:** Apresenta a imagem do logo principal.
-   **Seção de Conceito:** Parágrafos que descrevem o conceito do design.
-   **Seção de Paleta de Cores:** Cards ou divs para cada cor, com seu código hexadecimal.
-   **Seção de Tipografia:** Exemplos da fonte Poppins em diferentes pesos.
-   **Seção de Variações:** Imagens mostrando as versões monocromática, negativa e o ícone.

### Arquivo CSS (`style.css`)

O arquivo CSS contém todas as regras de estilo para formatar o conteúdo do HTML. As principais responsabilidades do CSS aqui são:

-   Definir o layout principal (provavelmente usando Flexbox ou Grid).
-   Estilizar os cards brancos com `box-shadow` e `border-radius`.
-   Aplicar a tipografia correta (importando a fonte Poppins do Google Fonts).
-   Definir as cores da paleta nos elementos correspondentes.
-   Garantir a responsividade para que o site se adapte bem a telas de diferentes tamanhos (desktop e mobile).

## 3. Assets

Os únicos assets da aplicação são as imagens:

-   Logo principal.
-   Variações do logo (monocromática, negativa, ícone).
-   Favicon (em formato SVG, como especificado no próprio manual).

Esses assets estão localizados em um diretório (ex: `/images` ou `/assets`) e são referenciados no HTML através da tag `<img>`.

## 4. Build e Deploy

-   **Build:** Para um site puramente estático, não há um processo de "build" complexo. O processo se resume a garantir que os arquivos HTML, CSS e as imagens estejam corretamente organizados.
-   **Deploy:** O deploy é feito simplesmente publicando os arquivos estáticos na Vercel. Como o site está integrado com um repositório no GitHub, qualquer push para a branch `main` aciona um deploy automático na Vercel, que serve os arquivos de forma otimizada globalmente via sua CDN.

## 5. Considerações de Manutenção

-   **Simplicidade é a Chave:** A manutenção deste site é trivial. Para atualizar qualquer informação (ex: adicionar uma nova variação do logo ou ajustar uma cor), basta editar diretamente o arquivo HTML ou CSS.
-   **Otimização de Imagens:** Para garantir um carregamento rápido, as imagens devem ser otimizadas para a web (comprimidas sem perda de qualidade visível).
-   **Nenhuma Dependência Externa:** Além da fonte importada do Google Fonts, o site não possui dependências externas, o que o torna extremamente robusto e de baixa manutenção.

_Última atualização: 04 de Novembro de 2025_
