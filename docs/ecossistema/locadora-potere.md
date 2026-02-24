---

# Documentação do Sistema: Locadora Mutual

> Documentação técnica e funcional completa do sistema de gestão de frotas **Locadora Mutual**. Este documento abrange o propósito, público-alvo, arquitetura, stack tecnológica, layout, funcionalidades detalhadas e recomendações para futuras implementações.

---

## 1. Informações Gerais

Esta seção fornece uma visão geral e o status atual do sistema Locadora Mutual, um componente essencial no ecossistema de ferramentas da Administradora Mutual.

| Campo | Detalhe |
|-------|---------|
| **URL de Produção** | [https://locadora.administradoramutual.com.br/](https://locadora.administradoramutual.com.br/) |
| **Status Operacional** | `Ativo` e em produção, servindo como a principal ferramenta para gestão de frotas. |
| **Tipo de Acesso** | `Privado`. Requer autenticação via login e senha. O acesso é restrito a funcionários autorizados da Administradora Mutual. |
| **Última Verificação** | 24 de Fevereiro de 2026 |

---

## 2. Propósito e Público-Alvo

O sistema **Locadora Mutual** foi concebido e desenvolvido como uma solução interna e estratégica para a **Administradora Mutual**. O seu propósito fundamental é a **centralização e otimização da gestão de sua frota de veículos para aluguel**.

### Problema Resolvido

Antes da implementação deste sistema, a gestão da frota era um processo fragmentado, dependente de múltiplas planilhas, trocas de e-mails e documentos físicos ou digitais dispersos. Este cenário resultava em:

*   **Ineficiência Operacional:** Gasto excessivo de tempo para consolidar dados e gerar relatórios.
*   **Propensão a Erros:** A entrada manual de dados e a falta de validação aumentavam a incidência de erros humanos.
*   **Falta de Visibilidade Estratégica:** Dificuldade em obter uma visão clara e em tempo real da performance da frota, rentabilidade e utilização dos ativos.

### Solução Oferecida

O Locadora Mutual soluciona esses problemas ao:

*   **Criar uma Fonte Única de Verdade (Single Source of Truth):** Todas as informações sobre veículos (dados técnicos, manutenção, status, documentação), clientes, contratos e finanças são consolidadas em um único banco de dados.
*   **Automatizar Cálculos Críticos:** Cálculos complexos de receita, lucro, rentabilidade por veículo e margem geral são realizados automaticamente, fornecendo métricas precisas e instantâneas.
*   **Fornecer Visibilidade em Tempo Real:** O dashboard principal atua como um painel de controle, permitindo que os gestores monitorem a saúde da frota com um olhar rápido.
*   **Otimizar a Gestão de Documentos:** A integração nativa com o Google Drive permite que documentos vitais (CRLV, apólices de seguro, registros de manutenção) estejam digitalizados, versionados e acessíveis diretamente a partir da interface do sistema.

### Público-Alvo

A plataforma é destinada a três perfis principais dentro da organização:

1.  **Gestores de Frota:** Utilizam o sistema para o dia a dia operacional, incluindo o cadastro de novos veículos, gestão de contratos, monitoramento de manutenções e controle de infrações.
2.  **Analistas Financeiros e Administradores:** Focam nos relatórios financeiros, análise de rentabilidade, KPIs e dados acumulados para planejamento e tomada de decisão.
3.  **Diretoria:** Acessa o sistema para obter uma visão macro da performance do negócio de locação, utilizando os dados consolidados para direcionamento estratégico.

---

## 3. Stack Técnica e Arquitetura

A análise da stack técnica foi baseada na inspeção do código-fonte, análise de rede e comportamento da aplicação. A arquitetura é de uma aplicação de página única (SPA - Single Page Application).

| Componente | Tecnologia | Detalhes e Justificativa |
|-----------|-----|----------|
| **Framework Front-End** | React (inferido) | A estrutura do DOM com um elemento raiz (`#root`), o uso de propriedades como `_reactRootContainer` e a reatividade da interface são fortes indicativos do uso de React. A componentização e o virtual DOM permitem uma experiência de usuário fluida e eficiente. |
| **Linguagem** | JavaScript (ES6+) | A lógica do cliente é implementada em JavaScript moderno. A sintaxe (arrow functions, promises, etc.) indica o uso de recursos do ES6 ou superior. |
| **Estilização** | CSS-in-JS ou Módulos CSS | As classes CSS são geradas dinamicamente com hashes únicos (ex: `_button_a4b1c2`), uma técnica para escopar estilos por componente. Isso aponta para soluções como Styled Components, Emotion ou Módulos CSS integrados a um processo de build. |
| **Build Tool** | Webpack / Vite (inferido) | Uma SPA moderna como esta requer uma ferramenta de build para transpilar JavaScript, empacotar módulos e otimizar assets. Webpack e Vite são as ferramentas mais comuns para ecossistemas React. |
| **Hospedagem** | Plataforma de Nuvem (Vercel/Netlify - inferido) | A aplicação é servida estaticamente, com a lógica rodando no cliente. Plataformas como Vercel ou Netlify são ideais para este tipo de deploy, oferecendo CI/CD, escalabilidade global e gerenciamento simplificado. |
| **Integrações de API** | Google Drive API | A funcionalidade de sincronização e acesso a documentos confirma o uso da API do Google Drive. A autenticação provavelmente é feita via OAuth 2.0. |

---

## 4. Layout e Design (UI/UX)

O design do sistema prioriza a clareza, a usabilidade e a densidade da informação, seguindo os princípios de um design funcional e data-driven.

*   **Estrutura e Grid:** O layout é baseado em um sistema de grade (grid) consistente, provavelmente de 12 colunas, que garante o alinhamento e a organização dos elementos em diferentes resoluções de tela.
*   **Header:** Fixo no topo, com 60px de altura. Contém os logotipos da **POTERE** e **HELPCAR** à esquerda e o título "Sistema de Aluguéis" à direita. A cor de fundo é um azul corporativo escuro (#1A237E), com texto em branco.
*   **Corpo da Página:** O fundo da página utiliza um tom de cinza neutro e claro (#F4F6F8), que reduz o cansaço visual e faz com que os cartões de conteúdo se destaquem.
*   **Cartões (Cards):** A informação é modularizada em cartões com bordas arredondadas (raio de 8px) e uma sombra sutil (`box-shadow: 0 2px 4px rgba(0,0,0,0.1)`), criando uma hierarquia visual clara.
*   **Paleta de Cores:**
    *   **Primária:** Azul escuro (#1A237E) e Azul de Ação (#2196F3).
    *   **Neutra:** Branco (#FFFFFF), Cinza Claro (#F4F6F8), Cinza Médio (#BDBDBD) e Preto para texto (#212121).
    *   **Semântica:** Verde para sucesso/ativo (#4CAF50) e Vermelho para alerta/erro (#F44336).
*   **Tipografia:**
    *   **Fonte:** Sans-serif moderna e legível (ex: Inter, Roboto).
    *   **Hierarquia:** Títulos de seção (24px, bold), Títulos de cartão (18px), Texto principal (14px), Texto de suporte (12px, cinza).
*   **Ícones:** Ícones vetoriais (SVG) são utilizados de forma consistente para reforçar a compreensão das funcionalidades (ícones de carro, calendário, gráfico, etc.).
*   **Responsividade:** O design é totalmente responsivo. Em telas menores, a grade se adapta, e os elementos se empilham verticalmente para manter a legibilidade e a facilidade de uso em dispositivos móveis.

---

## 5. Funcionalidades Detalhadas

### 5.1. Dashboard Principal

O coração do sistema, fornecendo uma visão panorâmica da operação.

*   **Cartões de Resumo (KPIs):** Exibem métricas operacionais chave: **Total de Veículos**, **Aluguéis Ativos**, **Veículos Disponíveis** e **Em Manutenção**.
*   **Cartões Financeiros:** Apresentam a **Receita Mensal Total** e o **Lucro POTERE Mensal**, com o mês de referência.
*   **Totais Anuais:** Uma seção que permite a análise de performance ao longo do tempo, com um seletor de ano para filtrar os dados de **Total Acumulado** e **Total POTERE**.

### 5.2. Sincronização com Google Drive

*   **Status:** Um indicador visual mostra se a conexão com o Google Drive está ativa e exibe a data e hora da última sincronização bem-sucedida.
*   **Ação:** O botão "Sincronizar" dispara um processo em background para buscar novos dados ou arquivos do Google Drive. Um feedback visual (spinner) é exibido durante a operação, seguido por uma notificação de sucesso ou falha.

### 5.3. Busca e Filtros

*   **Busca Inteligente:** A barra de busca permite pesquisar em tempo real (com debounce para performance) por placa, modelo do veículo ou nome do cliente, filtrando a lista de aluguéis ativos instantaneamente.
*   **Filtro Temporal:** O seletor de ano atualiza os painéis financeiros e, potencialmente, a lista de aluguéis para exibir dados históricos.

### 5.4. Lista de Aluguéis Ativos

O componente mais denso em informação do dashboard. Cada item é um cartão que detalha um aluguel específico:

*   **Dados do Veículo:** Placa, modelo, ano e status (com um indicador de cor).
*   **Dados do Cliente:** Nome da empresa ou pessoa locatária.
*   **Dados do Contrato:** Data de início e valor do aluguel mensal.
*   **Métricas Financeiras:** Lucro líquido (Lucro POTERE) e a Rentabilidade percentual do contrato.
*   **Ações Rápidas:** Botões que funcionam como atalhos para `Visualizar CRLV` (abre o documento no Google Drive) and `Ver Detalhes` (navega para a página detalhada do aluguel).

### 5.5. Menus de Navegação e Seções

| Seção | Rota (Estimada) | Descrição Detalhada da Funcionalidade |
|-------|-----------|------------------------------------------|
| **KPIs** | `/kpis` | Painel avançado com gráficos interativos sobre taxa de ocupação, receita média por veículo (RPMV), tempo médio de contrato, etc. |
| **Relatórios** | `/relatorios` | Ferramenta para gerar relatórios customizáveis (por período, por cliente, por veículo) e exportá-los em formatos como PDF ou CSV. |
| **Viabilidade** | `/viabilidade` | Módulo de simulação para analisar a viabilidade de novos investimentos. Permite inserir o custo de aquisição de um veículo, custos fixos e variáveis, e projetar o retorno sobre o investimento (ROI). |
| **Infrações** | `/infracoes` | Sistema para registrar, gerenciar e rastrear infrações de trânsito, permitindo anexar documentos, atribuir ao condutor e controlar o pagamento de multas. |
| **Painel Admin** | `/admin` | Área de administração restrita para gerenciar usuários, permissões, cadastrar novos veículos, clientes e configurar parâmetros do sistema. |

---

## 6. Integrações

*   **Google Drive:** A integração mais profunda e fundamental do sistema. É utilizada como um repositório de documentos (document management system) e, possivelmente, como uma fonte de dados brutos (via Planilhas Google) que são sincronizados e processados pela aplicação.

---

## 7. Observações e Recomendações

*   **Pontos Fortes:**
    *   **Clareza e Densidade da Informação:** A interface consegue apresentar uma grande quantidade de dados de forma organizada e compreensível.
    *   **Eficiência Operacional:** A automação de cálculos e a centralização de dados representam um ganho significativo de eficiência.
    *   **Experiência do Usuário (UX):** A reatividade da interface e os fluxos de trabalho bem definidos proporcionam uma experiência de uso positiva.

*   **Sugestões de Melhoria:**
    1.  **Segurança (MFA):** Implementar Autenticação Multifator (MFA) para proteger o acesso a dados financeiros e operacionais sensíveis.
    2.  **Sistema de Notificações:** Desenvolver um sistema de notificações proativas (alertas de vencimento de contrato, manutenção preventiva, novas infrações) para reduzir a necessidade de monitoramento manual.
    3.  **Documentação de API:** Criar uma documentação interna da API (usando Swagger/OpenAPI) para facilitar a manutenção e futuras integrações.
    4.  **Tema Escuro (Dark Mode):** Oferecer uma opção de tema escuro para melhorar a usabilidade em ambientes com pouca luz e reduzir a fadiga ocular.
    5.  **Logs de Auditoria:** Implementar um sistema de logs que registre ações críticas dos usuários (criação, edição, exclusão de dados) para aumentar a segurança e a rastreabilidade.


    6.  **Visualização de Dados Avançada:** Integrar uma biblioteca de gráficos mais robusta (como Chart.js ou D3.js) na seção de KPIs para permitir a criação de dashboards mais interativos, com filtros dinâmicos e a capacidade de fazer drill-down nos dados.
