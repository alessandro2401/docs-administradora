# Calculadora SMT - Movimento Mais Brasil

> Documentação completa da Calculadora SMT, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo | Detalhe |
|-------|---------|
| **URL** | [https://total.administradoramutual.com.br/](https://total.administradoramutual.com.br/) |
| **Status** | Ativo |
| **Tipo de Acesso** | Público |
| **Última Verificação** | 24 de Fevereiro de 2026 |

## Propósito e Público-Alvo

O site é uma ferramenta interna para calcular o valor de indenização de sinistros para associados do "Movimento Mais Brasil - Socorro Mútuo Total". O público-alvo são os funcionários da Administradora Mutual responsáveis pelo processo de sinistros, permitindo um cálculo rápido e padronizado dos valores a serem pagos, considerando diversas variáveis como tipo de sinistro, depreciações e descontos.

## Stack Técnica

| Tecnologia | Uso |
|-----------|-----|
| **Framework** | (Não identificado) |
| **Linguagem** | JavaScript |
| **Estilização** | CSS |
| **Hospedagem** | (Não identificado) |
| **Outras Libs** | html2pdf.js |

## Layout e Design

O layout da aplicação é minimalista e funcional, projetado para eficiência na entrada de dados. A estrutura é de página única (single-page application), com um formulário principal que ocupa a área central da tela.

- **Header:** O cabeçalho é simples, contendo o título "Cálculo para Indenização Financeira - Total" e o subtítulo "Movimento Mais Brasil - Socorro Mútuo Total". Há um pequeno ícone de carro ao lado do título principal.
- **Corpo do Formulário:** O formulário é o elemento central e está contido em um card com fundo branco e bordas arredondadas, proporcionando um bom contraste com o fundo da página.
- **Fundo:** O fundo da página é um gradiente de azul, o que confere um aspecto profissional à aplicação.
- **Cores:** A paleta de cores é limitada e consiste principalmente em:
    - Azul (gradiente do fundo e títulos)
    - Branco (fundo do formulário)
    - Cinza (texto e bordas dos campos)
- **Tipografia:** A fonte utilizada é uma sans-serif padrão (provavelmente Arial ou Helvetica), que garante boa legibilidade. Os tamanhos de fonte são consistentes, com hierarquia clara entre títulos, subtítulos e texto do formulário.
- **Responsividade:** A aplicação não parece ser responsiva. Em telas menores, o formulário não se ajusta adequadamente, o que reforça a ideia de que foi projetada para uso em desktops. Para uma melhor experiência do usuário, a implementação de um design responsivo seria uma melhoria significativa.

## Funcionalidades

### Calculadora de Indenização

O principal recurso do site é a calculadora de indenização, que é dividida em várias seções para facilitar a entrada de dados e a precisão do cálculo.

#### Dados do Sinistro

Esta seção coleta informações básicas sobre o sinistro e o beneficiário.

- **Nome do Beneficiário:** Campo de texto para inserir o nome completo do associado que receberá a indenização.
- **Data de Entrega da Documentação:** Campo de data para registrar quando a documentação completa do sinistro foi recebida. Este campo é crucial para o cálculo de prazos.
- **Dias Úteis para Pagamento:** Menu suspenso (dropdown) com as opções de 90, 60 e 30 dias úteis. A seleção deste campo provavelmente afeta o cálculo de juros ou a data de vencimento do pagamento.

#### Identificação do Veículo

Detalhes sobre o veículo sinistrado.

- **Veículo:** Campo de texto para o modelo e marca do veículo.
- **Placa:** Campo de texto para a placa do veículo.
- **Valor FIPE (R$):** Campo numérico para inserir o valor do veículo de acordo com a tabela FIPE. Este é o valor base para o cálculo da indenização.
- **Tipo de Sinistro:** Menu suspenso com as opções: Roubo, Furto, Colisão (Perda Total), Incêndio e Alagamento.

#### Depreciações Aplicáveis

Checkboxes para aplicar depreciações percentuais sobre o valor FIPE.

- **Veículo de Leilão por Sinistro (-25%):** Reduz 25% do valor se o veículo foi adquirido em leilão de sinistro.
- **Veículo de Leilão Financeiro (-15%):** Reduz 15% se o veículo foi adquirido em leilão financeiro.
- **Benefício Fiscal IPI/ICMS (-20%):** Reduz 20% se o veículo foi adquirido com isenção de IPI/ICMS.
- **Veículo Remarcado (-20%):** Reduz 20% se o chassi do veículo foi remarcado.
- **Rodas/Som sem Rastreador (-10%):** Reduz 10% em caso de roubo/furto de rodas ou som sem que o veículo tivesse um rastreador funcional.
- **Kit Gás (GNV) (-5%):** Reduz 5% do valor.
- **Veículo Antigo/Fora de Linha (-10%):** Reduz 10% para veículos considerados antigos ou que saíram de linha.

#### Composição dos Descontos (R$)

Campos para inserir valores fixos a serem descontados do total da indenização.

- **12 Contribuições:** Valor a ser descontado referente a 12 contribuições mensais.
- **Despachante:** Custos com despachante.
- **Prévia Financiamento:** Valor de prévia de financiamento.
- **Baixa do Gravame:** Custo para dar baixa no gravame do veículo.
- **2ª Via ATPVE:** Custo para emissão de segunda via do ATPV-e.
- **Redução de Cota:** Desconto por redução de cota.

#### Parâmetros de Financiamento (Antecipação)

Parâmetros para o cálculo de antecipação da indenização.

- **Taxa de Juros Mensal (%):** Taxa de juros a ser aplicada no caso de antecipação.
- **Número de Parcelas:** Número de parcelas para o financiamento da antecipação.
- **Rastreador Instalado e Funcionando:** Checkbox que provavelmente é um pré-requisito para certas condições ou benefícios.

### Geração de PDF
A aplicação utiliza a biblioteca `html2pdf.js` para permitir a geração de um arquivo PDF a partir do resultado do cálculo. Esta funcionalidade é acionada pelo botão "Calcular Indenização", que, além de exibir o resultado na tela, provavelmente oferece uma opção para salvar ou imprimir o cálculo em formato PDF para arquivamento ou compartilhamento.

### Acesso à Planilha de Registros
Um link com o texto "Acessar Planilha de Registros" sugere uma integração com um sistema externo de planilhas (como Google Sheets ou uma aplicação web similar). Ao clicar neste link, o usuário é provavelmente redirecionado para uma página onde pode visualizar um histórico de todos os cálculos de indenização realizados, permitindo auditoria e análise de dados.

## Seções e Páginas

| Seção | Descrição | Rota |
|-------|-----------|------|
| Calculadora | Página principal com o formulário de cálculo. | / |

## Integrações

- Aparentemente se integra a uma planilha de registros, possivelmente do Google Sheets ou similar.

## Observações e Recomendações

- A aplicação cumpre seu propósito principal de calcular indenizações de forma padronizada. No entanto, a interface, embora funcional, poderia ser modernizada para melhorar a experiência do usuário.
- A investigação da integração com a "Planilha de Registros" é crucial para entender o ciclo de vida completo dos dados de sinistro. É importante saber onde os dados são armazenados, quem tem acesso e como são utilizados para relatórios gerenciais.
- A implementação de um design responsivo é altamente recomendada. Com o aumento do uso de dispositivos móveis em ambientes de trabalho, permitir que os funcionários acessem a calculadora de qualquer lugar traria mais flexibilidade e eficiência.
- A validação dos campos do formulário do lado do cliente (usando JavaScript) poderia ser aprimorada para fornecer feedback instantâneo ao usuário em caso de erros de preenchimento (por exemplo, formato de placa inválido, valor FIPE fora de um intervalo razoável).
- Para maior segurança e rastreabilidade, seria ideal que a aplicação tivesse um sistema de autenticação, mesmo sendo uma ferramenta interna. Isso permitiria registrar qual usuário realizou cada cálculo.

## Guia de Uso

Este guia descreve o passo a passo para utilizar a Calculadora SMT.

1.  **Preenchimento dos Dados do Sinistro:**
    *   **Nome:** Insira o nome completo do beneficiário.
    *   **Data de Entrega da Documentação:** Selecione a data em que a documentação foi entregue.
    *   **Dias Úteis para Pagamento:** Escolha o prazo para o pagamento da indenização.

2.  **Identificação do Veículo:**
    *   **Veículo:** Digite o modelo e a marca do veículo.
    *   **Placa:** Insira a placa do veículo.
    *   **Valor FIPE (R$):** Informe o valor do veículo segundo a tabela FIPE.
    *   **Tipo de Sinistro:** Selecione o tipo de sinistro ocorrido.

3.  **Aplicação de Depreciações:**
    *   Marque as caixas de seleção correspondentes às depreciações aplicáveis ao veículo.

4.  **Composição dos Descontos:**
    *   Preencha os campos com os valores dos descontos a serem aplicados.

5.  **Parâmetros de Financiamento:**
    *   **Taxa de Juros Mensal (%):** Informe a taxa de juros para antecipação.
    *   **Número de Parcelas:** Defina o número de parcelas.
    *   **Rastreador Instalado e Funcionando:** Marque esta opção se o veículo possuía rastreador.

6.  **Cálculo e Geração de PDF:**
    *   Clique no botão **Calcular Indenização** para obter o resultado.
    *   O sistema exibirá o valor final da indenização e permitirá a geração de um arquivo PDF com os detalhes do cálculo.

7.  **Acesso aos Registros:**
    *   Clique em **Acessar Planilha de Registros** para visualizar o histórico de cálculos.
