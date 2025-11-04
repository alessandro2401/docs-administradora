---
sidebar: auto
---

# Documentação Técnica - Calculadora SMT

**URL:** [total.administradoramutual.com.br](https://total.administradoramutual.com.br)

## 1. Visão Geral da Arquitetura

A Calculadora SMT (Socorro Mútuo Total) é uma aplicação web interativa para calcular o valor final de indenizações por roubo, furto ou perda total. Similar à Calculadora SMA, é uma **Single Page Application (SPA)** que executa toda a sua lógica de negócio e cálculos complexos no lado do cliente (client-side).

A ferramenta foi projetada para aplicar uma série de depreciações e descontos sobre o valor da tabela FIPE do veículo, fornecendo um cálculo preciso e transparente do valor a ser pago ao beneficiário, além de simular a antecipação desse valor.

### Principais Tecnologias (Estimadas)

A stack tecnológica é provavelmente muito semelhante à da Calculadora SMA, dada a natureza similar das aplicações.

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework** | React ou Vue.js | Ideal para criar formulários reativos e interfaces que atualizam dinamicamente. |
| **Linguagem** | JavaScript / TypeScript | Padrão da indústria para desenvolvimento frontend. |
| **Geração de PDF** | `jspdf` + `html2canvas` | Solução comum para gerar PDFs a partir de conteúdo HTML no cliente. |
| **Styling** | CSS-in-JS ou Tailwind CSS | Permite a criação de um design consistente e encapsulado. |
| **Build Tool** | Vite ou Create React App | Ferramentas de build modernas para otimização de SPAs. |

## 2. Lógica de Negócio e Fluxo de Cálculo

O fluxo de cálculo da Calculadora SMT é mais complexo que o da SMA, envolvendo múltiplas etapas de depreciação e descontos.

1.  **Entrada de Dados:** O usuário insere os dados do sinistro, que incluem:
    *   Valor da Tabela FIPE do veículo.
    *   Tipo de Sinistro (Roubo, Furto, PT, etc.).
    *   Múltiplas **Depreciações Aplicáveis** (Leilão, Benefício Fiscal, etc.), que são selecionadas via checkboxes.
    *   **Descontos Diversos** (Contribuições, Despachante, Gravame, etc.).

2.  **Cálculo do Valor Base Depreciado:** O cálculo começa com o valor da FIPE, e sobre ele são aplicados percentuais de depreciação de forma cumulativa, caso selecionados.
    `ValorDepreciado = ValorFIPE * (1 - %Depreciação1) * (1 - %Depreciação2) * ...`

3.  **Aplicação dos Descontos Fixos:** Do valor depreciado, são subtraídos todos os descontos fixos inseridos pelo usuário.
    `ValorApósDescontos = ValorDepreciado - (Soma de todos os descontos)`

4.  **Cálculo da Antecipação:** Uma taxa de desconto fixa (informada na UI como **12,7%**) é aplicada sobre o valor final para calcular o montante da antecipação.
    `ValorAntecipado = ValorApósDescontos * (1 - 0.127)`

5.  **Simulação de Financiamento (Opcional):** Assim como na SMA, há uma seção para simular o financiamento da antecipação em 4 parcelas, com uma taxa de juros mensal customizável.

6.  **Exibição dos Resultados:** Todos os valores calculados são exibidos em tempo real na interface para o usuário.

## 3. Funcionalidades Principais

- **Seleção Múltipla de Depreciações:** A interface permite que o usuário selecione múltiplos fatores de depreciação, e a lógica de cálculo os aplica corretamente.
- **Cálculo em Tempo Real:** Qualquer alteração nos campos de entrada dispara um recálculo imediato de todos os valores.
- **Geração de PDF e Impressão:** A calculadora oferece funcionalidades para gerar um documento PDF com o resumo do cálculo ou imprimir a visualização, utilizando a mesma abordagem técnica da Calculadora SMA (`jspdf`, `html2canvas`, `window.print()`).

## 4. Estrutura de Diretórios (Proposta)

A estrutura de arquivos seria similar à da Calculadora SMA, com a lógica de cálculo isolada para facilitar a manutenção.

```bash
src/
├── components/              # Componentes de UI (Input, Select, Checkbox)
├── hooks/                   # Custom Hooks
│   └── useCalculadoraSMT.ts # Hook com a lógica de cálculo da SMT
├── utils/                   # Funções utilitárias (gerador de PDF)
├── pages/                   # Página principal
│   └── CalculadoraPage.tsx  # Componente que renderiza a calculadora
├── App.tsx                  # Componente raiz
└── main.tsx                 # Ponto de entrada
```

## 5. Considerações de Manutenção

- **Isolamento da Lógica:** A complexidade dos cálculos torna ainda mais crítico o isolamento da lógica em um custom hook (`useCalculadoraSMT`).
- **Testes Abrangentes:** É fundamental ter um conjunto robusto de testes unitários que cubram todas as combinações possíveis de depreciações e descontos para garantir a precisão dos cálculos.
- **Configuração Centralizada:** Todos os percentuais de depreciação, taxas de desconto e outros valores fixos devem ser mantidos em um arquivo de configuração central para facilitar futuras atualizações sem a necessidade de alterar o código da lógica de negócio.

_Última atualização: 04 de Novembro de 2025_
