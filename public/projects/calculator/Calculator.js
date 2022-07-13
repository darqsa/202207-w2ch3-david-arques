
let num1 = parseFloat(prompt("Type the first number: "));
let num2 = parseFloat(prompt("Type the second number (if you don't want the square root\
 of the first number): "));
//prompt siempre devuelve strings, el parseFloat lo vuelve number (float = decimales)
 

let resultSum = num1+num2
let resultRest = num1-num2
let resultMult = num1*num2
let resultDiv = num1/num2
let resultSqrt = Math.sqrt(num1)
let results = [resultSum, resultRest, resultMult, resultDiv, resultSqrt]
//sqrt=raiz cuadrada, la array es para tenerlo todo ordenado 

for (let i = 0; i < results.length; i++) {
    if(results[i]%1 != 0){
        results[i] = results[i].toFixed(3)
    } 
/*con un for recorremos la array para checkear si hay algun resultado con decimales 
y si es asi, con el .tofixed lo acortamos a 3 decimales*/
}


if (!Number(num1)){
    console.log("The first input is not a number, please try again.")
    //en el primer if -> si el num1 no es numero tiene que volver a intentar
}
else{
    if (!Number(num2)) {
        console.log("The result of the square root of "+num1+" is: "+results[4])
        //en el segundo if -> si el num2 no es numero = raiz cuadrada
    }
    else{
        console.log("The result of the sum is: "+results[0])
        console.log("The result of the rest is: "+results[1])
        console.log("The result of the multiplication is: "+results[2])
        console.log("The result of the division is: "+results[3])
        //si ha llegado hasta aqui esq num1&2 = numeros => imprimir en pantalla todos los calculos
    }
}



