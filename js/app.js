const buttons = document.querySelectorAll("button")
const firstVal = document.querySelector("#firstVal")
const secondVal = document.querySelector("#secondVal")
const output = document.querySelector(".output")
const output2 = document.querySelector(".output2")

function add(){
    let a = Number(firstVal.value)
    let b = Number(secondVal.value)
    let c = a + b

    output.innerHTML = c
    output2.innerHTML = ""
}

function subtract(){
    let a = parseFloat(firstVal.value)
    let b = parseFloat(secondVal.value)
    const c = a - b

    output.innerHTML = c
    output2.innerHTML = ""

}

function multiply(){
    let a = parseInt(firstVal.value)
    let b = parseInt(secondVal.value)
    
    output.innerHTML = a * b
    output2.innerHTML = ""

}

function division(){
    output.innerHTML = +(firstVal.value) / +(secondVal.value)
    output2.innerHTML = ""

}

function modulus(){
    output.innerHTML = Number(firstVal.value) % Number(secondVal.value)
    output2.innerHTML = ""

}

function random(){
    output.innerHTML = Math.random()
    firstVal.value = 0
    secondVal.value = 0
}

function exponent(){
    // output.innerHTML = BigInt(firstVal.value) ** BigInt(secondVal.value)
    output.innerHTML = Math.pow(BigInt(firstVal.value), BigInt(secondVal.value))
    output2.innerHTML = ""
}

function squareRoot(){
    output.innerHTML = Math.sqrt(Number(firstVal.value))
    output2.innerHTML = Math.sqrt(Number(secondVal.value))
}

function cubeRoot(){
    output.innerHTML = Math.cbrt(Number(firstVal.value))
    output2.innerHTML = Math.cbrt(Number(secondVal.value))
}

function absolute(){
    let a = Number(firstVal.value)
    let b = Number(secondVal.value)
    let c = a - b

    output.innerHTML = Math.abs(c)
    output2.innerHTML = ""
}

function ceil(){
    let a = Number(firstVal.value)
    let b = Number(secondVal.value)
    let c = a / b

    output.innerHTML = Math.ceil(c)
    output2.innerHTML = ""
}

function floor(){
    let a = Number(firstVal.value)
    let b = Number(secondVal.value)
    let c = a / b

    output.innerHTML = Math.floor(c)
    output2.innerHTML = ""
}

function round(){
    let a = Number(firstVal.value)
    let b = Number(secondVal.value)
    let c = a / b

    output.innerHTML = Math.round(c)
    output2.innerHTML = ""
}
