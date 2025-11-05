# Documentação da Nova Funcionalidade: Validação de Contraproposta

## Visão Geral

Esta documentação detalha a implementação da nova funcionalidade de validação de contraproposta na Calculadora SMA, que permite uma análise mais precisa e automatizada das propostas de acordo, além de atualizar dinamicamente o cálculo do financiamento com base no resultado da validação.

## Funcionalidades Implementadas

### 1. Seção de Contraproposta no Card de Resultados

- **Layout:** A seção de contraproposta foi movida para o card de resultados (lado direito), abaixo das opções de pagamento, para uma melhor organização visual e usabilidade.
- **Componentes:**
    - **Campo de Entrada:** Permite que o usuário insira o valor proposto pelo associado.
    - **Botão "Calcular com Contraproposta":** Aciona a validação da contraproposta e o recálculo do financiamento.

### 2. Validação da Contraproposta

- **Regras de Negócio:**
    - **Limite Mínimo:** 2% acima do valor do acordo em dinheiro.
    - **Limite Máximo:** 55% do orçamento da oficina.
- **Feedback Visual:**
    - **Aprovada:** Indicador verde com a mensagem "Contraproposta APROVADA".
    - **Reprovada:** Indicador vermelho com a mensagem "Contraproposta REPROVADA" e o motivo da reprovação (abaixo do mínimo ou acima do máximo).
- **Faixa de Negociação:** Exibição da faixa de negociação aceitável (mínimo e máximo) para orientar o usuário.

### 3. Atualização Dinâmica do Financiamento

- **Lógica de Cálculo:**
    - Se a contraproposta for **aprovada**, o "Valor da Operação" no detalhamento do financiamento é atualizado para o valor da contraproposta.
    - Se a contraproposta for **reprovada**, o "Valor da Operação" é mantido como o valor do acordo em dinheiro.
- **Recálculo Automático:** O financiamento é recalculado automaticamente ao clicar no botão "Calcular com Contraproposta".

## Implementação Técnica

### Repositório GitHub
- **URL:** https://github.com/alessandro2401/sma-site
- **Branch:** master
- **Último Commit:** 02d342b4b1e5ab7b61c2f8974fdc6a9ebebe01bf

### Deployment Vercel
- **ID:** dpl_9djcfpBa9msu2J5q8m1cTTUH1jrp
- **URL de Produção:** https://sma.administradoramutual.com.br

## Como Utilizar

1. Preencha os dados do sinistro e clique em "Calcular Valores do Acordo".
2. No card de resultados, insira o valor da contraproposta no campo "Valor Proposto pelo Associado (R$)".
3. Clique no botão "🧮 Calcular com Contraproposta".
4. O sistema exibirá o resultado da validação (aprovada ou reprovada) e atualizará o cálculo do financiamento automaticamente.
