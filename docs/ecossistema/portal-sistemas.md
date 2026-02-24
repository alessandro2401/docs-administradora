# Portal de Sistemas

> Documentação completa do Portal de Sistemas, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo | Detalhe |
|-------|---------|
| **URL** | [https://sistemas.administradoramutual.com.br/](https://sistemas.administradoramutual.com.br/) |
| **Status** | Ativo |
| **Tipo de Acesso** | Requer Login |
| **Última Verificação** | 24 de Fevereiro de 2026 |

## Propósito e Público-Alvo

O Portal de Sistemas da Administradora Mutual serve como um hub centralizado para acesso a todos os sistemas e ferramentas internas da empresa. O seu principal propósito é unificar e simplificar o acesso dos colaboradores às diversas plataformas que suportam as operações do dia a dia, desde dashboards orçamentários e ferramentas de cálculo financeiro até sistemas de gestão de documentos e manuais de marca. O público-alvo são exclusivamente os colaboradores e a diretoria da Administradora Mutual, que necessitam de um ponto de entrada único e seguro para as ferramentas corporativas.

## Stack Técnica

| Tecnologia | Uso |
|-----------|-----|
| **Framework** | N/A (HTML/CSS/JS puros) |
| **Linguagem** | JavaScript |
| **Estilização** | CSS |
| **Hospedagem** | Vercel (inferido) |
| **Outras Libs** | Lucide Icons |

## Layout e Design

O layout do Portal de Sistemas é limpo e funcional, projetado para facilitar a navegação e o acesso rápido aos sistemas. A interface é composta por um header fixo, uma área de conteúdo principal e um rodapé implícito.

- **Header**: O cabeçalho contém o logotipo da empresa, o título "Portais e Sistemas", e um botão de "Sair" no canto superior direito, que exibe o e-mail do usuário logado.
- **Conteúdo Principal**: A área de conteúdo principal é organizada em um grid responsivo de cards. Cada card representa um sistema ou portal, contendo um ícone, o nome do sistema, uma breve descrição e a URL de acesso. O primeiro card, "Dashboard Orçamentário 2026", tem um destaque visual, indicando sua importância ou novidade.
- **Cores**: A paleta de cores é baseada em tons de azul e branco, com detalhes em roxo e cinza, transmitindo uma imagem profissional e moderna. O fundo utiliza um gradiente suave de azul.
- **Tipografia**: A fonte utilizada é sans-serif, garantindo boa legibilidade em diferentes dispositivos.
- **Responsividade**: O layout é responsivo e se adapta a diferentes tamanhos de tela, reorganizando os cards em menos colunas em dispositivos móveis.

## Funcionalidades

### Acesso Centralizado

A principal funcionalidade do portal é agregar e fornecer acesso a todos os sistemas internos da Administradora Mutual a partir de um único local.

### Autenticação Segura

O acesso ao portal é protegido por um sistema de login que requer e-mail e senha corporativos, garantindo que apenas colaboradores autorizados possam acessar os sistemas.

## Seções e Páginas

| Seção | Descrição | Rota |
|-------|-----------|------|
| Dashboard Orçamentário 2026 | Painel de gestão orçamentária do Grupo MMB e Alpha Proteções. | grupommb2026.manus.space/estrutura |
| Cálculo para Indenização Financeira - Parcial | Sistema de cálculo para antecipação de valores. | sma.administradoramutual.com.br |
| Cálculo para Indenização Financeira - Total | Sistema de cálculo para antecipação de valores total. | total.administradoramutual.com.br |
| Central de Notícias | Notícias do mercado de seguros e proteção patrimonial | noticias.administradoramutual.com.br |
| Monitoramento DOU | Sistema de monitoramento de publicações do Diário Oficial - Setor de Seguros | diariomont-xfarhndy.manus.space |
| Due Diligence | Formulário de análise de viabilidade de carteira | formulario.administradoramutual.com.br |
| Material de Constituição S4 | Documentação e informações sobre a constituição da seguradora | s4.administradoramutual.com.br |
| Gerador de Assinatura | Ferramenta para criar e personalizar a assinatura de e-mail padrão | assinaturas.administradoramutual.com.br |
| Gestão de Salvados | Plataforma para gestão e acompanhamento de veículos salvados | salvados.administradoramutual.com.br |
| Gerador de Prompts | Ferramenta para criação e otimização de prompts para IA | prompts.administradoramutual.com.br |
| Documentação | Base de conhecimento e documentação técnica | docs.administradoramutual.com.br |
| Grupo MMB | Hub Administrativo e de Pós-Venda | grupommb.administradoramutual.com.br |
| POP Evento e Sinistro | Procedimentos operacionais padrão para gestão de sinistros | sinistro.administradoramutual.com.br |
| POP Financeiro | Procedimentos operacionais do departamento financeiro | financeiro.administradoramutual.com.br |
| Manual da Marca | Identidade visual, logo, cores e aplicações da marca | marca.administradoramutual.com.br |
| Análise Gestão Segura | Análise completa dos POPs da Gestão Segura | gestaosegura.administradoramutual.com.br |
| POPs Comerciais | Procedimentos operacionais do setor comercial | comercial.administradoramutual.com.br |
| POTERE - Aluguéis Ativos | Sistema de gestão de frota e aluguéis ativos da parceria POTERE/Helpcar Locadora | locadora.administradoramutual.com.br |
| Gestão de Sites | Painel administrativo para gestão dos sites do grupo | sites.administradoramutual.com.br |
| SOU - Sistema Operacional Unificado | Plataforma unificada de operações | sou.administradoramutual.com.br |

## Integrações

O Portal de Sistemas é o ponto central de integração para todos os sistemas listados na seção anterior. Ele não consome APIs externas, mas atua como um gateway de acesso para as outras aplicações do ecossistema da Administradora Mutual.

## Observações e Recomendações

O portal cumpre bem seu propósito de centralizar o acesso aos sistemas. Como sugestão de melhoria, poderia ser implementado um sistema de busca para facilitar a localização de sistemas específicos, especialmente se a quantidade de sistemas aumentar no futuro. Adicionalmente, a inclusão de um rodapé com informações de contato do suporte técnico poderia ser útil para os usuários.


## Análise Detalhada do Layout

O design do "Portal de Sistemas" foi concebido com foco na **usabilidade e eficiência**, priorizando o acesso rápido e intuitivo às ferramentas internas da Administradora Mutual. A estrutura visual é minimalista, evitando distrações e centrando a atenção do usuário na funcionalidade principal: a seleção de sistemas.

### Header

O cabeçalho é uma barra horizontal fixa no topo da página, garantindo que seus elementos estejam sempre visíveis, mesmo ao rolar a página (embora a página atual não tenha conteúdo suficiente para rolagem). Ele contém:

- **Título e Subtítulo**: À esquerda, o título "Portais e Sistemas" é acompanhado por um subtítulo "Acesso centralizado aos sistemas internos da Administradora Mutual", reforçando o propósito da página.
- **Informações do Usuário e Botão de Sair**: No canto superior direito, há uma área que exibe o nome "Diretoria" e o e-mail "diretoria@administradoramutual.com.br", confirmando a identidade do usuário logado. Ao lado, o botão **Sair** permite encerrar a sessão de forma segura.

### Grid de Sistemas

A área de conteúdo principal é dominada por um **grid de cards responsivo**. Esta abordagem modular permite uma organização clara e visualmente agradável dos diversos sistemas.

- **Card de Destaque**: O primeiro card, "Dashboard Orçamentário 2026", possui um design diferenciado, com um fundo mais escuro e um ícone proeminente. A tag "NOVO — EXERCÍCIO 2026" chama a atenção para uma ferramenta recente ou de alta relevância, guiando o usuário para ações prioritárias.
- **Cards Padrão**: Os demais sistemas são apresentados em cards brancos com bordas sutis. Cada card contém:
    - Um **ícone** do Lucide Icons que representa visualmente a função do sistema (cálculo, notícias, documentos, etc.).
    - O **nome do sistema** em destaque.
    - Uma **breve descrição** de sua finalidade.
    - A **URL** de acesso direto, que, embora não seja clicável diretamente no card, informa o endereço do sistema.

### Paleta de Cores e Tipografia

A escolha de cores e fontes contribui para a identidade visual coesa e profissional do portal.

- **Cores Primárias**: O fundo da página utiliza um gradiente suave que vai de um azul escuro (#1e3a8a) para um roxo (#312e81), criando uma atmosfera moderna e corporativa.
- **Cores dos Cards**: Os cards padrão são brancos (#FFFFFF), proporcionando alto contraste para o texto em preto. O card de destaque usa um azul mais escuro (#1e40af) para o fundo.
- **Fontes**: A tipografia é baseada em uma fonte **sans-serif** (provavelmente Inter ou similar), escolhida por sua excelente legibilidade em telas digitais. Os tamanhos de fonte são hierarquizados para diferenciar títulos, descrições e URLs.

### Responsividade

O layout foi construído com uma abordagem *mobile-first*, garantindo uma experiência de usuário consistente em diferentes dispositivos. Em telas maiores (desktops), o grid exibe três colunas de cards. Em telas menores (tablets e smartphones), o grid se ajusta para duas ou uma coluna, e os elementos do cabeçalho são reorganizados para otimizar o espaço, garantindo que a navegação permaneça funcional e agradável.

## Análise Detalhada das Funcionalidades

### Sistema de Autenticação

O portal implementa um sistema de autenticação robusto para garantir a segurança dos dados e o acesso restrito.

- **Tela de Login**: A página inicial para usuários não autenticados é uma tela de login limpa e direta. Ela solicita um **Email corporativo** e uma **Senha**. A interface é minimalista, com o logo da empresa e um fundo gradiente, focando a atenção do usuário no formulário de entrada.
- **Validação de Acesso**: O sistema valida as credenciais fornecidas contra uma base de dados de colaboradores autorizados. Em caso de sucesso, o usuário é redirecionado para o dashboard principal. Em caso de falha, uma mensagem de erro (não visualizada, mas inferida) seria exibida.
- **Gerenciamento de Sessão**: Após o login, uma sessão é criada para o usuário, que é mantida enquanto ele navega entre os diferentes sistemas. O botão **Sair** no cabeçalho permite que o usuário encerre sua sessão de forma explícita, invalidando o token de acesso e protegendo a conta contra uso não autorizado.

### Hub de Navegação

O portal atua como um *launchpad* ou hub de navegação, e sua funcionalidade central é direcionar os usuários para as aplicações corretas.

- **Links para Sistemas**: Cada card no grid funciona como um link para um sistema específico. Ao clicar em um card, o usuário é redirecionado para a URL correspondente em uma nova aba ou na mesma janela, dependendo da implementação.
- **Organização Lógica**: Os sistemas são agrupados visualmente, embora não haja uma categorização explícita. A disposição parece seguir uma lógica de importância ou frequência de uso, com o dashboard orçamentário em destaque.

## Observações e Recomendações Adicionais

- **Melhoria na Experiência do Usuário (UX)**: Embora funcional, a experiência do usuário poderia ser aprimorada. Os cards poderiam ser inteiramente clicáveis, em vez de depender de um link de texto. Adicionar um efeito de *hover* para indicar interatividade também seria benéfico.
- **Personalização**: Uma futura iteração poderia incluir a personalização do dashboard, permitindo que os usuários favoritem ou reorganizem os sistemas que mais utilizam, criando um ambiente de trabalho mais adaptado às suas necessidades individuais.
- **Segurança**: É crucial garantir que todas as comunicações entre o cliente e o servidor sejam feitas sobre HTTPS para proteger as credenciais do usuário e os dados da sessão. A implementação atual já segue essa boa prática.
- **Manutenibilidade**: O uso de componentes modulares (cards) facilita a adição, remoção ou atualização de sistemas no portal com o mínimo de esforço de desenvolvimento, o que é uma excelente prática de manutenibilidade.
