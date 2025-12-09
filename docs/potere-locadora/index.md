# POTERE - Sistema de Aluguéis Ativos

Sistema de gestão de frota e aluguéis ativos desenvolvido em parceria entre **POTERE** e **Helpcar Locadora**.

## Visão Geral

O sistema POTERE - Aluguéis Ativos é uma plataforma web para gerenciamento e visualização de veículos alugados, com sincronização automática de dados do Google Drive e relatórios financeiros detalhados.

### URLs de Acesso

| Ambiente | URL |
|----------|-----|
| Produção | [locadora.administradoramutual.com.br](https://locadora.administradoramutual.com.br) |
| Alternativo | [potere-rent-exbg5xay.manus.space](https://potere-rent-exbg5xay.manus.space) |

## Funcionalidades

### Dashboard Principal

- **Total de Veículos**: Exibe a quantidade total de veículos cadastrados
- **Aluguéis Ativos**: Número de contratos de aluguel em andamento
- **Veículos Disponíveis**: Veículos sem contrato ativo
- **Em Manutenção**: Veículos em processo de manutenção
- **Receita Mensal Total**: Soma de todos os aluguéis ativos
- **Lucro POTERE Mensal**: Lucro líquido após administração

### Listagem de Aluguéis

Cada card de aluguel exibe:
- Placa do veículo
- Modelo e ano
- Nome do cliente
- Data de início do contrato
- Valor do aluguel mensal
- Lucro POTERE
- Rentabilidade percentual

### Relatórios Financeiros

O sistema oferece relatórios detalhados mês a mês para cada veículo, incluindo:
- Aluguel semanal e mensal
- Custos (proteção, rastreador, nota fiscal)
- Lucro bruto
- Taxa de administração
- Lucro POTERE líquido
- Semanas recebidas

### Sincronização com Google Drive

O sistema está integrado com planilhas do Google Drive para sincronização de dados:
- Atualização manual via botão "Sincronizar"
- Logs de sincronização no painel administrativo
- Última sincronização exibida no dashboard

## Veículos Cadastrados

| Placa | Modelo | Início | Aluguel Mensal | Lucro POTERE |
|-------|--------|--------|----------------|--------------|
| SCS7E27 | FIAT CRONOS 2023 | Out/2025 | R$ 1.485,00 | R$ 807,54 |
| RCC3H15 | VW GOL 2022 | Jun/2025 | R$ 1.200,00 | R$ 676,80 |
| RCM3D92 | VW GOL 2022 | Jun/2025 | R$ 1.160,00 | R$ 654,24 |
| EWJ2H82 | VW VOYAGE 2023 | Out/2025 | R$ 2.800,00 | R$ 1.549,20 |
| GJK1F56 | VW VOYAGE 2022 | Set/2025 | R$ 2.100,00 | R$ 1.154,40 |

**Total Mensal**: R$ 8.745,00  
**Lucro POTERE Total**: R$ 4.842,18

## Cliente

Todos os veículos estão sublocados para:

**Remiggi Soluções Empresariais Ltda**
- CNPJ: 42.449.239/0001-93
- IM: 5410304
- Endereço: Rua 22, Nº 431, Lote 24 - Quadra H10
- Bairro: Setor Oeste
- Cidade: Goiânia/GO
- CEP: 74120-130
- Telefone: (62) 99600-2365
- E-mail: ecm.contabilidade.ecm@gmail.com

## Arquitetura Técnica

### Stack de Tecnologia

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4
- **Backend**: Node.js + Express + tRPC
- **Banco de Dados**: MySQL (TiDB)
- **Hospedagem**: Manus Platform
- **Autenticação**: Manus OAuth

### Estrutura do Banco de Dados

O sistema utiliza as seguintes tabelas principais:

1. **vehicles** - Cadastro de veículos
2. **clients** - Cadastro de clientes
3. **rentals** - Contratos de aluguel
4. **monthlyHistory** - Histórico financeiro mensal
5. **kmHistory** - Histórico de quilometragem
6. **maintenances** - Registros de manutenção
7. **syncLogs** - Logs de sincronização
8. **syncConfigs** - Configurações de sincronização

### Planilhas Vinculadas

| Placa | ID da Planilha Google |
|-------|----------------------|
| SCS7E27 | 1QF2VbADl_swQFd94hnemNbS59eVbAewM |
| RCC3H15 | 14HnW71y4P58mVMS6i1dSxYD8HWyn_1TF |
| RCM3D92 | 1Q6wMJLW8D_Uj1LDAg1DnzERwpTsEfITT |
| EWJ2H82 | 18LIxr2MNvcqr-awiAVEGTw3zxAejJt3T |
| GJK1F56 | 1rt8eA2yqMI-kOb-Qgd43KtGNWEIdC7t1 |

## Navegação do Sistema

### Páginas Disponíveis

1. **Dashboard** (`/`) - Visão geral com estatísticas e lista de aluguéis
2. **Relatórios** (`/relatorios`) - Resumo consolidado por mês
3. **Relatório Individual** (`/relatorio/:placa`) - Detalhamento por veículo
4. **Painel Admin** (`/admin`) - Logs de sincronização e configurações

### Funcionalidades de Busca

- Busca por placa do veículo
- Busca por modelo
- Busca por nome do cliente

## Identidade Visual

O sistema utiliza as cores das marcas parceiras:

- **POTERE**: Azul marinho (#1e3a5f) e dourado (#f5a623)
- **Helpcar Locadora**: Azul claro (#0ea5e9) e cinza (#6b7280)

As logos de ambas as empresas são exibidas no cabeçalho do sistema.

## Suporte

Para suporte técnico ou dúvidas sobre o sistema, entre em contato com a equipe de TI da Administradora Mutual.
