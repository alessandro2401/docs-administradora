# Manual da Marca - Grupo MMB

> Documentação completa do Manual da Marca do Grupo MMB, incluindo propósito, diretrizes de identidade visual, stack técnica e guia de uso.

## Informações Gerais

| Campo | Detalhe |
|-------|---------|
| **URL** | [https://marca.administradoramutual.com.br/](https://marca.administradoramutual.com.br/) |
| **Status** | Ativo |
| **Tipo de Acesso** | Público |
| **Última Verificação** | 24 de Fevereiro de 2026 |

## Propósito e Público-Alvo

O site "Manual da Marca" do Grupo MMB serve como um guia centralizado para a identidade visual e verbal da holding e de suas marcas associadas. O propósito principal é garantir consistência, alinhamento e fortalecimento institucional na comunicação visual e escrita de todas as empresas do ecossistema.

O público-alvo é primariamente interno, incluindo equipes de marketing, design, comunicação e desenvolvimento, além de parceiros e fornecedores que precisam aplicar a marca do Grupo MMB e suas submarcas em qualquer material. O site resolve o problema da falta de padronização, fornecendo diretrizes claras sobre o uso de logotipos, cores, tipografia e outros elementos da identidade da marca.

## Stack Técnica

| Tecnologia | Uso |
|-----------|-----|
| **Framework** | Vite (inferido pela estrutura e ausência de frameworks como Next.js ou Gatsby) |
| **Linguagem** | JavaScript |
| **Estilização** | CSS puro (com variáveis CSS para temas) |
| **Hospedagem** | Vercel (inferido pelos padrões de mercado para sites estáticos) |
| **Outras Libs** | Nenhuma biblioteca externa de grande porte foi detectada. |

## Layout e Design

O layout do site é limpo, moderno e funcional, projetado para facilitar a navegação e a consulta das informações. A estrutura é dividida em duas colunas principais:

*   **Header/Sidebar (Coluna Esquerda):** Uma barra lateral fixa à esquerda que contém o logotipo "Manual da Marca - Identidade Visual" no topo e um menu de navegação vertical. Este menu lista todas as marcas do Grupo MMB, permitindo ao usuário alternar rapidamente entre os manuais de cada uma. O fundo é um azul escuro (#001f3f), e o texto é branco, garantindo alto contraste.
*   **Conteúdo Principal (Coluna Direita):** A área principal da página, onde o conteúdo do manual da marca selecionado é exibido. O fundo é branco, com texto predominantemente escuro para facilitar a leitura.

**Cores:**
*   **Principal (Azul Escuro):** `#001f3f` (usado na sidebar)
*   **Texto (Branco):** `#FFFFFF` (usado na sidebar)
*   **Fundo (Branco):** `#FFFFFF` (usado no conteúdo principal)
*   **Texto (Preto):** `#000000` (usado no conteúdo principal)

**Tipografia:**
*   **Fonte Principal:** Montserrat (Regular, Medium, SemiBold, Bold), conforme especificado no próprio manual.

**Responsividade:** O site não é totalmente responsivo. Em telas menores, o layout de duas colunas é mantido, mas o conteúdo principal fica espremido, e a barra lateral não se adapta, o que prejudica a usabilidade em dispositivos móveis. Seria necessário implementar um design responsivo que transforme a barra lateral em um menu hambúrguer em telas menores.

**Tema Claro/Escuro:** Não há funcionalidade de alternância de tema claro/escuro.

## Funcionalidades

### Navegação entre Manuais de Marca
O menu na barra lateral esquerda é a principal funcionalidade interativa. Ele permite que o usuário selecione uma das marcas do Grupo MMB para visualizar seu respectivo manual de identidade visual. Ao clicar em um item do menu, o conteúdo na área principal é atualizado para exibir as diretrizes da marca selecionada.

### Exibição de Diretrizes da Marca
O site exibe de forma detalhada todas as diretrizes necessárias para a aplicação correta da marca, incluindo:
*   **Quem Somos:** Descrição da empresa/marca.
*   **Propósito, Missão e Visão:** Os pilares estratégicos da marca.
*   **Arquitetura de Marcas:** Como a marca se encaixa no ecossistema do Grupo MMB.
*   **Tipografia:** Fontes primárias e secundárias, com exemplos de aplicação.
*   **Aplicações do Logo:** Variações do logotipo (horizontal, vertical, simplificado) e orientações de uso em diferentes fundos e contextos.
*   **Favicon:** Especificação do ícone para navegadores.

## Seções e Páginas

O site opera como uma Single Page Application (SPA), onde o conteúdo é carregado dinamicamente na mesma página. As "rotas" são simuladas pela seleção no menu lateral.

| Seção | Descrição | Rota (simulada) |
|-------|-----------|------|
| Grupo MMB | Manual da marca da holding Grupo MMB. | / (padrão) |
| Administradora Mutual | Manual da marca da Administradora Mutual. | #administradora-mutual |
| Movimento Mais Seguro | Manual da marca do Movimento Mais Seguro. | #movimento-mais-seguro |
| Potere Seguro Auto | Manual da marca da Potere Seguro Auto. | #potere-seguro-auto |
| Potere Consórcio | Manual da marca da Potere Consórcio. | #potere-consorcio |
| Potere Locadora | Manual da marca da Potere Locadora. | #potere-locadora |
| Juntos Pod+ | Manual da marca do Juntos Pod+. | #juntos-pod-mais |
| Mais Brasil Motorcycle | Manual da marca da Mais Brasil Motorcycle. | #mais-brasil-motorcycle |
| Movimento Mais Brasil | Manual da marca do Movimento Mais Brasil. | #movimento-mais-brasil |
| Alpha Proteções | Manual da marca da Alpha Proteções. | #alpha-protecoes |
| Soluções Corretora | Manual da marca da Soluções Corretora. | #solucoes-corretora |
| AURA Seguradora | Manual da marca da AURA Seguradora. | #aura-seguradora |
| SOU Portal | Manual da marca do SOU Portal. | #sou-portal |

## Integrações

O site não possui integrações diretas com APIs ou serviços externos visíveis ao usuário final. No entanto, ele serve como um ponto de integração de identidade para todo o ecossistema de sites do Grupo MMB, fornecendo os recursos visuais (logotipos, etc.) que são utilizados nos outros portais.

## Observações e Recomendações

*   **Responsividade:** A principal recomendação é tornar o site totalmente responsivo. Em dispositivos móveis, a experiência do usuário é significativamente comprometida. A implementação de um menu "hambúrguer" para a barra lateral em telas menores é essencial.
*   **Stack Técnica:** A stack é simples e eficiente para um site estático. No entanto, a ausência de um framework de componentização (como React ou Vue) pode dificultar a manutenção e a escalabilidade se novas funcionalidades complexas forem adicionadas no futuro.
*   **Download de Ativos:** Seria útil adicionar botões de download para os diferentes formatos de logotipo (SVG, PNG) diretamente na página, facilitando o acesso aos ativos pelos usuários.
*   **Conteúdo:** O conteúdo é extremamente detalhado e bem organizado, cumprindo seu propósito de ser um guia completo da marca.

## Análise de Acessibilidade

O site apresenta um bom contraste entre o texto e o fundo na maior parte do conteúdo, o que é positivo para a legibilidade. No entanto, a falta de responsividade é um grande impedimento para a acessibilidade em dispositivos móveis. Além disso, as imagens dos logotipos não possuem textos alternativos (alt text), o que dificulta a compreensão para usuários de leitores de tela. Recomenda-se a adição de `alt` tags descritivas para todas as imagens.

## Performance

O site é extremamente rápido e performático, devido à sua natureza estática e à ausência de bibliotecas pesadas. O tempo de carregamento inicial é baixo, proporcionando uma excelente experiência ao usuário nesse quesito. O uso de SVG para o favicon e logotipos também contribui para a performance e qualidade visual em diferentes resoluções.

## Análise de SEO

Como o site é um manual de marca interno, a otimização para motores de busca (SEO) não é uma prioridade crítica. O título da página é claro (`Manual da Marca - Grupo MMB`), mas faltam meta descrições e outras tags de SEO que poderiam ser úteis se o site tivesse um propósito público. O conteúdo é rico e relevante, mas não está estruturado de forma a ser facilmente indexado por buscadores para consultas públicas.

## Potenciais Melhorias de UX/UI

*   **Busca:** Implementar uma funcionalidade de busca para que os usuários possam encontrar rapidamente diretrizes específicas (ex: "cores primárias", "logo horizontal").
*   **Navegação Ativa:** Destacar visualmente no menu lateral qual manual de marca está ativo, melhorando a orientação do usuário.
*   **Interatividade:** Adicionar exemplos interativos, como paletas de cores que podem ser copiadas com um clique ou previews de tipografia com texto customizável.
*   **Versão para Impressão:** Criar uma folha de estilos específica para impressão, permitindo que os usuários gerem versões físicas do manual de forma otimizada.

## Estrutura de Arquivos (Inferida)

Baseado na estrutura de um projeto Vite padrão, a organização dos arquivos provavelmente seria a seguinte:

```
/projeto
|-- /public
|   |-- LOGOMMB.svg
|-- /src
|   |-- /components
|   |   |-- Sidebar.js
|   |   |-- Content.js
|   |-- /styles
|   |   |-- main.css
|   |-- App.js
|   |-- main.js
|-- index.html
|-- package.json
|-- vite.config.js
```

Esta estrutura promove a modularidade e a separação de responsabilidades, facilitando a manutenção do código.

## Histórico de Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0    | 24/02/2026 | Criação inicial da documentação. |

## Glossário

*   **Holding:** Empresa que detém a maioria das ações de outras empresas, controlando-as.
*   **Identidade Visual:** Conjunto de elementos gráficos que representam uma marca (logotipo, cores, tipografia).
*   **Tipografia:** Estudo e aplicação de fontes e caracteres.
*   **Favicon:** Ícone exibido na aba do navegador ou na lista de favoritos.
*   **SPA (Single Page Application):** Aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo.
*   **Vite:** Ferramenta de build frontend que oferece uma experiência de desenvolvimento extremamente rápida.
*   **Responsividade:** Capacidade de um site se adaptar a diferentes tamanhos de tela e dispositivos.
*   **UX/UI:** User Experience (Experiência do Usuário) e User Interface (Interface do Usuário).
*   **SEO:** Search Engine Optimization (Otimização para Motores de Busca).

## Referências

[1] Manual da Marca - Grupo MMB. Disponível em: [https://marca.administradoramutual.com.br/](https://marca.administradoramutual.com.br/)
