# Integração com Google Sheets

## Visão Geral

A Calculadora SMA possui integração automática com Google Sheets que registra todos os cálculos realizados em uma planilha centralizada. Esta funcionalidade permite análise histórica, geração de relatórios e acompanhamento de todas as operações realizadas na calculadora.

## Planilha de Registro

**URL:** [Calculadora SMA - Registro de Cálculos](https://docs.google.com/spreadsheets/d/15bDgZ7vCWGox7XfGGdNopAqztn5h6NLJKEuPoGzM0qc/edit)

**Aba:** SMA

**Estrutura:** 33 colunas (A-AG) contendo todos os dados do cálculo

## Funcionamento

### Fluxo de Dados

1. **Usuário preenche o formulário** na calculadora web
2. **Sistema realiza os cálculos** localmente no navegador
3. **Dados são enviados automaticamente** para a API do Vercel
4. **API grava os dados** na planilha Google Sheets via API do Google

### Tempo de Processamento

Os dados aparecem na planilha em **3 a 5 segundos** após a conclusão do cálculo.

## Dados Registrados

### Informações do Beneficiário

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| A | Data/Hora | Timestamp automático do registro |
| B | Nome do Beneficiário | Nome completo do associado |
| C | Placa do Veículo | Placa do veículo sinistrado |
| D | Modelo do Veículo | Marca e modelo do veículo |
| E | Data de Abertura | Data de abertura do sinistro |

### Valores do Sinistro

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| F | Valor da Regulagem | Valor aprovado pelo regulador/perito |
| G | Valor da Participação | Cota de participação do associado |
| H | Orçamento da Oficina | Orçamento fornecido pela oficina/CILIA |

### Contraproposta (Colunas Críticas)

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| **I** | **Valor da Contraproposta** | Valor proposto pelo associado |
| **J** | **Valor Mínimo** | Limite mínimo aceitável (100% do acordo) |
| **K** | **Valor Máximo** | Limite máximo permitido (112% do acordo) |

::: tip Validação de Contraproposta
- Quando o usuário **insere uma contraproposta**, as colunas J e K são preenchidas com os limites calculados automaticamente
- Quando **não há contraproposta**, as três colunas (I, J, K) recebem o valor **0**
- A faixa de negociação é de **100% a 112%** do valor do acordo calculado
:::

### Prazos e Custos

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| L | Dias para Reparação | Prazo estimado para reparo |
| M | Dias de Carro Reserva | Quantidade de dias de carro reserva |
| N | Valor do Carro Reserva | Custo total do carro reserva (R$ 75/dia) |

### Opções de Pagamento

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| O | Valor Base | Valor base para cálculo do acordo |
| P | Opção 1 - Valor | Aguardar Reparo na Oficina |
| Q | Opção 2 - Valor | Acordo em Dinheiro |
| R | Opção 3 - Valor | Oficina Antecipada |
| S | Opção Recomendada | Opção recomendada pelo sistema |

### Financiamento

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| T | Valor da Operação | Valor total a ser financiado |
| U | Taxa de Juros | Taxa de juros mensal aplicada |
| V | Total a Pagar | Valor total com juros |
| W | Custo Financeiro | Custo total dos juros |
| X | Percentual do Custo | Percentual do custo sobre o valor |
| Y | Número de Parcelas | Quantidade de parcelas (fixo em 4) |

### Parcelas

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| Z | Parcela 1 - Data | Data de vencimento da 1ª parcela |
| AA | Parcela 1 - Valor | Valor da 1ª parcela |
| AB | Parcela 2 - Data | Data de vencimento da 2ª parcela |
| AC | Parcela 2 - Valor | Valor da 2ª parcela |
| AD | Parcela 3 - Data | Data de vencimento da 3ª parcela |
| AE | Parcela 3 - Valor | Valor da 3ª parcela |
| AF | Parcela 4 - Data | Data de vencimento da 4ª parcela |
| AG | Parcela 4 - Valor | Valor da 4ª parcela |

## Arquitetura Técnica

### Componentes

```
┌─────────────────┐
│   Frontend      │
│  (sma-site)     │ ← https://sma.administradoramutual.com.br
└────────┬────────┘
         │ HTTP POST
         ▼
┌─────────────────┐
│   API Vercel    │
│ (api-calculado- │ ← https://api-calculadoras-sheets.vercel.app
│  ras-sheets)    │
└────────┬────────┘
         │ Google Sheets API v4
         ▼
┌─────────────────┐
│ Google Sheets   │
│   (Planilha)    │ ← ID: 15bDgZ7vCWGox7XfGGdNopAqztn5h6NLJKEuPoGzM0qc
└─────────────────┘
```

### Repositórios GitHub

**Frontend:**
- **Repositório:** [alessandro2401/sma-site](https://github.com/alessandro2401/sma-site)
- **Branch:** master
- **Deploy:** Vercel (automático)

**API Backend:**
- **Repositório:** [alessandro2401/api-calculadoras-sheets](https://github.com/alessandro2401/api-calculadoras-sheets)
- **Branch:** master
- **Deploy:** Vercel (automático)

### Endpoint da API

```
POST https://api-calculadoras-sheets.vercel.app/api/registrar-calculo-sma
Content-Type: application/json
```

**Payload (exemplo):**

```json
{
  "nomeBeneficiario": "João da Silva",
  "placaVeiculo": "ABC1234",
  "modeloVeiculo": "HONDA CIVIC",
  "dataAberturaSinistro": "2025-11-07",
  "valorRegulagem": 30000,
  "valorParticipacao": 4000,
  "orcamentoOficina": 33000,
  "valorContraproposta": 20000,
  "valorMinimoContraproposta": 19023.4,
  "valorMaximoContraproposta": 21306.21,
  "diasReparacao": 15,
  "diasCarroReserva": 0,
  "valorCarroReserva": 0,
  "valorBase": 18000,
  "opcao1Valor": 33000,
  "opcao2Valor": 19023.4,
  "opcao3Valor": 18500,
  "opcaoRecomendada": "Opção 2",
  "valorOperacao": 20000,
  "taxaJuros": "3.95%",
  "totalPagar": 21200,
  "custoFinanceiro": 1200,
  "percentualCusto": "6.00%",
  "numeroParcelas": 4,
  "parcela1Data": "07/12/2025",
  "parcela1Valor": 5300,
  "parcela2Data": "07/01/2026",
  "parcela2Valor": 5300,
  "parcela3Data": "07/02/2026",
  "parcela3Valor": 5300,
  "parcela4Data": "07/03/2026",
  "parcela4Valor": 5300
}
```

**Resposta de Sucesso:**

```json
{
  "success": true,
  "message": "Cálculo SMA registrado com sucesso!",
  "timestamp": "2025-11-07T18:33:14.396Z"
}
```

## Validação e Testes

### Status da Integração

✅ **Totalmente funcional e validado em produção**

### Testes Realizados

**Teste 1: Validação com Contraproposta**
- ✅ Registro gravado corretamente
- ✅ Colunas I, J, K preenchidas com valores calculados
- ✅ Limites matemáticos validados (100% e 112%)

**Teste 2: Validação sem Contraproposta**
- ✅ Registro gravado corretamente
- ✅ Colunas I, J, K preenchidas com valor 0
- ✅ Todas as 33 colunas preenchidas

**Teste 3: Validação End-to-End**
- ✅ Fluxo completo frontend → API → Google Sheets
- ✅ Tempo de resposta: 3-5 segundos
- ✅ Dados íntegros e completos

### Histórico de Correções

**Problema 1: URL Incorreta da API (07/11/2025)**
- **Causa:** Frontend chamava domínio errado da API
- **Solução:** Corrigido de `api-calculadoras-sheets-1cybmuf4v.vercel.app` para `api-calculadoras-sheets.vercel.app`
- **Commit:** `49a8d6a` (sma-site)

**Problema 2: Nome Incorreto da Aba (07/11/2025)**
- **Causa:** API tentava gravar em `'Página1!A:AG'` mas a aba se chama `'SMA'`
- **Solução:** Corrigido o range para `'SMA!A:AG'`
- **Commit:** `e7c8f5b` (api-calculadoras-sheets)

## Acesso à Planilha

### Permissões

A planilha está configurada com as seguintes permissões:
- **Leitura:** Qualquer pessoa com o link
- **Escrita:** Apenas a conta de serviço da API

### Visualização

Para visualizar os registros:
1. Acesse a [planilha](https://docs.google.com/spreadsheets/d/15bDgZ7vCWGox7XfGGdNopAqztn5h6NLJKEuPoGzM0qc/edit)
2. Selecione a aba **"SMA"**
3. Navegue pelas colunas usando as setas ou digitando o nome da célula (ex: `I1` para ver a coluna de Contraproposta)

## Análise de Dados

### Exemplos de Uso

**Relatório de Contrapropostas Aprovadas:**
```
=COUNTIF(I:I, ">0")
```

**Valor Médio dos Acordos:**
```
=AVERAGE(Q:Q)
```

**Total de Cálculos Realizados:**
```
=COUNTA(B:B)-1
```

## Manutenção

### Monitoramento

- **API Status:** Monitorado pelo Vercel
- **Google Sheets API:** Monitorado pelo Google Cloud Console
- **Logs:** Disponíveis no Vercel Dashboard

### Troubleshooting

**Problema: Dados não aparecem na planilha**
1. Verificar se a API está respondendo (testar endpoint diretamente)
2. Verificar logs no Vercel Dashboard
3. Confirmar que a aba "SMA" existe na planilha
4. Verificar permissões da conta de serviço

**Problema: Dados incompletos**
1. Verificar se todos os campos obrigatórios foram preenchidos no frontend
2. Verificar payload enviado para a API (console do navegador)
3. Verificar mapeamento de campos no código da API

## Melhorias Futuras

### Recomendações

1. **Validação de Data:** Adicionar formatação automática no frontend para o campo de data
2. **Feedback Visual:** Implementar notificação toast confirmando envio bem-sucedido
3. **Logs de Auditoria:** Adicionar logs detalhados no backend para rastreamento
4. **Tratamento de Concorrência:** Testar comportamento com múltiplos usuários simultâneos
5. **Monitoramento:** Implementar alertas automáticos em caso de falhas

## Suporte

Para reportar problemas ou solicitar melhorias na integração, entre em contato através do [portal de suporte](https://docs.administradoramutual.com.br/suporte/).

---

**Última atualização:** 07 de Novembro de 2025  
**Versão:** 1.0.0  
**Mantido por:** Equipe Técnica da Administradora Mutual
