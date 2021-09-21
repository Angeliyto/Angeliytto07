console.log("  ");
var a = prompt("Ingresa Un Numero Entero Positivo");
var b = 2*a-0;
while (b < a){
    console.log(a+"")
    b ++;
}
var ingresa = prompt("Ingresa una frase");
var ter = 0;
var vocales = ['a','e','i','o','u']
for (var z=0; z<=ingresa.length; z++){
    if (vocales.indexOf(ingresa[z])>=0){
        ++ter;
    }
}
console.log("Vocales:"+ter);

var frase = prompt("Ingresa una frase");
var num = ['a','e','i','o','u']
var voca = ['a','e','i','o','u']
for (var w=0; w<=frase.length; w++){
    if (voca.valueOf(frase[w])>=0){
        ++num;
    }
}
console.log("Vocal:"+num);

