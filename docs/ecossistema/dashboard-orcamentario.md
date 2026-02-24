> Documentação completa do Dashboard Orçamentário, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo                  | Detalhe                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **URL**                | [https://grupommb2026.manus.space/estrutura](https://grupommb2026.manus.space/estrutura) |
| **Status**             | Ativo                                                                                               |
| **Tipo de Acesso**     | Requer Login (Credenciais de diretoria)                                                              |
| **Última Verificação** | 24 de Fevereiro de 2026                                                                             |

## Propósito e Público-Alvo

O **Dashboard Orçamentário 2026** é uma ferramenta de gestão interna, de missão crítica, desenvolvida exclusivamente para a **diretoria do Grupo MMB & Alpha Proteções**. 

Seu principal objetivo é consolidar e apresentar de forma clara, precisa e acessível todas as informações cruciais sobre a **estrutura organizacional e o orçamento do grupo para o exercício de 2026**. A plataforma resolve o problema da descentralização de dados, oferecendo um ponto único de verdade para a análise da saúde financeira e operacional da empresa.

A plataforma permite o acompanhamento em tempo real de métricas de desempenho, o gerenciamento detalhado dos departamentos, a análise de receitas, despesas e a performance dos colaboradores. 

O público-alvo é estritamente composto por **diretores e gestores de alto nível**, que utilizam a ferramenta como um painel de controle central para a tomada de decisões estratégicas, garantindo o alinhamento com as metas financeiras e operacionais da companhia.

## Stack Técnica

| Tecnologia          | Uso                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| **Framework**       | React (utilizando Vite para um ambiente de desenvolvimento rápido e otimizado)                      |
| **Linguagem**       | TypeScript, para garantir a tipagem estática, a robustez do código e a manutenibilidade a longo prazo. |
| **Estilização**     | Tailwind CSS, para a criação de um design system consistente e responsivo de forma ágil e customizável. |
| **Hospedagem**      | Vercel, para o deploy contínuo, alta disponibilidade e performance global da aplicação.             |
| **Outras Libs**     | Radix UI (para componentes de UI acessíveis e sem estilo), Chart.js (para a criação de gráficos interativos), React Hook Form (para gerenciamento de formulários complexos) e Zod (para validação de schemas de dados). |

## Layout e Design

O design do dashboard foi concebido para ser **moderno, intuitivo e funcional**, com um **tema escuro** (dark mode) que predomina em toda a interface. Esta escolha estética não só confere um aspecto sofisticado, mas também visa reduzir a fadiga visual durante o uso prolongado e destacar os elementos de dados mais importantes.

- **Header:** O cabeçalho é fixo no topo e exibe o logotipo do "Orçamento 2026", o nome da seção atual e, no canto direito, um menu de perfil do usuário com o nome, e-mail e a opção de logout.

- **Sidebar:** A barra de navegação lateral esquerda é o principal componente de navegação. Ela é vertical, retrátil e contém ícones e texto que direcionam para todas as seções principais do sistema. A capacidade de recolher a sidebar permite maximizar a área de visualização do conteúdo principal, focando no que realmente importa.

- **Cores:** A paleta de cores é sóbria e profissional. O fundo utiliza um tom de azul-marinho escuro (`#1E293B`), o texto principal é branco (`#FFFFFF`) para máximo contraste, e uma cor de destaque, o verde (`#10B981`), é usada para botões de ação, links, indicadores de status positivo e para destacar metas alcançadas.

- **Tipografia:** A fonte principal é a **Inter**, uma família tipográfica sans-serif conhecida por sua excelente legibilidade em interfaces digitais. A hierarquia visual é bem definida pelo uso de diferentes pesos (regular, medium, bold) e tamanhos de fonte para títulos, subtítulos e corpo de texto.

- **Responsividade:** A aplicação é totalmente responsiva. Em dispositivos móveis ou telas menores, a sidebar é oculta por padrão e pode ser ativada por um botão "hambúrguer" no header. Os componentes de conteúdo, como tabelas e cards, se reorganizam e se ajustam à largura da tela, garantindo uma experiência de uso consistente e agradável em qualquer dispositivo.

## Funcionalidades

### Estrutura Organizacional

Esta é a tela de boas-vindas do sistema. Ela fornece um organograma interativo e uma visão panorâmica da empresa, dividida em quatro grandes blocos:

- **Hubs:** Mostra os dois principais centros de operação (Comercial e Administrativo).
- **Departamentos:** Lista o total de áreas operacionais (12).
- **Colaboradores:** Exibe o número total de funcionários internos (53).
- **Escritórios Externos:** Indica o número de parceiros e prestadores de serviço (10).

Cada card é clicável, levando a uma visualização mais detalhada da respectiva categoria.

### Hub Comercial — Alpha Proteções

Focado em gerar receita e expandir a presença de mercado do grupo. É composto por 30 colaboradores.

- **Departamento de Vendas:** Com 25 colaboradores, gerencia a força de vendas, define metas (como a de R$ 180.000/mês em nova receita) e acompanha o desempenho de produtos como "Movimento Mais Brasil" e "Potere Seguro Auto".
- **Departamento de Comunicação e Marketing:** Com 3 colaboradores, é responsável pela estratégia de marca, campanhas de marketing digital e produção de conteúdo, como o podcast "Juntos POD+". O orçamento máximo para esta área é de R$ 50.000/mês.
- **Departamento de Tecnologia da Informação:** Com 2 colaboradores e em fase de estruturação, este departamento é vital para a inovação, sendo responsável pela infraestrutura de sistemas e pela segurança digital do grupo.

### Hub Administrativo — Grupo MMB

Concentra as funções de suporte e back-office que garantem a operação fluida da empresa. É composto por 23 colaboradores internos e 10 externos.

- **Administrativo:** Com 3 colaboradores, gerencia as instalações físicas da sede.
- **Atendimento ao Cliente:** Com 9 colaboradores, centraliza o suporte a todos os clientes.
- **Financeiro e Contábil:** Com 3 colaboradores e 1 escritório externo, controla o fluxo de caixa e a contabilidade.
- **Departamento Pessoal:** Com 1 colaborador e 1 escritório externo, administra a folha de pagamento e benefícios.
- **Sinistro:** Com 3 colaboradores e 4 escritórios externos, analisa e processa os pedidos de sinistro.
- **Assistência 24 Horas:** Com 1 colaborador e 1 empresa externa, coordena o atendimento emergencial.
- **Jurídico:** Com 1 colaborador e 1 escritório externo, oferece consultoria e representação legal.
- **Qualidade:** Com 1 colaborador e 1 consultoria externa, zela pela melhoria contínua e gestão da ISO 9001.
- **Cobrança:** Com 1 colaborador e 1 escritório externo, atua na recuperação de créditos.

## Seções e Páginas

| Seção             | Descrição                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| **Dashboard**     | Painel principal com gráficos e um resumo visual do status orçamentário geral, incluindo receita vs. despesa, e progresso das metas. |
| **Lançamentos**   | Área para registrar e auditar todas as transações financeiras, categorizadas por centro de custo, com filtros avançados.     |
| **Departamentos** | Permite explorar cada departamento, visualizar seus membros, orçamento detalhado, despesas e metas específicas.            |
| **Receita**       | Módulo para análise detalhada das fontes de receita, com filtros por produto, marca, período e vendedor.        |
| **Colaboradores** | Lista completa de todos os funcionários, com informações de contato, cargo, histórico na empresa, salário e desempenho.    |
| **Simulador PLR** | Ferramenta interativa para projetar cenários de Participação nos Lucros e Resultados (PLR) com base em diferentes métricas.           |
| **KPIs**          | Seção dedicada ao monitoramento dos Key Performance Indicators (KPIs) estratégicos para o negócio, com metas e alertas.      |
| **Painel Executivo**| Um dashboard de alto nível, com dados consolidados e insights direcionados para a diretoria, focado em rentabilidade e crescimento.         |
| **Estrutura**     | A página de organograma detalhada, descrita anteriormente, com a possibilidade de exportar a estrutura em formato de imagem.                                             |
| **Relatório**     | Ferramenta para gerar relatórios customizados em PDF ou CSV sobre qualquer aspecto do orçamento, com agendamento de envio.       |
| **Auditoria**     | Log de todas as ações importantes realizadas no sistema, garantindo a rastreabilidade e a segurança dos dados. |

## Integrações

O sistema, em sua versão atual, funciona como uma plataforma **standalone**, não possuindo integrações diretas com sistemas de terceiros. Todos os dados são inseridos manualmente ou importados via planilhas. 

Uma recomendação para futuras versões é a integração via API com o sistema de contabilidade principal do grupo para automatizar a conciliação financeira e com um sistema de CRM (como o Salesforce) para importar dados de vendas e metas automaticamente, reduzindo o trabalho manual e o risco de erros.

## Observações e Recomendações

O Dashboard Orçamentário 2026 é uma aplicação robusta e essencial para a gestão estratégica do Grupo MMB & Alpha Proteções. A centralização das informações e a clareza da interface são pontos fortes notáveis.

**Pontos de Melhoria Sugeridos:**

1.  **Criação de um Manual do Usuário Interativo:** Desenvolver uma documentação interna detalhada, com tours guiados (usando libs como `react-joyride`) para apresentar as funcionalidades aos novos usuários.
2.  **Sistema de Alertas e Notificações:** Implementar um sistema de notificações em tempo real (via e-mail, Slack ou dentro da plataforma) para alertar sobre desvios orçamentários, metas atingidas ou riscos iminentes.
3.  **Dashboards Customizáveis (Drag-and-Drop):** Permitir que os usuários criem seus próprios painéis de controle, arrastando e soltando os gráficos e indicadores que consideram mais relevantes para sua análise diária.
4.  **Exportação Avançada:** Adicionar a funcionalidade de exportar os gráficos gerados (em formato PNG ou JPG) e os dados das tabelas (em formato XLSX) para uso em apresentações e relatórios externos.
5.  **Controle de Acesso Baseado em Perfil (RBAC):** Implementar um sistema de permissões mais granular, onde diferentes tipos de gestores possam ter acesso apenas aos dados e seções relevantes ao seu escopo de trabalho.
6.  **Inteligência Artificial para Previsões:** Integrar um modelo de machine learning para analisar os dados históricos e gerar previsões de receita e despesas, auxiliando em um planejamento orçamentário mais preciso.
7.  **Gamificação:** Introduzir elementos de gamificação, como medalhas e rankings, para incentivar o engajamento dos colaboradores e o alcance das metas departamentais.
8.  **App Mobile:** Desenvolver uma versão mobile do dashboard para que os diretores possam acessar as informações e aprovar despesas de qualquer lugar.
9.  **Busca Global:** Implementar uma funcionalidade de busca global que permita encontrar rapidamente qualquer informação no sistema, seja um colaborador, um lançamento ou um departamento.
10. **Modo de Apresentação:** Criar um "modo de apresentação" que otimize a visualização dos dashboards para projeção em reuniões, com fontes maiores e menos elementos de interface.

## Conclusão

O Dashboard Orçamentário 2026 é uma ferramenta de gestão de alto impacto, que centraliza e simplifica o acesso a informações complexas. Com uma base técnica sólida e um design focado no usuário, a plataforma tem o potencial de se tornar um ativo indispensável para a diretoria do Grupo MMB & Alpha Proteções. As recomendações apresentadas visam aprimorar ainda mais a ferramenta, tornando-a mais inteligente, proativa e indispensável para o sucesso do negócio.

---
*Documento gerado por Manus AI em 24 de Fevereiro de 2026.*

### Anexo A: Detalhamento dos Departamentos

Esta seção fornece um detalhamento adicional sobre as responsabilidades e métricas de cada departamento.

#### Departamento de Vendas
- **Produtos Gerenciados:** Movimento Mais Brasil, Mais Brasil Motorcycle, Soluções Corretora, Potere Seguro Auto, Potere Consórcio.
- **Meta de Receita Nova Mensal:** R$ 180.000,00
- **Ticket Médio Esperado:** R$ 220,00/mês por cliente.
- **KPIs:** Novos clientes por mês, taxa de conversão, custo de aquisição de cliente (CAC).

#### Departamento de Comunicação e Marketing
- **Marcas Gerenciadas:** Juntos POD+, Todas as marcas do ecossistema.
- **Orçamento Máximo:** R$ 50.000/mês
- **KPIs:** Alcance das publicações, engajamento nas redes sociais, número de leads gerados, custo por lead (CPL).

#### Departamento de Tecnologia da Informação
- **Status:** Departamento em estruturação.
- **Responsabilidades:** Infraestrutura tecnológica, desenvolvimento de sistemas, segurança da informação, inovação.
- **Projetos Futuros:** Implementação de um novo sistema de CRM, migração dos servidores para a nuvem.

---

### Anexo B: Detalhamento das Seções

Esta seção fornece um detalhamento adicional sobre as funcionalidades de cada seção do sistema.

#### Dashboard
- **Gráficos:** Receita vs. Despesa (mensal), Progresso das Metas (por departamento), Top 5 Despesas (por categoria).
- **Indicadores:** Receita total, despesa total, lucro líquido, margem de lucro.

#### Lançamentos
- **Funcionalidades:** Adicionar, editar e excluir lançamentos; anexar comprovantes; filtros por data, categoria, centro de custo e status.

#### Simulador PLR
- **Variáveis de Simulação:** Faturamento, lucro líquido, metas departamentais, metas individuais.
- **Resultados:** Valor estimado da PLR para cada colaborador.

