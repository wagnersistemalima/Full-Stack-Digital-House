// contado quantas vezes aparece a palavra "pedro";

let lista = ["joao", "pedro", "carlos", "pedro", "maria", "junior", "pedro", "ana", "pedro"];

let contador = 0;
for (let nome of lista) {
    if (nome === "pedro") {
        contador ++;
    }
}
console.log(contador);