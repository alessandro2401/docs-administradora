# Portal de Sistemas Internos

**URL:** [https://sistemas.administradoramutual.com.br](https://sistemas.administradoramutual.com.br)

## Visão Geral

O Portal de Sistemas Internos serve como um hub centralizado para acesso a todas as ferramentas, calculadoras, manuais e sistemas da Administradora Mutual. Ele é protegido por um sistema de autenticação que restringe o acesso a colaboradores autorizados.

## Estrutura e Tecnologias

O portal é uma aplicação web estática, construída com HTML, CSS e JavaScript puro. A interface é organizada em um grid de cards, onde cada card representa um sistema ou portal. A autenticação é gerenciada por um script (`auth.js`) que verifica as credenciais do usuário contra uma lista pré-definida.

## Sistemas Integrados

O portal atualmente fornece acesso aos seguintes sistemas:

- Calculadora SMA
- Calculadora SMT
- POP Evento e Sinistro
- POP Financeiro
- Manual da Marca
- Central de Notícias
- Due Diligence
- Análise Gestão Segura
- Material de Constituição S4
- POPs Comerciais
- Gerador de Assinatura
- POTERE - Aluguéis Ativos
- Portal de Documentação
- Grupo MMB
- SOU - Sistema de Organização Unificada
- **Painel de Monitoramento de Sites** (adicionado em 30/12/2025)

## Atualização Recente (30/12/2025)

### Adição do Painel de Monitoramento de Sites

- **O que foi feito:** Foi adicionado um novo card ao portal para fornecer acesso direto ao **Painel de Monitoramento de Sites**.
- **URL do Sistema:** [https://sites.administradoramutual.com.br](https://sites.administradoramutual.com.br)
- **Descrição:** O card descreve o sistema como uma ferramenta para "Monitoramento em tempo real do status, uptime e performance de todos os sites do ecossistema".
- **Acesso:** O acesso ao painel foi configurado como restrito, exigindo autenticação, assim como outros sistemas sensíveis.
- **Posicionamento:** O card foi posicionado estrategicamente entre o "Portal de Documentação" e o "Grupo MMB" para facilitar o acesso por equipes técnicas e administrativas.
- **Ícone:** Foi utilizado o ícone `activity` da biblioteca Lucide para representar visualmente a função de monitoramento.

O código HTML inserido no arquivo `index.html` do repositório `sistemas-site` foi:

```html
<!-- Painel de Monitoramento de Sites -->
<a href="https://sites.administradoramutual.com.br" class="system-card restricted" target="_blank">
    <i data-lucide="lock" class="icon-lock"></i>
    <i data-lucide="activity" class="icon"></i>
    <h3>Painel de Monitoramento de Sites</h3>
    <p>Monitoramento em tempo real do status, uptime e performance de todos os sites do ecossistema</p>
    <span class="url">sites.administradoramutual.com.br</span>
</a>
```

Essa alteração foi implementada, testada e implantada via Vercel, e agora está disponível para todos os colaboradores autorizados.
