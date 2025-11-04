import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Administradora Mutual - Documentação',
  description: 'Portal de documentação centralizado para todos os sites, sistemas e processos da Administradora Mutual.',
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Sites Públicos', link: '/sites-publicos/' },
      { text: 'Calculadoras', link: '/calculadoras/' },
      { text: 'Sistemas Internos', link: '/sistemas-internos/' },
      { text: 'Ferramentas', link: '/ferramentas/' },
      { text: 'APIs', link: '/apis/' },
      { text: 'Processos', link: '/processos/' },
      { text: 'Identidade Visual', link: '/identidade-visual/' },
    ],
    sidebar: {
      '/sites-publicos/': [
        {
          text: 'Sites Públicos',
          items: [
            { text: 'Site Institucional', link: '/sites-publicos/institucional' },
            { text: 'AURA Seguradora (S4)', link: '/sites-publicos/aura-s4' },
            { text: 'Gestão Segura', link: '/sites-publicos/gestao-segura' },
            { text: 'Manual da Marca', link: '/sites-publicos/manual-marca' },
          ]
        }
      ],
      '/calculadoras/': [
        {
          text: 'Calculadoras',
          items: [
            { text: 'SMA - Socorro Mútuo Acordo', link: '/calculadoras/sma/' },
            { text: 'SMT - Socorro Mútuo Total', link: '/calculadoras/smt/' },
          ]
        }
      ],
      '/sistemas-internos/': [
        {
          text: 'Sistemas Internos',
          items: [
            { text: 'Portal de Sistemas', link: '/sistemas-internos/portal' },
            { text: 'Comercial Alpha', link: '/sistemas-internos/comercial' },
            { text: 'Gestão de Sinistros', link: '/sistemas-internos/sinistros' },
            { text: 'Sistema Financeiro', link: '/sistemas-internos/financeiro' },
          ]
        }
      ],
      '/ferramentas/': [
        {
          text: 'Ferramentas',
          items: [
            { text: 'Gerador de Assinaturas', link: '/ferramentas/gerador-assinaturas' },
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
    }
  }
})
