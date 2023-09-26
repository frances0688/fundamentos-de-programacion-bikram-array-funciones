// Arrays

let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];


// Functions

function suma(num1, num2) {
    return num1+num2;
}

function potenciacion(num1, num2) {
    return num1**num2;
}

function separarPalabras(str) {
    return str.split(' ');
}

function repetirString(str, num) {
    return str.repeat(num);
}

function esPrimo(num) {
    return (num == 1 || (num%2!=0 && num%3!=0))
}


// Mixing functions and arrays

function ordenarArray(numArray) {
    return numArray.sort((a,b)=>a-b);
}

function obtenerPares(numArray) {
    let pairs = [];
    numArray.forEach(el => {
        if (el%2 == 0) {
            pairs.push(el);
        }
    })
    return pairs;
}

function pintarArray(array) {
    return `[${array}]`.split(',').join(', ');
}

function arrayMapi(arr, func) {
    return arr.map(el => func(el));
}

function eliminarDuplicados(arr) {
    return arr.reduce((acc, el) => {
        if (acc.indexOf(el) === -1) {
          acc.push(el);
        }
        return acc;
      }, []);
}


// Project Iterations

// Arrays

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ['Hola', 'Mundo'];

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// Functions

function multiplicacion(num1, num2) {
    return num1*num2;
}

function division(num1, num2) {
    return num1/num2;
}

function esPar(num) {
    return num%2==0;
}

function resta(num1, num2) {
    return num1-num2;
}
let arrayFunciones = [suma, resta, multiplicacion];


// Mixing arrays and functions

function ordenarArray2(arr) {
    return arr.sort((a,b) => a-b);
}

function obtenerImpares(arr) {
    let odds = [];
    arr.forEach(el => {
        if (el%2 !== 0) {
            odds.push(el);
        }
    })
    return odds;
}

function sumarArray(numArr) {
    return numArr.reduce((a,b)=>a+b);
}

function multiplicarArray(numArr) {
    return numArr.reduce((a,b)=>a*b)
}