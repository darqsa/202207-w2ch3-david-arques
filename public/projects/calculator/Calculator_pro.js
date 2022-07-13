

function calculatorPro() {
//declarar las variables
    let newNum;
    let numList = [];

    let resultSum 
    let resultRest 
    let resultMult 
    let resultDiv 
    let resultSqrt
    let results = []
    
//input de nums (el pop es porq guarda el cancel como 0)
    do {
      newNum = prompt("Enter a number or press cancel to stop");
      numList.push(newNum)
    } while (newNum !== null)
    numList.pop();
    for(let i = 0; i<numList.length; i++){
        numList[i] = parseFloat(numList[i])
    }


//2 NUMS
    if (numList.length == 2){
        resultSum = numList[0]+numList[1]
        resultRest = numList[0]-numList[1]
        resultMult = numList[0]*numList[1]
        resultDiv = numList[0]/numList[1]
        results = [resultSum, resultRest, resultMult, resultDiv]
    }
//+2 NUMS 
    if (numList.length > 2){
        resultSum = numList[0]
        resultRest = numList[0]
        resultMult = numList[0]
        resultDiv = numList[0]
        for(let i=1; i<numList.length; i++){
        resultSum = resultSum+numList[i]
        resultRest = resultRest-numList[i]
        resultMult = resultMult*numList[i]
        resultDiv = resultDiv/numList[i]
    }
        results = [resultSum, resultRest, resultMult, resultDiv]
    }
//1 NUM
    if (numList.length == 1){
        resultSqrt = Math.sqrt(numList[0])
        results = [resultSqrt]
    }



//comprobar si algun resultado tiene decimales
for (let i = 0; i < results.length; i++) {
    if(results[i]%1 != 0){
        results[i] = results[i].toFixed(3)
    } 
}

//imprimir resultados en pantalla
if (!Number(numList[0])){
    console.log("The first input is not a number, please try again.")
}
else{
    if (!Number(numList[1])) {
        console.log("The result of the square root of "+numList[0]+" is: "+results[0])
    }
    else{
        console.log("The result of the sum is: "+results[0])
        console.log("The result of the rest is: "+results[1])
        console.log("The result of the multiplication is: "+results[2])
        console.log("The result of the division is: "+results[3])
    }
}

//si quiere hacer mas calculos o no
if(confirm("Want new numbers? ")){
    calculatorPro()
}
else console.log("Bye!")
}

calculatorPro() 