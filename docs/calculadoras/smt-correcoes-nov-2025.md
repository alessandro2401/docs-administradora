# Correções - Novembro 2025

Documentação das correções realizadas na Calculadora SMT em novembro de 2025.

---

## 📅 11 de Novembro de 2025

### Problema Reportado

Usuária Amanda Murielly reportou que ao gerar o PDF do cálculo, não constava o campo de depreciações (leilão).

### Correções Implementadas

#### 1. Adicionar Seção de Depreciações no PDF

**Problema:** O PDF gerado continha apenas 3 seções e a seção "Depreciações (Leilão)" estava ausente.

**Solução:** Adicionada nova seção "Depreciações (Leilão)" na função `gerarPDF()` entre "Dados do Sinistro" e "Composição dos Descontos".

**Commit:** `65e78ef` - `fix: Adicionar seção de Depreciações (Leilão) no PDF`

**Status:** ✅ Resolvido e em produção

---

#### 2. Adicionar Seção de Depreciações na Impressão

**Problema:** A função de impressão também não incluía a seção de Depreciações, causando inconsistência entre PDF e impressão.

**Solução:** Adicionada seção "Depreciações (Leilão)" na função `imprimirResultado()` com a mesma estrutura do PDF.

**Commit:** `ccad231` - `fix: Adicionar seção de Depreciações na impressão`

**Status:** ✅ Resolvido e em produção

---

#### 3. Corrigir Impressão com Janela em Branco

**Problema:** Ao clicar no botão "Imprimir", uma janela em branco (`about:blank`) era aberta e o conteúdo não era exibido.

**Causa:** A função usava `window.open()` + `document.write()`, abordagem que pode ser bloqueada por navegadores modernos.

**Solução:** Reescrita completa da função usando **iframe oculto** em vez de `window.open()`.

**Vantagens da nova abordagem:**
- Não abre janelas pop-up
- Funciona em todos os navegadores modernos
- Não é bloqueado por bloqueadores de pop-up
- Melhor controle sobre o ciclo de vida
- Experiência de usuário mais suave

**Commit:** `0762839` - `fix: Corrigir impressão usando iframe oculto`

**Status:** ✅ Resolvido e em produção

---

## 📄 Estrutura Final dos Documentos

Tanto o **PDF** quanto a **Impressão** agora contêm **4 seções completas**:

### 1. Dados do Sinistro
- Nome do beneficiário
- Data de entrega da documentação
- Dias úteis para pagamento
- Identificação do veículo (modelo, placa, valor FIPE)
- Tipo de sinistro

### 2. Depreciações (Leilão) ← NOVO!
- Lista de todas as depreciações aplicadas
- Percentual e valor de cada depreciação
- Total de depreciações

### 3. Composição dos Descontos
- 12 Contribuições
- Despachante
- Prévia Financiamento
- Baixa do Gravame
- 2ª Via ATPVE
- Redução de Cota

### 4. Cálculo da Antecipação
- Valor base (FIPE)
- Total de depreciações
- Total de descontos
- Valor líquido
- Taxa de juros e número de parcelas
- Valor com desconto (antecipação)

---

## 🧪 Testes Realizados

### Teste 1: PDF com Depreciações
- ✅ Formulário preenchido com dados de teste
- ✅ Marcadas 2 depreciações:
  - Veículo de Leilão por Sinistro (-25%) = R$ 37.500,00
  - Benefício Fiscal IPI/ICMS (-20%) = R$ 30.000,00
- ✅ PDF gerado com sucesso
- ✅ Seção de Depreciações aparece corretamente

### Teste 2: Impressão
- ✅ Formulário preenchido
- ✅ Cálculo executado
- ✅ Botão "Imprimir" clicado
- ✅ Não apareceu janela em branco
- ✅ Sem erros no console JavaScript

---

## 📊 Histórico de Commits

| Data | Hash | Mensagem | Status |
|------|------|----------|--------|
| 11/11/2025 | 65e78ef | fix: Adicionar seção de Depreciações (Leilão) no PDF | ✅ Produção |
| 11/11/2025 | ccad231 | fix: Adicionar seção de Depreciações na impressão | ✅ Produção |
| 11/11/2025 | 0762839 | fix: Corrigir impressão usando iframe oculto | ✅ Produção |

---

## 🔗 Links Relacionados

- [Calculadora SMT](https://total.administradoramutual.com.br/)
- [Repositório GitHub](https://github.com/alessandro2401/total-site)
- [Integração Google Sheets](../apis/google-sheets.md)

---

## 📝 Notas Técnicas

### Implementação do Iframe Oculto

A nova implementação da função de impressão usa um iframe oculto para renderizar o conteúdo antes de imprimir:

```javascript
function imprimirResultado() {
    // Criar iframe oculto
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
    
    // Escrever conteúdo
    const printWindow = iframe.contentWindow;
    printWindow.document.write(conteudo);
    
    // Imprimir e limpar
    setTimeout(() => {
        printWindow.print();
        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 1000);
    }, 500);
}
```

### Estrutura da Seção de Depreciações

A seção de depreciações é gerada dinamicamente com base no objeto `ultimoCalculo.depreciacao`:

```javascript
if (ultimoCalculo.depreciacao && ultimoCalculo.depreciacao.aplicadas) {
    // Renderizar cada depreciação
    ultimoCalculo.depreciacao.aplicadas.forEach(dep => {
        // dep.tipo: nome da depreciação
        // dep.valor: valor em R$
    });
    
    // Renderizar total
    // ultimoCalculo.depreciacao.total
}
```

---

**Última atualização:** 11 de novembro de 2025
