## SMT - Socorro Mútuo Total

Análise completa da calculadora total.administradoramutual.com.br.

### Status

- **URL:** https://total.administradoramutual.com.br/
- **Status:** Ativo e funcional

### Funcionalidade

- Cálculo de indenização por perda total
- Múltiplas depreciações configuráveis
- Taxa de antecipação: 12,7% fixa
- Financiamento em 4 parcelas

### Saídas

- Cálculo de valores detalhado
- **Impressão** - Botão para imprimir resultado
- **Geração de PDF** - Exportar resultado em PDF

### Requisito

- Rastreador instalado e funcionando

### Integrações

- **Google Sheets API** - Armazena dados dos cálculos automaticamente
- **API Backend (Vercel)** - Processa e salva os dados
- Ver documentação completa em [APIs e Integrações](/apis/)

### Correções Recentes

#### 25/11/2025 - Botão Imprimir
- ✅ **Problema:** Botão "Imprimir" abria janela em branco
- ✅ **Causa:** Navegadores bloqueavam `document.write()` em janelas abertas com `window.open()`
- ✅ **Solução:** Implementada nova abordagem usando `@media print` para impressão direta
- ✅ **Resultado:** Diálogo de impressão nativo funciona perfeitamente
