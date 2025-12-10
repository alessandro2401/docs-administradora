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
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Problema:** Botão "Imprimir" abria janela em branco
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Causa:** Navegadores bloqueavam `document.write()` em janelas abertas com `window.open()`
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Solução:** Implementada nova abordagem usando `@media print` para impressão direta
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> **Resultado:** Diálogo de impressão nativo funciona perfeitamente
