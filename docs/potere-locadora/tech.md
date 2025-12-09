# Documentação Técnica - POTERE Aluguéis

Documentação técnica detalhada do sistema de gestão de frota POTERE/Helpcar Locadora.

## Arquitetura do Sistema

### Visão Geral

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React 19)                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Dashboard  │  │  Relatórios │  │  Painel Admin       │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    tRPC API Layer                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  rentals.*  │  │  vehicles.* │  │  sync.*             │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database (MySQL/TiDB)                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐   │
│  │vehicles │ │ clients │ │ rentals │ │ monthlyHistory  │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Stack de Tecnologia

| Camada | Tecnologia | Versão |
|--------|------------|--------|
| Frontend | React | 19.x |
| Estilização | Tailwind CSS | 4.x |
| Roteamento | Wouter | 3.x |
| Estado | TanStack Query | 5.x |
| API | tRPC | 11.x |
| Backend | Express | 4.x |
| ORM | Drizzle | 0.44.x |
| Banco de Dados | MySQL (TiDB) | - |
| Hospedagem | Manus Platform | - |

## Estrutura de Diretórios

```
potere_alugueis_site/
├── client/
│   ├── public/           # Assets estáticos (logos)
│   └── src/
│       ├── components/   # Componentes reutilizáveis
│       ├── pages/        # Páginas da aplicação
│       │   ├── Home.tsx
│       │   ├── Admin.tsx
│       │   ├── Reports.tsx
│       │   ├── VehicleReport.tsx
│       │   └── RentalDetail.tsx
│       ├── lib/          # Utilitários e cliente tRPC
│       └── App.tsx       # Rotas e layout
├── server/
│   ├── db.ts             # Helpers de banco de dados
│   ├── routers.ts        # Rotas tRPC
│   ├── googleDrive.ts    # Integração Google Drive
│   └── googleSheets.ts   # Integração Google Sheets
├── drizzle/
│   └── schema.ts         # Schema do banco de dados
└── shared/
    └── const.ts          # Constantes compartilhadas
```

## Schema do Banco de Dados

### Tabela: vehicles

```sql
CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  placa VARCHAR(10) NOT NULL UNIQUE,
  modelo VARCHAR(100) NOT NULL,
  marca VARCHAR(50) NOT NULL,
  ano INT NOT NULL,
  cor VARCHAR(30),
  renavam VARCHAR(20),
  chassi VARCHAR(30),
  status ENUM('disponivel', 'alugado', 'manutencao') DEFAULT 'disponivel',
  valorVeiculo INT,
  aluguelSemanal INT,
  aluguelMensal INT,
  custoMensal INT,
  lucroBruto INT,
  administracao INT,
  lucroMensal INT,
  percentualMensal INT,
  googleSheetId VARCHAR(100),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW()
);
```

### Tabela: clients

```sql
CREATE TABLE clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  cpfCnpj VARCHAR(20) UNIQUE,
  email VARCHAR(320),
  telefone VARCHAR(20),
  endereco TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW()
);
```

### Tabela: rentals

```sql
CREATE TABLE rentals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicleId INT NOT NULL,
  clientId INT NOT NULL,
  dataInicio TIMESTAMP NOT NULL,
  dataFim TIMESTAMP,
  valorMensal INT NOT NULL,
  status ENUM('ativo', 'encerrado', 'pendente') DEFAULT 'ativo',
  observacoes TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
  FOREIGN KEY (vehicleId) REFERENCES vehicles(id),
  FOREIGN KEY (clientId) REFERENCES clients(id)
);
```

### Tabela: monthlyHistory

```sql
CREATE TABLE monthlyHistory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehicleId INT NOT NULL,
  mes INT NOT NULL,
  ano INT NOT NULL,
  aluguelSemanal INT,
  aluguelMensal INT,
  protecao INT,
  rastreador INT,
  notaFiscal INT,
  custoMensal INT,
  lucroBruto INT,
  administracao INT,
  lucroMensal INT,
  semanasRecebidas INT,
  createdAt TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (vehicleId) REFERENCES vehicles(id),
  UNIQUE KEY unique_vehicle_month (vehicleId, mes, ano)
);
```

## Rotas tRPC

### Rotas de Aluguéis

| Rota | Tipo | Descrição |
|------|------|-----------|
| `rentals.list` | Query | Lista todos os aluguéis com filtros |
| `rentals.getById` | Query | Busca aluguel por ID |
| `rentals.search` | Query | Busca aluguéis por termo |

### Rotas de Veículos

| Rota | Tipo | Descrição |
|------|------|-----------|
| `vehicles.list` | Query | Lista todos os veículos |
| `vehicles.getByPlaca` | Query | Busca veículo por placa |

### Rotas de Sincronização

| Rota | Tipo | Descrição |
|------|------|-----------|
| `sync.status` | Query | Status da sincronização |
| `sync.trigger` | Mutation | Dispara sincronização manual |
| `sync.logs` | Query | Lista logs de sincronização |

### Rotas de Histórico Mensal

| Rota | Tipo | Descrição |
|------|------|-----------|
| `monthlyHistory.getByVehicle` | Query | Histórico por veículo |
| `monthlyHistory.getSummary` | Query | Resumo consolidado |

## Integração com Google Sheets

O sistema utiliza a API do Google Sheets para sincronização de dados das planilhas de cada veículo.

### IDs das Planilhas

```typescript
const SPREADSHEET_IDS = {
  'SCS7E27': '1QF2VbADl_swQFd94hnemNbS59eVbAewM',
  'RCC3H15': '14HnW71y4P58mVMS6i1dSxYD8HWyn_1TF',
  'RCM3D92': '1Q6wMJLW8D_Uj1LDAg1DnzERwpTsEfITT',
  'EWJ2H82': '18LIxr2MNvcqr-awiAVEGTw3zxAejJt3T',
  'GJK1F56': '1rt8eA2yqMI-kOb-Qgd43KtGNWEIdC7t1'
};
```

### Estrutura das Planilhas

Cada planilha contém abas mensais com a seguinte estrutura:

- **Dados do Veículo**: Placa, modelo, valor
- **Dados Financeiros**: Aluguel semanal/mensal, custos, lucros
- **Semanas Recebidas**: Registro de pagamentos semanais

## Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL` | String de conexão MySQL |
| `JWT_SECRET` | Segredo para tokens de sessão |
| `VITE_APP_ID` | ID da aplicação Manus |
| `OAUTH_SERVER_URL` | URL do servidor OAuth |

## Deploy e Hospedagem

O sistema está hospedado na plataforma Manus com as seguintes características:

- **Build**: Vite + esbuild
- **Runtime**: Node.js 22.x
- **Banco de Dados**: TiDB (MySQL compatível)
- **CDN**: Distribuição global automática
- **SSL**: Certificado automático

### Domínios Configurados

- `locadora.administradoramutual.com.br` (via redirect Vercel)
- `potere-rent-exbg5xay.manus.space` (direto Manus)

## Manutenção

### Adicionar Novo Veículo

1. Criar planilha no Google Drive com estrutura padrão
2. Inserir veículo na tabela `vehicles` com `googleSheetId`
3. Criar contrato na tabela `rentals`
4. Importar histórico mensal na tabela `monthlyHistory`

### Atualizar Dados Financeiros

1. Atualizar planilha no Google Drive
2. Clicar em "Sincronizar" no dashboard
3. Verificar logs no Painel Admin

## Changelog

### Dezembro 2025

- Sistema inicial implementado
- 5 veículos cadastrados
- Relatórios mensais de Jun-Nov/2025
- Integração com Google Drive
- Deploy em produção
