import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Administradora Mutual - Documentação',
  description: 'Portal de documentação centralizado para todos os sites, sistemas e processos da Administradora Mutual.',
  ignoreDeadLinks: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Administradora Mutual',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Ecossistema', link: '/ecossistema/' },
      { text: 'Sites Públicos', link: '/sites-publicos/' },
      { text: 'Calculadoras', link: '/calculadoras/' },
      { text: 'Sistemas Internos', link: '/sistemas-internos/' },
      { text: 'Ferramentas', link: '/ferramentas/' },
      { text: 'APIs', link: '/apis/' },
      { text: 'Processos', link: '/processos/' },
      { text: 'Identidade Visual', link: '/identidade-visual/' },
      { text: 'Suporte', link: '/suporte/' },
    ],
    sidebar: {
      '/ecossistema/': [
        {
          text: 'Ecossistema Completo',
          items: [
            { text: 'Visão Geral', link: '/ecossistema/' },
          ]
        },
        {
          text: 'Site Principal',
          collapsed: false,
          items: [
            { text: 'Site Institucional', link: '/ecossistema/site-institucional' },
          ]
        },
        {
          text: 'Portal de Acesso',
          collapsed: false,
          items: [
            { text: 'Portal de Sistemas', link: '/ecossistema/portal-sistemas' },
          ]
        },
        {
          text: 'Sistemas Operacionais',
          collapsed: false,
          items: [
            { text: 'Calculadora SMA (Parcial)', link: '/ecossistema/sma-calculadora' },
            { text: 'Calculadora SMT (Total)', link: '/ecossistema/calculadora-smt' },
            { text: 'AURA Seguradora S4', link: '/ecossistema/s4-aura-seguradora' },
            { text: 'Gestão de Salvados', link: '/ecossistema/salvados' },
            { text: 'POTERE Locadora', link: '/ecossistema/locadora-potere' },
            { text: 'SOU — Organização Unificada (25+ sites)', link: '/ecossistema/sou-sistema' },
            { text: 'Due Diligence', link: '/ecossistema/formulario-due-diligence' },
          ]
        },
        {
          text: 'POPs e Documentação',
          collapsed: false,
          items: [
            { text: 'POP Evento e Sinistro', link: '/ecossistema/pop-evento-sinistro' },
            { text: 'POP Financeiro', link: '/ecossistema/pop-financeiro' },
            { text: 'POPs Comercial — Alpha', link: '/ecossistema/pops-comercial' },
            { text: 'Análise Gestão Segura', link: '/ecossistema/gestao-segura' },
            { text: 'Manual da Marca', link: '/ecossistema/manual-marca' },
          ]
        },
        {
          text: 'Ferramentas e Utilitários',
          collapsed: false,
          items: [
            { text: 'Gerador de Assinaturas', link: '/ecossistema/gerador-assinaturas' },
            { text: 'Gerador de Prompts', link: '/ecossistema/gerador-prompts' },
            { text: 'Painel de Monitoramento', link: '/ecossistema/painel-monitoramento' },
            { text: 'Central de Notícias', link: '/ecossistema/central-noticias' },
          ]
        },
        {
          text: 'Dashboards Estratégicos',
          collapsed: false,
          items: [
            { text: 'Grupo MMB — Hub', link: '/ecossistema/grupo-mmb-hub' },
            { text: 'Dashboard Orçamentário 2026', link: '/ecossistema/dashboard-orcamentario' },
            { text: 'Monitoramento DOU', link: '/ecossistema/monitoramento-dou' },
          ]
        },
        {
          text: 'Integração Unificada',
          collapsed: false,
          items: [
            { text: 'Visão 360 (integrado ao SOU)', link: '/ecossistema/visao-360' },
          ]
        },
      ],
      '/sites-publicos/': [
        {
          text: 'Sites Públicos',
          items: [
            { text: 'Site Institucional', link: '/sites-publicos/institucional' },
            { text: 'Grupo MMB', link: '/sites-publicos/grupo-mmb' },
            { text: 'Central de Notícias', link: '/sites-publicos/noticias' },
            { text: 'AURA Seguradora (S4)', link: '/sites-publicos/aura-s4' },
            { text: 'Manual da Marca', link: '/sites-publicos/manual-marca' },
          ]
        }
      ],
      '/calculadoras/': [
        {
          text: 'Calculadoras',
          items: [
            { text: 'SMA - Socorro Mútuo Acordo', link: '/calculadoras/sma' },
            { text: 'SMT - Socorro Mútuo Total', link: '/calculadoras/smt' },
          ]
        }
      ],
      '/sistemas-internos/': [
        {
          text: 'Sistemas Internos',
          items: [
            { text: 'Portal de Sistemas', link: '/sistemas-internos/portal' },
            { text: 'Dashboard Orçamentário 2026', link: '/sistemas-internos/dashboard-orcamentario' },
            { text: 'Gestão de Salvados', link: '/sistemas-internos/salvados' },
            { text: 'SOU — Organização Unificada', link: '/sistemas-internos/sou' },
            { text: 'Visão 360º', link: '/sistemas-internos/visao-360' },
            { text: 'Gestão de Sites', link: '/sistemas-internos/gestao-sites' },
            { text: 'Gestão de Sinistros (POP)', link: '/sistemas-internos/sinistros' },
            { text: 'Sistema Financeiro (POP)', link: '/sistemas-internos/financeiro' },
            { text: 'Comercial Alpha (POP)', link: '/sistemas-internos/comercial' },
            { text: 'Gestão Segura', link: '/sistemas-internos/gestao-segura' },
            { text: 'POTERE Locadora', link: '/sistemas-internos/potere-locadora' },
          ]
        }
      ],
      '/ferramentas/': [
        {
          text: 'Ferramentas',
          items: [
            { text: 'Gerador de Assinaturas', link: '/ferramentas/gerador-assinaturas' },
            { text: 'Gerador de Prompts', link: '/ferramentas/prompts' },
            { text: 'Due Diligence', link: '/ferramentas/due-diligence' },
          ]
        }
      ],
      '/apis/': [
        {
          text: 'APIs e Integrações',
          items: [
            { text: 'API Calculadoras', link: '/apis/calculadoras' },
            { text: 'API FIPE', link: '/apis/fipe' },
            { text: 'Google Sheets', link: '/apis/google-sheets' },
          ]
        }
      ],
      '/processos/': [
        {
          text: 'Processos e POPs',
          items: [
            { text: 'Procedimentos Operacionais', link: '/processos/pops' },
            { text: 'Fluxos de Trabalho', link: '/processos/fluxos' },
          ]
        }
      ],
      '/identidade-visual/': [
        {
          text: 'Identidade Visual',
          items: [
            { text: 'Manual da Marca Completo', link: '/identidade-visual/manual-completo' },
            { text: 'Downloads', link: '/identidade-visual/downloads' },
            { text: 'Exemplos de Aplicação', link: '/identidade-visual/exemplos' },
          ]
        }
      ],
      '/suporte/': [
        {
          text: 'Suporte',
          items: [
            { text: 'Contatos e FAQ', link: '/suporte/' },
          ]
        }
      ]
    }
  }
})
