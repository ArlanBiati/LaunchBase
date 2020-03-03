<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h2 align="center">
  Desafio 1-1: Primeiros passos com JS
</h2>

<blockquote align="center">“Querer vencer significa já ter percorrido metade do caminho.”</blockquote>

<p align="center">
    
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>




## :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos aprendidos, entre eles:

- **Variáveis**;
- **Condicionais**;
- **Operadores**.

### Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o `nome`, `peso`, `altura` e `sexo` de uma pessoa, por exemplo:

```js
const nome = "Carlos";
const peso = 84;
const altura = 1.88;
```

A partir desses dados armazene em uma constante chamada `imc` o cálculo do índice de massa corporal definido pela fórmula abaixo:

```js
peso / (altura * altura);
```

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

- `SE` o `IMC` maior ou igual a `30`: Carlos você está acima do peso;
- `SE` o `IMC` menor que `29.9`: Carlos você não está acima do peso;

### Cálculo de aposentadoria

Crie um programa para calcular a aposentadoria de uma pessoa.

_Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)_

Comece criando constantes para armazenar `nome`, `sexo`, `idade` e `contribuicao`(em anos), por exemplo:

```js
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
```

Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

- O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

- `SE` a pessoa estiver aposentada: `Silvana, você pode se aposentar!`;
- `SE` a pessoa NÃO estiver aposentada: `Silvana, você ainda não pode se aposentar!`;

_Dica: Você pode unir duas condições, veja o exemplo abaixo_

```js
if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
```



<h2 align="center">
  Desafio 1-2: Lidando com objetos e vetores
</h2>

<blockquote align="center">“Não basta saber, é preferível saber aplicar. Não é o bastante querer, é preciso saber querer.”</blockquote>





## :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos, entre eles:

- **Objetos**;
- **Vetores**.

### Construção e impressão de objetos

Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`. Os dados a serem armazenados são:

- Nome: Rocketseat
- Cor: Roxo
- Foco: Programação
- Endereço:

  - Rua: Rua Guilherme Gembala
  - Número: 260

_Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:_

```js
const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
```

Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:

```
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
```

_Obs. Para imprimir em tela utilize o formato de template strings, por exemplo_

```js
console.log(`O nome do usuário é ${usuario.nome}`);
```

### Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo `nome` e `especialidade`, use as tecnologias abaixo:

```js
{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
```

Por exemplo:

```js
const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
```

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

```
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
```



<h2 align="center">
  Desafio 1-3: Funções e estruturas de repetição
</h2>

<blockquote align="center">“Quer você acredite que consiga fazer uma coisa ou não, você está certo.”</blockquote>




## :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos, entre eles:

- **Funções e métodos**;
- **Estruturas de repetição**;
- **Escopos**.

### Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias` (novo array), por exemplo:

```js
const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];
```

Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

```
Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js
```

### Busca por tecnologia

Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean `true/false`.

Por exemplo:

```js
function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
```

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

```js
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  }
}
```

### Soma de despesas e receitas

Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (`receitas - despesas`).

Utilize o array de usuários abaixo:

```js
const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];
```

Percorra o array de usuários e para cada usuário chame uma função chamada `calculaSaldo` que recebe como parâmetro as receitas e despesas do usuário:

```js
function calculaSaldo(receitas, despesas) {}
```

Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função `calculaSaldo`:

```js
function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
}
```

A função `calculaSaldo` deve utilizar a função `somaNumeros` para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja `receitas - despesas`.

No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

```
Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3
```



<h2 align="center">
  Desafio 1-4: Aplicação: Operações bancárias 
</h2>

<blockquote align="center">“Não compare o seu bastidor com o palco do outro!”</blockquote>




## :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos, entre eles:

- **Booleanos**;
- **Organização**;
- **Padronização**;
- **Escrita**.

### Intro

Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio `[]` e o saldo (balance) em `0` (zero).

```js
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};
```

### Adicionar transações

Crie uma função `createTransaction` para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

```js
{
  type: 'credit',
  value: 50.5
}
```

O `type` pode ser `credit` para créditos e `debit` para débitos da conta do usuário.

Quanto uma transação for do tipo `credit` ela deve também somar o valor do crédito no saldo (balance) do usuário.

Se for uma transação do tipo `debit` ela deve subtrair o valor do débito no saldo (balance) do usuário.

_Dica.: Você pode usar o método `user.transactions.push(transaction)` para adicionar um novo item no array de transações._

### Relatórios

- Crie uma função chamada `getHigherTransactionByType` que recebe como parâmetro o tipo de transação `credit/debit`, percorre as transações do usuário e retorna o **objeto** da transação de maior valor com aquele tipo:

```js
getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
```

- Crie uma função chamada `getAverageTransactionValue` que retorna o valor médio das transações de um usuário independente do seu tipo:

```js
getAverageTransactionValue(); // 83.3
```

- Crie uma função chamada `getTransactionsCount` que retorna o número de transações de cada tipo `credit/debit`, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:

```js
getTransactionsCount(); // { credit: 5, debit: 3 }
```

### Exemplo de resultado final do projeto:

```js
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
```




## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---
