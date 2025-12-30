# Painel de Monitoramento de Sites

**URL:** [https://sites.administradoramutual.com.br](https://sites.administradoramutual.com.br)

## Visão Geral

O Painel de Monitoramento de Sites é uma ferramenta interna que fornece uma visão em tempo real do status, uptime e performance de todos os sites públicos do ecossistema da Administradora Mutual. O objetivo principal é permitir a identificação rápida de problemas e garantir a alta disponibilidade dos serviços online.

## Estrutura e Tecnologias

O painel é uma aplicação web estática, construída com HTML, CSS e JavaScript puro. Ele realiza o monitoramento em tempo real dos sites através de requisições HTTP diretas, com persistência de dados no localStorage do navegador. A interface é organizada em três seções principais:

1.  **Métricas Gerais:** Cards que exibem o número de sites online, offline, o total de sites monitorados e o uptime médio.
2.  **Grid de Sites:** Uma grade com cards individuais para cada site, mostrando informações detalhadas como status, tempo de resposta e uptime.
3.  **Alertas Recentes:** Uma seção que exibe alertas para sites que estão offline.

## Página de Detalhes por Site (30/12/2025)

Em 30 de Dezembro de 2025, foi implementada uma página de detalhes individual para cada site, acessível ao clicar no card do site no painel principal. Esta página oferece uma análise aprofundada do histórico e performance de cada site.

### Funcionalidades da Página de Detalhes

- **Métricas Avançadas:** Uptime de 24h, 7 dias e 30 dias, tempo médio de resposta e total de incidentes.
- **Gráfico de Tempo de Resposta:** Gráfico de linha com o histórico de tempo de resposta nas últimas 24 horas.
- **Gráfico de Incidentes:** Gráfico de barras com o número de incidentes por dia na última semana.
- **Timeline de Incidentes:** Lista cronológica de todos os incidentes e recuperações.

## Sistema de Testes de Funcionalidade (30/12/2025)

Foi adicionada uma página de testes de funcionalidade, acessível através de um botão no painel principal. Esta ferramenta permite verificar a acessibilidade, performance e integridade dos recursos de cada site.

### Funcionalidades dos Testes

- **Testes Abrangentes:** Verificação de acessibilidade (HTTP status), tempo de resposta e carregamento de recursos.
- **Score de Performance:** Cada site recebe um score de 0 a 100 com base nos resultados dos testes.
- **Interface Intuitiva:** Resultados são exibidos em cards individuais com status de "Aprovado" ou "Falhou".

## Sistema de Notificações por Email (30/12/2025)

Em 30 de Dezembro de 2025, foi implementado um sistema de notificações automáticas por email para alertar sobre falhas críticas nos sites monitorados. Esta funcionalidade utiliza o serviço **EmailJS** para enviar alertas diretamente do frontend, sem a necessidade de um backend.

### Funcionalidades do Sistema de Notificações

- **Detecção de Mudança de Status:** O sistema detecta quando um site que estava online fica offline e dispara um alerta.
- **Cooldown de Alertas:** Para evitar o envio excessivo de emails, foi implementado um cooldown de 30 minutos. Um novo alerta para o mesmo site só será enviado após este período.
- **Template de Email Detalhado:** O email de alerta contém informações cruciais como nome do site, URL, status, horário da falha e tempo de resposta.
- **Persistência de Alertas:** O histórico de alertas enviados é armazenado no localStorage para gerenciar o cooldown e evitar duplicidade.

## Gráfico de Histórico de Uptime (30/12/2025)

Em 30 de Dezembro de 2025, foi adicionado um gráfico de histórico de uptime em formato de heatmap para cada site. Esta funcionalidade permite uma visualização rápida e intuitiva da disponibilidade nas últimas 24 horas.

### Funcionalidades do Heatmap

- **Visualização em Blocos:** As últimas 24 horas são divididas em 48 blocos de 30 minutos.
- **Cores por Status:**
  - **Verde:** Uptime > 95%
  - **Amarelo:** Uptime entre 50% e 95% (degradado)
  - **Vermelho:** Uptime < 50% (offline)
  - **Cinza:** Sem dados de verificação
- **Tooltips Interativos:** Ao passar o mouse sobre um bloco, são exibidos detalhes como horário, percentual de uptime e número de verificações no período.
- **Legenda Clara:** Uma legenda abaixo do gráfico explica o significado de cada cor.

## Atualização de Monitoramento Real (30/12/2025)

Em 30 de Dezembro de 2025, o painel foi atualizado para implementar um sistema de monitoramento real, substituindo os dados simulados. As principais funcionalidades adicionadas foram:

- **Verificação Real dos Sites:** Requisições HTTP HEAD para cada site a cada 5 minutos, medindo tempo de resposta e detectando status (online, offline, timeout).
- **Persistência de Dados:** Histórico das últimas 100 verificações por site armazenado no localStorage, permitindo o cálculo de uptime real das últimas 24 horas.
- **Sistema de Alertas:** Detecção e exibição automática de alertas para sites offline.
- **Métricas Reais:** Tempo de resposta em milissegundos, uptime calculado e estatísticas agregadas.

## Atualização de Ícones (30/12/2025)

Em 30 de Dezembro de 2025, foi realizada uma atualização visual no painel para substituir os emojis por ícones SVG da biblioteca **Lucide Icons**. Essa mudança teve como objetivo padronizar a identidade visual do painel com os demais sistemas do ecossistema, proporcionando uma aparência mais profissional e consistente.

### Padrão de Ícones Adotado

A tabela abaixo detalha a substituição dos emojis pelos novos ícones SVG:

| Status / Alerta | Emoji Antigo | Ícone SVG (Lucide) | Cor Aplicada |
| :--- | :---: | :---: | :---: |
| Título Principal | 🔍 | `activity` | `#667eea` |
| Seção Status | 📊 | `bar-chart-2` | `white` |
| Seção Alertas | ⚠️ | `alert-triangle`| `#f59e0b` |
| Status Online | 🟢 | `check-circle` | `#10b981` |
| Status Offline | 🔴 | `x-circle` | `#ef4444` |
| Alerta Crítico | 🚨 | `alert-circle` | `#ef4444` |
| Sem Alertas | ✅ | `check-circle` | `#10b981` |

### Implementação Técnica

A biblioteca Lucide Icons foi adicionada ao `index.html` e a função `lucide.createIcons()` é chamada para renderizar os ícones dinamicamente. Isso garante que os ícones sejam atualizados corretamente a cada ciclo de atualização do dashboard.
