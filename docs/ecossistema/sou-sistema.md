# SOU - Sistema de Organização Unificada

> Documentação completa do SOU (Sistema de Organização Unificada), incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo                  | Detalhe                                               |
| ---------------------- | ----------------------------------------------------- |
| **URL**                | [https://sou.administradoramutual.com.br/](https://sou.administradoramutual.com.br/) |
| **Status**             | Ativo                                                 |
| **Tipo de Acesso**     | Público                                               |
| **Última Verificação** | 24 de Fevereiro de 2026                               |

## Propósito e Público-Alvo

O SOU (Sistema de Organização Unificada) é um portal centralizado projetado para consolidar e fornecer acesso a todas as informações críticas relacionadas a um projeto específico da Administradora Mutual. O sistema serve como um hub de documentação e acompanhamento, garantindo que todas as partes interessadas tenham uma visão clara e atualizada do andamento do projeto.

O público-alvo inclui gestores de projeto, equipes de desenvolvimento, stakeholders e o departamento jurídico. O portal resolve o problema da dispersão de informações, centralizando contratos, cronogramas, diagramas de arquitetura, e o status geral do projeto em um único local de fácil acesso.

## Stack Técnica

| Tecnologia    | Uso                                         |
| ------------- | ------------------------------------------- |
| **Framework** | React (Vite)                                |
| **Linguagem** | JavaScript                                  |
| **Estilização** | CSS Padrão (sem framework detectado)        |
| **Hospedagem**  | Vercel                                      |
| **Outras Libs** | Não especificado                            |

## Layout e Design

O design do site é limpo, moderno e focado na usabilidade, utilizando uma paleta de cores sóbria com tons de azul, branco e cinza, o que transmite profissionalismo e seriedade.

- **Header**: O cabeçalho principal é integrado ao layout, destacando o nome do sistema "SOU - Sistema de Organização Unificada" e um status de "Projeto em Andamento".
- **Sidebar**: Uma barra de navegação vertical fixa à esquerda da tela contém os links para as principais seções do portal. Cada item possui um ícone e um rótulo de texto, facilitando a identificação rápida.
- **Cores**: A paleta de cores primária inclui azul (`#007bff`), branco (`#ffffff`) e tons de cinza para o texto e fundos. O uso de azul nos botões e links principais cria um contraste visual claro para ações.
- **Tipografia**: A fonte principal é sans-serif (provavelmente Roboto ou similar), garantindo legibilidade em diferentes dispositivos. Os tamanhos de fonte são bem hierarquizados, com títulos maiores e texto de corpo menor.
- **Responsividade**: O layout parece ser responsivo, embora testes em múltiplos dispositivos sejam necessários para confirmar. A estrutura com sidebar e conteúdo principal é um padrão comum que se adapta bem a telas menores, potencialmente ocultando a sidebar em um menu "hambúrguer".
- **Tema**: O site utiliza um tema claro, sem opção aparente para um modo escuro.

## Funcionalidades

### Visão Geral (Dashboard)
O painel principal oferece uma visão consolidada do status do projeto, com as seguintes informações:
- **Status do Projeto**: Indica a fase atual (ex: "Fase 1 - Levantamento & Requisitos").
- **Documentos**: Quantifica o número de contratos e anexos disponíveis.
- **Proteção Jurídica**: Confirma o status do contrato consolidado (ex: "Ativa").
- **Próximo Marco**: Apresenta o próximo marco importante do projeto e sua previsão (ex: "MVP v1.0").

### Acesso Rápido
- **Ver Contrato Consolidado**: Botão de destaque que leva diretamente ao documento do contrato principal.
- **Acompanhar Cronograma**: Botão que direciona para a visualização do cronograma do projeto.

### Seções de Conteúdo
- **Contratos & Jurídico**: Área para acessar o Contrato Mestre e outros documentos legais.
- **Cronogramas & Prazos**: Seção para visualizar o gráfico de Gantt, marcos e fases do desenvolvimento.
- **Arquitetura & Diagramas**: Espaço para explorar a arquitetura do sistema, fluxos de dados e integrações.

### Atualizações Recentes
Um feed na página inicial que lista as últimas alterações e uploads no portal, como a publicação de novos documentos.

## Seções e Páginas

| Seção                        | Descrição                                                                 | Rota           |
| ---------------------------- | ------------------------------------------------------------------------- | -------------- |
| **Visão Geral**              | Dashboard com o resumo e status do projeto.                               | `/`            |
| **Contratos**                | Repositório de todos os documentos contratuais e jurídicos.               | `/contratos`   |
| **Cronogramas**              | Visualização das linhas do tempo, fases e entregas do projeto.            | `/cronogramas` |
| **Diagramas**                | Central de diagramas de arquitetura, fluxos de dados e modelos.           | `/diagramas`   |
| **Documentação**             | Documentação técnica e funcional do sistema.                              | `/documentacao`|
| **Anexos Técnicos**          | Arquivos e documentos técnicos complementares.                            | `/anexos`      |
| **Manual da Marca**          | Diretrizes de identidade visual e uso da marca.                           | `/manual-marca`|
| **Modelo de Entrada do Sistema** | Documentação sobre o modelo de dados de entrada.                        | `/modelo-entrada`|

## Integrações

O portal SOU parece ser um sistema autocontido, focado em centralizar informações. Não há indicações visíveis de integrações diretas com APIs ou serviços externos na página inicial. No entanto, ele serve como um ponto de ligação para outros sistemas do ecossistema da Administradora Mutual ao fornecer toda a documentação necessária para integrações futuras.

## Observações e Recomendações

- O site cumpre bem seu propósito de ser um centro de informações, com uma interface clara e direta.
- **Recomendação**: Seria útil adicionar uma funcionalidade de busca para permitir que os usuários encontrem rapidamente documentos ou informações específicas, especialmente à medida que o volume de conteúdo crescer.
- **Recomendação**: A inclusão de um breadcrumb de navegação poderia melhorar a experiência do usuário ao navegar por seções mais profundas.
- **Ponto de Atenção**: Garantir que o controle de versão dos documentos seja claro e explícito para evitar o uso de informações desatualizadas.


### Repositório de Documentos
A seção de "Contratos e Documentação" funciona como um repositório central para todos os documentos legais e técnicos do projeto. Os usuários podem visualizar cada documento individualmente ou baixar um pacote completo contendo todos os arquivos em formato .zip. Cada documento na lista é apresentado com seu status (ex: "Assinado", "Em Análise"), um breve descritivo, e botões de ação para "Visualizar" ou "Baixar".


### Cronogramas e Prazos
A seção "Cronogramas e Prazos" oferece uma visão detalhada do planejamento do projeto. Ela inclui um Diagrama de Gantt que ilustra o cronograma de 12 meses, dividido em fases como Levantamento, Design, Desenvolvimento, Testes e Lançamento. A página também apresenta uma tabela com as fases do projeto, seus respectivos status e progresso, além de uma análise técnica aprofundada dos prazos e dependências. Os usuários podem exportar o Diagrama de Gantt para acompanhamento offline.


### Arquitetura e Diagramas
A seção "Arquitetura e Diagramas" fornece visualizações técnicas da estrutura, fluxo de dados e integrações do sistema. Ela é dividida em três abas:
- **Fluxo de Desenvolvimento**: Um fluxograma que detalha o processo completo do projeto, desde o levantamento de requisitos até o Go-live.
- **Arquitetura Evolutiva**: Um diagrama que mostra como a arquitetura do sistema é construída de forma incremental, fase por fase.
- **Mapa de Integrações**: Um mapa visual que ilustra como o sistema se conecta com APIs e serviços de terceiros.

Cada diagrama pode ser expandido para visualização em tela cheia ou baixado como uma imagem PNG para consulta offline.


### Documentação Técnica
A seção "Documentação" é o coração do portal, oferecendo um registro detalhado de todo o desenvolvimento do projeto SOU. Ela cobre desde a concepção inicial até a implementação da identidade visual e a integração com o ecossistema do Grupo MMB. A página está estruturada em várias subseções:
- **Visão Geral do Projeto**: Contextualiza o SOU e seus objetivos.
- **Linha do Tempo de Desenvolvimento**: Detalha as 8 fases do projeto, desde a concepção até a produção.
- **Arquitetura Técnica**: Apresenta a stack tecnológica utilizada tanto no portal SOU quanto no portal de marca associado.
- **Identidade Visual SOU**: Explica o conceito por trás do logotipo e as diretrizes de tipografia.
- **Domínios e Ambientes**: Lista os URLs dos portais em produção.

Os usuários podem baixar a documentação completa para consulta offline.


### Anexos Técnicos
A seção "Anexos Técnicos" é um repositório para documentos complementares que detalham aspectos específicos do projeto. Isso inclui especificações técnicas (SOW), detalhes de integrações, requisitos de segurança, acordos de nível de serviço (SLA), e muito mais. Assim como na seção de contratos, cada anexo pode ser visualizado individualmente e o pacote completo pode ser baixado.


### Manual da Marca
O portal possui um link para um "Manual da Marca" completo, hospedado em um subdomínio. Este manual detalha todos os aspectos da identidade visual do SOU, incluindo:
- **Conceito do Design**: A filosofia por trás do logotipo.
- **Paleta de Cores**: As cores primárias, secundárias e de status.
- **Tipografia**: A família de fontes utilizada e sua hierarquia.
- **Tom de Voz**: As diretrizes de comunicação da marca.
- **Variações e Aplicações**: As diferentes versões do logotipo e como aplicá-las.
- **Downloads**: Links para baixar os ativos da marca, como logotipos e o manual em PDF.


### Modelo de Entrada do Sistema
Esta seção não foi encontrada durante a navegação. O link parece estar quebrado ou redirecionando para a página do Manual da Marca. É provável que esta seção devesse conter a documentação sobre o modelo de dados de entrada do sistema, mas não está acessível no momento.
