# Painel de Monitoramento de Sites

**URL:** [https://sites.administradoramutual.com.br](https://sites.administradoramutual.com.br)

## Visão Geral

O Painel de Monitoramento de Sites é uma ferramenta interna que fornece uma visão em tempo real do status, uptime e performance de todos os sites públicos do ecossistema da Administradora Mutual. O objetivo principal é permitir a identificação rápida de problemas e garantir a alta disponibilidade dos serviços online.

## Estrutura e Tecnologias

O painel é uma aplicação web estática, construída com HTML, CSS e JavaScript puro. Ele realiza o monitoramento em tempo real dos sites através de requisições HTTP diretas, com persistência de dados no localStorage do navegador. A interface é organizada em três seções principais:

1.  **Métricas Gerais:** Cards que exibem o número de sites online, offline, o total de sites monitorados e o uptime médio.
2.  **Grid de Sites:** Uma grade com cards individuais para cada site, mostrando informações detalhadas como status, tempo de resposta e uptime.
3.  **Alertas Recentes:** Uma seção que exibe alertas para sites que estão offline.

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
