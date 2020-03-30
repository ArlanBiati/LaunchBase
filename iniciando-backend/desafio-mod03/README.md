<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 3-1: Primeiro servidor
</h3>

<blockquote align="center">“A recompensa do estudo é a compreensão.”</blockquote>

## :rocket: Sobre o desafio

Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de `Cursos` e `Sobre`). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

_Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo._

### Arquivos HTML

- `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.
- `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.
- `layout.njk`: Arquivo referente à base comum entre as páginas.
- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base
  - Ter um texto infortivo sobre o erro

  Dica: Para capturar essas requisições, basta adicionar esse trecho após **todas** as rotas no seu `server.js`:

```js
server.use(function(req, res) {
  res.status(404).render("not-found");
});
```










<h3 align="center">
  Desafio 3-2: Arquivos nunjucks e dados dinâmicos
</h3>

<blockquote align="center">“Nunca é tarde demais para ser aquilo que sempre desejou ser.”</blockquote>


## :rocket: Sobre o desafio

Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.










<h3 align="center">
  Desafio 3-3: Página de descrição do curso
</h3>

<blockquote align="center">“Não se perca tentando ser melhor que ninguém, esforce-se apenas por ser e dar o melhor de você.”</blockquote>


## :rocket: Sobre o desafio

Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params (ex.: `/courses/id_do_curso`). Dica: utilize o req.params para recuperar o id fornecido na rota.

```js
server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});
```

### Informações

- Layout padrão
- Card do curso
- Link que redireciona para a página do curso





 ![ezgif com-gif-maker](https://user-images.githubusercontent.com/43690080/77362300-77432100-6d2f-11ea-9e83-6f02a9a3e267.gif)

