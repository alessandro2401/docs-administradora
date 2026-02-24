> Documentação completa do Sugestões de Prompts, incluindo funcionalidades, layout, stack técnica e guia de uso.

## Informações Gerais

| Campo                  | Detalhe                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **URL**                | [https://prompts.administradoramutual.com.br/](https://prompts.administradoramutual.com.br/)         |
| **Status**             | Ativo                                                                                               |
| **Tipo de Acesso**     | Público                                                                                             |
| **Última Verificação** | 24 de Fevereiro de 2026                                                                             |

## Propósito e Público-Alvo

O site "Sugestões de Prompts" é uma ferramenta estratégica desenvolvida para capacitar usuários na criação de conteúdo de alta performance com o auxílio de Inteligência Artificial. A plataforma oferece uma biblioteca com mais de 970 prompts (comandos) rigorosamente testados e validados, projetados para maximizar o impacto em diversas frentes de comunicação e marketing digital. O principal problema que o site busca resolver é a dificuldade de criar comandos eficazes para I.A.s generativas, fornecendo uma base sólida e criativa para a produção de conteúdo.

O público-alvo é diversificado, englobando:

-   **Criadores de Conteúdo e Influenciadores Digitais:** que buscam otimizar a produção de material para redes sociais como Instagram, TikTok e YouTube, aumentando o engajamento e a relevância.
-   **Profissionais de Marketing e Agências:** que necessitam de ferramentas para agilizar a criação de campanhas, gerar leads qualificados e impulsionar as taxas de conversão.
-   **Empresários e Gestores de E-commerce:** que desejam aprimorar a comunicação com clientes, criar descrições de produtos atraentes e desenvolver estratégias de vendas mais eficazes.
-   **Estudantes e Acadêmicos:** que utilizam a I.A. como ferramenta de apoio para pesquisas, desenvolvimento de projetos e otimização de trabalhos acadêmicos.

## Stack Técnica

| Tecnologia     | Uso                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Framework**  | React (Vite)                                                                             |
| **Linguagem**  | TypeScript                                                                               |
| **Estilização**| Tailwind CSS                                                                             |
| **Hospedagem** | Vercel                                                                                   |
| **Ícones**     | Lucide React                                                                             |
| **Roteamento** | React Router                                                                             |

## Layout e Design

O layout do site é caracterizado por uma abordagem minimalista e moderna, com foco na experiência do usuário (UX) e na facilidade de navegação. A estrutura é intuitiva, permitindo que os usuários encontrem rapidamente os prompts de que precisam.

**Header:** O cabeçalho é fixo e ocupa toda a largura da página. Contém o logotipo do site à esquerda, um menu de navegação principal centralizado com as seções "Início", "Favoritos", "Sugerir Prompt" e "Ferramentas", um link para "Voltar para Sistemas" e uma barra de busca à direita. O uso de um cabeçalho fixo garante que as principais funcionalidades de navegação estejam sempre acessíveis.

**Footer:** O rodapé é simples e discreto, contendo links para as páginas de "Termos", "Privacidade" e "Documentação", além do aviso de direitos autorais. A sua simplicidade evita distrações e mantém o foco no conteúdo principal.

**Cores:** A paleta de cores é suave e harmoniosa, utilizando tons pastéis de azul, verde, rosa e amarelo para diferenciar as categorias de prompts. O fundo é predominantemente branco (#FFFFFF), o que confere uma sensação de limpeza e organização. Os textos são em tons de cinza escuro, garantindo boa legibilidade.

**Tipografia:** A fonte principal é a "Inter", uma sans-serif moderna e de alta legibilidade, utilizada em diferentes pesos (regular, medium, bold) para criar hierarquia visual e destacar informações importantes.

**Responsividade:** O site é totalmente responsivo, com um design fluido que se adapta a uma ampla variedade de dispositivos e tamanhos de tela. Em dispositivos móveis, o menu de navegação é colapsado em um menu "hambúrguer" para otimizar o espaço, e os cards de categoria são reorganizados em uma única coluna.

## Funcionalidades

### Busca de Prompts

A funcionalidade de busca é um dos principais recursos do site. A barra de busca no cabeçalho permite pesquisas rápidas em tempo real em toda a biblioteca de prompts. Adicionalmente, uma busca contextual na página inicial, com o placeholder "O que você quer criar hoje?", incentiva a exploração e a descoberta de novos prompts.

### Navegação por Categorias

Com 44 categorias distintas, a navegação por categorias é uma forma eficiente de explorar a vasta biblioteca de prompts. Cada categoria é representada por um card com um ícone, o nome da categoria e o número de prompts disponíveis. Ao clicar em uma categoria, o usuário é direcionado para uma página que lista todos os prompts daquela categoria.

### Destaques da Semana

Esta seção dinâmica na página inicial apresenta os prompts que estão em alta, ou seja, os mais populares e com melhor performance. É uma ótima maneira de descobrir novos prompts e tendências, e serve como um ponto de partida para usuários que não sabem por onde começar.

### Visualização de Prompts

Ao selecionar um prompt, o usuário é levado a uma página de detalhes que exibe o prompt completo, instruções de uso e, em alguns casos, exemplos de resultados. Esta página é projetada para ser clara e objetiva, facilitando a compreensão e a aplicação do prompt. A URL da página de detalhes é amigável, contendo o slug do prompt.

### Copiar Prompt

Um botão de "Copiar" está convenientemente localizado ao lado de cada prompt, permitindo que o usuário o copie para a área de transferência com um único clique. Esta funcionalidade agiliza o fluxo de trabalho do usuário, que pode colar o prompt diretamente na ferramenta de I.A. de sua preferência.

### Favoritos

Os usuários podem marcar prompts como favoritos, criando uma coleção pessoal de seus prompts mais utilizados. A página "Favoritos" oferece acesso rápido a essa coleção, permitindo que o usuário organize seus prompts de forma eficiente.

### Sugerir Prompt

Esta funcionalidade colaborativa permite que a comunidade de usuários contribua com novas ideias de prompts, enriquecendo a biblioteca e mantendo-a atualizada com as necessidades do mercado. O formulário de sugestão é simples e direto, incentivando a participação.

## Seções e Páginas

| Seção                | Descrição                                                                                                                                                                     | Rota                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Início               | Página principal que serve como portal de entrada para todas as funcionalidades do site. Apresenta a busca principal, as categorias de prompts e os destaques da semana.           | /                                                   |
| Favoritos            | Página pessoal do usuário, onde são listados todos os prompts que foram marcados como favoritos. Requer login para funcionar de forma persistente.                               | /favoritos                                          |
| Sugerir Prompt       | Formulário interativo que permite aos usuários enviar suas próprias sugestões de prompts para serem adicionados à biblioteca.                                                    | /sugerir-prompt                                     |
| Ferramentas          | Seção que pode abrigar futuras ferramentas e utilitários para auxiliar na criação de conteúdo com I.A., como um gerador de variações de prompts ou um analisador de eficácia. | /ferramentas                                        |
| Voltar para Sistemas | Link externo que direciona o usuário de volta ao portal principal de sistemas da Administradora Mutual, integrando a ferramenta ao ecossistema da empresa.                   | https://sistemas.administradoramutual.com.br/       |
| Termos               | Página legal que contém os termos e condições de uso do site, estabelecendo os direitos e deveres dos usuários.                                                              | /termos                                             |
| Privacidade          | Página legal que detalha a política de privacidade e o tratamento de dados dos usuários, em conformidade com a LGPD.                                                          | /privacidade                                        |
| Documentação         | Link que direciona para a documentação oficial do site, oferecendo um guia completo sobre suas funcionalidades e recursos.                                                      | /docs                                               |

## Integrações

O "Sugestões de Prompts" está integrado ao ecossistema de sistemas da Administradora Mutual, proporcionando uma experiência de usuário coesa e unificada. A principal integração é o link "Voltar para Sistemas", que conecta a ferramenta ao portal central da empresa. Não foram identificadas outras integrações com APIs de terceiros ou serviços externos, o que garante maior controle sobre a segurança e a performance da aplicação.

## Observações e Recomendações

O site se destaca pela sua usabilidade, design limpo e pela riqueza de sua biblioteca de prompts. A iniciativa de criar uma ferramenta como esta demonstra o compromisso da Administradora Mutual com a inovação e o empoderamento de seus usuários.

Como pontos de melhoria, sugere-se:

-   **Tema Escuro:** A implementação de um tema escuro (dark mode) poderia melhorar a experiência de uso em ambientes com pouca luminosidade e reduzir o cansaço visual, uma funcionalidade cada vez mais requisitada pelos usuários.
-   **Sistema de Votação e Comentários:** Um sistema de votação ou classificação para os prompts, juntamente com uma seção de comentários, permitiria que a comunidade destacasse os mais eficazes e compartilhasse dicas e resultados, aprimorando a curadoria do conteúdo.
-   **Gamificação:** A introdução de elementos de gamificação, como badges por número de prompts favoritados ou contribuições, e um ranking de usuários mais ativos, poderia incentivar ainda mais a participação da comunidade.
-   **Compartilhamento Social:** Adicionar botões para compartilhamento de prompts em redes sociais poderia aumentar a visibilidade da ferramenta e atrair novos usuários.
-   **Personalização da Interface:** Permitir que os usuários personalizem a interface, como a ordem das categorias ou o número de prompts exibidos por página, poderia tornar a experiência ainda mais agradável e produtiva.
