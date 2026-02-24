> # Gestão de Salvados

> Documentação completa do sistema de Gestão de Salvados, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo                  | Detalhe                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **URL**                | [https://salvados.administradoramutual.com.br/](https://salvados.administradoramutual.com.br/)       |
| **Status**             | Ativo                                                                                               |
| **Tipo de Acesso**     | Público (sem necessidade de login para visualização)                                                |
| **Última Verificação** | 24 de Fevereiro de 2026                                                                             |

## Propósito e Público-Alvo

O sistema de **Gestão de Salvados** é uma aplicação web interna desenvolvida para a **Administradora Mutual**. Sua principal finalidade é centralizar e otimizar o gerenciamento de todo o ciclo de vida dos veículos recuperados de sinistros. A plataforma atende a um público específico dentro da organização, composto principalmente por:

-   **Colaboradores do Departamento de Sinistros:** Responsáveis por alimentar o sistema com informações dos novos veículos, atualizar status, e acompanhar o processo de regularização e venda.
-   **Diretoria e Gestores:** Utilizam a plataforma para obter uma visão estratégica da operação de salvados, analisando indicadores de performance, receita, e tempo de permanência dos veículos no pátio.

O sistema soluciona um problema crítico de descentralização e falta de visibilidade, substituindo o antigo método de controle baseado em planilhas do Google Sheets. A plataforma oferece uma interface unificada e em tempo real para o inventário de veículos, o que permite um controle mais preciso e eficiente, desde a entrada do veículo até a confirmação do pagamento da venda.

## Stack Técnica

A análise do código-fonte e do comportamento da aplicação sugere a seguinte stack de tecnologias:

| Tecnologia          | Uso                                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**       | **React (via Vite)** - A estrutura do projeto e a forma como os componentes são renderizados indicam o uso de React, possivelmente inicializado com a ferramenta de build Vite, conhecida por sua alta performance em desenvolvimento. |
| **Linguagem**       | **JavaScript** - Todo o código do lado do cliente é escrito em JavaScript.                                                          |
| **Estilização**     | **CSS-in-JS ou CSS Modules** - Embora não especificado, a ausência de arquivos CSS globais e a forma como os estilos são aplicados aos componentes sugerem uma abordagem de CSS encapsulado, como Styled-components ou CSS Modules. |
| **Hospedagem**      | **Vercel/Netlify** - Plataformas de hospedagem modernas e populares para aplicações front-end, que oferecem integração contínua e deploy automatizado.                                                                     |
| **Outras Libs**     | **Google Sheets API** - Utilizada para a sincronização de dados dos veículos, sendo o coração da integração de dados do sistema.     |

## Layout e Design

O design do sistema é minimalista e funcional, priorizando a clareza e a facilidade de acesso às informações. A interface é construída sobre um layout responsivo que se adapta a diferentes resoluções de tela, desde desktops a dispositivos móveis.

-   **Header:** O cabeçalho é fixo e ocupa toda a largura da página. Apresenta o título "GESTÃO DE SALVADOS" em destaque, com um subtítulo descritivo. À direita, um menu de navegação simples oferece acesso rápido às seções "Dashboard" e "Veículos". A cor de fundo é um azul sólido (#1a3a6e), com texto em branco.

-   **Paleta de Cores:** A paleta é sóbria e profissional. O azul (#1a3a6e) é a cor primária, utilizada em elementos de destaque. O branco (#ffffff) é usado como cor de fundo principal, proporcionando um bom contraste. Tons de cinza são aplicados em textos secundários e bordas. Cores de status (verde para sucesso, vermelho para alerta) são usadas nos indicadores e filtros.

-   **Tipografia:** A família tipográfica é uma fonte sans-serif moderna e de fácil leitura (provavelmente Roboto ou similar, comum em aplicações web). A hierarquia de texto é bem estabelecida, com títulos maiores e em negrito, seguidos por textos de corpo com tamanho padrão.

-   **Responsividade:** Em telas menores, o layout se ajusta para manter a usabilidade. As tabelas de dados, que são largas, possuem rolagem horizontal para evitar a quebra de layout e garantir que toda a informação seja acessível.

-   **Tema:** O sistema utiliza um tema claro por padrão e não oferece uma opção para alternar para um tema escuro.

## Funcionalidades

O sistema é dividido em duas seções principais, cada uma com funcionalidades específicas.

### Dashboard

O Dashboard é a porta de entrada do sistema, oferecendo uma visão consolidada e instantânea da operação de salvados. As principais funcionalidades são:

-   **Status de Sincronização:** Um banner no topo da página informa se o sistema está conectado ao Google Sheets e exibe a data e hora da última sincronização. Isso dá ao usuário a confiança de que os dados estão atualizados.

-   **Painel de Indicadores (KPIs):** Um conjunto de cartões exibe os principais indicadores de performance:
    -   **Total de Veículos:** Número total de veículos cadastrados no sistema.
    -   **Veículos Vendidos:** Quantidade de veículos que já foram vendidos.
    -   **Novos no Pátio:** Veículos que deram entrada recentemente.
    -   **Ocorrências:** Veículos com algum tipo de pendência ou problema.
    -   **Receita Total:** Soma dos valores de venda de todos os veículos.
    -   **Valor Recebido:** Montante que já foi efetivamente pago e recebido.
    -   **Taxa de Recuperação:** Percentual do valor recuperado em relação ao valor de mercado (FIPE) dos veículos.

-   **Tabela de Últimos Veículos Adicionados:** Uma tabela simplificada mostra os veículos mais recentes que entraram no sistema, permitindo um acompanhamento rápido das novidades no pátio.

### Veículos

Esta seção é o núcleo operacional do sistema, onde os usuários podem consultar, filtrar e analisar todo o inventário de veículos.

-   **Busca Avançada:** Um campo de busca no topo da página permite que o usuário encontre veículos específicos rapidamente, pesquisando por placa, marca, modelo ou situação.

-   **Filtros por Status:** Uma barra de botões permite filtrar a lista de veículos com base no seu status atual. Cada botão exibe o nome do status e a contagem de veículos correspondente:
    -   Todos
    -   Novos No Pátio
    -   Venda Autorizada
    -   Vendido e Não Recebido
    -   Vendido e Recebido
    -   Ocorrências
    -   Proibida a Venda

-   **Tabela Detalhada de Veículos:** A principal funcionalidade desta seção é uma tabela completa e detalhada que exibe todas as informações relevantes de cada veículo. A tabela é paginada para lidar com um grande volume de dados e inclui as seguintes colunas:
    -   **Placa:** Identificação única do veículo.
    -   **Veículo:** Marca e modelo.
    -   **Situação:** Status atual do veículo no processo de venda.
    -   **Avaliação:** Classificação do veículo (e.g., Recuperável, Sucata).
    -   **Data Entrada:** Data em que o veículo foi cadastrado.
    -   **Valor FIPE:** Valor de mercado do veículo segundo a tabela FIPE.
    -   **Valor Sugerido:** Preço de venda sugerido pela administradora.
    -   **Valor Vendido:** Preço final pelo qual o veículo foi vendido.
    -   **Dias:** Número de dias que o veículo está no pátio.

## Seções e Páginas

| Seção     | Descrição                                                                                                  | Rota      |
| --------- | ---------------------------------------------------------------------------------------------------------- | --------- |
| Dashboard | Página inicial que apresenta uma visão geral dos principais indicadores e atividades recentes.               | `/`       |
| Veículos  | Seção dedicada à consulta e gerenciamento do inventário completo de veículos, com ferramentas de busca e filtro. | `/veiculos` |

## Fluxo de Trabalho do Usuário

O fluxo de trabalho típico de um usuário no sistema de Gestão de Salvados pode ser descrito da seguinte forma:

1.  **Acesso e Visão Geral:** O usuário acessa o sistema e é direcionado para o Dashboard. Ali, ele tem uma visão geral e imediata da situação da operação de salvados, verificando os principais indicadores e os últimos veículos adicionados.

2.  **Consulta e Análise:** O usuário navega para a seção "Veículos" para realizar consultas mais detalhadas. Ele pode utilizar a barra de busca para encontrar um veículo específico ou usar os filtros de status para analisar grupos de veículos (e.g., todos os veículos com "Venda Autorizada").

3.  **Tomada de Decisão:** Com base nas informações apresentadas na tabela de veículos, o usuário pode tomar decisões importantes, como por exemplo: identificar veículos que estão há muito tempo no pátio e precisam de uma ação, verificar quais veículos já tiveram o pagamento recebido, ou analisar a performance de vendas de um determinado período.

4.  **Atualização de Dados (via Google Sheets):** Caso seja necessário atualizar alguma informação, o usuário (provavelmente do departamento de sinistros) abre a planilha do Google Sheets correspondente, realiza as alterações necessárias, e o sistema reflete essas mudanças na próxima sincronização.

## Guia de Uso

Este guia rápido descreve como realizar as tarefas mais comuns no sistema.

### Consultando a Performance Geral

1.  Acesse a URL: [https://salvados.administradoramutual.com.br/](https://salvados.administradoramutual.com.br/).
2.  Na página inicial (Dashboard), observe os cartões de indicadores para ter uma visão geral da receita, veículos vendidos e taxa de recuperação.
3.  Role a página para ver a lista de "Últimos Veículos Adicionados" e se manter atualizado sobre as entradas recentes.

### Buscando um Veículo Específico

1.  No menu superior, clique em "Veículos".
2.  Utilize o campo de busca "Buscar por placa, marca, modelo ou situação..." para digitar a informação que você possui.
3.  A tabela será filtrada automaticamente, exibindo apenas os resultados correspondentes.

### Filtrando Veículos por Status

1.  Acesse a seção "Veículos".
2.  Clique em um dos botões de filtro localizados abaixo do campo de busca (e.g., "Venda Autorizada", "Vendido e Recebido").
3.  A tabela será atualizada para mostrar apenas os veículos que correspondem ao status selecionado. Para voltar à visualização completa, clique em "Todos".

## Integrações

A integração mais crítica do sistema é com a **API do Google Sheets**. Esta integração funciona como o backend de dados da aplicação. O fluxo de dados parece ser unidirecional: a planilha do Google Sheets atua como a fonte da verdade, e o sistema web a consome para exibir as informações de forma organizada e interativa.

A autenticação para acessar os dados da planilha é realizada através do protocolo **OAuth 2.0**. O botão "Acesso aos Dados Google" inicia o fluxo de autorização, onde o usuário concede permissão para que a aplicação leia os dados da planilha em seu nome. Este método é seguro e padrão para acesso a APIs do Google.

## Observações e Recomendações

O sistema de Gestão de Salvados é uma ferramenta robusta e bem projetada para o seu propósito. No entanto, algumas melhorias e pontos de atenção podem ser considerados para futuras versões:

-   **Detalhes da Stack Técnica:** Para facilitar a manutenção e a evolução do sistema, é altamente recomendável documentar as versões específicas das bibliotecas utilizadas (React, Vite) e detalhar a solução de estilização (e.g., Styled-components v5, CSS Modules com PostCSS). Isso ajuda a evitar problemas de compatibilidade no futuro.

-   **Diagrama de Arquitetura:** A criação de um diagrama de arquitetura, mesmo que simples, seria de grande valor. Ele poderia ilustrar o fluxo de dados desde a planilha do Google Sheets, passando pela API do Google, até o frontend React, e como o usuário interage com cada componente. Ferramentas como o Mermaid.js podem ser usadas para criar diagramas diretamente no Markdown.

-   **Manual do Usuário e Treinamento:** Um manual do usuário detalhado, com capturas de tela e guias passo a passo para cada funcionalidade, é essencial para garantir que todos os usuários possam extrair o máximo de valor da ferramenta. Este documento pode ser a base para sessões de treinamento com as equipes.

-   **Implementação de Funcionalidades de Edição (CRUD):** A maior oportunidade de evolução do sistema está na implementação de funcionalidades de edição, criação e exclusão de registros diretamente na interface (operações CRUD - Create, Read, Update, Delete). Isso transformaria o sistema de uma ferramenta de visualização para uma plataforma de gerenciamento completa, eliminando a necessidade de interação direta com a planilha e centralizando todo o fluxo de trabalho na aplicação. A API do Google Sheets permite a escrita de dados, o que viabiliza essa evolução.

-   **Sistema de Autenticação e Autorização:** A recomendação mais crítica é a implementação de um sistema de login. Embora a visualização inicial seja pública, os dados são sensíveis e o acesso para edição (caso implementado) deve ser estritamente controlado. Um sistema de autenticação (e.g., com e-mail e senha, ou integrado com o Google) e autorização (definindo diferentes níveis de permissão para diferentes usuários) é fundamental para garantir a segurança e a integridade dos dados.

-   **Melhorias na Tabela de Veículos:** A tabela de veículos poderia ser aprimorada com funcionalidades de ordenação por coluna e paginação no lado do cliente para uma navegação mais fluida. A adição de um link em cada linha para uma página de detalhes do veículo, com mais informações e um histórico de alterações, também seria uma melhoria significativa.
