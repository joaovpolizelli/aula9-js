let i = 1;
while (i <= 10) {
    document.querySelector("#contagem").innerHTML += i + "<br>"; 
    i++;
}

/*
No while a condição fica no início do laço, isso quer dizer que o conteúdo do laço só sera executado ENQUANTO a condição for verdadeira. Caso logo no primeiro momento a condição seja falsa ( i tenha o valor de 20 por exemplo) o laço não será executado nenhuma vez. o while possui só parte:
while(condição)

o incremento do laço, diferente do laço for, deve ficar dentro do bloco while, no nosso exemplo é o i++

*/