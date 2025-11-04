---

sidebar: auto

---

# Documentação Técnica - Portal de Sistemas

**URL:** [sistemas.administradoramutual.com.br](https://sistemas.administradoramutual.com.br)

## 1. Visão Geral da Arquitetura

O Portal de Sistemas é o **gateway de autenticação centralizado** para todos os sistemas internos da Administradora Mutual. Sua principal função é validar a identidade dos colaboradores e redirecioná-los para as aplicações autorizadas. A arquitetura é projetada para ser segura, desacoplada e escalável.

Trata-se de uma aplicação web simples, composta por uma interface de login (frontend) que se comunica com um serviço de autenticação (backend) para validar as credenciais.

### Principais Tecnologias (Estimadas)

Como o acesso ao código-fonte não estava disponível, esta análise é baseada na inspeção do comportamento da aplicação. A stack tecnológica provável é moderna e focada em segurança.

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework Frontend** | React ou Vue.js | A reatividade da interface e a estrutura do DOM sugerem um framework JavaScript moderno. |
| **Styling** | CSS-in-JS ou Tailwind | O design é customizado e bem encapsulado, típico dessas abordagens. |
| **Backend (Serviço)** | Node.js (Express/NestJS) ou .NET Core | Plataformas robustas e comuns para criação de APIs de autenticação seguras. |
| **Autenticação** | JWT (JSON Web Tokens) | Padrão de mercado para APIs RESTful, permitindo a criação de sessões seguras e stateless. |
| **Hospedagem** | Vercel / AWS | A infraestrutura da Mutual em outros projetos sugere o uso de plataformas de nuvem modernas. |

## 2. Fluxo de Autenticação

O processo de login segue um fluxo padrão de autenticação baseada em token, garantindo segurança e desacoplamento entre o frontend e os sistemas internos.

1.  **Entrada de Credenciais:** O usuário insere seu e-mail corporativo e senha na interface de login.
2.  **Requisição à API:** O frontend envia uma requisição `POST` para o endpoint de autenticação no backend (ex: `/api/auth/login`) com as credenciais.
3.  **Validação no Backend:** O serviço de backend:
    a.  Verifica se o usuário existe em sua base de dados.
    b.  Compara a senha fornecida com o hash seguro armazenado no banco de dados (usando algoritmos como bcrypt ou Argon2).
4.  **Geração do JWT:** Se as credenciais forem válidas, o backend gera um **JSON Web Token (JWT)**. Este token contém informações do usuário (payload), como ID, permissões (roles) e um tempo de expiração.
5.  **Retorno do Token:** A API retorna o JWT para o frontend.
6.  **Armazenamento Local:** O frontend armazena o JWT de forma segura no navegador, geralmente em um `HttpOnly` cookie para prevenir ataques XSS.
7.  **Redirecionamento:** O usuário é redirecionado para um dashboard principal ou para o sistema que tentou acessar originalmente, agora com o token de sessão ativo.
8.  **Acesso a Rotas Protegidas:** Para cada requisição subsequente aos sistemas internos, o JWT é enviado no cabeçalho da requisição (geralmente `Authorization: Bearer <token>`). O backend de cada sistema valida o token antes de conceder acesso ao recurso solicitado.

## 3. Estrutura de Diretórios (Frontend - Proposta)

Uma estrutura de projeto frontend para esta aplicação poderia ser organizada da seguinte forma:

```bash
src/
├── components/          # Componentes de UI (Input, Button, Card)
├── services/            # Lógica de comunicação com a API
│   └── authService.ts   # Funções para login, logout, etc.
├── contexts/            # Contexto para gerenciar estado de autenticação
│   └── AuthContext.tsx  # Provedor de estado (usuário, token, status)
├── pages/               # Páginas da aplicação
│   └── LoginPage.tsx    # Componente da página de login
├── App.tsx              # Componente raiz com rotas
└── main.tsx             # Ponto de entrada da aplicação
```

## 4. Considerações de Segurança

- **HTTPS:** Todo o tráfego é obrigatoriamente servido sobre HTTPS para criptografar a comunicação.
- **Hashing de Senhas:** As senhas nunca são armazenadas em texto plano. Utiliza-se um algoritmo de hashing forte e com "sal".
- **Proteção contra CSRF:** O uso de tokens ou SameSite cookies é essencial.
- **Validação de Entrada:** Todas as entradas do usuário são validadas no frontend e no backend para prevenir injeção de código.
- **Rate Limiting:** A API de login deve ter um limite de tentativas para prevenir ataques de força bruta.

## 5. Build e Deploy

- **Build:** O comando `npm run build` compila o código frontend em arquivos estáticos otimizados.
- **Deploy:** O deploy é automatizado via Vercel, onde o build é acionado a cada push na branch `main` do repositório no GitHub.

_Última atualização: 04 de Novembro de 2025_
