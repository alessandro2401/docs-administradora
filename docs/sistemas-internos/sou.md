# SOU — Sistema de Organização Unificada

**URL:** [souorganize-huedqzb2.manus.space](https://souorganize-huedqzb2.manus.space)
**Domínio Oficial:** [sou.inf.br](https://sou.inf.br)
**Repositório:** [github.com/alessandro2401/sou-sistema](https://github.com/alessandro2401/sou-sistema)
**Status:** Ativo — Produção
**Versão:** 3.1.0 (Abril 2026)

## Visão Geral

O SOU (Sistema de Organização Unificada) é a plataforma central de operações do Grupo MMB e da Administradora Mutual. Consolida mais de 25 sites independentes do ecossistema em um único sistema web integrado, com autenticação própria por credenciais (e-mail/senha) e login social (Google/Microsoft), RBAC de 5 níveis, 51+ tabelas no banco de dados, 43.000+ registros, 700+ testes unitários e 30+ módulos organizados em 7 categorias.

## Stack Técnica

| Camada | Tecnologia |
| --- | --- |
| Frontend | React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui |
| Backend | Express 4 + tRPC 11 + Superjson |
| Banco de Dados | TiDB Serverless (MySQL compatível) + Drizzle ORM (51+ tabelas) |
| Autenticação | Login por credenciais (bcrypt + JWT) + OAuth 2.0 (Google/Microsoft) + RBAC (5 níveis) |
| Cache | Upstash Redis |
| Storage | AWS S3 (storagePut/storageGet) |
| E-mail | Resend API (transacional: recuperação de senha, convites, alertas) |
| LLM | Manus Forge (busca automática de notícias, categorização) |
| Monitoramento | Sentry + Health Check automático (5 min) |
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
- Matriz de 145 permissões (5 roles × 29 módulos)
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

## Módulos (30+)

### Principal
- **Dashboard** (`/`) — Visão 360° com KPIs, gráficos Recharts, busca global (`Ctrl+K`), exportação PDF
- **Hub de Sistemas** (`/hub`) — 34 sistemas com status em tempo real, categorias, busca
- **Visão 360°** (`/visao-360`) — KPIs em 5 dimensões (Financeiro, Atendimento, Sinistro, Jurídico, Estratégico), filtros de período

### Institucional
- **Grupo MMB** (`/grupo-mmb`) — 8 abas (Visão Executiva, Arquitetura, Ecossistema, Governança, Modelo Econômico, Sobre, Contato, Pós-Venda)
- **Marcas** (`/marcas`) — 13 marcas com logos reais (46 PNGs + 36 SVGs), 10 manuais PDF, propósito/missão/visão/valores
- **Estrutura SOU** (`/estrutura-sou`) — 10 abas com Gantt interativo, contratos, diagramas, documentação, anexos

### Operacional
- **Gestão Segura** (`/gestao-segura`) — 158 processos reais, Dashboard com Recharts (Donut, Linha, Barra), KPIs (Total, Críticos, Atenção, Dentro do Prazo), sincronização Google Sheets a cada 30min, aba Processos SOU com CRUD completo (33 campos), importação CSV em lote, exportação CSV/XLSX
- **Salvados** (`/salvados`) — 211 veículos (31 Em Pátio + 166+ Vendidos), Dashboard + Tabela com filtros, aba Planilha Original (Google Sheets, 6 abas)
- **Calculadoras** (`/calculadoras`) — SMA: MEDIAN, 80%/75%, taxas 13.53%/14.65%, Tabela Price. SMT: 7 depreciações, 6 descontos, antecipação 12.7%. Integração Google Sheets, gerar PDF, imprimir, aba Meus Cálculos
- **POTERE Locadora** (`/locadora`) — Gestão de frota: CRUD de veículos, aluguéis e manutenções, 5 contratos reais
- **POPs** (`/pops`) — 3 abas (Sinistro, Financeiro, Comercial), KPIs, fluxogramas interativos, alçadas, downloads PDF
- **AURA Seguradora** (`/aura`) — Institucional (9 abas) + Gestão Operacional (CRUD de apólices, clientes, sinistros)
- **Due Diligence** (`/due-diligence`) — Checklist de 30 itens em 5 categorias, scoring automático (Baixo/Médio/Alto/Crítico), formulário de aquisição (8 seções), exportação PDF

### Módulo Orçamentário (`/orcamentario`)
Dashboard financeiro completo com 14 abas e paridade 100% com grupommb2026.manus.space:

| Aba | Descrição |
| --- | --- |
| Dashboard | KPIs financeiros, gráficos de despesas vs receitas |
| Lançamentos | Edição inline click-to-edit, agrupamento por categoria, alerta overspending |
| Departamentos | 12 departamentos com análise individual |
| Receita | 84 receitas (7 empresas × 12 meses) |
| Colaboradores | 57 colaboradores cadastrados |
| Simulador PLR | Faixas reais (0%, 3%, 7.5%, 10%), multiplicadores tempo de casa e responsabilidade |
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

### RH
- **DP-MMB** (`/dp-mmb`) — 25 documentos do Departamento Pessoal do Movimento Mais Brasil
- **DP-Alpha** (`/dp-alpha`) — 25 documentos do Departamento Pessoal da Alpha Proteções

### Informação
- **Notícias** (`/noticias`) — 149 notícias publicadas, hero destaque, grid de cards, busca, filtros por categoria (Lei 15.040, LC 213, SUSEP, CNSP, Mercado de Seguros, Proteção Patrimonial), buscador automático diário às 7h via LLM, 25 fontes
- **Monitor DOU** (`/dou`) — 6 abas: Dashboard, Publicações, Seguradoras (239 SUSEP), Associações (2.181), Agências (14 reguladoras), Alertas. Coleta automática do DOU, 48 palavras-chave monitoradas
- **Monitor de Sites** (`/monitor-sites`) — 74 sites monitorados, status em tempo real (online/offline/degradado), latência, uptime 24h, health check automático a cada 5 min

### Ferramentas
- **Assinaturas** (`/assinaturas`) — Gerador de assinaturas de e-mail corporativas, seletor de empresa, preview e download
- **Prompts** (`/prompts`) — 858 prompts em 44 categorias, copiar para clipboard, switch público/privado
- **Busca Global** (`⌘K`) — Pesquisa em 7 módulos simultaneamente (processos, salvados, notícias, POPs, sistemas, veículos, apólices)
- **Documentação** (`/documentacao`) — 14 seções, 103 itens documentados, exportação PDF, histórico de versões

### Administração
- **Usuários** (`/usuarios`) — CRUD com 5 roles, badges, confirmação dupla, exportação CSV
- **Permissões** (`/permissoes`) — Matriz visual de 145 permissões
- **Auditoria** (`/auditoria`) — 5 abas: Ações, Acessos, Sessões, Logins, Bloqueios
- **Notificações** (`/notificacoes`) — Tempo real com polling a cada 30s, tipos: info/warning/error/success

## Automações

| Automação | Frequência | Descrição |
| --- | --- | --- |
| Health Check | A cada 5 min | 74 sites monitorados, alertas automáticos por e-mail e notificação |
| Busca de Notícias | Diária 7h | LLM (Manus Forge) busca e categoriza notícias do setor de seguros |
| Coleta DOU | Configurável | Scraping da API Imprensa Nacional, 48 palavras-chave |
| Sync Google Sheets | A cada 30 min | Sincronização de processos da Gestão Segura |
| Expiração de Senha | No login | Verifica se senha expirou e força troca |

## APIs e Integrações

| API | Uso |
| --- | --- |
| tRPC API | 30+ routers, 200+ endpoints, JWT, auditoria automática |
| Google Sheets API | Gestão Segura, Salvados, Calculadoras |
| API Imprensa Nacional | Monitor DOU, coleta automática |
| Resend API | E-mails transacionais (senha, convites, alertas) |
| Manus Forge (LLM) | Busca de notícias, categorização |
| GitHub API | Webhooks, sincronização de código |
| Vercel API | Deploy dos 19+ sites do ecossistema |
| API Calculadoras | Registro de cálculos SMA/SMT em Google Sheets |

## Ecossistema de Sites (23)

O Sistema SOU monitora e integra 23 sites do ecossistema digital:

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
| Visão 360° | 360.administradoramutual.com.br | Vercel |
| Documentação Técnica | docs.administradoramutual.com.br | Vercel |
| Sistema SOU | souorganize-huedqzb2.manus.space / sou.inf.br | Manus |

## Histórico de Versões (Últimas 5)

| Versão | Data | Tipo | Descrição |
| --- | --- | --- | --- |
| 3.1.0 | 17/04/2026 | Feature | Exportação PDF da documentação, Histórico de Versões, Sync VitePress |
| 3.0.0 | 17/04/2026 | Melhoria | Documentação reescrita: 14 seções, 103 itens |
| 2.9.0 | 17/04/2026 | Segurança | 6 blocos de melhoria na gestão de usuários |
| 2.8.0 | 15/04/2026 | Feature | PLR completo: regulamento, documentos, homologação |
| 2.7.0 | 14/04/2026 | Feature | Módulo Orçamentário completo com 14 abas |

## Acesso

O acesso é gerenciado pelo super_admin via Gestão de Usuários (`/usuarios`). Criar conta via CRUD ou enviar convite por e-mail. 5 níveis de acesso disponíveis. Homepage e horário de acesso configuráveis por usuário. Login por credenciais (e-mail/senha) ou social (Google/Microsoft).

## Documentação Completa

A documentação interna do Sistema SOU está disponível em `/documentacao` com 14 seções temáticas, 103 itens documentados, exportação PDF e histórico de versões. Para a documentação técnica do ecossistema completo, consulte [docs.administradoramutual.com.br](https://docs.administradoramutual.com.br).
