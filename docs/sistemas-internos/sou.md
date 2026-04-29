# SOU — Sistema de Organização Unificada

**URL:** [souorganize-huedqzb2.manus.space](https://souorganize-huedqzb2.manus.space)
**Domínio Oficial:** [sou.inf.br](https://sou.inf.br)
**Repositório:** [github.com/alessandro2401/sou-sistema](https://github.com/alessandro2401/sou-sistema)
**Status:** Ativo — Produção
**Versão:** 5.0.0 (Abril 2026)

## Visão Geral

O SOU (Sistema de Organização Unificada) é a plataforma central de operações do Grupo MMB e da Administradora Mutual. Consolida **25+ sistemas externos embutidos** via proxy reverso universal em um único portal web integrado, com autenticação própria por credenciais (e-mail/senha) e login social (Google/Microsoft), RBAC de 5 níveis, **98 tabelas** no banco de dados, **430+ endpoints tRPC**, **69 módulos de permissão** em 19 categorias, e menu reorganizado em **Hub Administrativo** e **Hub Comercial** com subáreas.

## Stack Técnica

| Camada | Tecnologia |
| --- | --- |
| Frontend | React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui |
| Backend | Express 4 + tRPC 11 + Superjson |
| Banco de Dados | TiDB Serverless (MySQL compatível) + Drizzle ORM (98 tabelas) |
| Autenticação | Login por credenciais (bcrypt + JWT) + OAuth 2.0 (Google/Microsoft) + RBAC (5 níveis) |
| Cache | Upstash Redis |
| Storage | AWS S3 (storagePut/storageGet) |
| E-mail | Resend API (transacional: recuperação de senha, convites, alertas) |
| LLM | Manus Forge (busca automática de notícias, categorização) |
| Monitoramento | Sentry + Health Check automático (5 min) |
| Proxy | Proxy Reverso Universal (http-proxy-middleware, cookie jar, auto-login) |
| Hospedagem | Manus Platform |

## Autenticação e Segurança

O sistema possui autenticação completa e independente, sem dependência de OAuth externo para o fluxo principal.

### Login por Credenciais (E-mail/Senha)
- Hash bcrypt, JWT com expiração de 8h, session cookie
- Tela de login com design split-screen (gradiente #0056B3 + formulário)
- Bloqueio após 5 tentativas de login (15 min de cooldown)

### Login Social (Google e Microsoft)
- OAuth 2.0 com vinculação automática por e-mail
- Criação de conta automática se não existir (role: viewer)
- Gerenciamento de contas sociais no perfil do usuário

### 5 Níveis de Acesso (RBAC)
- Hierarquia: `super_admin` > `admin` > `editor` > `viewer` > `guest`
- **69 módulos de permissão** em 19 categorias (incluindo 26 sistemas iframe individuais)
- Toggle por role e módulo (Ver/Criar/Ler/Editar/Excluir/Gerenciar)
- Super Admin 69/69, Admin 67/69, Editor 58/69, Viewer 50/69, Guest 3/69
- Página `/permissoes` para gestão visual das permissões

### Gestão de Usuários (`/usuarios`)
- CRUD completo: criar, editar, desativar, resetar senha, convidar por e-mail
- Badges informativos: método de login, senha expirada, 1º login, horário restrito
- Confirmação dupla para desativação (digitar nome do usuário)
- Exportação CSV de usuários
- Proteção anti-auto-rebaixamento e anti-auto-desativação

### Política de Senhas
- Requisitos: 8+ caracteres, maiúscula, minúscula, número, caractere especial
- Indicador visual de força (barra colorida + checklist de requisitos)
- Histórico de senhas (não repetir últimas 3)
- Expiração configurável por usuário: 30, 60, 90, 180 dias ou nunca

### Controle de Horário de Acesso
- Janela de acesso configurável por usuário (dias da semana + horário início/fim)
- Padrão: segunda a sexta, 8h às 18h
- Tela amigável de "Acesso Bloqueado" com horário permitido
- Log de tentativas bloqueadas na auditoria

### Esqueci Minha Senha (`/esqueci-senha`)
- Recuperação por e-mail com token criptográfico (48 bytes, validade 1h)
- Template HTML profissional com botão "Redefinir Minha Senha"
- Prevenção de enumeração de e-mails (sempre retorna sucesso)
- Token de uso único (marcado como `usedAt` após utilização)

### Timeout por Inatividade
- Configurável por role: super_admin=30min, admin=25min, editor=20min, viewer=15min, guest=10min
- Modal countdown 60s antes do logout automático
- Session cookie (fechar navegador = logout)

### Homepage Configurável
- Admin define homepage de cada usuário (26 opções de página)
- Redirect automático após login

## Auditoria e Rastreabilidade

### Painel de Auditoria (`/auditoria`)
5 abas completas com filtros por ação, módulo, usuário, busca textual e período:

| Aba | Descrição |
| --- | --- |
| Ações | Registro automático de todas as ações: criar, editar, excluir, login, logout, reset de senha. Captura oldData/newData para alterações de usuário. |
| Acessos | Tabela page_access_logs com userId, page, module, sessionId, duration. Hook usePageTracker registra automaticamente cada navegação. |
| Sessões | Timeline de navegação por usuário com sessionId. Duração de permanência em cada página. |
| Logins | Tabela login_history com IP real, dispositivo, método (credenciais/OAuth/social), sucesso/falha. |
| Bloqueios | 4 cards (total, login, sessão, usuários afetados). Registra tentativas de acesso fora do horário permitido. |

## Módulos (69)

### Principal
- **Dashboard** (`/`) — Visão 360° com KPIs, gráficos Recharts, busca global (`Ctrl+K`), exportação PDF
- **Hub de Sistemas** (`/hub`) — 59 sistemas com status em tempo real, categorias, busca
- **Meus Apps** (`/meus-apps`) — Apps favoritos do usuário
- **Visão 360°** (`/visao-360`) — KPIs em 5 dimensões (Financeiro, Atendimento, Sinistro, Jurídico, Estratégico), filtros de período

### Institucional
- **Grupo MMB** (`/grupo-mmb`) — 8 abas (Visão Executiva, Arquitetura, Ecossistema, Governança, Modelo Econômico, Sobre, Contato, Pós-Venda)
- **Marcas** (`/marcas`) — 13 marcas com logos reais (46 PNGs + 36 SVGs), 10 manuais PDF, propósito/missão/visão/valores
- **Estrutura SOU** (`/estrutura-sou`) — 10 abas com Gantt interativo, contratos, diagramas, documentação, anexos
- **DP-MMB** (`/dp-mmb`) — 25 documentos do Departamento Pessoal do Movimento Mais Brasil
- **DP-Alpha** (`/dp-alpha`) — 25 documentos do Departamento Pessoal da Alpha Proteções
- **Visitantes** (`/visitantes`) — Recepção completa: 2.087 visitas, 1.565 visitantes, 440 pontos, 132 correspondências. Sincronização Google Sheets a cada 15min. Aba Correspondências (CRUD, KPIs, notificação Google Chat). Aba Ponto Recepção (visão diária, registro rápido, relatório mensal). Webhook Google Chat.

### Operacional (Hub Administrativo)
- **AURA Seguradora** (`/aura`) — **Paridade S4 100%**: 14 abas institucionais (Seguro Auto, Seguro Vida, Estruturação, Estudo de Viabilidade, Regulatório, Ecossistema, Sobre, Consultorias, Condições Gerais, Condições de Contratação, Informações Técnicas, Contato) + Dashboard Operacional com KPIs + Gestão de Cotações/Apólices/Sinistros + Análises Gerenciais (4 sub-abas) + Calculadora Wizard 6 etapas (FIPE + CEP + coberturas + blindagem + cenários). Informações Técnicas: provisões (PPNG, PSL, IBNR, PCC), solvência, resseguro, modelo atuarial Onda 5 com 12 fatores, governança e compliance.
- **Calculadoras** (`/calculadoras`) — SMA: MEDIAN, 80%/75%, taxas 13.53%/14.65%, Tabela Price. SMT: 7 depreciações, 6 descontos, antecipação 12.7%. Integração Google Sheets, gerar PDF, imprimir, aba Meus Cálculos
- **Gestão Segura** (`/gestao-segura`) — 158 processos reais, Dashboard com Recharts (Donut, Linha, Barra), KPIs, sincronização Google Sheets a cada 30min, CRUD completo (33 campos), importação CSV, exportação CSV/XLSX
- **OCR Placas** (`/ocr-placas`) — 14 abas: Dashboard, Capturas, Veículos, Câmeras, Alertas, Blacklist, Relatórios, Exportação, MQTT Controle, API Logs, Credify, Admin Credify, Auditoria LGPD. 245.318+ capturas processadas. API Placas (batch 256/min), Credify (BDRP por placa, saldo R$), Tutorsa (OCR real com TOTP). Captura dedicada 24h com MQTT.
- **POTERE Locadora** (`/locadora`) — Gestão de frota: CRUD de veículos, aluguéis e manutenções, 5 contratos reais
- **Salvados** (`/salvados`) — 211 veículos (31 Em Pátio + 166+ Vendidos), Dashboard + Tabela com filtros, aba Planilha Original (Google Sheets, 6 abas)
- **POPs** (`/pops`) — 3 abas (Sinistro, Financeiro, Comercial), KPIs, fluxogramas interativos, alçadas, downloads PDF
- **Due Diligence** (`/due-diligence`) — Checklist de 30 itens em 5 categorias, scoring automático, formulário de aquisição (8 seções), exportação PDF
- **Controle Comercial Alpha** (`/controle-alpha`) — Gestão comercial com sincronização Alpha Bridge, Dashboard com KPIs, filtros avançados
- **Dashboard Alpha** (`/dashboard-alpha`) — KPIs comerciais, gráficos de performance, análise de vendas e metas
- **Astrea Jurídico** (`/astrea`) — Dashboard com resumo, evolução temporal, alertas de prazos. Sincronização automática. Aba 'Sistema Completo' com acesso embutido via proxy (auto-login server-side, cookie userInfo).

### Módulo Orçamentário (`/orcamentario`)
Dashboard financeiro completo com 14 abas e paridade 100% com grupommb2026.manus.space:

| Aba | Descrição |
| --- | --- |
| Dashboard | KPIs financeiros, gráficos de despesas vs receitas |
| Lançamentos | Edição inline click-to-edit, agrupamento por categoria, alerta overspending |
| Departamentos | 12 departamentos com análise individual |
| Receita | 84 receitas (7 empresas × 12 meses) |
| Colaboradores | 57 colaboradores cadastrados |
| Simulador PLR | Faixas reais (0%, 3%, 7.5%, 10%), multiplicadores tempo de casa e responsabilidade. **3 modos: Real/Prévia/Manual**. Comparativo Prévia vs Orçado. |
| KPIs | 12 KPIs em 4 categorias (Operacional, Comercial, Financeiro, Estratégico) |
| Painel Executivo | Visão consolidada para diretoria |
| Estrutura | Organograma e hierarquia departamental |
| Relatório | Exportação de relatórios financeiros |
| Importar Previstos | Importação de dados previstos via planilha |
| Saúde dos Dados | Verificação de integridade e completude |
| Auditoria | Log de alterações financeiras |
| Histórico | Histórico de versões dos dados |

**Dados reais:** 261 contas contábeis, 3.096 despesas, Despesas Orçadas: R$ 21.214.181,91, Receita Orçada: R$ 21.600.000,00.

**PLR:** Regulamento com 9 seções por empresa (MMB e ALPHA), 10 documentos oficiais, status HOMOLOGADA EM VIGOR (15/04/2026), Conta Giro PLR com fechamento mensal por Hub (Admin/Comercial).

### Informação
- **Notícias** (`/noticias`) — 149+ notícias publicadas, hero destaque, grid de cards, busca, filtros por categoria, buscador automático diário às 7h via LLM, 25+ fontes RSS configuráveis
- **Monitor DOU** (`/dou`) — 6 abas: Dashboard, Publicações, Seguradoras (239 SUSEP), Associações (2.181), Agências (14 reguladoras), Alertas. Coleta automática do DOU, 48 palavras-chave monitoradas
- **Monitor de Sites** (`/monitor-sites`) — 32 sites monitorados, status em tempo real (online/offline/degradado), latência, uptime 24h, health check automático a cada 5 min
- **Notificações** (`/notificacoes`) — Tempo real com polling a cada 30s, tipos: info/warning/error/success. Dropdown no sino com popover. Página dedicada com filtros, busca e exclusão.

### Ferramentas
- **Assinaturas** (`/assinaturas`) — Gerador de assinaturas de e-mail corporativas, seletor de empresa, preview e download JPG
- **Prompts** (`/prompts`) — 858 prompts em 44 categorias, copiar para clipboard, switch público/privado
- **Busca Global** (`⌘K`) — Pesquisa em 7 módulos simultaneamente
- **Documentação** (`/documentacao`) — 16 seções, 150+ itens documentados, exportação PDF, changelog, busca interna
- **Sincronização Bidirecional de Planilhas** (`/sincronizacao-planilhas`) — SOU ↔ Google Sheets com detecção de mudanças, fila de processamento, resolução de conflitos
- **Backup GitHub Automático** (`/backup-github`) — Backup a cada 6h via GitHub API, histórico de commits, botão manual
- **Documentação Técnica Auto-Gerada** — 98 tabelas, 56 endpoints, 57 páginas. Cron a cada 12h.

### Administração
- **Usuários** (`/usuarios`) — CRUD com 5 roles, badges, confirmação dupla, exportação CSV
- **Permissões** (`/permissoes`) — 69 módulos em 19 categorias
- **Auditoria** (`/auditoria`) — 5 abas: Ações, Acessos, Sessões, Logins, Bloqueios
- **Google Workspace Sync** (`/google-workspace`) — Sincronização automática de 27 usuários via Admin SDK, cron a cada 60min
- **Monitor de Planilha** (`/monitoramento-planilha`) — Monitoramento de alterações em Google Sheets
- **Configurações** (`/configuracoes`) — Painel de configurações gerais do sistema

## Sistemas Embutidos (Proxy Reverso Universal)

O SOU possui uma infraestrutura de **proxy reverso universal** que permite embutir sistemas externos dentro do portal. Remove X-Frame-Options/CSP, reescreve URLs, injeta interceptors JS, gerencia cookies server-side (cookie jar por sistema), suporta auto-login, aceitação de políticas e navegação interna. **25 sistemas embutidos com sucesso.**

| Sistema | Tecnologia de Integração |
| --- | --- |
| SGA Hinova | Proxy + Auto-Login + Cookie Jar PHPSESSID + Aceitação de Política |
| PowerCRM | Proxy + Spring Security + 41+ URLs reescritas |
| Sólides MMB | Proxy + Wicket-Ajax + jsessionid |
| Sólides Alpha | Proxy + Wicket-Ajax + reCAPTCHA removido |
| Ponto Eletrônico | Proxy + Wicket + AJAX + redirect |
| Credify | Proxy + Módulo Nativo (API BDRP, saldo R$, histórico) |
| Autoinsp | Proxy + Auth0 PKCE (9 passos) + Interceptors Next.js |
| Cília | Proxy + Puppeteer (dev) / Fallback gracioso (prod) |
| Astrea Jurídico | Proxy + Auto-Login server-side + Cookie userInfo |
| PABX Digital / EZSoft | Direto (sem X-Frame-Options) |
| Infovist/Infocar | Direto (Vue.js) |
| Tecnoseg | Direto |
| Lifeprix | Direto |
| Wix | Direto |
| Adobe Premium | Direto |
| 9 sistemas em Nova Aba | HinovaPay, Canva, ClickSign, Omie, Way In Video, Tabela FIPE, Registro.BR, Locaweb, EZCall |

## Automações

| Automação | Frequência | Descrição |
| --- | --- | --- |
| Health Check | A cada 5 min | 32 sites monitorados, alertas automáticos por e-mail e notificação |
| Busca de Notícias | Diária 7h | LLM (Manus Forge) busca e categoriza notícias do setor de seguros |
| Coleta DOU | Configurável | Scraping da API Imprensa Nacional, 48 palavras-chave |
| Sync Google Sheets | A cada 30 min | Sincronização de processos da Gestão Segura |
| Sync Visitantes | A cada 15 min | Sincronização de visitas, correspondências e pontos |
| Google Workspace Sync | A cada 60 min | Sincronização de 27 usuários via Admin SDK |
| Backup GitHub | A cada 6 horas | Backup automático via GitHub API (300+ arquivos) |
| Doc Técnica Auto | A cada 12 horas | Documentação auto-gerada (98 tabelas, 56 endpoints, 57 páginas) |
| Alpha Bridge | Automático | Sincronização bidirecional com sistema Alpha Proteções |
| MQTT Captura 24h | Contínuo | Captura dedicada de placas via MQTT (câmera NL 20291 MMB 01) |
| Expiração de Senha | No login | Verifica se senha expirou e força troca |

## APIs e Integrações

| API | Uso |
| --- | --- |
| tRPC API | 430+ endpoints, JWT, auditoria automática |
| Google Sheets API v4 | Gestão Segura, Salvados, Calculadoras, Sincronização Bidirecional |
| API Imprensa Nacional | Monitor DOU, coleta automática |
| Resend API | E-mails transacionais (senha, convites, alertas) |
| Manus Forge (LLM) | Busca de notícias, categorização |
| GitHub API | Backup automático a cada 6h, 300+ arquivos |
| Vercel API | Deploy dos 19+ sites do ecossistema |
| API Calculadoras | Registro de cálculos SMA/SMT em Google Sheets |
| MQTT (HiveMQ) | Captura dedicada de placas 24h |
| API Placas | Dados veiculares por placa (batch 256/min) |
| Credify (BDRP) | Consulta de crédito por placa, saldo em tempo real |
| Tutorsa (OCR) | OCR real com login TOTP (2FA) |
| Alpha Bridge | Sincronização bidirecional com Alpha Proteções |
| Google Admin SDK | Sincronização de 27 usuários do Workspace |
| Upstash Redis | Cache distribuído, rate limiting |
| API FIPE | Consulta de preços de veículos (Calculadora AURA) |
| ViaCEP | Consulta de endereço por CEP (Calculadora AURA) |
| Autoinsp (Auth0) | Auto-login PKCE para vistorias veiculares |
| Astrea API | Sincronização de processos jurídicos |
| Google Chat Webhook | Notificação de correspondências aos colaboradores |

## Ecossistema de Sites (25)

O Sistema SOU monitora e integra 25 sites do ecossistema digital:

| Site | URL | Hosting |
| --- | --- | --- |
| Site Institucional | administradoramutual.com.br | Vercel |
| Portal de Sistemas | sistemas.administradoramutual.com.br | Vercel |
| Calculadora SMA | sma.administradoramutual.com.br | Vercel |
| Calculadora SMT | total.administradoramutual.com.br | Vercel |
| AURA Seguradora | s4.administradoramutual.com.br | Vercel |
| Gestão de Salvados | salvados.administradoramutual.com.br | Vercel |
| POTERE Locadora | locadora.administradoramutual.com.br | Vercel |
| SOU Portal | sou.administradoramutual.com.br | Vercel |
| Due Diligence | formulario.administradoramutual.com.br | Vercel |
| POP Financeiro | financeiro.administradoramutual.com.br | Vercel |
| POPs Comercial | comercial.administradoramutual.com.br | Vercel |
| Gestão Segura | gestaosegura.administradoramutual.com.br | Vercel |
| Manual da Marca | marca.administradoramutual.com.br | Vercel |
| Gerador de Assinaturas | assinaturas.administradoramutual.com.br | Vercel |
| Gerador de Prompts | prompts.administradoramutual.com.br | Vercel |
| Painel de Monitoramento | sites.administradoramutual.com.br | Vercel |
| Central de Notícias | noticias.administradoramutual.com.br | Vercel |
| Grupo MMB Hub | grupommb.administradoramutual.com.br | Vercel |
| Dashboard Orçamentário | grupommb2026.manus.space | Manus |
| Monitor DOU | diariomont-xfarhndy.manus.space | Manus |
| Sistema SOU | souorganize-huedqzb2.manus.space / sou.inf.br | Manus |
| Visão 360° | 360.administradoramutual.com.br | Vercel |
| Documentação Técnica | docs.administradoramutual.com.br | Vercel |
| DP-MMB | dp-mmb.administradoramutual.com.br | Vercel |
| DP-Alpha | dp-alpha.administradoramutual.com.br | Vercel |

## Histórico de Versões

| Versão | Data | Tipo | Descrição |
| --- | --- | --- | --- |
| 5.0.0 | 28/04/2026 | Feature | AURA Paridade S4 100% (14 abas + Dashboard + Calculadora Wizard), Proxy Reverso Universal (25 sistemas), Menu reorganizado em Hubs, 69 módulos de permissão, Sinc. Planilhas, Documentação 16 seções |
| 4.9.0 | 27/04/2026 | Feature | Autoinsp Auth0 PKCE, Cília Puppeteer, Credify Nativo (API BDRP), Backup GitHub via API |
| 4.8.0 | 26/04/2026 | Feature | Proxy v2 (reescrita URLs, cookie jar), PowerCRM, SGA Hinova, Sólides, Reorganização menu |
| 4.7.0 | 25/04/2026 | Feature | Marcas reais (100 assets Google Drive), Manual de Marca SOU, PLR Prévia (3 modos) |
| 4.6.0 | 24/04/2026 | Feature | 69 módulos de permissão, Horários de acesso, Proxy reverso, Aceleração API Placas (3.8x) |
| 4.5.0 | 22/04/2026 | Feature | Backup GitHub automático, Documentação auto-gerada, 25 sistemas no Hub |
| 4.4.0 | 21/04/2026 | Feature | Sincronização Bidirecional de Planilhas (SOU ↔ Google Sheets) |
| 4.3.0 | 20/04/2026 | Feature | Credify integrado ao OCR Placas, Alpha Bridge, Google Workspace Sync |
| 4.2.0 | 19/04/2026 | Feature | OCR Placas 14 abas, MQTT captura 24h, API Placas batch |
| 4.1.0 | 18/04/2026 | Feature | Visitantes expandido (Correspondências, Ponto Recepção, Webhook Google Chat) |
| 4.0.0 | 17/04/2026 | Feature | Astrea Jurídico, Controle Alpha, Dashboard Alpha, Monitor de Planilha |
| 3.1.0 | 17/04/2026 | Feature | Exportação PDF da documentação, Histórico de Versões, Sync VitePress |
| 3.0.0 | 17/04/2026 | Melhoria | Documentação reescrita: 14 seções, 103 itens |
| 2.9.0 | 17/04/2026 | Segurança | 6 blocos de melhoria na gestão de usuários |
| 2.8.0 | 15/04/2026 | Feature | PLR completo: regulamento, documentos, homologação |
| 2.7.0 | 14/04/2026 | Feature | Módulo Orçamentário completo com 14 abas |

## Acesso

O acesso é gerenciado pelo super_admin via Gestão de Usuários (`/usuarios`). Criar conta via CRUD ou enviar convite por e-mail. 5 níveis de acesso disponíveis. Homepage e horário de acesso configuráveis por usuário. Login por credenciais (e-mail/senha) ou social (Google/Microsoft).

## Documentação Completa

A documentação interna do Sistema SOU está disponível em `/documentacao` com **16 seções temáticas**, **150+ itens documentados**, exportação PDF, changelog e busca interna. Para a documentação técnica do ecossistema completo, consulte [docs.administradoramutual.com.br](https://docs.administradoramutual.com.br).
