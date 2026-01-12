import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Administradora Mutual - Documentação',
  description: 'Portal de documentação centralizado para todos os sites, sistemas e processos da Administradora Mutual.',
  ignoreDeadLinks: true,
  cleanUrls: true,
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
      { text: 'Suporte', link: '/suporte/' },
    ],
    sidebar: {
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
            { text: 'Gestão de Salvados', link: '/sistemas-internos/salvados' },
            { text: 'SOU - Sistema Operacional Unificado', link: '/sistemas-internos/sou' },
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
