// EXEMPLO DE COMO ADICIONAR VALORES EM POSIÇÕES DA MATRIZ

//const pessoa = ["Dimitri", "Teixeira", 30, "Professor"]; // Array
// pessoa.splice(1, 0, "Item adicionado 1", "item adicionado 2"); // Adicionar itens no meio da matriz, com posição definida

// document.getElementById("teste").innerHTML = pessoa;

// CONCATENAÇÃO DE MATRIZES

//const lista1 = ["Arroz", "feijão", "leite" , "macarrão"]; //array
//const lista2 = ["Suco", "refrigerante", "carne"];
//const lista3 = ["salgadinho"];

//const superLista = lista1.concat(lista2, lista3);

//document.getElementById("teste").innerHTML = superLista;

// MÉTODO SLICE (FATIAR A MATRIZ A PARTIR DE DETERMINADO PONTO)

// const jogadores = ["Biro Biro", 
   // "Ribamar",
   // "Pelé", 
    // "Maradona", 
    // /"Neymar", 
    // "Cristiano Ronaldo", 
    // "Vampeta",
    // "Dimitri"
    // ];
// const craques = jogadores.slice(2,6);

// document.getElementById("teste").innerHTML = craques;

// MÉTODO SORT - MOSTRAR EM ORDEM ALFABÉTICA - A - Z

/*
const jogadores = ["Biro Biro", 
    "Ribamar",
    "Pelé", 
    "Maradona", 
    "Neymar", 
    "Cristiano Ronaldo", 
    "Vampeta",
    "Dimitri"
    ];

const jogOrdem = jogadores.sort();

document.getElementById("teste").innerHTML = jogOrdem;

*/

// METÓDO PARA MOSTRAR EM ORDEM ALFABÉTICA REVERSA - Z - A

/*

const jogadores = ["Biro Biro", 
    "Ribamar",
    "Pelé", 
    "Maradona", 
    "Neymar", 
    "Cristiano Ronaldo", 
    "Vampeta",
    "Dimitri"
    ];

jogadores.sort();
jogadores.reverse();

document.getElementById("teste").innerHTML = jogadores;

*/

// MÉTODO PARA FAZER ORDENAÇÃO NUMÉRICA CORRETAMENTE:

/*

const numeros = [40,100,1,5,25,10];

numeros.sort(function (a, b) { return a - b});

document.getElementById("teste").innerHTML = numeros;

*/

// MÉTODO PARA PEGAR O MAIOR NÚMERO DENTRO DA MATRIZ

/* 
const numeros = [40,100,1,5,25,10];

document.getElementById("teste").innerHTML = MaiorNumero(numeros);

function MaiorNumero(array) {
    return Math.max.apply(null, array);
}

*/

// MÉTODO PARA PEGAR O MENOR NÚMERO DENTRO DA MATRIZ

/*

const numeros = [40,100,1,5,25,10];

document.getElementById("teste").innerHTML = MenorNumero(numeros);

function MenorNumero(array) {
    return Math.min.apply(null, array);
}

*/

// MÉTODO PARA FILTRAGEM DE NÚMEROS:

const numeros = [40,100,1,5,25,10];
const maior20 = numeros.filter(filtragem);

document.getElementById("teste").innerHTML = maior20;

function filtragem(value, index, array) {
    return value > 20;
}

