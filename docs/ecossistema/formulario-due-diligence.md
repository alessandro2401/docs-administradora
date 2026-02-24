# Formulário de Due Diligence - Aquisição de Carteira

> Documentação completa do Formulário de Due Diligence, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo | Detalhe |
|-------|---------|
| **URL** | [https://formulario.administradoramutual.com.br/](https://formulario.administradoramutual.com.br/) |
| **Status** | Ativo |
| **Tipo de Acesso** | Público |
| **Última Verificação** | 24 de Fevereiro de 2026 |

## Propósito e Público-Alvo

Este formulário tem como objetivo coletar informações essenciais para a análise de viabilidade da carteira de associados de uma proteção patrimonial mutualista. O público-alvo são as próprias associações que desejam ter sua carteira analisada pela Administradora Mutual. O problema que o site resolve é a padronização e organização da coleta de dados para o processo de due diligence.


## Stack Técnica

| Tecnologia | Uso |
|-----------|-----|
| **Framework** | React |
| **Linguagem** | JavaScript (com provável uso de TypeScript) |
| **Estilização** | Tailwind CSS |
| **Build Tool** | Vite (inferido pela estrutura dos assets) |
| **Hospedagem** | Vercel/Netlify (suposição comum para esse tipo de stack) |
| **Outras Libs** | Não identificado |

## Layout e Design

O layout do site é limpo, moderno e centrado em um formulário de múltiplas etapas, projetado para ser intuitivo e fácil de usar. A estrutura principal consiste em uma composição visualmente agradável e funcional, que inclui:

- **Header:** Um cabeçalho fixo no topo da página, que permanece visível durante a rolagem. Ele exibe o título principal do formulário, o logo da Administradora Mutual (posicionado à esquerda) e um botão de navegação ("← Voltar ao Site") no canto superior direito, que direciona o usuário de volta ao site institucional. O fundo do cabeçalho é branco, com uma sutil sombra na borda inferior que adiciona profundidade e separação do conteúdo principal.
- **Corpo Principal:** O conteúdo central do formulário é encapsulado em um container com largura máxima (`max-w-4xl`), garantindo que o formulário seja legível e bem organizado em telas maiores. Este container é centralizado horizontalmente na página. O fundo da página utiliza um gradiente suave e convidativo, que transita de um azul muito claro (`from-blue-50`) para um tom ligeiramente mais intenso de índigo (`to-indigo-50`), criando uma sensação de leveza e modernidade.
- **Formulário:** O formulário em si é o elemento central da página, apresentado dentro de um card branco. Este card possui cantos arredondados e uma sombra discreta, o que o destaca do fundo e o torna o foco principal da interação do usuário. A organização interna do formulário é lógica, com campos de entrada claramente rotulados e espaçados.
- **Barra de Progresso:** Abaixo do cabeçalho e acima do formulário, há uma barra de progresso horizontal que visualmente representa o avanço do usuário através das 8 seções do formulário. Ela exibe o número da seção atual e a porcentagem de conclusão, utilizando uma cor azul vibrante para indicar o progresso.
- **Cores:** A paleta de cores é cuidadosamente selecionada para transmitir profissionalismo e confiança. Tons de azul são predominantes para elementos interativos, como botões ("Próxima Seção", "Anterior"), links e a barra de progresso, indicando ações e estados ativos. Cores neutras, como cinza claro e escuro, são usadas para textos, bordas e fundos secundários, garantindo legibilidade e um visual clean.
- **Tipografia:** A tipografia emprega uma fonte sans-serif moderna e de fácil leitura, que contribui para a clareza da informação. Variações de peso (normal, médio, negrito) são utilizadas para estabelecer uma hierarquia visual clara, diferenciando títulos, rótulos de campos e texto de corpo.
- **Responsividade:** O design é totalmente responsivo, o que significa que a interface se adapta de forma fluida a diferentes tamanhos de tela, desde desktops grandes até dispositivos móveis. Isso é alcançado através do uso de um framework CSS como o Tailwind CSS, que facilita a criação de layouts flexíveis e adaptáveis. Em telas menores, os elementos se reorganizam para otimizar o espaço e a usabilidade.
- **Tema:** Atualmente, o site apresenta apenas um tema claro, sem a opção de alternar para um modo escuro. O design é otimizado para ambientes de luz, com contrastes adequados para garantir a acessibilidade.

- **Tema:** O site apresenta apenas um tema claro, sem opção de modo escuro.


## Funcionalidades

O site consiste em um formulário de múltiplas etapas (wizard) com as seguintes funcionalidades:

### Navegação entre Seções
O usuário pode navegar entre as 8 seções do formulário utilizando os botões "Próxima Seção" e "Anterior". A navegação é sequencial e o botão "Anterior" fica desabilitado na primeira seção.

### Barra de Progresso
Uma barra de progresso visual indica em qual etapa do formulário o usuário está e qual a porcentagem de preenchimento, oferecendo um feedback claro sobre o avanço.

### Seção 1: Informações Cadastrais Básicas
Esta seção inicial é crucial para a identificação da associação. Ela coleta os seguintes dados:
- **Razão Social Completa:** Campo de texto para o nome legal da entidade.
- **CNPJ:** Campo de texto para o Cadastro Nacional da Pessoa Jurídica.
- **Data de Constituição:** Campo de data para a data de fundação da associação.
- **Nome do Presidente/Diretor Geral:** Campo de texto para o nome do principal responsável.
- **E-mail de Contato:** Campo de e-mail, com validação de formato.
- **Telefone de Contato:** Campo de texto para o número de telefone.

### Seção 2: Situação Regulatória (LC 213/2025) - CRÍTICO
Esta seção, marcada como crítica, investiga a conformidade da associação com a regulamentação da SUSEP. As perguntas incluem:
- **Início do processo de regularização:** Opções de múltipla escolha (Sim, Não, Em andamento).
- **Número do processo na SUSEP:** Campo de texto para o número do processo, se aplicável.
- **Status atual do processo:** Opções de múltipla escolha (Protocolo realizado, Em análise, Deferido, Indeferido, Não iniciado).
- **Investimento estimado para adequação:** Campo de texto para o valor em R$.
- **Possui CNPJ de seguradora:** Opções de múltipla escolha (Sim, Não).


### Seção 3: Dados Operacionais da Carteira - CRÍTICO
Esta seção crítica coleta métricas essenciais sobre a base de associados. Os campos são:
- **Número TOTAL de associados ativos atualmente:** Campo numérico.
- **Número de associados há 12 meses atrás:** Campo numérico.
- **Número de associados há 24 meses atrás:** Campo numérico.
- **Quantos associados CANCELARAM nos últimos 12 meses:** Campo numérico.
- **Quantos associados NOVOS entraram nos últimos 12 meses:** Campo numérico.
- **Qual a TAXA DE RENOVAÇÃO média dos últimos 12 meses (em %):** Campo de texto.
- **Valor médio da mensalidade/contribuição por associado (em R$):** Campo de texto.

### Seção 4: Dados Financeiros Detalhados - CRÍTICO
Esta seção crítica é dedicada a obter um panorama financeiro da associação. Os campos incluem:
- **Faturamento/Receita Mensal Médio dos últimos 12 meses (em R$):** Campo de texto.
- **Faturamento/Receita Total do último ano completo (em R$):** Campo de texto.
- **Despesas Administrativas Mensais Médias (em R$):** Campo de texto.
- **Despesas com Pessoal (folha de pagamento mensal em R$):** Campo de texto.
- **Despesas com Comissões de Consultores/Corretores (% sobre a receita ou valor mensal em R$):** Campo de texto.
- **Resultado Operacional (Lucro/Prejuízo) dos últimos 12 meses (em R$):** Campo de texto.
- **Saldo de Caixa/Disponibilidades atual (em R$):** Campo de texto.

### Seção 5: Análise Atuarial e Sinistralidade - CRÍTICO
Esta seção crítica foca nos aspectos atuariais e de sinistros da carteira. Os campos são:
- **Valor TOTAL de sinistros PAGOS nos últimos 12, 24 e 36 meses (em R$):** Três campos de texto separados.
- **Qual a TAXA DE SINISTRALIDADE média dos últimos 12 meses? (Sinistros / Receita em %):** Campo de texto.
- **Quantidade de sinistros ocorridos nos últimos 12 meses:** Campo numérico.
- **Valor médio por sinistro (em R$):** Campo de texto.
- **Existem sinistros AVISADOS mas ainda NÃO PAGOS? (IBNR - Incurred But Not Reported):** Opções de múltipla escolha (Sim, Não, Não sei o que é IBNR).
- **Possui laudo atuarial?:** Opções de múltipla escolha (Sim, atualizado; Sim, mas desatualizado; Não possui).

### Seção 6: Passivos e Contingências - CRÍTICO
Esta seção crítica avalia as obrigações e riscos financeiros da associação. Os campos incluem:
- **Valor TOTAL de dívidas bancárias e financiamentos (em R$):** Campo de texto.
- **Valor TOTAL de dívidas com fornecedores (em R$):** Campo de texto.
- **Valor TOTAL de dívidas trabalhistas (em R$):** Campo de texto.
- **Valor TOTAL de dívidas fiscais (impostos, contribuições) (em R$):** Campo de texto.
- **Quantidade de processos judiciais ATIVOS (cível + trabalhista):** Campo numérico.
- **Valor TOTAL das causas em processos judiciais (em R$):** Campo de texto.
- **Valor provisionado/reservado para contingências jurídicas (em R$):** Campo de texto.

### Seção 7: Estrutura Operacional
Esta seção busca entender a equipe e a infraestrutura da associação. Os campos são:
- **Número total de funcionários (CLT + PJ):** Campo numérico.
- **Número de consultores/corretores ativos:** Campo numérico.
- **Quantos consultores são responsáveis por 80% das vendas:** Campo numérico.
- **A associação possui atuário responsável técnico?:** Opções de múltipla escolha (Sim, com registro MIBA/IBA; Não).
- **A associação possui sistema informatizado de gestão?:** Opções de múltipla escolha (Sim, próprio; Sim, terceirizado; Não possui).

### Seção 8: Documentação Complementar
A seção final do formulário trata do compromisso de envio de documentos para análise. Os campos são:
- **Compromisso de envio de documentos:** Opções de múltipla escolha (Sim, enviarei todos os documentos; Sim, mas alguns documentos não estão disponíveis; Não posso enviar).
- **Prazo para envio da documentação completa:** Opções de múltipla escolha (Até 7 dias, Até 15 dias, Até 30 dias, Mais de 30 dias).
- **Observações adicionais ou informações relevantes:** Campo de texto de área ampla para comentários.

### Envio do Formulário
Ao final do preenchimento, um botão "Enviar Formulário" permite submeter todas as informações coletadas. A ação exata que esse botão desencadeia (envio de e-mail, chamada de API, etc.) não é visível no front-end.

## Seções e Páginas

O site é uma aplicação de página única (SPA) que renderiza um formulário dividido em 8 seções. A rota principal é a raiz (`/`), e a navegação entre as seções é gerenciada internamente no estado da aplicação.

| Seção | Descrição | Rota |
|-------|-----------|------|
| 1. Informações Cadastrais Básicas | Coleta de dados gerais da associação. | `/` |
| 2. Situação Regulatória | Informações sobre a regularização junto à SUSEP. | `/` |
| 3. Dados Operacionais da Carteira | Informações sobre a base de associados. | `/` |
| 4. Dados Financeiros Detalhados | Receitas, despesas e resultado operacional. | `/` |
| 5. Análise Atuarial e Sinistralidade | Dados de sinistros e provisões técnicas. | `/` |
| 6. Passivos e Contingências | Dívidas, processos e obrigações. | `/` |
| 7. Estrutura Operacional | Equipe e infraestrutura. | `/` |
| 8. Documentação Complementar | Compromisso de envio de documentos. | `/` |

## Integrações

- **Site Principal:** Há um link de retorno para o site principal da Administradora Mutual ([https://www.administradoramutual.com.br/](https://www.administradoramutual.com.br/)).
- **API de Submissão:** Presume-se a integração com uma API interna para receber e processar os dados do formulário quando o usuário clica em "Enviar Formulário".
- **Serviço de E-mail:** É provável que um serviço de e-mail transacional seja utilizado para notificar tanto a equipe interna da Administradora Mutual quanto o remetente após a submissão do formulário.

## Observações e Recomendações

- O formulário é bem estruturado, com uma interface limpa e um fluxo de preenchimento lógico e intuitivo.
- A barra de progresso é um excelente recurso de UX, fornecendo feedback claro ao usuário.
- As seções marcadas como "CRÍTICO" destacam a importância de certas informações para a análise.
- **Recomendação:** Poderia ser implementada uma funcionalidade de "Salvar e continuar depois", permitindo que o usuário retome o preenchimento em outro momento, dado o volume de informações solicitadas.
- **Recomendação:** Para campos que esperam valores monetários, utilizar máscaras de input para formatar os números como moeda (ex: R$ 1.000,00) pode melhorar a experiência do usuário e evitar erros de digitação.
- **Recomendação:** Adicionar tooltips ou ícones de ajuda (?) ao lado de termos técnicos (ex: IBNR) para explicar o que significam, auxiliando usuários menos familiarizados com a terminologia.
