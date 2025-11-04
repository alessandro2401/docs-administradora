---
sidebar: auto
---

# Documentação Técnica - Calculadora SMA

**URL:** [sma.administradoramutual.com.br](https://sma.administradoramutual.com.br)

## 1. Visão Geral da Arquitetura

A Calculadora SMA (Socorro Mútuo Acordo) é uma ferramenta de frontend interativa projetada para simular acordos de antecipação de valores de reparo de sinistros. A aplicação é uma **Single Page Application (SPA)**, onde toda a lógica de negócio e os cálculos são executados no lado do cliente (client-side).

O objetivo da ferramenta é fornecer uma simulação clara e transparente para o beneficiário, permitindo a geração de um documento em PDF ou a impressão do acordo simulado.

### Principais Tecnologias (Estimadas)

Baseado na interatividade e na estrutura do formulário, a tecnologia provável é a seguinte:

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework** | React ou Vue.js | A reatividade do formulário e a atualização dinâmica dos resultados são características marcantes desses frameworks. |
| **Linguagem** | JavaScript / TypeScript | Padrão para desenvolvimento web moderno. |
| **Geração de PDF** | `jspdf` + `html2canvas` | Bibliotecas populares para converter conteúdo HTML em documentos PDF no lado do cliente. |
| **Styling** | CSS Modules ou Styled Components | O estilo é bem isolado e específico para os componentes da calculadora. |
| **Build Tool** | Vite ou Create React App | Ferramentas comuns para empacotar e otimizar SPAs. |

## 2. Lógica de Negócio e Fluxo de Cálculo

A calculadora executa uma série de cálculos financeiros complexos baseados nos dados de entrada do sinistro. O fluxo principal é o seguinte:

1.  **Entrada de Dados:** O usuário preenche os campos do formulário, incluindo:
    *   Dados do Beneficiário (Nome, Placa, Veículo)
    *   Valores do Sinistro (Regulagem, Participação, Orçamento)
    *   Prazos (Dias de Reparação, Carro Reserva)
    *   Configurações do Financiamento (Taxa de Juros, Parcelas)

2.  **Cálculo do Valor Base:** O valor principal do acordo é calculado. A fórmula base é geralmente:
    `ValorBase = Valor da Regulagem - Valor da Participação`

3.  **Cálculo dos Custos Adicionais:** Custos como o carro reserva são adicionados:
    `CustoCarroReserva = Dias de Carro Reserva * Custo Diária`

4.  **Cálculo do Financiamento (Antecipação):** A lógica de financiamento é aplicada sobre o valor a ser antecipado. Utiliza-se uma fórmula de cálculo de parcelas de financiamento (Tabela Price, por exemplo), considerando o valor presente, a taxa de juros mensal e o número de parcelas.

    `Parcela = ValorFinanciado * [ (i * (1+i)^n) / ((1+i)^n - 1) ]`

    Onde:
    - `ValorFinanciado` é o montante a ser antecipado.
    - `i` é a taxa de juros mensal.
    - `n` é o número de parcelas.

5.  **Exibição dos Resultados:** Os resultados, incluindo o valor da parcela, o custo total do financiamento e o valor líquido a receber, são exibidos dinamicamente na interface.

## 3. Funcionalidades Principais

- **Formulário Interativo:** Os campos são validados e os resultados são recalculados em tempo real conforme o usuário altera os valores.
- **Geração de PDF:** Ao clicar em "Gerar PDF", a aplicação provavelmente usa a biblioteca `html2canvas` para capturar a área de resultados como uma imagem e, em seguida, a insere em um documento PDF gerado pela `jspdf`.
- **Impressão:** A funcionalidade de impressão utiliza a API padrão do navegador (`window.print()`) para gerar uma versão otimizada para impressão da página de resultados.

## 4. Estrutura de Diretórios (Proposta)

```bash
src/
├── components/              # Componentes de UI (Input, Button, FormSection)
├── hooks/                   # Custom Hooks
│   └── useCalculadoraSMA.ts # Hook com toda a lógica de cálculo
├── utils/                   # Funções utilitárias
│   └── pdfGenerator.ts    # Lógica para gerar o PDF
├── pages/                   # Página principal
│   └── CalculadoraPage.tsx  # Componente que monta a calculadora
├── App.tsx                  # Componente raiz
└── main.tsx                 # Ponto de entrada
```

## 5. Considerações de Manutenção

- **Lógica de Cálculo Centralizada:** É crucial que toda a lógica de cálculo esteja centralizada (por exemplo, em um custom hook `useCalculadoraSMA`) para facilitar a manutenção e evitar duplicação de código.
- **Testes Unitários:** Dada a complexidade dos cálculos, é altamente recomendável ter testes unitários para a função de cálculo, garantindo que diferentes cenários de entrada produzam os resultados esperados.
- **Variáveis de Configuração:** Taxas, custos e outros parâmetros que podem mudar com o tempo (como o custo da diária do carro reserva) devem ser armazenados como constantes em um arquivo de configuração, em vez de estarem "hardcoded" no meio da lógica.

_Última atualização: 04 de Novembro de 2025_
