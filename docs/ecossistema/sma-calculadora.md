# Documentação Técnica: Calculadora SMA - Movimento Mais Brasil

> Documentação técnica completa e aprofundada da Calculadora SMA, uma ferramenta interna estratégica para o cálculo de indenizações financeiras. Este documento detalha exaustivamente suas funcionalidades, o layout da interface, a arquitetura técnica subjacente, o fluxo de dados, considerações de segurança e um plano de evolução para futuras versões.

---

## 1. Informações Gerais

Esta seção fornece uma visão geral e concisa do status operacional e das condições de acesso ao site da Calculadora SMA. A ferramenta está plenamente funcional e acessível publicamente na internet, uma configuração que, embora facilite o acesso, é destinada exclusivamente para uso interno da equipe da Administradora Mutual.

| Campo                | Detalhe                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| **URL**              | [https://sma.administradoramutual.com.br/](https://sma.administradoramutual.com.br/) |
| **Status**           | Ativo e em produção, sendo utilizada diariamente pela equipe de sinistros.   |
| **Tipo de Acesso**   | Público, sem necessidade de qualquer tipo de autenticação ou login.        |
| **Última Verificação** | 24 de Fevereiro de 2026                                                    |

---

## 2. Propósito e Público-Alvo

O site "Calculadora SMA - Movimento Mais Brasil" é uma aplicação web desenvolvida como uma ferramenta estratégica e de missão crítica para o uso exclusivo dos colaboradores da Administradora Mutual. Seu propósito fundamental é otimizar, padronizar e agilizar o complexo processo de cálculo para as indenizações financeiras que são devidas aos associados que sofreram sinistros em seus veículos. A aplicação é direcionada especificamente aos departamentos de sinistros e financeiro, que a utilizam como principal recurso para determinar com exatidão os valores a serem pagos em cada caso, garantindo consistência e conformidade com as políticas da empresa.

A calculadora foi criada para resolver a complexidade e a morosidade inerentes aos cálculos manuais, que são frequentemente suscetíveis a erros humanos e inconsistências. Ao automatizar este processo, a ferramenta leva em consideração um conjunto abrangente de variáveis, como o valor da regulagem definido pelo perito, a cota de participação do associado (franquia), os custos orçados pela oficina e os prazos estipulados para o reparo. O subtítulo "Movimento Mais Brasil - Antecipação de Valores de Reparo" sugere que a ferramenta se alinha a uma iniciativa maior da empresa para acelerar os pagamentos, uma ação que visa melhorar a satisfação e a retenção de associados. Dessa forma, a calculadora não apenas mitiga o risco de erros, mas também acelera a liquidação dos sinistros, resultando em uma solução mais ágil, eficiente e transparente tanto para a organização quanto para seus clientes, fortalecendo a imagem da marca no mercado.

---

## 3. Stack Técnica

A arquitetura do site foi concebida com base em tecnologias web consolidadas e uma filosofia minimalista, evitando a complexidade de frameworks modernos para garantir leveza, performance e facilidade de manutenção. Esta abordagem é ideal para uma ferramenta com um escopo tão bem definido e focado.

| Tecnologia      | Uso                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Framework**   | A aplicação foi desenvolvida utilizando JavaScript puro (Vanilla JS), sem a dependência de frameworks como React, Angular ou Vue. Isso resulta em um tempo de carregamento extremamente rápido e uma pegada de memória mínima no navegador do cliente, além de eliminar a necessidade de um passo de compilação (build). |
| **Linguagem**   | A base do código é composta por HTML5 para a estruturação semântica do conteúdo, CSS3 para a estilização visual e JavaScript (ES6+) para toda a lógica de programação e interatividade do formulário. O uso de padrões modernos de JavaScript garante um código mais limpo e manutenível. |
| **Estilização** | O design da interface é implementado através de uma folha de estilo customizada (`style.css`). Não há uso de frameworks CSS como Bootstrap ou Tailwind, o que confere um controle total e granular sobre a aparência da aplicação e evita o carregamento de estilos não utilizados. |
| **Hospedagem**  | A aplicação está hospedada na plataforma Vercel, uma escolha estratégica para projetos web modernos devido à sua performance global (CDN), integração contínua (CI/CD) nativa com repositórios Git e facilidade de deployment. Cada `git push` pode gerar um novo deploy, facilitando a entrega de novas funcionalidades e correções. |

---

## 4. Layout e Design

O design da Calculadora SMA é caracterizado por sua simplicidade, funcionalidade e estética limpa. A interface foi projetada para ser intuitiva, priorizando a usabilidade e a clareza das informações para que o operador possa realizar os cálculos de forma rápida e sem distrações. A estrutura é de uma única página, com um layout de coluna única que guia o usuário de forma linear e lógica através dos campos do formulário.

O cabeçalho da página, com o título "Cálculo para Indenização financeira", estabelece imediatamente o propósito da ferramenta. O fundo da página apresenta um gradiente suave que transita de um roxo mais escuro (#4f46e5) para um tom mais claro (#818cf8), criando uma atmosfera visualmente agradável e profissional. Este gradiente ocupa toda a área do viewport, proporcionando uma experiência imersiva.

O formulário em si está contido em um card branco com bordas arredondadas e uma leve sombra, o que o destaca do fundo. A paleta de cores é sóbria e corporativa, com predominância de tons de roxo, branco e cinza. O texto é apresentado em branco no cabeçalho e em um tom de cinza escuro dentro do formulário, garantindo excelente contraste e legibilidade. A tipografia é baseada em uma fonte sans-serif padrão e de alta legibilidade, como Arial ou Helvetica, contribuindo para a clareza da leitura.

Um ponto crítico a ser observado é a responsividade. O layout atual é fixo e não se adapta de forma fluida a telas menores, como as de smartphones. Em dispositivos móveis, o formulário não se reajusta, exigindo que o usuário realize rolagem horizontal para visualizar todos os campos, o que prejudica significativamente a experiência de uso. A implementação de media queries em CSS para criar um layout flexível é a recomendação mais importante para futuras atualizações. O site opera exclusivamente com um tema claro, não havendo opção para um modo escuro.

---

## 5. Funcionalidades

A aplicação possui duas funcionalidades centrais que se complementam para oferecer uma solução completa para o ciclo de cálculo e registro de indenizações.

### 5.1. Cálculo de Indenização Financeira

A funcionalidade primária e coração do site é a calculadora de indenização. Ela se manifesta como um formulário detalhado que captura todas as informações necessárias para a execução precisa do cálculo do valor do acordo. A lógica de cálculo, implementada em JavaScript, processa essas entradas para gerar o valor final da indenização e as condições de pagamento. Os campos do formulário são organizados de forma lógica em seções:

- **Dados do Beneficiário:** Inclui campos para o nome completo do associado, a placa do veículo e a descrição da marca/modelo. Estes campos são essenciais para identificar o sinistro e associá-lo a um cliente específico.
- **Dados do Sinistro:** Abrange a data de abertura do sinistro, o valor da regulagem (valor base aprovado pelo perito), o valor da participação do associado (franquia a ser deduzida) e o orçamento da oficina (custo do reparo).
- **Prazos:** Considera os dias previstos para o reparo e os dias de carro reserva, que podem influenciar custos adicionais ou o cálculo de juros.
- **Condições Financeiras:** Inclui a taxa de juros a ser aplicada no caso de parcelamento e o número de parcelas desejado para o pagamento do acordo.

Após o preenchimento de todos os campos, o operador clica no botão "Calcular Valores do Acordo". O sistema então executa a lógica de negócio, que provavelmente envolve subtrair a franquia do valor regulado, adicionar custos extras e calcular os juros compostos sobre o valor financiado. O resultado final é então exibido na tela, servindo de base para a proposta de acordo com o associado.

### 5.2. Acesso à Planilha de Registros

Localizado na parte inferior da página, um link de texto simples intitulado "Acessar Planilha de Registros" oferece acesso a uma planilha do Google Sheets. Esta planilha atua como um banco de dados simplificado, armazenando um histórico detalhado de todos os cálculos realizados através da ferramenta. Cada linha na planilha provavelmente corresponde a um cálculo, com colunas para cada campo do formulário e para o resultado final. Essa integração é de vital importância para a auditoria, o controle financeiro e o acompanhamento dos acordos, garantindo a transparência e a rastreabilidade de todas as operações financeiras relacionadas a sinistros.

---

## 6. Fluxo de Dados

O fluxo de dados na aplicação é linear e simples, refletindo a natureza da tarefa que ela executa. Todo o processamento ocorre no lado do cliente.

1.  **Entrada do Usuário:** O operador insere os dados do sinistro nos campos do formulário HTML.
2.  **Captura de Evento:** O JavaScript captura o evento de clique no botão "Calcular Valores do Acordo".
3.  **Coleta de Dados:** O script lê os valores de cada campo de entrada (input) do formulário.
4.  **Processamento Local:** A lógica de cálculo é executada inteiramente no navegador do cliente (client-side). Os valores são processados para calcular o resultado da indenização.
5.  **Exibição do Resultado:** O resultado do cálculo é inserido dinamicamente em um elemento na página para ser exibido ao operador.
6.  **Navegação para Registro:** Ao clicar no link "Acessar Planilha de Registros", o usuário é redirecionado para uma URL externa do Google Sheets. Não há uma transferência automática de dados da calculadora para a planilha; o registro é um processo manual.

---

## 7. Seções e Páginas

Por ser uma Aplicação de Página Única (SPA), todas as interações do usuário ocorrem na mesma página, o que simplifica a navegação e a experiência de uso, eliminando a necessidade de carregamentos de novas páginas.

| Seção       | Descrição                                                                 | Rota |
| ----------- | ------------------------------------------------------------------------- | ---- |
| Calculadora | Formulário principal que concentra todos os campos para o cálculo da indenização. | `/`  |

---

## 8. Integrações

A principal integração do sistema é com o **Google Sheets**. Esta conexão, embora simples, é o que permite que os dados gerados pela calculadora sejam persistidos de forma estruturada e segura. A planilha funciona como um log imutável dos cálculos, criando um repositório centralizado que pode ser acessado para consultas, análises gerenciais e auditorias. O acesso à planilha é realizado através de um link direto, o que simplifica o fluxo de trabalho dos colaboradores. No entanto, essa abordagem manual de navegação para o registro pode ser um ponto de atrito no processo.

---

## 9. Considerações de Segurança

Apesar de ser uma ferramenta interna, o fato de estar publicamente acessível na internet levanta algumas considerações de segurança importantes que devem ser abordadas para proteger os dados e a integridade do sistema.

- **Risco de Exposição de Dados:** A planilha de registros, se não estiver devidamente protegida, pode ser acessada por qualquer pessoa que encontre o link. É crucial garantir que as permissões de acesso à planilha do Google Sheets estejam restritas apenas a contas de email autorizadas da Administradora Mutual.
- **Falta de Autenticação:** A ausência de um sistema de login e senha significa que qualquer pessoa com o link pode acessar e usar a calculadora. Embora o cálculo em si não revele dados sensíveis, o uso indevido pode gerar carga no servidor ou ser usado para tentativas de engenharia social.
- **Validação de Entrada (Input Validation):** A falta de validação robusta nos campos do formulário pode abrir brechas para ataques de Cross-Site Scripting (XSS). Um ator malicioso poderia, teoricamente, injetar scripts nos campos de texto que seriam executados no navegador de outro usuário se os dados fossem refletidos em alguma outra parte do sistema.

---

## 10. Guia de Manutenção

Este guia destina-se a desenvolvedores que possam precisar atualizar ou corrigir a aplicação no futuro. Dada a simplicidade da stack, a manutenção é relativamente direta.

- **Estrutura de Arquivos:** O projeto provavelmente consiste em três arquivos principais: `index.html` (estrutura), `style.css` (estilos) e `script.js` (lógica).
- **Atualizando a Lógica de Cálculo:** A lógica de cálculo está contida no arquivo `script.js`. Para modificar a fórmula, localize a função que é acionada pelo botão "Calcular". Certifique-se de testar exaustivamente todas as alterações para evitar erros de cálculo.
- **Modificando o Layout:** As alterações visuais devem ser feitas no arquivo `style.css`. Recomenda-se adicionar comentários ao CSS para explicar seletores complexos ou regras de layout específicas.
- **Deployment:** O deploy é feito através da Vercel. Após clonar o repositório e fazer as alterações, um `git push` para a branch principal (`main` ou `master`) deve acionar um novo build e deploy automaticamente.

---

## 11. Plano de Evolução e Recomendações

Para aprimorar a ferramenta, garantir sua longevidade e mitigar os riscos identificados, recomenda-se o seguinte plano de evolução, dividido em fases de curto, médio e longo prazo.

### Curto Prazo (Próximos 3 meses)

- **Implementar Design Responsivo:** A prioridade máxima é tornar a aplicação utilizável em dispositivos móveis. Isso envolve a reescrita do CSS para usar media queries e criar um layout flexível.
- **Adicionar Feedback Visual:** Implementar um indicador de carregamento (spinner) no botão "Calcular" para melhorar a experiência do usuário.
- **Revisar Permissões da Planilha:** Realizar uma auditoria imediata nas permissões de acesso da planilha do Google Sheets para garantir que ela esteja acessível apenas para funcionários autorizados.

### Médio Prazo (3 a 6 meses)

- **Implementar Sistema de Autenticação:** Introduzir um sistema de login e senha (por exemplo, usando OAuth com as contas Google da empresa) para restringir o acesso à ferramenta.
- **Implementar Validação de Campos:** Adicionar validação de entrada robusta em todos os campos do formulário para prevenir erros e ataques.
- **Melhorar a Visibilidade do Link de Registros:** Transformar o link da planilha em um botão com maior destaque visual.

### Longo Prazo (6 a 12 meses)

- **Automatizar o Registro de Dados:** Substituir o link manual por uma integração via API com o Google Sheets. Ao calcular o acordo, os dados seriam enviados automaticamente para a planilha, eliminando o trabalho manual e o risco de erros.
- **Criar um Dashboard de Análise:** Utilizar os dados da planilha para criar um dashboard (usando Google Data Studio ou similar) para análise gerencial dos sinistros.
- **Adicionar Testes Automatizados:** Implementar uma suíte de testes unitários para a lógica de cálculo em JavaScript, garantindo a precisão e a estabilidade da ferramenta a longo prazo.
