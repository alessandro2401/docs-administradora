
# Integração com API FIPE e Cálculos de Rentabilidade

**Autor:** Manus AI
**Data:** 15 de Dezembro de 2025

## 1. Integração com a API FIPE Online

A API da Fipe Online fornece acesso aos dados da Tabela FIPE, permitindo consultar o valor de mercado de qualquer veículo. Esta integração será crítica para manter a avaliação da frota atualizada mensalmente.

### 1.1. Endpoints Utilizados

A integração utilizará os seguintes endpoints da API:

| Endpoint | Método | Descrição |
| :--- | :--- | :--- |
| `/references` | GET | Obtém as referências de meses disponíveis na FIPE |
| `/{vehicleType}/brands` | GET | Lista as marcas de veículos (carros, motos, caminhões) |
| `/{vehicleType}/brands/{brandId}/models` | GET | Lista os modelos de uma marca |
| `/{vehicleType}/brands/{brandId}/models/{modelId}/years` | GET | Lista os anos disponíveis para um modelo |
| `/{vehicleType}/brands/{brandId}/models/{modelId}/years/{yearId}` | GET | Retorna o preço FIPE para um veículo específico |

### 1.2. Fluxo de Consulta

O fluxo para obter o valor FIPE de um veículo é sequencial:

```
1. Obter referências disponíveis (últimos meses)
2. Identificar a marca do veículo (ex: VW - Volkswagen)
3. Encontrar o modelo (ex: Gol 1.6)
4. Encontrar o ano (ex: 2022 Gasolina)
5. Consultar o preço para essa combinação
6. Armazenar o valor e a data da consulta
```

### 1.3. Implementação Backend (Node.js)

```typescript
// services/fipeService.ts
import axios from 'axios';

const FIPE_API_BASE = 'https://fipe.parallelum.com.br/api/v2';
const FIPE_TOKEN = process.env.FIPE_API_TOKEN; // Token da API FIPE

interface FipeVehicle {
  brand: string;
  model: string;
  modelYear: number;
  fuel: string;
  price: string;
  codeFipe: string;
  referenceMonth: string;
}

export const fipeService = {
  /**
   * Consulta o valor FIPE para um veículo específico
   */
  async getVehiclePrice(
    vehicleType: 'cars' | 'motorcycles' | 'trucks',
    brandId: number,
    modelId: number,
    yearId: string,
    referenceMonth?: number
  ): Promise<FipeVehicle | null> {
    try {
      const url = `${FIPE_API_BASE}/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`;
      
      const response = await axios.get(url, {
        headers: {
          'X-Subscription-Token': FIPE_TOKEN
        },
        params: {
          reference: referenceMonth || undefined
        }
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao consultar FIPE:', error);
      return null;
    }
  },

  /**
   * Obtém as referências de meses disponíveis
   */
  async getReferences(): Promise<Array<{code: string, month: string}> | null> {
    try {
      const url = `${FIPE_API_BASE}/references`;
      
      const response = await axios.get(url, {
        headers: {
          'X-Subscription-Token': FIPE_TOKEN
        }
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao obter referências FIPE:', error);
      return null;
    }
  },

  /**
   * Busca a marca pelo nome
   */
  async searchBrand(
    vehicleType: 'cars' | 'motorcycles' | 'trucks',
    brandName: string
  ): Promise<{code: number, name: string} | null> {
    try {
      const url = `${FIPE_API_BASE}/${vehicleType}/brands`;
      
      const response = await axios.get(url, {
        headers: {
          'X-Subscription-Token': FIPE_TOKEN
        }
      });

      const brand = response.data.find((b: any) => 
        b.name.toLowerCase().includes(brandName.toLowerCase())
      );

      return brand || null;
    } catch (error) {
      console.error('Erro ao buscar marca:', error);
      return null;
    }
  },

  /**
   * Busca o modelo pelo nome
   */
  async searchModel(
    vehicleType: 'cars' | 'motorcycles' | 'trucks',
    brandId: number,
    modelName: string
  ): Promise<{code: number, name: string} | null> {
    try {
      const url = `${FIPE_API_BASE}/${vehicleType}/brands/${brandId}/models`;
      
      const response = await axios.get(url, {
        headers: {
          'X-Subscription-Token': FIPE_TOKEN
        }
      });

      const model = response.data.find((m: any) => 
        m.name.toLowerCase().includes(modelName.toLowerCase())
      );

      return model || null;
    } catch (error) {
      console.error('Erro ao buscar modelo:', error);
      return null;
    }
  }
};
```

### 1.4. Automação de Atualização Mensal

Um cron job será configurado para executar no dia 1º de cada mês e atualizar os valores FIPE de todos os veículos ativos:

```typescript
// jobs/updateFipeValues.ts
import cron from 'node-cron';
import { db } from '@/lib/db';
import { fipeService } from '@/services/fipeService';

export const setupFipeUpdateJob = () => {
  // Executar no dia 1º de cada mês às 2h da manhã
  cron.schedule('0 2 1 * *', async () => {
    console.log('Iniciando atualização de valores FIPE...');

    try {
      // Buscar todos os veículos ativos
      const veiculos = await db.query(
        `SELECT id, marca, modelo, ano, tipo_veiculo 
         FROM veiculos 
         WHERE status = 'ativo'`
      );

      // Obter referência do mês atual
      const referencias = await fipeService.getReferences();
      const mesAtual = referencias?.[0]?.code;

      for (const veiculo of veiculos) {
        try {
          // Buscar marca
          const brand = await fipeService.searchBrand(
            veiculo.tipo_veiculo,
            veiculo.marca
          );

          if (!brand) {
            console.warn(`Marca não encontrada: ${veiculo.marca}`);
            continue;
          }

          // Buscar modelo
          const model = await fipeService.searchModel(
            veiculo.tipo_veiculo,
            brand.code,
            veiculo.modelo
          );

          if (!model) {
            console.warn(`Modelo não encontrado: ${veiculo.modelo}`);
            continue;
          }

          // Consultar preço FIPE
          const fipeData = await fipeService.getVehiclePrice(
            veiculo.tipo_veiculo,
            brand.code,
            model.code,
            `${veiculo.ano}-1`,
            parseInt(mesAtual)
          );

          if (fipeData) {
            // Extrair valor numérico do preço (ex: "R$ 10.000,00" -> 10000.00)
            const priceValue = parseFloat(
              fipeData.price.replace(/[^\d,]/g, '').replace(',', '.')
            );

            // Salvar no banco de dados
            await db.query(
              `INSERT INTO fipe_historico 
               (veiculo_id, mes_referencia, codigo_fipe, valor_fipe, data_consulta)
               VALUES ($1, $2, $3, $4, NOW())`,
              [veiculo.id, fipeData.referenceMonth, fipeData.codeFipe, priceValue]
            );

            console.log(`FIPE atualizado para ${veiculo.marca} ${veiculo.modelo}: R$ ${priceValue}`);
          }
        } catch (error) {
          console.error(`Erro ao atualizar FIPE para veículo ${veiculo.id}:`, error);
        }
      }

      console.log('Atualização de valores FIPE concluída!');
    } catch (error) {
      console.error('Erro ao executar job de atualização FIPE:', error);
    }
  });
};
```

## 2. Cálculos de Rentabilidade

### 2.1. Fórmulas Principais

#### 2.1.1. Custo Total de Propriedade (TCO)

O TCO é a soma de todos os custos associados a um veículo durante seu ciclo de vida:

```
TCO = Custo de Aquisição + Custos Operacionais + Custos Financeiros

Onde:
- Custo de Aquisição = Valor pago na compra (ou valor total com juros se financiado)
- Custos Operacionais = Manutenção + Combustível + Seguro + IPVA + Multas + Sinistros
- Custos Financeiros = Juros de financiamento (se aplicável)
```

#### 2.1.2. Receita Total Gerada

A receita total é a soma de todos os aluguéis e serviços adicionais gerados pelo veículo:

```
Receita Total = Σ (Valor da Locação + Serviços Adicionais)
```

#### 2.1.3. Lucro Líquido

```
Lucro Líquido = Receita Total - TCO
```

#### 2.1.4. ROI (Retorno sobre Investimento)

```
ROI (%) = (Lucro Líquido / Custo de Aquisição) × 100

Exemplo:
- Custo de Aquisição: R$ 50.000
- Lucro Líquido após 1 ano: R$ 10.000
- ROI = (10.000 / 50.000) × 100 = 20%
```

#### 2.1.5. Payback Period (Ponto de Equilíbrio)

```
Payback Period = Custo de Aquisição / Lucro Mensal Médio

Exemplo:
- Custo de Aquisição: R$ 50.000
- Lucro Mensal Médio: R$ 2.000
- Payback Period = 50.000 / 2.000 = 25 meses
```

#### 2.1.6. Depreciação Linear Mensal

```
Depreciação Mensal = (Valor de Compra - Valor Residual) / Vida Útil (em meses)

Exemplo:
- Valor de Compra: R$ 50.000
- Valor Residual Estimado: R$ 10.000
- Vida Útil: 60 meses (5 anos)
- Depreciação Mensal = (50.000 - 10.000) / 60 = R$ 667/mês
```

#### 2.1.7. Valor Contábil Atual

```
Valor Contábil = Valor de Compra - (Depreciação Mensal × Meses Decorridos)

Exemplo (após 12 meses):
- Valor Contábil = 50.000 - (667 × 12) = 50.000 - 8.004 = R$ 41.996
```

### 2.2. Implementação Backend (Node.js)

```typescript
// services/rentabilityService.ts
import { db } from '@/lib/db';

interface VehicleRentability {
  vehicleId: string;
  totalAcquisitionCost: number;
  totalOperationalCosts: number;
  totalFinancialCosts: number;
  totalCost: number; // TCO
  totalRevenue: number;
  netProfit: number;
  roi: number; // percentual
  paybackPeriodMonths: number;
  monthlyDepreciation: number;
  currentBookValue: number;
  fipeValue: number;
  gainOrLoss: number; // FIPE Value - Book Value
}

export const rentabilityService = {
  /**
   * Calcula a rentabilidade completa de um veículo
   */
  async calculateVehicleRentability(
    vehicleId: string,
    upToMonth?: string // 'YYYY-MM' para análise até um mês específico
  ): Promise<VehicleRentability> {
    // 1. Obter dados do veículo
    const vehicle = await db.query(
      `SELECT * FROM veiculos WHERE id = $1`,
      [vehicleId]
    );

    if (!vehicle || vehicle.length === 0) {
      throw new Error('Veículo não encontrado');
    }

    const v = vehicle[0];

    // 2. Calcular custo de aquisição
    let acquisitionCost = v.valor_compra;
    
    // Se financiado, somar juros
    if (v.forma_aquisicao === 'financiado') {
      const financing = await db.query(
        `SELECT * FROM financiamentos WHERE veiculo_id = $1`,
        [vehicleId]
      );
      
      if (financing.length > 0) {
        const f = financing[0];
        const totalPaid = f.valor_parcela * f.total_parcelas;
        acquisitionCost = totalPaid;
      }
    }

    // Se consórcio, somar taxas
    if (v.forma_aquisicao === 'consorcio') {
      const consortium = await db.query(
        `SELECT * FROM consorcios WHERE veiculo_id = $1`,
        [vehicleId]
      );
      
      if (consortium.length > 0) {
        const c = consortium[0];
        const totalPaid = c.valor_parcela * c.total_parcelas;
        acquisitionCost = totalPaid;
      }
    }

    // 3. Calcular custos operacionais
    const operationalCosts = await db.query(
      `SELECT COALESCE(SUM(valor), 0) as total
       FROM (
         SELECT valor FROM manutencoes WHERE veiculo_id = $1
         UNION ALL
         SELECT valor FROM multas WHERE veiculo_id = $1
         UNION ALL
         SELECT valor FROM sinistros WHERE veiculo_id = $1
       ) as custos`,
      [vehicleId]
    );

    // 4. Calcular receita total
    const revenue = await db.query(
      `SELECT COALESCE(SUM(valor_aluguel), 0) as total
       FROM contratos
       WHERE veiculo_id = $1 AND status = 'finalizado'`,
      [vehicleId]
    );

    // 5. Calcular depreciação
    const residualValue = v.valor_residual_estimado || (v.valor_compra * 0.2); // 20% como padrão
    const usefulLifeMonths = v.vida_util_meses || 60;
    const monthlyDepreciation = (v.valor_compra - residualValue) / usefulLifeMonths;

    // 6. Calcular valor contábil atual
    const monthsElapsed = this.calculateMonthsElapsed(v.data_aquisicao);
    const currentBookValue = v.valor_compra - (monthlyDepreciation * monthsElapsed);

    // 7. Obter valor FIPE atual
    const fipeData = await db.query(
      `SELECT valor_fipe FROM fipe_historico
       WHERE veiculo_id = $1
       ORDER BY data_consulta DESC
       LIMIT 1`,
      [vehicleId]
    );

    const fipeValue = fipeData.length > 0 ? fipeData[0].valor_fipe : v.valor_compra;

    // 8. Calcular métricas
    const totalCost = acquisitionCost + operationalCosts[0].total;
    const totalRevenue = revenue[0].total;
    const netProfit = totalRevenue - totalCost;
    const roi = (netProfit / acquisitionCost) * 100;
    const paybackPeriodMonths = acquisitionCost / (totalRevenue / monthsElapsed);
    const gainOrLoss = fipeValue - currentBookValue;

    return {
      vehicleId,
      totalAcquisitionCost: acquisitionCost,
      totalOperationalCosts: operationalCosts[0].total,
      totalFinancialCosts: 0, // Já incluído no custo de aquisição
      totalCost,
      totalRevenue,
      netProfit,
      roi,
      paybackPeriodMonths,
      monthlyDepreciation,
      currentBookValue,
      fipeValue,
      gainOrLoss
    };
  },

  /**
   * Calcula a rentabilidade de toda a frota
   */
  async calculateFleetRentability(): Promise<{
    vehicles: VehicleRentability[];
    summary: {
      totalFleetValue: number;
      totalFleetCost: number;
      totalFleetRevenue: number;
      fleetROI: number;
      averageROIPerVehicle: number;
    };
  }> {
    // Buscar todos os veículos ativos
    const vehicles = await db.query(
      `SELECT id FROM veiculos WHERE status = 'ativo'`
    );

    const rentabilities = [];
    let totalRevenue = 0;
    let totalCost = 0;
    let totalFleetValue = 0;

    for (const vehicle of vehicles) {
      const rentability = await this.calculateVehicleRentability(vehicle.id);
      rentabilities.push(rentability);
      totalRevenue += rentability.totalRevenue;
      totalCost += rentability.totalCost;
      totalFleetValue += rentability.fipeValue;
    }

    const fleetROI = ((totalRevenue - totalCost) / totalCost) * 100;
    const averageROIPerVehicle = rentabilities.reduce((sum, r) => sum + r.roi, 0) / rentabilities.length;

    return {
      vehicles: rentabilities,
      summary: {
        totalFleetValue,
        totalFleetCost: totalCost,
        totalFleetRevenue: totalRevenue,
        fleetROI,
        averageROIPerVehicle
      }
    };
  },

  /**
   * Calcula meses decorridos desde a aquisição
   */
  private calculateMonthsElapsed(acquisitionDate: Date): number {
    const now = new Date();
    const months = (now.getFullYear() - acquisitionDate.getFullYear()) * 12 +
                   (now.getMonth() - acquisitionDate.getMonth());
    return Math.max(0, months);
  }
};
```

## 3. Relatórios de Rentabilidade

### 3.1. Relatório de Rentabilidade por Veículo

Exibe a rentabilidade completa de cada veículo, incluindo:

*   Custo de aquisição e forma de aquisição
*   Custos operacionais acumulados
*   Receita total gerada
*   TCO (Custo Total de Propriedade)
*   Lucro líquido
*   ROI (%)
*   Payback Period
*   Valor FIPE atual vs. Valor contábil
*   Ganho/Perda (diferença entre FIPE e contábil)

### 3.2. Relatório de Rentabilidade da Frota

Exibe a rentabilidade consolidada de toda a frota:

*   Valor total da frota (FIPE)
*   Custo total de propriedade (TCO)
*   Receita total gerada
*   Lucro líquido total
*   ROI da frota (%)
*   ROI médio por veículo
*   Ranking de veículos por lucratividade

### 3.3. Relatório de Depreciação

Mostra a depreciação acumulada e o valor contábil de cada veículo ao longo do tempo:

*   Valor de compra
*   Depreciação mensal
*   Depreciação acumulada
*   Valor contábil atual
*   Vida útil restante

## 4. Conclusão

A integração com a API FIPE e os cálculos de rentabilidade fornecerão à POTERE LOCADORA uma visão precisa e atualizada da saúde financeira de cada ativo e do negócio como um todo. Isso permitirá otimizar a gestão de frota, melhorar a precificação e tomar decisões estratégicas baseadas em dados concretos.
# Módulo de Controle de Veículos e Documentação

**Autor:** Manus AI
**Data:** 15 de Dezembro de 2025
**Versão:** 1.0

## 1. Visão Geral

Este documento detalha as funcionalidades do **Módulo de Controle de Veículos**, uma adição crítica ao Sistema de Gestão Integrado da POTERE LOCADORA. O módulo foi projetado para automatizar e centralizar o acompanhamento da utilização dos veículos pelos clientes, com foco especial nas necessidades dos motoristas de aplicativo. As funcionalidades principais incluem o registro semanal de quilometragem e um sistema robusto para solicitação e gestão de documentos.

## 2. Funcionalidades no Frontend (Área do Cliente)

O cliente (motorista) terá uma nova seção em sua área logada chamada **"Meu Veículo"**, com as seguintes funcionalidades:

### 2.1. Registro Semanal de Quilometragem

*   **Interface de Submissão:** Semanalmente, o sistema solicitará ao motorista que insira a quilometragem atual do veículo.
    *   O formulário exibirá a **quilometragem anterior** (registrada na semana anterior) para referência.
    *   O campo de **quilometragem atual** aceitará apenas números e validará se o valor é maior que o anterior.
    *   Haverá um campo para **upload de foto do odômetro** como comprovante, tornando o processo mais seguro e auditável.
*   **Histórico de Registros:** O cliente poderá visualizar um histórico completo de todos os registros de quilometragem enviados, com data, quilometragem registrada, quilometragem percorrida na semana e a foto do odômetro.
*   **Cálculo Automático:** O sistema calculará e exibirá a **distância percorrida na semana** (Quilometragem Atual - Quilometragem Anterior).
*   **Notificações e Lembretes:** O sistema enviará lembretes automáticos (via e-mail, SMS e notificação no app) caso o registro semanal não seja efetuado dentro do prazo estipulado (ex: toda segunda-feira).

### 2.2. Gestão de Documentos Solicitados

*   **Caixa de Entrada de Solicitações:** Uma área onde o cliente visualizará todas as solicitações de documentos pendentes enviadas pela POTERE LOCADORA.
    *   Cada solicitação terá um título claro (ex: "Extrato de Viagens Uber - Dezembro/2025"), uma descrição detalhada e um prazo para envio.
*   **Interface de Upload:** Para cada solicitação, haverá uma interface de upload de arquivos simples e intuitiva (arrastar e soltar ou selecionar arquivo).
    *   Formatos aceitos: PDF, JPG, PNG, etc.
    *   Limite de tamanho de arquivo será configurável.
*   **Status e Histórico:** O cliente poderá acompanhar o status de cada documento enviado ("Enviado", "Em Análise", "Aprovado", "Rejeitado") e acessar o histórico de todos os documentos já submetidos.
    *   Em caso de rejeição, o motivo será claramente exibido (ex: "Documento ilegível", "Período incorreto").

## 3. Funcionalidades no Backoffice (Painel Administrativo)

A equipe da POTERE LOCADORA terá controle total sobre este módulo através do painel administrativo.

### 3.1. Gestão de Quilometragem

*   **Dashboard de Acompanhamento:** Uma visão geral de todos os veículos, mostrando o status do último registro de quilometragem (em dia, pendente, atrasado).
*   **Visualização por Veículo/Contrato:** Ao selecionar um veículo ou contrato, o administrador poderá ver o histórico completo de quilometragem, incluindo as fotos dos odômetros enviadas pelos clientes.
*   **Relatórios de Utilização:** Geração de relatórios sobre a quilometragem percorrida por veículo, por cliente ou por período, permitindo identificar padrões de uso e potenciais desvios.
*   **Alertas de Anomalias:** O sistema poderá gerar alertas automáticos se a quilometragem registrada for muito acima ou abaixo da média esperada para um motorista de aplicativo, indicando possível uso indevido ou ociosidade.

### 3.2. Sistema de Solicitação de Documentos

*   **Criação de Solicitações:** O administrador poderá criar novas solicitações de documentos de forma individual (para um cliente específico) ou em massa (para um grupo de clientes, ex: todos os motoristas de Uber).
    *   Campos da solicitação: Título, Descrição, Prazo, Cliente(s) alvo.
*   **Fila de Análise de Documentos:** Uma área centralizada onde todos os documentos enviados pelos clientes aparecerão para análise.
    *   O administrador poderá visualizar o documento, aprovar ou rejeitar com um motivo.
*   **Armazenamento Centralizado:** Todos os documentos aprovados serão automaticamente associados ao cadastro do cliente e do contrato, criando um repositório digital organizado e de fácil acesso.

## 4. Modelo de Dados (Expansão)

Para suportar estas novas funcionalidades, o modelo de dados será expandido com as seguintes tabelas:

### 4.1. Tabela: QUILOMETRAGEM_HISTORICO

Armazena o histórico de registros de quilometragem.

```sql
CREATE TABLE quilometragem_historico (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contrato_id UUID NOT NULL REFERENCES contratos(id),
  veiculo_id UUID NOT NULL REFERENCES veiculos(id),
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  km_anterior INTEGER NOT NULL,
  km_atual INTEGER NOT NULL,
  km_percorrida INTEGER GENERATED ALWAYS AS (km_atual - km_anterior) STORED,
  foto_odometro_url VARCHAR(255) NOT NULL,
  registrado_por_usuario_id UUID REFERENCES usuarios(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_quilometragem_contrato ON quilometragem_historico(contrato_id);
CREATE INDEX idx_quilometragem_veiculo ON quilometragem_historico(veiculo_id);
```

### 4.2. Tabela: DOCUMENTOS_SOLICITACOES

Armazena as solicitações de documentos criadas pelos administradores.

```sql
CREATE TABLE documentos_solicitacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  prazo_envio DATE,
  criado_por_usuario_id UUID NOT NULL REFERENCES usuarios(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4.3. Tabela: DOCUMENTOS_ENVIADOS

Armazena os documentos enviados pelos clientes em resposta às solicitações.

```sql
CREATE TABLE documentos_enviados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  solicitacao_id UUID NOT NULL REFERENCES documentos_solicitacoes(id),
  cliente_id UUID NOT NULL REFERENCES clientes(id),
  contrato_id UUID NOT NULL REFERENCES contratos(id),
  arquivo_url VARCHAR(255) NOT NULL,
  nome_arquivo VARCHAR(255),
  formato_arquivo VARCHAR(20),
  tamanho_arquivo INTEGER, -- em bytes
  status VARCHAR(50) DEFAULT 'enviado', -- enviado, em_analise, aprovado, rejeitado
  motivo_rejeicao TEXT,
  enviado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  analisado_por_usuario_id UUID REFERENCES usuarios(id),
  analisado_em TIMESTAMP
);

CREATE INDEX idx_documentos_solicitacao ON documentos_enviados(solicitacao_id);
CREATE INDEX idx_documentos_cliente ON documentos_enviados(cliente_id);
CREATE INDEX idx_documentos_status ON documentos_enviados(status);
```

## 5. Fluxo de Trabalho e Notificações

1.  **Agendamento Semanal:** Um processo automatizado (cron job) rodará todo início de semana para verificar quais clientes ainda não enviaram a quilometragem.
2.  **Lembretes:** E-mails e notificações são enviados aos clientes pendentes.
3.  **Submissão pelo Cliente:** O cliente acessa o portal, preenche a quilometragem, anexa a foto e envia.
4.  **Registro no Sistema:** Os dados são salvos na tabela `quilometragem_historico`.
5.  **Solicitação de Documento:** O administrador cria uma solicitação no Backoffice.
6.  **Notificação ao Cliente:** O cliente recebe uma notificação sobre o novo documento solicitado.
7.  **Upload pelo Cliente:** O cliente envia o documento através do portal.
8.  **Análise pelo Admin:** O documento aparece na fila de análise. O administrador aprova ou rejeita.
9.  **Feedback ao Cliente:** O cliente é notificado sobre o resultado da análise.

## 6. Conclusão

O Módulo de Controle de Veículos é essencial para a gestão eficaz de uma frota alugada para motoristas de aplicativo. Ele não apenas garante o cumprimento das políticas de quilometragem, mas também cria um canal seguro e auditável para a troca de documentos importantes, aumentando a segurança operacional, reduzindo riscos e otimizando a comunicação entre a POTERE LOCADORA e seus clientes.
# Módulo Avançado de Gestão Financeira e Rentabilidade

**Autor:** Manus AI
**Data:** 15 de Dezembro de 2025
**Versão:** 1.0

## 1. Visão Geral

Este documento detalha a arquitetura e as funcionalidades do **Módulo Avançado de Gestão Financeira e Rentabilidade**, uma expansão crítica do sistema de gestão da POTERE LOCADORA. O objetivo é fornecer uma visão profunda e precisa da saúde financeira de cada ativo (veículo) e do negócio como um todo, permitindo a tomada de decisões estratégicas baseadas em dados concretos.

O módulo integrará a avaliação de mercado dos veículos através da API da Tabela FIPE, calculará a depreciação, e analisará a rentabilidade considerando diferentes formas de aquisição e todos os custos associados ao ciclo de vida do veículo (TCO - Custo Total de Propriedade).

## 2. Funcionalidades Principais

### 2.1. Dashboard de Rentabilidade

Um novo dashboard no Backoffice Administrativo focado exclusivamente em métricas de rentabilidade:

*   **KPIs em Tempo Real:**
    *   **ROI (Retorno sobre Investimento) da Frota:** Rentabilidade geral da frota.
    *   **Valor Total da Frota (Tabela FIPE):** Valor de mercado atualizado de todos os veículos.
    *   **Valor Contábil da Frota:** Valor de aquisição - depreciação acumulada.
    *   **Lucratividade Média por Veículo:** Receita média mensal por veículo vs. custo médio.
*   **Gráficos Interativos:**
    *   Comparativo: Receita Total vs. Custo Total (TCO) por mês.
    *   Evolução do Valor da Frota (FIPE vs. Contábil).
    *   Distribuição de Rentabilidade por Categoria de Veículo.

### 2.2. Expansão do Cadastro de Veículos

O módulo de Gestão de Frota será expandido para incluir informações financeiras detalhadas para cada veículo:

*   **Dados de Aquisição:**
    *   **Forma de Aquisição:** Menu de seleção (À Vista, Financiado, Empréstimo, Consórcio).
    *   **Valor de Compra:** O valor total pago na aquisição.
    *   **Data de Aquisição:** Data em que o veículo foi incorporado à frota.
    *   **Status Financeiro:** (Quitado, Alienado).
*   **Dados para Financiamento/Empréstimo (se aplicável):**
    *   Instituição Financeira, Taxa de Juros (%), Nº de Parcelas, Valor da Parcela.
*   **Dados para Consórcio (se aplicável):**
    *   Administradora, Valor da Carta de Crédito, Nº de Parcelas, Valor da Parcela.
*   **Dados para Depreciação:**
    *   **Valor Residual Estimado:** Valor esperado do veículo ao final de sua vida útil (pode ser um % do valor de compra).
    *   **Vida Útil (em meses):** Padrão de 60 meses (5 anos), mas configurável.

### 2.3. Integração com a API da Tabela FIPE

O sistema se integrará com a API da **Fipe Online** (`https://fipe.online/docs/api/fipe`) para automatizar a avaliação da frota.

*   **Atualização Mensal Automática:**
    *   Um processo automatizado (cron job) será executado no início de cada mês para consultar a API da FIPE e obter o valor de mercado atualizado para cada veículo da frota.
*   **Histórico de Valorização/Desvalorização:**
    *   O sistema armazenará o valor FIPE de cada mês, permitindo visualizar a curva de valorização ou desvalorização de cada veículo ao longo do tempo.

### 2.4. Cálculo de Depreciação

O sistema calculará a depreciação mensal de cada veículo para fins contábeis e de análise de rentabilidade.

*   **Método de Depreciação Linear:**
    *   O método padrão será a depreciação linear, o mais comum para frotas.
    *   **Fórmula:** `Depreciação Mensal = (Custo de Aquisição - Valor Residual Estimado) / Vida Útil (em meses)`
*   **Relatórios de Depreciação:**
    *   Relatórios mostrando a depreciação acumulada e o valor contábil atual de cada veículo.

### 2.5. Análise de Custo Total de Propriedade (TCO)

Para cada veículo, o sistema calculará o TCO, somando todos os custos associados ao seu ciclo de vida.

*   **Custos de Aquisição:**
    *   Valor da compra ou valor total pago no financiamento (principal + juros).
*   **Custos Operacionais (já registrados no sistema):**
    *   Manutenção (preventiva e corretiva).
    *   Combustível (se aplicável).
    *   Seguro, IPVA, Licenciamento.
    *   Multas e Sinistros.
*   **Custos Financeiros:**
    *   Juros de financiamento/empréstimo.
    *   Taxas administrativas de consórcio.

### 2.6. Análise de Rentabilidade por Ativo

Esta é a funcionalidade central do módulo, fornecendo uma visão clara da performance de cada veículo.

*   **Cálculo de ROI (Retorno sobre Investimento) por Veículo:**
    *   **Fórmula:** `ROI = (Receita Total Gerada - Custo Total de Propriedade) / Custo Total de Propriedade`
    *   O ROI será calculado e exibido para cada veículo, permitindo identificar os ativos mais e menos rentáveis.
*   **Ponto de Equilíbrio (Payback Period):**
    *   O sistema calculará em quanto tempo a receita gerada por um veículo cobre seu custo total de aquisição.
*   **Comparativos e Gráficos:**
    *   Gráfico de Receita vs. Custo para cada veículo.
    *   Comparativo entre o valor de aluguel e o custo diário do veículo (TCO diário).
    *   Ranking de veículos por lucratividade.

## 3. Modelo de Dados (Expansão)

Para suportar estas funcionalidades, as seguintes tabelas serão adicionadas ou modificadas:

### 3.1. Tabela: `veiculos` (Modificações)

```sql
ALTER TABLE veiculos
ADD COLUMN forma_aquisicao VARCHAR(50), -- 'a_vista', 'financiado', 'emprestimo', 'consorcio'
ADD COLUMN valor_compra DECIMAL(10, 2),
ADD COLUMN data_aquisicao DATE,
ADD COLUMN status_financeiro VARCHAR(50), -- 'quitado', 'alienado'
ADD COLUMN valor_residual_estimado DECIMAL(10, 2),
ADD COLUMN vida_util_meses INTEGER DEFAULT 60;
```

### 3.2. Tabela: `financiamentos` (Nova)

```sql
CREATE TABLE financiamentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  veiculo_id UUID NOT NULL REFERENCES veiculos(id),
  instituicao_financeira VARCHAR(255),
  taxa_juros_anual DECIMAL(5, 2),
  total_parcelas INTEGER,
  valor_parcela DECIMAL(10, 2),
  dia_vencimento INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.3. Tabela: `consorcios` (Nova)

```sql
CREATE TABLE consorcios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  veiculo_id UUID NOT NULL REFERENCES veiculos(id),
  administradora VARCHAR(255),
  valor_carta_credito DECIMAL(10, 2),
  taxa_administracao DECIMAL(5, 2),
  total_parcelas INTEGER,
  valor_parcela DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.4. Tabela: `fipe_historico` (Nova)

```sql
CREATE TABLE fipe_historico (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  veiculo_id UUID NOT NULL REFERENCES veiculos(id),
  mes_referencia VARCHAR(20),
  codigo_fipe VARCHAR(20),
  valor_fipe DECIMAL(10, 2),
  data_consulta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.5. Tabela: `depreciacao_historico` (Nova)

```sql
CREATE TABLE depreciacao_historico (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  veiculo_id UUID NOT NULL REFERENCES veiculos(id),
  mes_ano_referencia VARCHAR(7), -- 'YYYY-MM'
  valor_depreciado_mes DECIMAL(10, 2),
  valor_contabil_atualizado DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 4. Fluxo de Trabalho e Automações

1.  **Cadastro do Veículo:** Ao adicionar um novo veículo, o administrador preenche os novos campos financeiros.
2.  **Atualização FIPE (Automatizado):** No dia 1º de cada mês, um cron job consulta a API da FIPE para cada veículo ativo e salva o novo valor na tabela `fipe_historico`.
3.  **Cálculo de Depreciação (Automatizado):** Mensalmente, outro cron job calcula a depreciação para cada veículo e atualiza a tabela `depreciacao_historico`.
4.  **Análise de Rentabilidade:** O administrador acessa o Dashboard de Rentabilidade, que exibe os KPIs e gráficos atualizados em tempo real, com base nos dados de receitas (do módulo de faturamento) e custos (TCO).

## 5. Conclusão

Este módulo transformará a gestão financeira da POTERE LOCADORA de reativa para proativa. Ao entender a verdadeira rentabilidade de cada ativo e do negócio como um todo, a empresa poderá tomar decisões mais inteligentes sobre:

*   **Aquisição de Frota:** Quais modelos e formas de aquisição são mais rentáveis.
*   **Precificação:** Definir preços de aluguel que garantam a lucratividade.
*   **Desmobilização de Ativos:** Saber o momento certo de vender um veículo, maximizando o retorno.
*   **Estratégia de Investimento:** Onde alocar capital para obter o maior retorno possível.
# Sistema de Inspeção Visual com Upload de Fotos - POTERE LOCADORA

**Autor:** Manus AI
**Data:** 15 de Dezembro de 2025

## 1. Visão Geral

O **Sistema de Inspeção Visual** é um componente crítico do Módulo de Controle de Veículos, projetado para permitir que motoristas de aplicativos façam o registro fotográfico do estado do veículo. Este sistema garante que ambas as partes (POTERE LOCADORA e cliente) tenham documentação visual do estado do veículo em momentos-chave (retirada, durante o contrato e devolução), prevenindo disputas sobre danos e protegendo os interesses de ambas as partes.

## 2. Funcionalidades no Frontend (Área do Cliente)

### 2.1. Interface de Inspeção Visual

O cliente terá acesso a uma nova seção em "Meu Veículo" chamada **"Inspeção do Veículo"**, com as seguintes funcionalidades:

#### 2.1.1. Pontos de Inspeção Obrigatórios

O sistema solicitará fotos de **5 ângulos diferentes** do veículo, cobrindo toda a extensão exterior:

| Ponto | Descrição | Objetivo |
| :--- | :--- | :--- |
| **1. Frontal** | Frente do veículo (capô, farol, grade, pára-choque) | Verificar danos na frente |
| **2. Lateral Esquerda** | Lado esquerdo completo (porta, espelho, rodas) | Verificar danos laterais |
| **3. Lateral Direita** | Lado direito completo (porta, espelho, rodas) | Verificar danos laterais |
| **4. Traseira** | Traseira do veículo (porta-malas, farol, pára-choque) | Verificar danos na traseira |
| **5. Interior** | Banco do motorista, volante, painel, bancos traseiros | Verificar limpeza e danos internos |

#### 2.1.2. Fluxo de Captura de Fotos

```
1. Cliente acessa "Inspeção do Veículo"
2. Sistema exibe guia visual com instruções para cada ângulo
3. Para cada ponto:
   a. Exibe ilustração do ângulo esperado
   b. Exibe instruções claras (ex: "Fotografe a frente do veículo, incluindo capô e farol")
   c. Cliente clica em "Tirar Foto" (acessa câmera do dispositivo)
   d. Cliente posiciona câmera conforme instruções
   e. Foto é capturada
   f. Sistema valida qualidade da foto (nitidez, iluminação)
   g. Cliente confirma ou retira a foto
4. Após todas as 5 fotos:
   a. Sistema exibe galeria com as fotos capturadas
   b. Cliente pode revisar e retomar qualquer foto
   c. Cliente clica em "Enviar Inspeção"
5. Sistema faz upload das fotos para S3/R2
6. Registra data/hora e localização GPS (se autorizado)
7. Exibe confirmação de sucesso
```

#### 2.1.3. Validação de Qualidade de Foto

O sistema validará cada foto antes de aceitar:

*   **Nitidez:** Detectar se a foto está desfocada (usando análise de blur).
*   **Iluminação:** Verificar se a foto tem iluminação adequada (não muito escura ou muito clara).
*   **Tamanho:** Validar se a foto tem resolução mínima (ex: 1280x720px).
*   **Tipo de Arquivo:** Aceitar apenas JPEG, PNG (máximo 5MB por foto).
*   **Conteúdo:** Usar visão computacional para verificar se a foto contém o veículo.

#### 2.1.4. Histórico de Inspeções

O cliente poderá visualizar:

*   **Todas as inspeções realizadas** com data, hora e localização.
*   **Galeria de fotos** para cada inspeção.
*   **Status da inspeção** (pendente, em análise, aprovada, rejeitada).
*   **Comentários do admin** em caso de rejeição.

### 2.2. Tipos de Inspeção

O sistema suportará diferentes tipos de inspeção, cada um com sua própria frequência:

| Tipo | Frequência | Obrigatoriedade | Descrição |
| :--- | :--- | :--- | :--- |
| **Inspeção Inicial** | Uma vez | Obrigatória | Ao retirar o veículo (retirada) |
| **Inspeção Semanal** | Semanal | Obrigatória | Toda segunda-feira para verificar estado geral |
| **Inspeção de Dano** | Conforme necessário | Condicional | Quando há dano a relatar |
| **Inspeção Final** | Uma vez | Obrigatória | Ao devolver o veículo (devolução) |

## 3. Funcionalidades no Backoffice (Painel Administrativo)

### 3.1. Gestão de Inspeções

O administrador terá acesso a:

#### 3.1.1. Dashboard de Inspeções

*   **Status Geral:** Quantas inspeções estão pendentes, em análise, aprovadas ou rejeitadas.
*   **Filtros:** Por cliente, veículo, tipo de inspeção, data, status.
*   **Alertas:** Clientes que não realizaram inspeção obrigatória.

#### 3.1.2. Visualização de Inspeção

Ao selecionar uma inspeção, o admin poderá:

*   **Visualizar Galeria:** Ver todas as 5 fotos em alta resolução.
*   **Zoom e Comparação:** Fazer zoom em detalhes e comparar fotos de diferentes inspeções do mesmo veículo.
*   **Análise Automática:** Ver resultado da análise automática de qualidade.
*   **Histórico Comparativo:** Comparar com inspeções anteriores do mesmo veículo para identificar novos danos.

#### 3.1.3. Aprovação/Rejeição

O admin poderá:

*   **Aprovar:** Confirmar que o veículo está em bom estado.
*   **Rejeitar:** Indicar que as fotos não são adequadas (qualidade ruim, não mostram o veículo, etc.).
*   **Solicitar Reinspção:** Pedir ao cliente que refaça a inspeção.
*   **Adicionar Comentários:** Deixar feedback específico sobre o estado do veículo.
*   **Registrar Danos:** Se identificar danos nas fotos, registrar e associar ao cliente.

### 3.2. Relatórios de Inspeção

*   **Taxa de Conformidade:** Percentual de clientes que completam inspeções no prazo.
*   **Histórico de Danos:** Danos identificados por veículo ao longo do tempo.
*   **Clientes com Múltiplos Danos:** Identificar clientes problemáticos.
*   **Tendências:** Quais partes do veículo sofrem mais danos.

## 4. Modelo de Dados (Expansão)

### 4.1. Tabela: INSPECOES_VEICULO

Armazena informações sobre cada inspeção realizada.

```sql
CREATE TABLE inspecoes_veiculo (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contrato_id UUID NOT NULL REFERENCES contratos(id),
  cliente_id UUID NOT NULL REFERENCES clientes(id),
  veiculo_id UUID NOT NULL REFERENCES veiculos(id),
  tipo_inspecao VARCHAR(50) NOT NULL, -- 'inicial', 'semanal', 'dano', 'final'
  data_inspecao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  localizacao_gps POINT, -- Coordenadas GPS (latitude, longitude)
  status VARCHAR(50) DEFAULT 'pendente', -- 'pendente', 'em_analise', 'aprovada', 'rejeitada'
  observacoes_admin TEXT,
  motivo_rejeicao TEXT,
  analisado_por_usuario_id UUID REFERENCES usuarios(id),
  analisado_em TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT tipo_valido CHECK (tipo_inspecao IN ('inicial', 'semanal', 'dano', 'final'))
);

CREATE INDEX idx_inspecoes_contrato ON inspecoes_veiculo(contrato_id);
CREATE INDEX idx_inspecoes_cliente ON inspecoes_veiculo(cliente_id);
CREATE INDEX idx_inspecoes_veiculo ON inspecoes_veiculo(veiculo_id);
CREATE INDEX idx_inspecoes_status ON inspecoes_veiculo(status);
CREATE INDEX idx_inspecoes_data ON inspecoes_veiculo(data_inspecao);
```

### 4.2. Tabela: FOTOS_INSPECAO

Armazena metadados de cada foto da inspeção.

```sql
CREATE TABLE fotos_inspecao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inspecao_id UUID NOT NULL REFERENCES inspecoes_veiculo(id) ON DELETE CASCADE,
  ponto_inspecao VARCHAR(50) NOT NULL, -- 'frontal', 'lateral_esq', 'lateral_dir', 'traseira', 'interior'
  arquivo_url VARCHAR(255) NOT NULL,
  nome_arquivo VARCHAR(255),
  tamanho_bytes INTEGER,
  resolucao_width INTEGER,
  resolucao_height INTEGER,
  qualidade_blur_score DECIMAL(3, 2), -- 0-1 (0 = desfocado, 1 = nítido)
  qualidade_iluminacao_score DECIMAL(3, 2), -- 0-1 (0 = ruim, 1 = ótima)
  qualidade_geral_aprovada BOOLEAN DEFAULT FALSE,
  motivo_rejeicao_qualidade TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT ponto_valido CHECK (ponto_inspecao IN ('frontal', 'lateral_esq', 'lateral_dir', 'traseira', 'interior'))
);

CREATE INDEX idx_fotos_inspecao ON fotos_inspecao(inspecao_id);
CREATE INDEX idx_fotos_ponto ON fotos_inspecao(ponto_inspecao);
```

### 4.3. Tabela: DANOS_REGISTRADOS

Armazena registros de danos identificados nas fotos.

```sql
CREATE TABLE danos_registrados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inspecao_id UUID NOT NULL REFERENCES inspecoes_veiculo(id),
  foto_id UUID REFERENCES fotos_inspecao(id),
  tipo_dano VARCHAR(100) NOT NULL, -- 'amassado', 'risco', 'quebrado', 'mancha', 'sujo', etc.
  severidade VARCHAR(50) NOT NULL, -- 'leve', 'moderado', 'grave'
  localizacao_descricao TEXT,
  valor_estimado_reparo DECIMAL(10, 2),
  registrado_por_usuario_id UUID REFERENCES usuarios(id),
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT severidade_valida CHECK (severidade IN ('leve', 'moderado', 'grave'))
);

CREATE INDEX idx_danos_inspecao ON danos_registrados(inspecao_id);
CREATE INDEX idx_danos_severidade ON danos_registrados(severidade);
```

## 5. Validação e Análise de Fotos

### 5.1. Validação no Cliente

```typescript
// Validação com Zod
const fotoInspecaoSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Foto não pode exceder 5MB"
    })
    .refine(
      (file) => {
        const allowedTypes = ["image/jpeg", "image/png"];
        return allowedTypes.includes(file.type);
      },
      {
        message: "Apenas JPEG e PNG são permitidos"
      }
    ),
  pontoInspecao: z.enum(['frontal', 'lateral_esq', 'lateral_dir', 'traseira', 'interior'])
});
```

### 5.2. Análise Automática de Qualidade

O backend utilizará bibliotecas de visão computacional para analisar cada foto:

```typescript
import sharp from 'sharp';
import cv from 'opencv4nodejs';

const analisarQualidadeFoto = async (buffer: Buffer) => {
  // 1. Detectar blur (nitidez)
  const blurScore = await detectarBlur(buffer);
  
  // 2. Detectar iluminação
  const iluminacaoScore = await analisarIluminacao(buffer);
  
  // 3. Detectar se contém veículo (usando modelo de IA)
  const contemVeiculo = await detectarVeiculo(buffer);
  
  // 4. Extrair resolução
  const metadata = await sharp(buffer).metadata();
  
  return {
    blurScore,
    iluminacaoScore,
    contemVeiculo,
    resolucao: {
      width: metadata.width,
      height: metadata.height
    },
    aprovada: blurScore > 0.7 && iluminacaoScore > 0.6 && contemVeiculo
  };
};
```

### 5.3. Detecção de Danos (Futuro)

Para futuras versões, pode-se integrar modelos de IA para detectar automaticamente danos:

*   **Detecção de Amassados:** Usar redes neurais treinadas para identificar deformações.
*   **Detecção de Riscos:** Identificar linhas e marcas na pintura.
*   **Detecção de Sujeira:** Alertar se o veículo está muito sujo.

## 6. Fluxo de Trabalho

### 6.1. Inspeção Inicial (Retirada)

```
1. Cliente retira o veículo
2. Sistema notifica: "Realize a inspeção inicial do veículo"
3. Cliente acessa "Inspeção do Veículo" > "Inspeção Inicial"
4. Segue o fluxo de captura de 5 fotos
5. Sistema valida qualidade das fotos
6. Fotos são enviadas para análise
7. Admin aprova ou solicita reinspção
8. Após aprovação, cliente pode usar o veículo
```

### 6.2. Inspeção Semanal

```
1. Todo início de semana, sistema notifica cliente
2. Cliente realiza inspeção semanal (mesmo fluxo)
3. Sistema compara com inspeção anterior
4. Alertas se houver novos danos
5. Admin revisa e aprova
```

### 6.3. Inspeção de Dano

```
1. Cliente identifica dano no veículo
2. Acessa "Inspeção do Veículo" > "Relatar Dano"
3. Seleciona tipo de dano (amassado, risco, quebrado, etc.)
4. Descreve localização
5. Tira fotos do dano (close-up)
6. Envia para análise
7. Admin registra dano e estima custo de reparo
```

### 6.4. Inspeção Final (Devolução)

```
1. Cliente devolve o veículo
2. Sistema notifica: "Realize a inspeção final do veículo"
3. Cliente realiza inspeção final
4. Sistema compara com inspeção inicial
5. Identifica novos danos
6. Admin aprova devolução ou registra danos para cobrança
```

## 7. Notificações e Alertas

| Evento | Canal | Conteúdo |
| :--- | :--- | :--- |
| **Inspeção Pendente** | E-mail, SMS | "Você tem uma inspeção pendente. Por favor, complete em 24h." |
| **Foto Rejeitada** | In-App, E-mail | "Uma de suas fotos foi rejeitada por qualidade ruim. Motivo: Foto desfocada. Por favor, retire novamente." |
| **Dano Identificado** | SMS, WhatsApp | "Um dano foi identificado no veículo. Tipo: Risco na lateral. Você será contatado para mais informações." |
| **Inspeção Aprovada** | In-App | "Sua inspeção foi aprovada. Veículo em perfeitas condições." |

## 8. Segurança e Conformidade

*   **Criptografia:** Todas as fotos são criptografadas em trânsito e em repouso.
*   **Isolamento de Dados:** Cada cliente só pode acessar suas próprias inspeções.
*   **Auditoria:** Todas as ações (upload, aprovação, rejeição) são registradas.
*   **LGPD:** Conformidade com regulamentações de proteção de dados (dados de localização GPS requerem consentimento).
*   **Assinatura Digital:** Possibilidade de assinar digitalmente a inspeção aprovada.

## 9. Integração com Multas e Sinistros

*   **Registro Automático de Danos:** Danos identificados nas inspeções são automaticamente registrados no sistema de multas.
*   **Cobrança Automática:** Se cliente é responsável pelo dano, uma multa é gerada automaticamente.
*   **Histórico de Danos:** Histórico completo de danos por cliente para identificar padrões.

## 10. Conclusão

O Sistema de Inspeção Visual com Upload de Fotos é essencial para a gestão eficaz de uma frota alugada. Ele fornece documentação visual do estado do veículo em momentos críticos, protegendo os interesses da POTERE LOCADORA e do cliente, reduzindo disputas e facilitando a cobrança de danos quando necessário.
# Sistema de Permissões e Controle de Acesso (ACL) - POTERE LOCADORA

**Autor:** Manus AI
**Data:** 15 de Dezembro de 2025

## 1. Visão Geral do Sistema de Permissões

O sistema de permissões será implementado com base em um modelo de **Controle de Acesso Baseado em Papéis (RBAC - Role-Based Access Control)** combinado com **Controle de Acesso por Lista (ACL - Access Control List)**. Este modelo permite uma gestão granular e flexível das permissões, garantindo que cada usuário tenha acesso apenas aos recursos e funcionalidades necessárias para sua função.

## 2. Estrutura de Papéis (Roles)

Os papéis representam agrupamentos de permissões que correspondem às diferentes funções dentro da organização.

### 2.1. Papéis Principais

| Papel | Descrição | Acesso Primário |
| :--- | :--- | :--- |
| **Super Admin** | Acesso total ao sistema. Gerencia usuários, configurações globais e auditoria. | Todos os módulos |
| **Gerente Geral** | Supervisão de todas as operações. Acesso a todos os módulos com restrições em configurações críticas. | Todos os módulos (com limitações) |
| **Gerente Financeiro** | Responsável por faturamento, contas a pagar/receber e relatórios financeiros. | Módulo Financeiro, Relatórios |
| **Gerente de Frota** | Responsável pela gestão de veículos, manutenção e documentação. | Módulo de Frota, Manutenção |
| **Gerente de Clientes** | Responsável pelo cadastro, análise e relacionamento com clientes. | Módulo CRM, Contratos |
| **Atendente de Suporte** | Responsável pelo atendimento ao cliente e abertura de chamados. | Módulo de Suporte, Consulta de Contratos |
| **Operador de Reservas** | Responsável pela criação e gerenciamento de reservas. | Módulo de Reservas, Consulta de Frota |
| **Cliente (Frontend)** | Acesso limitado ao autoatendimento. Consulta de contratos, pagamentos e documentos. | Área do Cliente |

## 3. Matriz de Permissões por Módulo

A tabela abaixo detalha as permissões de cada papel para cada módulo do Backoffice:

| Módulo | Super Admin | Gerente Geral | Gerente Financeiro | Gerente de Frota | Gerente de Clientes | Atendente de Suporte | Operador de Reservas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Dashboard** | Leitura Total | Leitura Total | Leitura Financeira | Leitura Frota | Leitura Clientes | Leitura Limitada | Leitura Limitada |
| **Gestão de Clientes** | CRUD Total | CRUD Total | Leitura | Leitura | CRUD Total | Leitura | Leitura |
| **Gestão de Frota** | CRUD Total | CRUD Total | Leitura | CRUD Total | Leitura | Leitura | Leitura |
| **Contratos** | CRUD Total | CRUD Total | Leitura | Leitura | CRUD Total | Leitura | Leitura |
| **Financeiro** | CRUD Total | CRUD Total | CRUD Total | Leitura | Leitura | Leitura | Leitura |
| **Multas/Sinistros** | CRUD Total | CRUD Total | Leitura | Leitura | Leitura | Leitura | Leitura |
| **Relatórios** | Acesso Total | Acesso Total | Acesso Financeiro | Acesso Frota | Acesso Clientes | Acesso Limitado | Acesso Limitado |
| **Administração** | CRUD Total | Leitura | Leitura | Leitura | Leitura | Nenhum | Nenhum |

**Legenda:** CRUD = Criar, Ler, Atualizar, Deletar | Leitura = Apenas visualização | Nenhum = Sem acesso

## 4. Permissões Granulares (ACL)

Além dos papéis, o sistema implementará permissões granulares para ações específicas:

### 4.1. Permissões de Ação

Cada ação dentro de um módulo será controlada por uma permissão específica:

*   **Clientes:** `criar_cliente`, `editar_cliente`, `deletar_cliente`, `aprovar_cliente`, `bloquear_cliente`, `exportar_clientes`
*   **Frota:** `criar_veiculo`, `editar_veiculo`, `deletar_veiculo`, `agendar_manutencao`, `registrar_manutencao`, `exportar_frota`
*   **Contratos:** `criar_contrato`, `editar_contrato`, `cancelar_contrato`, `gerar_pdf`, `assinar_digitalmente`, `renovar_contrato`
*   **Financeiro:** `criar_fatura`, `editar_fatura`, `gerar_boleto`, `registrar_pagamento`, `estornar_pagamento`, `gerar_relatorio_financeiro`
*   **Relatórios:** `visualizar_relatorio_financeiro`, `visualizar_relatorio_frota`, `visualizar_relatorio_clientes`, `exportar_relatorio`, `agendar_relatorio_automatico`
*   **Administração:** `criar_usuario`, `editar_usuario`, `deletar_usuario`, `atribuir_papel`, `modificar_permissoes`, `visualizar_logs`

## 5. Implementação Técnica

### 5.1. Estrutura de Dados

```
Tabela: users
- id (UUID)
- email (String)
- password_hash (String)
- nome (String)
- status (ativo/inativo)
- created_at (Timestamp)
- updated_at (Timestamp)

Tabela: roles
- id (UUID)
- nome (String)
- descricao (Text)
- created_at (Timestamp)

Tabela: user_roles
- user_id (UUID) - FK para users
- role_id (UUID) - FK para roles
- assigned_at (Timestamp)

Tabela: permissions
- id (UUID)
- nome (String)
- descricao (Text)
- modulo (String)
- acao (String)

Tabela: role_permissions
- role_id (UUID) - FK para roles
- permission_id (UUID) - FK para permissions
- assigned_at (Timestamp)

Tabela: audit_logs
- id (UUID)
- user_id (UUID) - FK para users
- acao (String)
- modulo (String)
- detalhes (JSON)
- ip_address (String)
- timestamp (Timestamp)
```

### 5.2. Middleware de Autenticação e Autorização

O backend implementará middleware para validar:

1. **Autenticação:** Verificar se o usuário está autenticado (via JWT token).
2. **Autorização:** Verificar se o usuário possui a permissão necessária para acessar o recurso.
3. **Auditoria:** Registrar todas as ações em um log de auditoria.

### 5.3. Exemplo de Implementação (Pseudocódigo)

```typescript
// Middleware de autorização
async function checkPermission(req, res, next) {
  const user = req.user; // Obtido do token JWT
  const requiredPermission = req.requiredPermission; // Definido na rota
  
  const hasPermission = await db.query(
    `SELECT 1 FROM role_permissions rp
     JOIN user_roles ur ON rp.role_id = ur.role_id
     WHERE ur.user_id = $1 AND rp.permission_id = $2`,
    [user.id, requiredPermission.id]
  );
  
  if (!hasPermission) {
    return res.status(403).json({ error: 'Acesso negado' });
  }
  
  // Registrar ação no log de auditoria
  await db.query(
    `INSERT INTO audit_logs (user_id, acao, modulo, detalhes, ip_address, timestamp)
     VALUES ($1, $2, $3, $4, $5, NOW())`,
    [user.id, requiredPermission.acao, requiredPermission.modulo, 
     JSON.stringify(req.body), req.ip]
  );
  
  next();
}

// Uso em uma rota
app.post('/api/clientes', 
  checkPermission({ acao: 'criar_cliente', modulo: 'clientes' }),
  createClientHandler
);
```

## 6. Auditoria e Logs

Todas as ações importantes serão registradas em um log de auditoria, permitindo rastreabilidade completa:

*   **Criação/Edição/Deleção** de clientes, veículos, contratos, etc.
*   **Alterações de Permissões** e atribuição de papéis.
*   **Acessos ao Sistema** (login/logout).
*   **Exportação de Dados** sensíveis.
*   **Alterações Financeiras** (faturamento, pagamentos, estornos).

Os logs serão armazenados de forma imutável e estarão disponíveis em um módulo de auditoria acessível apenas ao Super Admin e Gerente Geral.

## 7. Boas Práticas de Segurança

*   **Princípio do Menor Privilégio:** Cada usuário receberá apenas as permissões necessárias para sua função.
*   **Revisão Periódica:** As permissões serão revisadas periodicamente para garantir que estão alinhadas com as responsabilidades atuais.
*   **Segregação de Funções:** Funções críticas (como aprovação de pagamentos) serão segregadas entre diferentes usuários.
*   **Autenticação Forte:** Implementação de autenticação de dois fatores (2FA) para usuários administrativos.
*   **Criptografia:** Todas as senhas serão armazenadas com hash seguro (bcrypt ou argon2).

## 8. Conclusão

O sistema de permissões e controle de acesso proposto garante que a POTERE LOCADORA tenha um controle granular e seguro sobre quem pode fazer o quê no sistema. Esta abordagem não apenas protege dados sensíveis, mas também facilita a conformidade com regulamentações como a LGPD, permitindo a rastreabilidade completa de todas as ações realizadas no sistema.
