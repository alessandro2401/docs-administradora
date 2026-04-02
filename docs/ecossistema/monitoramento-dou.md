# Sistema de Monitoramento do Diário Oficial da União (DOU)

## Visão Geral

O **Sistema de Monitoramento do Diário Oficial da União** é uma plataforma interna desenvolvida para a Administradora Mutual com o objetivo de acompanhar automaticamente as publicações do DOU relevantes ao setor de proteção patrimonial mutualista e seguros. O sistema coleta, organiza e disponibiliza publicações do DOU, além de manter um cadastro completo das associações de proteção veicular registradas na SUSEP.

| Atributo | Valor |
| --- | --- |
| **URL de Produção** | [https://dou.administradoramutual.com.br](https://dou.administradoramutual.com.br) |
| **Repositório GitHub** | [https://github.com/alessandro2401/dou-monitoring-system](https://github.com/alessandro2401/dou-monitoring-system) (privado) |
| **Stack Principal** | React 19 + TypeScript + tRPC + Express + MySQL (TiDB) |
| **Hospedagem** | Manus (plataforma gerenciada) |
| **Status** | Ativo e em produção |
| **Última Atualização** | Abril de 2026 |

---

## Funcionalidades Implementadas

### Monitoramento do DOU

O sistema realiza coleta automática das publicações do Diário Oficial da União por meio da API pública do DOU (Imprensa Nacional). A coleta é agendada diariamente e registra publicações relacionadas ao setor de seguros, proteção patrimonial e regulação da SUSEP.

- Coleta automática diária de publicações do DOU
- Busca por palavras-chave configuráveis (seguros, SUSEP, proteção patrimonial, etc.)
- Histórico de coletas com status e contadores
- Visualização e busca de publicações por data, órgão, tipo de ato e palavras-chave

### Cadastro de Associações SUSEP

O sistema mantém o cadastro completo e atualizado de todas as **Associações de Proteção Patrimonial Mutualista** registradas na SUSEP. Em abril de 2026, foi realizada uma importação completa dos dados diretamente da API oficial da SUSEP, totalizando **2.220 associações únicas**.

| Status SUSEP | Quantidade |
| --- | --- |
| Em regularização junto à Susep | 2.205 |
| Cancelada | 15 |
| **Total** | **2.220** |

Os estados com maior concentração de associações são: MG (566), PR (283), PE (239), RJ (203) e SC (180).

### Sistema de Alertas

Permite configurar alertas personalizados por palavras-chave, seguradoras, órgãos e tipos de ato. Os alertas são enviados por e-mail quando novas publicações relevantes são detectadas.

### Painel Administrativo

Dashboard com visão consolidada das publicações recentes, estatísticas de coleta, status das associações e histórico de alertas disparados.

---

## Arquitetura Técnica

O sistema segue uma arquitetura monolítica moderna com separação clara entre frontend e backend, comunicando-se exclusivamente via tRPC.

```
client/                     ← Frontend React 19 + Tailwind CSS 4
  src/
    pages/                  ← Páginas: Dashboard, Publicações, Associações, Alertas
    components/             ← Componentes reutilizáveis (DashboardLayout, etc.)
    lib/trpc.ts             ← Cliente tRPC

server/                     ← Backend Express 4 + tRPC 11
  routers.ts                ← Procedures tRPC (auth, publications, associations, alerts)
  db.ts                     ← Query helpers Drizzle ORM

drizzle/
  schema.ts                 ← Schema do banco de dados (MySQL/TiDB)
```

### Banco de Dados

As principais tabelas do sistema são:

| Tabela | Descrição |
| --- | --- |
| `users` | Usuários do sistema com controle de acesso por role |
| `publications` | Publicações coletadas do DOU |
| `vehicleProtectionAssociations` | 2.220 associações SUSEP |
| `alerts` | Configurações de alertas por usuário |
| `alertHistory` | Histórico de alertas enviados |
| `collectionLogs` | Logs das coletas automáticas |
| `tags` | Palavras-chave e termos do segmento |

### Autenticação

O sistema utiliza autenticação customizada com e-mail e senha, integrada ao mesmo modelo de credenciais do site principal da Administradora Mutual. O controle de acesso é baseado em roles (`admin` / `user`).

---

## Importação das Associações SUSEP (Abril 2026)

### Contexto

Anteriormente, o banco de dados continha apenas **1.015 associações** com CNPJs formatados com pontuação (ex: `56.097.988/0001-03`), provenientes de uma fonte anterior. A SUSEP registrava **2.221 associações** em seu sistema oficial.

### Processo de Extração

A extração foi realizada diretamente da API oficial do sistema SISAP da SUSEP:

- **URL da API:** `https://www2.susep.gov.br/safe/autorizacoes/gateway/empresa`
- **Parâmetros:** `tipoEmpresaId=1199` (Associações de proteção patrimonial mutualista)
- **Autenticação:** Token JWT obtido via login no portal SISAP da SUSEP
- **Método:** Requisições paginadas (100 por página × 23 páginas = 2.221 registros)
- **Script utilizado:** `extract_susep.py` (Python + requests)

### Processo de Importação e Normalização

Após a extração, os dados foram importados e normalizados:

1. **Normalização de CNPJs:** Todos os CNPJs foram convertidos para formato numérico puro (14 dígitos, sem pontuação)
2. **Detecção de duplicatas:** Os 1.015 registros antigos eram duplicatas dos dados da SUSEP com CNPJ formatado diferente — todos foram removidos
3. **Padronização de status:** O status "Em regularização" foi unificado para "Em regularização junto à Susep"
4. **Resultado final:** **2.220 associações únicas** no banco de dados

### Scripts Utilizados

| Script | Função |
| --- | --- |
| `extract_susep.py` | Extração via API da SUSEP com token JWT |
| `import_associacoes.mjs` | Importação para o banco MySQL com upsert por CNPJ |
| `normalize_cnpj.mjs` | Normalização de CNPJs e remoção de duplicatas |
| `check_duplicates.mjs` | Verificação de integridade dos dados |

---

## Repositório GitHub

O código fonte completo está disponível no repositório privado:

**[https://github.com/alessandro2401/dou-monitoring-system](https://github.com/alessandro2401/dou-monitoring-system)**

### Histórico de Checkpoints

| Commit | Descrição |
| --- | --- |
| `a468164` | Importação completa de 2.220 associações SUSEP — Abril 2026 |
| `79972fe` | Correção de bug crítico na função `searchAssociations` (Drizzle ORM) |
| `9d32f8e` | Implementação completa: 350 seguradoras SUSEP, 1.015 associações, 124 tags |
| `606b526` | Unificação de autenticação com sistema customizado |
| `97ad252` | Checkpoint final do sistema pronto para publicação |

---

## Domínios e Acesso

| Ambiente | URL |
| --- | --- |
| Produção | [https://dou.administradoramutual.com.br](https://dou.administradoramutual.com.br) |
| Alternativo | [https://diariomont-xfarhndy.manus.space](https://diariomont-xfarhndy.manus.space) |

---

## Próximos Passos Recomendados

O sistema está operacional e em produção. As seguintes evoluções são recomendadas para as próximas iterações:

1. **Sincronização automática com a SUSEP** — Implementar um job agendado (semanal ou mensal) que renova o token via autenticação e atualiza automaticamente o cadastro de associações, detectando novas entradas e mudanças de status.

2. **Enriquecimento com UFs de operação** — O campo `descricaoUfsOperacao` da API da SUSEP contém todos os estados onde cada associação opera. Armazená-lo como campo separado permitiria filtros geográficos mais precisos.

3. **Alertas de mudança de status** — Criar um mecanismo que compare os dados da SUSEP com os do banco a cada sincronização e notifique quando uma associação mudar de status (ex: de "Em regularização" para "Regular" ou "Cancelada").

---

## Manutenção

Para atualizar o cadastro de associações manualmente, é necessário:

1. Acessar [https://www2.susep.gov.br/safe/autorizacoes/app/empresa](https://www2.susep.gov.br/safe/autorizacoes/app/empresa)
2. Resolver o captcha e filtrar por "Associações de proteção patrimonial mutualista"
3. Obter o token JWT do `sessionStorage` (`appAuthorizationToken`)
4. Executar o script `extract_susep.py` com o novo token
5. Executar `import_associacoes.mjs` para importar os dados atualizados
6. Executar `normalize_cnpj.mjs` para normalizar e remover duplicatas
