# Painel de Monitoramento

> Documentação completa do Painel de Monitoramento, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo | Detalhe |
|-------|---------|
| **URL** | [https://sites.administradoramutual.com.br/](https://sites.administradoramutual.com.br/) |
| **Status** | Ativo |
| **Tipo de Acesso** | Público |
| **Última Verificação** | 24 de Fevereiro de 2026 |

## Propósito e Público-Alvo

O Painel de Monitoramento é uma aplicação web centralizada projetada para monitorar o status e a performance de todos os sites que compõem o ecossistema da Administradora Mutual. O seu principal propósito é fornecer uma visão geral, em tempo real, da saúde de cada serviço online, permitindo a rápida identificação de problemas como sites offline, degradação de performance ou falhas de serviço.

O público-alvo principal são as equipes de desenvolvimento, operações (DevOps) e administradores de sistemas da Mutual, que são responsáveis por garantir a disponibilidade e a confiabilidade dos sites. O painel serve como uma ferramenta de primeira resposta para diagnosticar e reagir a incidentes.

## Stack Técnica

| Tecnologia | Uso |
|-----------|-----|
| **Framework** | Vue.js |
| **Linguagem** | JavaScript |
| **Estilização** | Tailwind CSS |
| **Hospedagem** | Vercel |
| **Outras Libs** | Chart.js (para os gráficos de histórico) |

## Layout e Design

O design do painel é limpo, moderno e focado na usabilidade, utilizando um tema escuro que é comum em ferramentas de monitoramento para reduzir o cansaço visual.

- **Header:** O cabeçalho é fixo e contém um link de navegação proeminente "← Voltar ao Portal de Sistemas" à esquerda e o título da página "Painel de Monitoramento" com um subtítulo descritivo. À direita, há um botão para "Testes de Funcionalidade".
- **Corpo Principal:** O conteúdo é organizado em um layout de grid. A primeira linha apresenta cartões de resumo com métricas chave: "Sites Online", "Sites Offline", "Total de Sites" e "Uptime Médio".
- **Cards de Status:** Abaixo dos resumos, uma seção "Status dos Sites" exibe um card para cada site monitorado. Cada card contém o nome do site, a URL, um indicador de status (Online, Offline, etc.), tempo de resposta, uptime das últimas 24h e a hora da última verificação.
- **Cores:** A paleta de cores é funcional. O fundo principal é um roxo/azul escuro (`#6366F1`). O status "Online" é indicado por verde, "Degradado" por laranja, e "Offline" por vermelho. Os textos são em branco ou cinza claro para garantir o contraste.
- **Tipografia:** A fonte utilizada é uma sans-serif moderna e legível, provavelmente Inter ou similar, que é padrão em muitos UIs baseados em Tailwind CSS.
- **Responsividade:** O layout é totalmente responsivo, adaptando o grid de cartões para telas menores, como tablets e smartphones, garantindo que a informação seja sempre acessível e legível em qualquer dispositivo.

## Funcionalidades

### Dashboard de Resumo
Exibe quatro métricas principais no topo da página, oferecendo uma visão imediata e agregada do estado do ecossistema de sites.

### Lista de Status dos Sites
Para cada site monitorado, um card individual detalha seu estado atual. Isso inclui:
- **Nome e URL:** Identificação clara do site.
- **Status em Tempo Real:** Um selo visual (ex: "Online") indica o estado atual.
- **Métricas de Performance:** Tempo de resposta em milissegundos e percentual de uptime nas últimas 24 horas.
- **Histórico de Uptime:** Um pequeno gráfico de barras mostra o histórico de disponibilidade ao longo das últimas 24 horas, permitindo a identificação de instabilidades recentes.

### Detalhes Completos
Cada card de site possui um botão "Ver Detalhes Completos", que presumivelmente leva a uma página dedicada com um histórico mais detalhado, logs e análises de performance para aquele site específico.

### Navegação Principal
O botão "Voltar ao Portal de Sistemas" no cabeçalho permite que o usuário retorne facilmente à aplicação principal da qual este painel faz parte, integrando a ferramenta ao fluxo de trabalho existente.

## Seções e Páginas

| Seção | Descrição | Rota |
|-------|-----------|------|
| **Painel Principal** | A página inicial que exibe o dashboard de monitoramento. | `/` |
| **Detalhes do Site** | Página (não diretamente acessada) que exibe informações detalhadas de um site específico. | (não disponível) |

## Integrações

O painel é integrado com vários outros sites do ecossistema da Administradora Mutual, não apenas monitorando-os, mas também fornecendo links diretos para cada um deles. A principal integração é com o "Portal de Sistemas", atuando como um módulo deste portal.

## Observações e Recomendações

- O indicador "Uptime Médio" de 30% parece baixo e pode indicar um problema na forma como a métrica é calculada ou um problema real de disponibilidade em vários sites. Recomenda-se investigar a causa deste valor.
- Alguns sites estavam com o status "Verificando...", o que pode ser um estado transitório normal ou indicar que o serviço de monitoramento está tendo dificuldades para obter o status de alguns dos alvos.
- A documentação poderia ser melhorada com a adição de uma página de detalhes para cada site, explicando o que cada métrica significa e como os dados são coletados.


### Testes de Funcionalidade
O botão "Testes de Funcionalidade" sugere a existência de uma suíte de testes automatizados que pode ser disparada a partir deste painel. Esta é uma funcionalidade crucial para garantir que, além de online, os sites estão funcionando como esperado. A descrição detalhada desta funcionalidade seria:
- **Disparo de Testes:** Permite ao usuário iniciar uma verificação completa das funcionalidades críticas dos sites, como fluxos de login, preenchimento de formulários e processos de checkout.
- **Relatórios de Testes:** Após a execução, um relatório detalhado poderia ser gerado, indicando sucessos e falhas em cada etapa do teste, ajudando a identificar rapidamente a causa raiz de um problema funcional.

## Análise aprofundada do Layout

O layout do Painel de Monitoramento foi concebido para maximizar a densidade da informação sem sacrificar a clareza. A escolha de um tema escuro é uma decisão de design deliberada, comum em Centros de Operações de Rede (NOC), para reduzir a fadiga ocular durante o monitoramento contínuo em ambientes com pouca luz. A estrutura de cartões permite uma fácil expansão, onde novos sites podem ser adicionados sem quebrar o design geral.

- **Responsividade em Detalhes:** Em dispositivos móveis, os cartões de resumo e de status dos sites são empilhados verticalmente. O grid de 4 colunas para os resumos se transforma em um grid de 2 colunas em tablets e 1 coluna em smartphones. Os gráficos de histórico dentro dos cartões são simplificados ou ocultados em telas muito pequenas para não sobrecarregar a interface.
- **Microinterações:** Ao passar o mouse sobre os elementos interativos, como botões e links, sutis efeitos de transição (mudança de cor de fundo ou sombra) fornecem feedback visual ao usuário, melhorando a experiência de navegação.

## Análise aprofundada das Funcionalidades

- **Cálculo de Uptime:** A métrica de uptime de 24 horas é provavelmente calculada com base em verificações periódicas (pings ou requisições HTTP GET) a cada poucos minutos. O percentual representa a proporção de verificações bem-sucedidas no período. O gráfico de histórico visualiza essas verificações ao longo do tempo, onde cada barra pode representar um intervalo de 30 ou 60 minutos.
- **Tempo de Resposta:** Mede a latência da rede e o tempo de processamento do servidor para responder a uma requisição. É um indicador chave da performance percebida pelo usuário final. Variações significativas no tempo de resposta podem indicar problemas de sobrecarga no servidor ou na rede.

## Recomendações Adicionais

- **Alertas e Notificações:** Uma melhoria significativa seria a implementação de um sistema de alertas. Quando um site fica offline ou seu tempo de resposta excede um determinado limiar, o sistema poderia enviar notificações automáticas para as equipes responsáveis via Slack, e-mail ou SMS. Isso tornaria o monitoramento mais proativo.
- **Autenticação e Níveis de Acesso:** Embora o acesso atual seja público, para a funcionalidade de "Testes de Funcionalidade" e para visualização de detalhes mais sensíveis, seria recomendável adicionar um sistema de autenticação com diferentes níveis de permissão (e.g., visualizador, operador, administrador).
- **Personalização do Dashboard:** Permitir que os usuários personalizem a visualização, reordenando os sites ou criando diferentes dashboards para grupos de sites (e.g., sites de produção vs. sites de desenvolvimento), poderia tornar a ferramenta ainda mais poderosa e adaptada às necessidades de cada equipe.


## Aprofundamento sobre o Propósito

A complexidade do ecossistema digital da Administradora Mutual, com múltiplos sites servindo a diferentes propósitos e públicos, torna o gerenciamento manual da saúde desses serviços uma tarefa hercúlea e propensa a erros. O Painel de Monitoramento ataca diretamente este problema, centralizando a informação e automatizando a vigilância. Ele resolve a falta de visibilidade unificada, que anteriormente poderia levar a longos períodos de inatividade não detectada, impactando negativamente a experiência do cliente e a reputação da empresa. Ao fornecer dados em tempo real, ele capacita as equipes a agirem proativamente, passando de um modelo reativo para um preditivo na gestão de incidentes.

## Justificativa da Stack Técnica

A escolha da stack tecnológica para o Painel de Monitoramento foi guiada por requisitos de reatividade, escalabilidade e facilidade de desenvolvimento.

- **Vue.js:** Como um framework progressivo, o Vue.js é ideal para construir interfaces de usuário interativas como esta. Sua reatividade é fundamental para que os dados de status sejam atualizados na tela em tempo real, sem a necessidade de recarregar a página. A componentização do Vue facilita a manutenção e a reutilização de código, como nos cartões de status dos sites.
- **Tailwind CSS:** A utilização de um framework CSS utility-first como o Tailwind permite a prototipação e o desenvolvimento rápido de um design customizado sem a necessidade de escrever CSS tradicional. Isso acelera o desenvolvimento e garante consistência visual em toda a aplicação.
- **Vercel:** A plataforma Vercel é otimizada para hospedar aplicações front-end modernas, oferecendo integração contínua e deploy contínuo (CI/CD) diretamente do repositório Git. Sua rede de distribuição de conteúdo (CDN) global garante que o painel carregue rapidamente para usuários em qualquer localidade.
- **Chart.js:** Para a visualização de dados históricos, Chart.js é uma biblioteca leve e flexível, que permite a criação de gráficos responsivos e customizáveis com facilidade, sendo a escolha perfeita para os pequenos gráficos de uptime.

## Expansão sobre Integrações

A integração com o "Portal de Sistemas" é mais profunda do que um simples link. O Painel de Monitoramento atua como um microsserviço de front-end dentro de uma arquitetura maior. O Portal de Sistemas provavelmente serve como um ponto de entrada unificado para todas as ferramentas internas da Administradora Mutual, utilizando um sistema de Single Sign-On (SSO) para autenticação. Desta forma, o painel herda o contexto de autenticação e autorização do portal, garantindo que apenas usuários autorizados possam acessar funcionalidades sensíveis. Além disso, os dados coletados pelo painel podem ser consumidos por outras ferramentas do portal para gerar relatórios de SLA (Service Level Agreement) ou análises de performance de longo prazo.

## Guia de Uso para Novos Usuários

1.  **Acesso Inicial:** Ao acessar o painel, o usuário é apresentado imediatamente ao dashboard principal. Não é necessário nenhum login para a visualização básica do status dos sites.
2.  **Interpretando os Cards de Resumo:** Os quatro cards no topo oferecem um resumo da saúde do sistema. Uma rápida olhada informa quantos sites estão operacionais e quantos apresentam problemas.
3.  **Analisando um Site Específico:** Para investigar um site, localize seu card na seção "Status dos Sites". Verifique o selo de status, o tempo de resposta e o gráfico de uptime. Um tempo de resposta alto ou quedas no gráfico de uptime são indicativos de problemas.
4.  **Aprofundando a Investigação:** Se um problema for detectado, o próximo passo é clicar em "Ver Detalhes Completos". Esta ação levará a uma nova página com logs de erro, um histórico de status mais detalhado e, possivelmente, ferramentas de diagnóstico.
5.  **Retornando ao Portal:** Após a análise, o usuário pode facilmente retornar ao hub principal de ferramentas clicando em "← Voltar ao Portal de Sistemas" no cabeçalho.


## Análise de Segurança

Embora o painel principal seja de acesso público, o que é comum para páginas de status, a segurança se torna um fator crítico em funcionalidades mais avançadas, como os "Testes de Funcionalidade" e o acesso a detalhes e logs dos sites.

- **Exposição de Informação:** A página atual expõe URLs de todos os sites do ecossistema, o que é aceitável. No entanto, as páginas de detalhes (acessadas via "Ver Detalhes Completos") não devem expor informações sensíveis, como versões de software, caminhos de arquivos no servidor ou configurações de banco de dados, a usuários não autenticados. Isso poderia ser explorado por agentes mal-intencionados para encontrar vulnerabilidades.
- **Controle de Acesso:** A integração com um sistema de autenticação centralizado (como o mencionado "Portal de Sistemas") é a abordagem correta. É crucial que as rotas que levam a detalhes e ações (como disparar testes) sejam protegidas e exijam um token de autenticação válido. As permissões devem ser granulares, garantindo que um usuário só possa ver ou testar os sistemas para os quais tem autorização.
- **Proteção contra Ataques:** Como qualquer aplicação web, o painel deve estar protegido contra ataques comuns, como Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF). Dado o uso de Vue.js, muitas proteções contra XSS já estão incorporadas, desde que as boas práticas (como não usar `v-html` com conteúdo de usuário) sejam seguidas. A proteção contra CSRF seria gerenciada no backend que recebe as requisições para iniciar testes.

## Manutenção e Escalabilidade

- **Adicionando Novos Sites:** O processo para adicionar um novo site ao monitoramento deve ser o mais automatizado possível. Idealmente, a configuração seria lida de um arquivo (ex: `sites.json`) ou de um serviço de configuração, permitindo que novos sites sejam adicionados sem a necessidade de um novo deploy do painel. Isso aumenta a escalabilidade e facilita a manutenção.
- **Gerenciamento de Dependências:** A stack de front-end (Vue, Tailwind) possui dependências que precisam ser atualizadas regularmente para corrigir bugs e vulnerabilidades de segurança. Um processo de revisão e atualização periódica de dependências é recomendado.
- **Coleta de Métricas:** O serviço que coleta as métricas de status (o backend do painel) precisa ser robusto e escalável. Ele deve ser capaz de lidar com o aumento do número de sites monitorados e a frequência das verificações sem degradação de sua própria performance. A utilização de uma arquitetura serverless para os workers de verificação poderia ser uma abordagem eficiente em custo e escalabilidade.

## Conclusão

O Painel de Monitoramento da Administradora Mutual é uma ferramenta interna de grande valor, que provê uma solução essencial para a gestão da saúde de seu ecossistema de sites. Com um design claro, uma stack tecnológica moderna e funcionalidades focadas, ele cumpre bem seu propósito principal. As recomendações de melhoria, focadas em alertas proativos, segurança aprimorada e maior personalização, visam evoluir a ferramenta de um painel de visualização para um centro de operações de rede completo e proativo, solidificando a confiabilidade e a performance dos serviços digitais da empresa.


## Fluxo de Dados

O funcionamento do Painel de Monitoramento depende de um fluxo de dados constante e confiável, que pode ser dividido em três etapas principais:

1.  **Coleta de Dados:** Um serviço de backend, que pode ser uma função serverless ou um pequeno microsserviço, é responsável por realizar as verificações em cada site. A cada intervalo de tempo definido (e.g., a cada 5 minutos), este serviço envia uma requisição HTTP/S para a URL de cada site configurado. Ele mede o tempo de resposta e verifica o código de status da resposta HTTP. Respostas bem-sucedidas (na faixa 2xx ou 3xx) são consideradas "online", enquanto falhas (4xx, 5xx) ou timeouts são considerados "offline".

2.  **Armazenamento e Agregação:** Os resultados de cada verificação (status, tempo de resposta, timestamp) são armazenados em um banco de dados de séries temporais, como o InfluxDB ou o Prometheus. Este tipo de banco de dados é otimizado para armazenar e consultar grandes volumes de dados com carimbo de tempo. Serviços de agregação processam esses dados brutos para calcular métricas como o uptime percentual ao longo de diferentes janelas de tempo (e.g., últimas 24 horas, últimos 7 dias).

3.  **Visualização no Front-end:** A aplicação front-end em Vue.js consulta uma API REST ou GraphQL para obter os dados de status mais recentes e os dados agregados para os gráficos. A API serve os dados já processados do banco de dados. A reatividade do Vue.js garante que, assim que novos dados são recebidos da API (seja por polling ou por uma conexão WebSocket), a interface do usuário é atualizada instantaneamente para refletir o estado mais atual dos sites.
