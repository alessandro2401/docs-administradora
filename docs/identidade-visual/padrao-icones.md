# Padrão de Ícones SVG

## Visão Geral

Para garantir a consistência visual e a clareza da interface em todo o ecossistema de sites e sistemas da Administradora Mutual, foi estabelecido um padrão para o uso de ícones. A biblioteca escolhida para este padrão é a **Lucide Icons**.

**Website:** [https://lucide.dev/](https://lucide.dev/)

## Por que Lucide Icons?

A Lucide Icons foi escolhida pelos seguintes motivos:

- **Consistência:** Todos os ícones são desenhados no mesmo estilo, garantindo uma aparência uniforme.
- **Leveza:** Os ícones são otimizados para a web, com tamanho de arquivo reduzido.
- **Customização:** É fácil customizar o tamanho, a cor e a espessura do traço dos ícones via CSS.
- **Ampla Variedade:** A biblioteca oferece uma vasta gama de ícones para diversas finalidades.
- **Open Source:** É um projeto de código aberto, gratuito para uso comercial.

## Como Utilizar

A forma mais simples de utilizar os ícones é através do CDN, adicionando o seguinte script ao `<head>` do seu arquivo HTML:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

E então, para renderizar um ícone, utilize a tag `<i>` com o atributo `data-lucide`:

```html
<i data-lucide="ICON_NAME"></i>
```

Após carregar a página, a função `lucide.createIcons()` deve ser chamada para que os ícones sejam renderizados:

```javascript
lucide.createIcons();
```

## Padrão de Ícones Comuns

A tabela abaixo lista alguns dos ícones mais comuns e seu uso semântico recomendado dentro do ecossistema da Administradora Mutual.

| Semântica | Ícone (Lucide) | Exemplo de Uso |
| :--- | :---: | :--- |
| Ação principal, Positivo | `check` | Botão de Salvar |
| Ação secundária, Negativo | `x` | Botão de Cancelar |
| Alerta, Aviso | `alert-triangle` | Mensagem de aviso |
| Erro, Crítico | `alert-circle` | Mensagem de erro |
| Informação | `info` | Dica ou informação adicional |
| Status Online | `check-circle` | Indicador de status online |
| Status Offline | `x-circle` | Indicador de status offline |
| Monitoramento, Atividade | `activity` | Título de dashboards |
| Gráficos, Análises | `bar-chart-2` | Seção de gráficos |
| Usuário | `user` | Perfil do usuário |
| Configurações | `settings` | Página de configurações |
| Editar | `edit` | Botão de edição |
| Excluir | `trash-2` | Botão de exclusão |
| Adicionar, Novo | `plus` | Botão para adicionar novo item |
| Documento, Arquivo | `file-text` | Link para um documento |
| Link Externo | `external-link` | Link que abre em nova aba |
| E-mail | `mail` | Campo de e-mail |
| Senha, Bloqueado | `lock` | Campo de senha, acesso restrito |
| Pesquisa | `search` | Campo de busca |

Este guia deve ser seguido em todos os novos desenvolvimentos e atualizações de interface para manter a consistência visual do ecossistema.
