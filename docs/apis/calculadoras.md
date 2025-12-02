# API Calculadoras

Documentação da API utilizada pelas calculadoras SMA e SMT do Movimento Mais Brasil.

## Visão Geral

A API Calculadoras é uma aplicação serverless hospedada no Vercel que processa cálculos das calculadoras e armazena os resultados no Google Sheets.

**URL Base:** `https://api-calculadoras-sheets.vercel.app`

**Tecnologias:**
- Plataforma: Vercel (Serverless Functions)
- Runtime: Node.js
- Integrações: Google Sheets API

---

## Endpoints

### 1. Registrar Cálculo SMA

Registra um cálculo da Calculadora SMA (Socorro Mútuo Acordo) no Google Sheets.

**Endpoint:** `POST /api/registrar-calculo-sma`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "beneficiario": "string",
  "veiculo": "string",
  "placa": "string",
  "valorFipe": "number",
  "tipoSinistro": "string",
  "dataEntregaDocumentacao": "string (YYYY-MM-DD)",
  "depreciacao": {
    "leilao": "boolean",
    "financeiro": "boolean",
    "fiscal": "boolean"
  },
  "valorLiquido": "number",
  "valorAntecipado": "number",
  "taxaJuros": "number",
  "desconto": "number",
  "carroReserva": "number",
  "diasCarroReserva": "number"
}
```

**Exemplo de Requisição:**
```javascript
const response = await fetch('https://api-calculadoras-sheets.vercel.app/api/registrar-calculo-sma', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    beneficiario: 'João Silva',
    veiculo: 'Fiat Uno 2020',
    placa: 'ABC1234',
    valorFipe: 45000,
    tipoSinistro: 'Colisão',
    dataEntregaDocumentacao: '2025-12-01',
    depreciacao: {
      leilao: false,
      financeiro: false,
      fiscal: false
    },
    valorLiquido: 43000,
    valorAntecipado: 40000,
    taxaJuros: 3.95,
    desconto: 1580,
    carroReserva: 75,
    diasCarroReserva: 5
  })
});

const data = await response.json();
console.log(data);
```

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Cálculo registrado com sucesso na aba SMA",
  "timestamp": "2025-12-02T13:30:00.000Z"
}
```

**Resposta de Erro (400):**
```json
{
  "success": false,
  "error": "Campos obrigatórios faltando",
  "details": ["beneficiario", "veiculo"]
}
```

**Resposta de Erro (500):**
```json
{
  "success": false,
  "error": "Erro ao salvar no Google Sheets",
  "details": "Mensagem de erro detalhada"
}
```

---

### 2. Registrar Cálculo SMT

Registra um cálculo da Calculadora SMT (Socorro Mútuo Total) no Google Sheets.

**Endpoint:** `POST /api/registrar-calculo-smt`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "beneficiario": "string",
  "veiculo": "string",
  "placa": "string",
  "valorFipe": "number",
  "tipoSinistro": "string",
  "dataEntregaDocumentacao": "string (YYYY-MM-DD)",
  "depreciacao": {
    "leilao": "boolean",
    "financeiro": "boolean",
    "fiscal": "boolean"
  },
  "valorLiquido": "number",
  "valorAntecipado": "number",
  "taxaAntecipacao": "number",
  "desconto": "number",
  "prazo": "number"
}
```

**Exemplo de Requisição:**
```javascript
const response = await fetch('https://api-calculadoras-sheets.vercel.app/api/registrar-calculo-smt', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    beneficiario: 'Maria Santos',
    veiculo: 'Renault Kwid 2023',
    placa: 'XYZ7890',
    valorFipe: 65000,
    tipoSinistro: 'Roubo',
    dataEntregaDocumentacao: '2025-11-25',
    depreciacao: {
      leilao: true,
      financeiro: false,
      fiscal: false
    },
    valorLiquido: 62380,
    valorAntecipado: 54457.74,
    taxaAntecipacao: 12.7,
    desconto: 7922.26,
    prazo: 90
  })
});

const data = await response.json();
console.log(data);
```

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Cálculo registrado com sucesso na aba SMT",
  "timestamp": "2025-12-02T13:30:00.000Z"
}
```

**Resposta de Erro (400):**
```json
{
  "success": false,
  "error": "Campos obrigatórios faltando",
  "details": ["beneficiario", "veiculo"]
}
```

**Resposta de Erro (500):**
```json
{
  "success": false,
  "error": "Erro ao salvar no Google Sheets",
  "details": "Mensagem de erro detalhada"
}
```

---

## Códigos de Status HTTP

| Código | Significado | Descrição |
|--------|-------------|-----------|
| **200** | OK | Requisição processada com sucesso |
| **400** | Bad Request | Dados inválidos ou campos obrigatórios faltando |
| **500** | Internal Server Error | Erro no servidor ou na integração com Google Sheets |

---

## Autenticação

Atualmente, a API **não requer autenticação** pois é utilizada apenas pelos sites públicos das calculadoras. No entanto, recomenda-se implementar autenticação via API Key para produção.

---

## Rate Limiting

A API está hospedada no Vercel com os seguintes limites:

- **Plano Free:** 100 requisições por hora
- **Plano Pro:** 1000 requisições por hora

---

## Integração com Google Sheets

A API utiliza a Google Sheets API para armazenar os dados dos cálculos. Veja a documentação completa em [Google Sheets Integration](/apis/google-sheets).

**Planilha Utilizada:** [Calculadoras Mutual](https://docs.google.com/spreadsheets/d/1vw_fgzfVDvlwno5Y5sP0da8qbOXgUHTgPNRmD5oNT1w/)

**Abas:**
- `SMA` - Cálculos da Calculadora SMA
- `SMT` - Cálculos da Calculadora SMT

---

## Troubleshooting

### Erro 400: Campos obrigatórios faltando

**Causa:** Um ou mais campos obrigatórios não foram enviados na requisição.

**Solução:** Verifique se todos os campos obrigatórios estão presentes no body da requisição.

### Erro 500: Erro ao salvar no Google Sheets

**Causa:** Problema na integração com Google Sheets (permissões, planilha não encontrada, etc.).

**Solução:**
1. Verifique se a planilha existe e está acessível
2. Confirme que a Service Account tem permissão de Editor
3. Verifique os logs do Vercel para detalhes do erro

### Timeout na requisição

**Causa:** A função serverless pode estar demorando muito para processar.

**Solução:**
1. Verifique a conectividade com a internet
2. Tente novamente após alguns segundos
3. Se o problema persistir, contate o suporte

---

## Changelog

### 2025-11-25
- ✅ Correção do botão "Imprimir" na Calculadora SMT
- ✅ Implementação de nova abordagem usando `@media print`

### 2025-11-24
- ✅ Integração com Google Sheets funcionando
- ✅ Testes realizados com sucesso para SMA e SMT

### 2025-11-03
- 🎉 Lançamento inicial da API
- ✅ Endpoints `/api/registrar-calculo-sma` e `/api/registrar-calculo-smt` criados

---

## Suporte

Para dúvidas ou problemas com a API, entre em contato:

**Email:** suporte@administradoramutual.com.br  
**Logs do Vercel:** [Ver logs](https://vercel.com/alessandro-pizzolattos-projects/api-calculadoras-sheets/logs)

---

**Última atualização:** 02 de Dezembro de 2025  
**Versão da API:** 1.0.0
