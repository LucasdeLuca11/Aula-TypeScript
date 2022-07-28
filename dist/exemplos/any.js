"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Olá';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Ola ', 'como vai?');
