# Documentação Técnica - Grupo MMB

**URL:** [grupommb.administradoramutual.com.br](https://grupommb.administradoramutual.com.br/)

**Repositório:** [github.com/alessandro2401/grupo-mmb](https://github.com/alessandro2401/grupo-mmb)

---

## 1. Visão Geral da Arquitetura

O site do Grupo MMB é uma **Single Page Application (SPA)** construída com **React 19** e **Vite**. O site serve como portal institucional do hub administrativo e de pós-venda que gerencia 7 marcas do ecossistema de proteção veicular.

### Principais Tecnologias

| Categoria | Tecnologia | Versão | Descrição |
|---|---|---|---|
| **Framework** | React | 19.1.1 | Biblioteca para construção de interfaces |
| **Build Tool** | Vite | 7.1.9 | Dev server e build tool de alta performance |
| **Linguagem** | TypeScript | 5.9.3 | Superset do JavaScript com tipagem estática |
| **Roteamento** | Wouter | 3.3.5 | Router minimalista para React |
| **Styling** | Tailwind CSS | 4.1.14 | Framework CSS utility-first |
| **Componentes** | shadcn/ui | - | Componentes acessíveis baseados em Radix UI |
| **Ícones** | Lucide React | 0.453.0 | Biblioteca de ícones SVG |

### Estrutura de Diretórios

```bash
client/
├── public/                    # Assets estáticos
│   ├── logos/                 # Logos das 7 marcas + Grupo MMB
│   └── images/                # Imagens do site
├── src/
│   ├── App.tsx                # Rotas e configuração principal
│   ├── main.tsx               # Ponto de entrada
│   ├── index.css              # Estilos globais e tema Tailwind
│   ├── const.ts               # Constantes (APP_TITLE, APP_LOGO)
│   ├── components/
│   │   ├── ui/                # Componentes shadcn/ui (Button, Card, etc)
│   │   ├── layout/            # Header e Footer
│   │   └── ErrorBoundary.tsx  # Tratamento de erros
│   ├── contexts/
│   │   └── ThemeContext.tsx   # Gerenciamento de tema (light/dark)
│   ├── data/
│   │   ├── grupo-mmb.ts       # Dados das marcas e contato
│   │   └── grupo-mmb-updated.ts # Dados adicionais (fluxo, resultados)
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilitários (cn, etc)
│   └── pages/                 # Páginas do site
│       ├── Home.tsx
│       ├── Plataforma.tsx
│       ├── Ecossistema.tsx
│       ├── PosVenda.tsx
│       ├── Sobre.tsx
│       ├── Contato.tsx
│       ├── Privacidade.tsx
│       ├── Termos.tsx
│       └── NotFound.tsx
```

---

## 2. Páginas e Funcionalidades

### 2.1 Home (`/`)
- **Hero Section:** Apresentação do Grupo MMB com imagem e CTAs
- **Plataforma Operacional:** 3 pilares (FinOps, Ops, Tech) com ícones SVG
- **Ecossistema:** Preview das 7 marcas com logos
- **CTA Pós-Venda:** Seção de destaque para suporte

### 2.2 Plataforma (`/plataforma`)
- **Pilares Detalhados:** FinOps, Ops e Tech com descrições completas
- **Tecnologia como Vantagem:** 3 pilares de diferenciação
- **Integração Tecnológica:** Explicação do CRM e API Gateway

### 2.3 Ecossistema (`/ecossistema`)
- **7 Marcas:** Cards detalhados com logos, descrições e links externos
  1. Movimento Mais Seguro
  2. Soluções Corretora
  3. Movimento Mais Brasil
  4. Potere Consórcio
  5. Potere BP Mensal
  6. Mais Brasil Motorcycle
  7. Juntos POD+
- **Alpha Proteções:** Mencionada como hub de vendas

### 2.4 Pós-Venda (`/pos-venda`)
- **Serviços:** 2ª Via de Boleto, Abrir Sinistro, Suporte 24h
- **Formulário de Atendimento:** Coleta de dados para suporte

### 2.5 Sobre (`/sobre`)
- **Missão, Visão, Valores:** Cards informativos
- **Fluxo de Trabalho:** Processo dos hubs (Comercial → Administrativo)
- **Resultados Esperados:** Para negócio, colaboradores e clientes

### 2.6 Contato (`/contato`)
- **Informações:** Endereço, telefone, e-mail, horário
- **Formulário:** Envio de mensagens

### 2.7 Privacidade (`/privacidade`)
- **Política de Privacidade:** Documento completo com 8 seções

### 2.8 Termos (`/termos`)
- **Termos de Uso:** Documento completo com 10 seções

---

## 3. Componentes Principais

### 3.1 Header
- **Logo:** Grupo MMB (clicável para home)
- **Navegação:** 6 links (Início, Plataforma, Ecossistema, Pós-Venda, Sobre, Contato)
- **CTA:** Botão "Central de Pós-Venda" (destaque)
- **Mobile:** Menu hamburguer responsivo
- **Fixo:** Header fixo no topo com sombra

### 3.2 Footer
- **4 Colunas:**
  1. Sobre o Grupo MMB
  2. Links Rápidos (navegação)
  3. Nossas Marcas (7 marcas com links externos)
  4. Contato (endereço, telefone, e-mail, horário)
- **Bottom Bar:** Copyright + links Política/Termos

### 3.3 Cards
- **Hover Effects:** Elevação e sombra ao passar o mouse
- **Transições:** 300ms suaves
- **Logos:** Imagens centralizadas com max-height

---

## 4. Design System

### 4.1 Cores
```css
/* Cores principais */
--primary: #1e40af;      /* Azul corporativo */
--secondary: #7c3aed;    /* Roxo secundário */
--accent: #f59e0b;       /* Laranja destaque */
--background: #ffffff;   /* Fundo branco */
--foreground: #1f2937;   /* Texto escuro */
```

### 4.2 Gradientes
```css
.gradient-hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
}

.gradient-cta {
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
}
```

### 4.3 Tipografia
- **Fonte:** System fonts (Segoe UI, Roboto, etc)
- **Títulos:** font-bold, text-4xl a text-6xl
- **Corpo:** text-base a text-xl
- **Espaçamento:** leading-relaxed

### 4.4 Espaçamento
- **Seções:** py-20 (80px vertical)
- **Hero:** pt-32 pb-20 (compensar header fixo)
- **Container:** max-width com padding responsivo

---

## 5. Dados e Conteúdo

### 5.1 Arquivo `grupo-mmb.ts`
```typescript
export const MARCAS = [
  {
    nome: "Alpha Proteções",
    descricao: "...",
    url: "https://www.alphaprotecoes.com.br/",
    logo: "/logos/alpha-protecoes.png"
  },
  // ... 6 marcas restantes
];

export const CONTATO = {
  endereco: "Goiânia, Goiás - Brasil",
  telefone: "0800 604 8006",
  email: "contato@grupommb.com",
  horario: "Segunda a Sexta, 8h às 18h"
};
```

### 5.2 Logos Disponíveis
- `/logos/grupo-mmb.png` - Logo principal
- `/logos/alpha-protecoes.png`
- `/logos/movimento-mais-seguro.svg`
- `/logos/solucoes-corretora.png`
- `/logos/movimento-mais-brasil.png`
- `/logos/potere-consorcio.svg`
- `/logos/potere.svg` (BP Mensal)
- `/logos/mais-brasil-motorcycle.png`
- `/logos/juntos-pod.svg`

---

## 6. Roteamento

### 6.1 Rotas Configuradas
```typescript
<Route path="/" component={Home} />
<Route path="/plataforma" component={Plataforma} />
<Route path="/ecossistema" component={Ecossistema} />
<Route path="/pos-venda" component={PosVenda} />
<Route path="/sobre" component={Sobre} />
<Route path="/contato" component={Contato} />
<Route path="/privacidade" component={Privacidade} />
<Route path="/termos" component={Termos} />
<Route path="/404" component={NotFound} />
<Route component={NotFound} /> {/* Fallback */}
```

### 6.2 Navegação Interna
- **Links:** Componente `<Link>` do Wouter
- **Âncoras:** Links para seções específicas (ex: `/plataforma#finops`)
- **Externos:** Links para sites das marcas com `target="_blank"`

---

## 7. Build e Deploy

### 7.1 Comandos
```bash
# Desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Preview do build
pnpm run preview
```

### 7.2 Deploy Vercel
- **Trigger:** Push para branch `master` no GitHub
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Framework Preset:** Vite
- **Node Version:** 22.x

### 7.3 Domínio
- **Principal:** grupommb.administradoramutual.com.br
- **Vercel:** grupo-mmb.vercel.app

### 7.4 Configuração SPA (vercel.json)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
Garante que todas as rotas sejam tratadas pelo React Router.

---

## 8. Dependências Principais

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "wouter": "^3.3.5",
    "lucide-react": "^0.453.0",
    "@radix-ui/react-*": "^1.x",
    "tailwindcss": "^4.1.14",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "vite": "^7.1.9",
    "typescript": "^5.9.3",
    "@vitejs/plugin-react": "^4.3.4"
  }
}
```

---

## 9. Melhorias Recentes

### 9.1 Dezembro 2025
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Corrigido roteamento SPA (vercel.json)
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Substituídos emojis por ícones SVG (Lucide React)
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Adicionados logos de todas as 7 marcas
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Implementado Header e Footer em todas as páginas
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Corrigido menu duplicado (HTML semântico)
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Criadas páginas de Política de Privacidade e Termos de Uso
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Adicionadas sombras e hover effects nos cards
- <svg style="display: inline-block; vertical-align: middle; margin-right: 6px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Padronizado sistema de botões

---

## 10. Manutenção

### 10.1 Atualizar Marcas
Editar arquivo `client/src/data/grupo-mmb.ts`:
```typescript
export const MARCAS = [
  {
    nome: "Nova Marca",
    descricao: "Descrição da marca",
    url: "https://www.novamarca.com.br/",
    logo: "/logos/nova-marca.png"
  }
];
```

### 10.2 Adicionar Logos
1. Colocar arquivo em `client/public/logos/`
2. Referenciar como `/logos/nome-do-arquivo.ext`
3. Formatos aceitos: PNG, SVG, JPG

### 10.3 Modificar Contato
Editar `CONTATO` em `client/src/data/grupo-mmb.ts`

### 10.4 Adicionar Páginas
1. Criar componente em `client/src/pages/NomePagina.tsx`
2. Adicionar rota em `client/src/App.tsx`
3. Adicionar link no Header/Footer se necessário

---

## 11. Integração com Sistemas

### 11.1 Portal de Sistemas
O site está integrado ao portal de sistemas internos:
- **URL:** sistemas.administradoramutual.com.br
- **Card:** "Grupo MMB" com ícone 🏛️
- **Link:** Redireciona para grupommb.administradoramutual.com.br

### 11.2 Marcas do Ecossistema
Links externos para os 7 sites das marcas:
1. Alpha Proteções → alphaprotecoes.com.br
2. Movimento Mais Seguro → movimentomaisseguro.com.br
3. Soluções Corretora → solucoescorretora.com
4. Movimento Mais Brasil → movimentomaisbrasil.org.br
5. Potere Consórcio → potereconsorcio.com.br
6. Potere BP Mensal → poterebpmensal.com.br
7. Mais Brasil Motorcycle → maisbrasilmotorcycle.com.br
8. Juntos POD+ → juntospodmais.com.br

---

## 12. Checklist de Deploy

Antes de fazer deploy de alterações:

- [ ] Build local sem erros (`pnpm run build`)
- [ ] Testar navegação entre todas as páginas
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Confirmar que todos os logos estão carregando
- [ ] Validar links externos (marcas)
- [ ] Testar formulários (Pós-Venda, Contato)
- [ ] Verificar SEO (títulos, meta descriptions)
- [ ] Commit com mensagem descritiva
- [ ] Push para `master` (deploy automático)

---

## 13. Contatos Técnicos

- **Repositório:** github.com/alessandro2401/grupo-mmb
- **Deploy:** Vercel (auto-deploy)
- **Suporte:** contato@grupommb.com

---

*Última atualização: 03 de Dezembro de 2025*
