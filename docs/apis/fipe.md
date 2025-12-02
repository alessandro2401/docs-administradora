# API FIPE

Documentação da integração com a API FIPE para consulta de valores de veículos.

## Visão Geral

A API FIPE é utilizada pelas calculadoras para obter valores atualizados de veículos conforme a tabela FIPE (Fundação Instituto de Pesquisas Econômicas).

**API Utilizada:** [FIPE API (Parallelum)](https://deividfortuna.github.io/fipe/)  
**URL Base:** `https://parallelum.com.br/fipe/api/v1`

---

## Como Funciona

As calculadoras utilizam a API FIPE para:
1. Listar marcas de veículos
2. Listar modelos por marca
3. Listar anos por modelo
4. Consultar valor FIPE do veículo

---

## Endpoints Utilizados

### 1. Listar Marcas

Retorna todas as marcas de veículos disponíveis.

**Endpoint:** `GET /carros/marcas`

**Exemplo de Requisição:**
```javascript
const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
const marcas = await response.json();
console.log(marcas);
```

**Resposta:**
```json
[
  {
    "nome": "Fiat",
    "codigo": "21"
  },
  {
    "nome": "Volkswagen",
    "codigo": "59"
  },
  {
    "nome": "Chevrolet",
    "codigo": "22"
  }
]
```

---

### 2. Listar Modelos por Marca

Retorna todos os modelos de uma marca específica.

**Endpoint:** `GET /carros/marcas/{codigoMarca}/modelos`

**Exemplo de Requisição:**
```javascript
const codigoMarca = '21'; // Fiat
const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos`);
const data = await response.json();
console.log(data.modelos);
```

**Resposta:**
```json
{
  "modelos": [
    {
      "nome": "Uno 1.0",
      "codigo": 3483
    },
    {
      "nome": "Palio 1.0",
      "codigo": 3484
    }
  ]
}
```

---

### 3. Listar Anos por Modelo

Retorna todos os anos disponíveis para um modelo específico.

**Endpoint:** `GET /carros/marcas/{codigoMarca}/modelos/{codigoModelo}/anos`

**Exemplo de Requisição:**
```javascript
const codigoMarca = '21'; // Fiat
const codigoModelo = '3483'; // Uno 1.0
const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`);
const anos = await response.json();
console.log(anos);
```

**Resposta:**
```json
[
  {
    "nome": "2023 Gasolina",
    "codigo": "2023-1"
  },
  {
    "nome": "2022 Gasolina",
    "codigo": "2022-1"
  },
  {
    "nome": "2021 Gasolina",
    "codigo": "2021-1"
  }
]
```

---

### 4. Consultar Valor FIPE

Retorna o valor FIPE de um veículo específico.

**Endpoint:** `GET /carros/marcas/{codigoMarca}/modelos/{codigoModelo}/anos/{codigoAno}`

**Exemplo de Requisição:**
```javascript
const codigoMarca = '21'; // Fiat
const codigoModelo = '3483'; // Uno 1.0
const codigoAno = '2023-1'; // 2023 Gasolina
const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`);
const veiculo = await response.json();
console.log(veiculo);
```

**Resposta:**
```json
{
  "Valor": "R$ 45.000,00",
  "Marca": "Fiat",
  "Modelo": "Uno 1.0",
  "AnoModelo": 2023,
  "Combustivel": "Gasolina",
  "CodigoFipe": "001234-5",
  "MesReferencia": "dezembro de 2025",
  "TipoVeiculo": 1,
  "SiglaCombustivel": "G",
  "DataConsulta": "segunda-feira, 2 de dezembro de 2025 13:30"
}
```

---

## Integração nas Calculadoras

### Calculadora SMA

A Calculadora SMA utiliza a API FIPE para:
1. Preencher automaticamente o campo "Valor FIPE" quando o usuário seleciona um veículo
2. Validar valores inseridos manualmente

### Calculadora SMT

A Calculadora SMT utiliza a API FIPE para:
1. Preencher automaticamente o campo "Valor FIPE" quando o usuário seleciona um veículo
2. Calcular depreciações baseadas no valor FIPE

---

## Exemplo de Implementação

```javascript
// Função para buscar valor FIPE
async function buscarValorFIPE(marca, modelo, ano) {
  try {
    // 1. Buscar código da marca
    const marcasResponse = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
    const marcas = await marcasResponse.json();
    const marcaEncontrada = marcas.find(m => m.nome.toLowerCase() === marca.toLowerCase());
    
    if (!marcaEncontrada) {
      throw new Error('Marca não encontrada');
    }
    
    // 2. Buscar código do modelo
    const modelosResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaEncontrada.codigo}/modelos`);
    const modelosData = await modelosResponse.json();
    const modeloEncontrado = modelosData.modelos.find(m => m.nome.toLowerCase().includes(modelo.toLowerCase()));
    
    if (!modeloEncontrado) {
      throw new Error('Modelo não encontrado');
    }
    
    // 3. Buscar código do ano
    const anosResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaEncontrada.codigo}/modelos/${modeloEncontrado.codigo}/anos`);
    const anos = await anosResponse.json();
    const anoEncontrado = anos.find(a => a.nome.includes(ano.toString()));
    
    if (!anoEncontrado) {
      throw new Error('Ano não encontrado');
    }
    
    // 4. Buscar valor FIPE
    const veiculoResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaEncontrada.codigo}/modelos/${modeloEncontrado.codigo}/anos/${anoEncontrado.codigo}`);
    const veiculo = await veiculoResponse.json();
    
    // Converter valor de string para número
    const valorFIPE = parseFloat(veiculo.Valor.replace('R$ ', '').replace('.', '').replace(',', '.'));
    
    return {
      valor: valorFIPE,
      marca: veiculo.Marca,
      modelo: veiculo.Modelo,
      ano: veiculo.AnoModelo,
      combustivel: veiculo.Combustivel,
      mesReferencia: veiculo.MesReferencia
    };
    
  } catch (error) {
    console.error('Erro ao buscar valor FIPE:', error);
    throw error;
  }
}

// Uso
buscarValorFIPE('Fiat', 'Uno 1.0', 2023)
  .then(resultado => {
    console.log('Valor FIPE:', resultado.valor);
    console.log('Mês de referência:', resultado.mesReferencia);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
```

---

## Limitações

### Rate Limiting

A API FIPE pública **não tem rate limiting oficial**, mas recomenda-se:
- Não fazer mais de **100 requisições por minuto**
- Implementar cache local para reduzir requisições
- Usar debouncing em campos de busca

### Disponibilidade

- A API é mantida por terceiros (Parallelum)
- Não há garantia de SLA (Service Level Agreement)
- Pode ficar indisponível temporariamente

### Dados

- Os valores são atualizados mensalmente pela FIPE
- Nem todos os veículos estão disponíveis
- Veículos muito antigos podem não ter valor FIPE

---

## Tratamento de Erros

### Veículo não encontrado

```javascript
try {
  const resultado = await buscarValorFIPE('Marca Inexistente', 'Modelo', 2023);
} catch (error) {
  if (error.message === 'Marca não encontrada') {
    alert('Marca não encontrada na tabela FIPE. Por favor, verifique o nome.');
  } else if (error.message === 'Modelo não encontrado') {
    alert('Modelo não encontrado. Por favor, verifique o nome.');
  } else if (error.message === 'Ano não encontrado') {
    alert('Ano não disponível para este modelo.');
  }
}
```

### API indisponível

```javascript
async function buscarValorFIPEComRetry(marca, modelo, ano, tentativas = 3) {
  for (let i = 0; i < tentativas; i++) {
    try {
      return await buscarValorFIPE(marca, modelo, ano);
    } catch (error) {
      if (i === tentativas - 1) {
        throw new Error('API FIPE indisponível. Por favor, tente novamente mais tarde.');
      }
      // Aguardar 1 segundo antes de tentar novamente
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
```

---

## Boas Práticas

### Cache Local

Implementar cache local para reduzir requisições:

```javascript
const cache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

async function buscarValorFIPEComCache(marca, modelo, ano) {
  const chave = `${marca}-${modelo}-${ano}`;
  const cached = cache.get(chave);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  const resultado = await buscarValorFIPE(marca, modelo, ano);
  cache.set(chave, {
    data: resultado,
    timestamp: Date.now()
  });
  
  return resultado;
}
```

### Debouncing

Usar debouncing em campos de busca para evitar requisições excessivas:

```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Uso
const buscarComDebounce = debounce(buscarValorFIPE, 500);
```

---

## Alternativas

### API FIPE Oficial

**URL:** https://veiculos.fipe.org.br/  
**Limitações:** Requer scraping, não é uma API REST oficial

### Outras APIs

- **FIPE Brasil API:** https://fipeapi.com.br/ (paga)
- **Tabela FIPE API:** https://tabelafipeapi.com.br/ (paga)

---

## Recursos Adicionais

- [Documentação Oficial (Parallelum)](https://deividfortuna.github.io/fipe/)
- [Repositório GitHub](https://github.com/deividfortuna/fipe)
- [Site Oficial FIPE](https://veiculos.fipe.org.br/)

---

## Suporte

Para dúvidas ou problemas com a integração, entre em contato:

**Email:** suporte@administradoramutual.com.br

---

**Última atualização:** 02 de Dezembro de 2025  
**Versão:** 1.0.0
