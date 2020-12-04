# As variáveis, são espaços de memória no computador onde podemos armazenar dados, que podem ser usados agora ou no futuro.

## TIPOS DE VARIÁVEL

Em Javascript existem três tipos de variáveis:

* var
* let
* const

## Para declarar uma variável escrevemos o tipo e o nome que queremos dar a variável:

```
var nome;
let contador;
const altura;

```

## ATRIBUIÇÃO DE UM VALOR

Quando declaramos uma variável, também podemos ao mesmo tempo atribuir um valor. Para isso usamos o operador de atribuição.

```
var nome = "Pedro";
let meuHeroi = "Pyke";
const numero = 10;
```

## Diferenças entre var e let.

A principal diferença entre var e let é que let só será acessível nos blocos de código em que foi declarada.
Os blocos de código são normalmente determinados por chaves { }.

* var

```
if (true) {
  var nome = "João";
}
console.log(nome);
// Ok, mostra "João"

```

* let

```
if (true) {
  let nome = "João";
}
console.log(nome)
// Error: nome não existe

```
* const

A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável
constante não pode ser alterada ou retribuída.
