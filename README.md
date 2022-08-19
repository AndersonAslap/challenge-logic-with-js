# Desafio de Lógica - Etapa 1

> Passo 1 : Para rodar o projeto você deve possuir as seguintes ferramentas instaladas no computador.
- node : https://nodejs.org/pt-br/download/
- npm : https://docs.npmjs.com/cli/v7/configuring-npm/install


> Passo 2 : Após a implementação do passo 1 você deve seguir as seguintes instruções.
- Clonar o repositório em sua máquina.

```bash
git clone https://github.com/AndersonAslap/challenge-logic-with-js
```

- Entrar no diretório do projeto

```bash
cd challenge-logic-with-js
```

- Dentro do diretório haverá 3 arquivos <br> 
- challenge-logic.js (Arquivo com o algorítimo do desafio) <br>

- stdin (Arquivo onde o usuário irá informar o valor do tamanho da ampulheta) segue um exemplo de valor abaixo.<br>
```stdin
20
```

- README.md (Arquivo de markdown do projeto contendo as intruções de configuração, instalação e execução) <br>

> Passo 3 : Após ter feito todos os passo acima você deverá executar o seguinte comando.

```bash
node challenge-logic.js
```

# Sobre o desafio

> Horas ultilizadas : 5:50h.

> Experiência no desenvolvimento do desafio
- Neste desafio eu tive a experiência de explorar mais meu raciocínio lógico e matemático <br>
eu verifiquei o padrão do desenho analisei como a matriz se comportava e com isso fui desenvolvendo o algorítimo <br>
a princípio desenvolvi ele de forma não tão bem estruturada eu queria deixar o código funcionando e exibindo as ampulhetas <br> 
em seguida fui lapidando o código, fui retirando condições que se replicavam, fui ultilizando de conceitos de lógica de programação e clean code. <br>
Sempre matendo a preocupação que alguém vai fazer um review do código. Desenvolvi pensando em quando for adicionar melhorias ou realizar alguma manutenção não ter tanta dor de cabeça, nem eu e nem algum outro desenvolvedor que fosse ultilizar deste algorítmo. <br>

> Melhorias realizadas
- A ampulheta preenchida.
- Validação do valor de input do usuário.
- Os caractéres dos densenhos podem serem dinâmicos alterando apenas duas varíaveis.
```js
let charWithDrawing = `#`;
let charWithoutDrawing = ` `;
```

> Melhorias não realizadas
- A princípio eu queria deixar a areia caindo ultilizando o método setTimeOut, porém não ficou do jeito que eu esperava então decidir não adicionar, fui na lógica de que o menos e mais e o feito é melhor que não feito.
- Pensei em ultilizar esse mesmo algoritmo em um script dentro de um HTML, e deixar a ampulheta estilizada com css , colocar cores nos #.<br> verde no momento de iniciar e vermelho no momento de finalizar, porém o desafio mostrava que não deveria ultilizar de ferramentas de desenho, e por o css dar estilos eu preferir deixar rodando via console do terminal e não perder pontos.

> Agradecimento
- Quero deixar registrado meu agradecimento em participar da realização deste desafio!
