# Google Sheets Integration

Documentação da integração com o Google Sheets para armazenamento de dados das calculadoras.

## Visão Geral

As calculadoras SMA e SMT utilizam o Google Sheets como banco de dados para armazenar os resultados dos cálculos. A integração é feita através da Google Sheets API v4.

---

## Planilha Utilizada

**Nome:** Calculadoras Mutual  
**ID:** `1vw_fgzfVDvlwno5Y5sP0da8qbOXgUHTgPNRmD5oNT1w`  
**URL:** [Acessar Planilha](https://docs.google.com/spreadsheets/d/1vw_fgzfVDvlwno5Y5sP0da8qbOXgUHTgPNRmD5oNT1w/)

**Abas:**
- `SMA` - Dados da Calculadora SMA (Socorro Mútuo Acordo)
- `SMT` - Dados da Calculadora SMT (Socorro Mútuo Total)

---

## Estrutura das Abas

### Aba SMA

**Colunas:**

| Coluna | Nome | Tipo | Descrição |
|--------|------|------|-----------|
| A | Timestamp | DateTime | Data e hora do cálculo (ISO 8601) |
| B | Beneficiário | String | Nome do beneficiário |
| C | Veículo | String | Modelo do veículo |
| D | Placa | String | Placa do veículo |
| E | Valor FIPE | Number | Valor FIPE do veículo (R$) |
| F | Tipo de Sinistro | String | Tipo do sinistro (Colisão, Roubo, etc.) |
| G | Data Entrega Documentação | Date | Data de entrega da documentação |
| H | Depreciação Leilão | Boolean | Se aplicou depreciação de leilão |
| I | Depreciação Financeiro | Boolean | Se aplicou depreciação financeira |
| J | Depreciação Fiscal | Boolean | Se aplicou depreciação fiscal |
| K | Valor Líquido | Number | Valor líquido após depreciações (R$) |
| L | Valor Antecipado | Number | Valor antecipado ao beneficiário (R$) |
| M | Taxa de Juros | Number | Taxa de juros aplicada (%) |
| N | Desconto | Number | Valor do desconto (R$) |
| O | Carro Reserva | Number | Valor diário do carro reserva (R$) |
| P | Dias Carro Reserva | Number | Quantidade de dias de carro reserva |

**Exemplo de Linha:**
```
2025-12-02T13:30:00.000Z | João Silva | Fiat Uno 2020 | ABC1234 | 45000 | Colisão | 2025-12-01 | FALSE | FALSE | FALSE | 43000 | 40000 | 3.95 | 1580 | 75 | 5
```

---

### Aba SMT

**Colunas:**

| Coluna | Nome | Tipo | Descrição |
|--------|------|------|-----------|
| A | Timestamp | DateTime | Data e hora do cálculo (ISO 8601) |
| B | Beneficiário | String | Nome do beneficiário |
| C | Veículo | String | Modelo do veículo |
| D | Placa | String | Placa do veículo |
| E | Valor FIPE | Number | Valor FIPE do veículo (R$) |
| F | Tipo de Sinistro | String | Tipo do sinistro (Perda Total, Roubo, etc.) |
| G | Data Entrega Documentação | Date | Data de entrega da documentação |
| H | Depreciação Leilão | Boolean | Se aplicou depreciação de leilão (-25%) |
| I | Depreciação Financeiro | Boolean | Se aplicou depreciação financeira (-15%) |
| J | Depreciação Fiscal | Boolean | Se aplicou depreciação fiscal (-20%) |
| K | Valor Líquido | Number | Valor líquido após depreciações (R$) |
| L | Valor Antecipado | Number | Valor antecipado ao beneficiário (R$) |
| M | Taxa de Antecipação | Number | Taxa de antecipação fixa (12,7%) |
| N | Desconto | Number | Valor do desconto (R$) |
| O | Prazo | Number | Prazo para pagamento (dias) |

**Exemplo de Linha:**
```
2025-11-25T19:23:15.114Z | Maria Santos | Renault Kwid 2023 | XYZ7890 | 65000 | Roubo | 2025-11-25 | TRUE | FALSE | FALSE | 62380 | 54457.74 | 12.7 | 7922.26 | 90
```

---

## Autenticação

A integração utiliza uma **Service Account** do Google Cloud Platform para autenticação.

### Service Account

**Email:** `api-calculadoras@integracao-calculadoras-mutual.iam.gserviceaccount.com`  
**Projeto GCP:** `integracao-calculadoras-mutual`  
**Permissão na Planilha:** Editor

### Configuração

1. **Criar Service Account** no Google Cloud Console
2. **Gerar chave JSON** para a Service Account
3. **Compartilhar a planilha** com o email da Service Account (permissão de Editor)
4. **Configurar credenciais** no Vercel como variável de ambiente `GOOGLE_CREDENTIALS`

---

## APIs Utilizadas

### Google Sheets API v4

**Endpoint Base:** `https://sheets.googleapis.com/v4/spreadsheets`

**Operações Utilizadas:**
- `spreadsheets.values.append` - Adicionar novas linhas

**Exemplo de Requisição:**
```javascript
const { google } = require('googleapis');

// Autenticar com Service Account
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

// Adicionar dados na aba SMA
const response = await sheets.spreadsheets.values.append({
  spreadsheetId: '1vw_fgzfVDvlwno5Y5sP0da8qbOXgUHTgPNRmD5oNT1w',
  range: 'SMA!A:P',
  valueInputOption: 'USER_ENTERED',
  resource: {
    values: [[
      new Date().toISOString(),
      'João Silva',
      'Fiat Uno 2020',
      'ABC1234',
      45000,
      'Colisão',
      '2025-12-01',
      false,
      false,
      false,
      43000,
      40000,
      3.95,
      1580,
      75,
      5
    ]]
  }
});
```

---

## Permissões Necessárias

### Na Planilha

A Service Account precisa ter permissão de **Editor** na planilha para poder adicionar dados.

**Como Compartilhar:**
1. Abrir a planilha no Google Sheets
2. Clicar em "Compartilhar"
3. Adicionar o email da Service Account: `api-calculadoras@integracao-calculadoras-mutual.iam.gserviceaccount.com`
4. Selecionar permissão: **Editor**
5. Desmarcar "Notificar pessoas"
6. Clicar em "Compartilhar"

### No Google Cloud Platform

A Service Account precisa ter as seguintes permissões no projeto GCP:

- `roles/iam.serviceAccountUser`
- APIs habilitadas:
  - Google Sheets API
  - Google Drive API (opcional, para gerenciamento de arquivos)

---

## Troubleshooting

### Erro: "The caller does not have permission"

**Causa:** A Service Account não tem permissão de Editor na planilha.

**Solução:**
1. Verificar se a planilha foi compartilhada com a Service Account
2. Confirmar que a permissão é de "Editor" (não "Visualizador")
3. Aguardar alguns minutos para as permissões serem propagadas

### Erro: "Requested entity was not found"

**Causa:** A planilha ou aba não foi encontrada.

**Solução:**
1. Verificar se o ID da planilha está correto
2. Confirmar que as abas "SMA" e "SMT" existem
3. Verificar se a aba não foi renomeada

### Erro: "Invalid credentials"

**Causa:** As credenciais da Service Account estão inválidas ou expiradas.

**Solução:**
1. Verificar se a variável de ambiente `GOOGLE_CREDENTIALS` está configurada corretamente
2. Gerar nova chave JSON para a Service Account
3. Atualizar as credenciais no Vercel

### Dados não aparecem na planilha

**Causa:** Pode haver um delay na atualização ou erro silencioso.

**Solução:**
1. Recarregar a planilha (F5)
2. Verificar os logs da API no Vercel
3. Confirmar que a requisição retornou status 200
4. Verificar o histórico de versões da planilha

---

## Monitoramento

### Histórico de Versões

O Google Sheets mantém um histórico de todas as alterações feitas na planilha.

**Como Acessar:**
1. Abrir a planilha
2. Clicar em "Arquivo" → "Histórico de versões" → "Ver histórico de versões"
3. Verificar as edições feitas pela Service Account

### Logs da API

Os logs das requisições à API podem ser visualizados no Vercel:

**URL:** [Ver logs](https://vercel.com/alessandro-pizzolattos-projects/api-calculadoras-sheets/logs)

---

## Boas Práticas

### Segurança

1. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Nunca expor as credenciais** da Service Account publicamente
2. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Usar variáveis de ambiente** para armazenar credenciais
3. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Limitar permissões** da Service Account apenas ao necessário
4. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Monitorar acessos** através dos logs do Google Cloud

### Performance

1. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Usar batch operations** quando possível para reduzir número de requisições
2. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Implementar retry logic** para lidar com falhas temporárias
3. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Cachear autenticação** para evitar requisições desnecessárias

### Manutenção

1. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Fazer backup regular** da planilha
2. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Documentar mudanças** na estrutura das abas
3. <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Testar em ambiente de desenvolvimento** antes de fazer mudanças em produção

---

## Recursos Adicionais

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Service Account Authentication](https://cloud.google.com/iam/docs/service-accounts)
- [Google Cloud Console](https://console.cloud.google.com/)

---

## Suporte

Para dúvidas ou problemas com a integração, entre em contato:

**Email:** suporte@administradoramutual.com.br  
**Planilha:** [Acessar](https://docs.google.com/spreadsheets/d/1vw_fgzfVDvlwno5Y5sP0da8qbOXgUHTgPNRmD5oNT1w/)

---

**Última atualização:** 02 de Dezembro de 2025  
**Versão:** 1.0.0
