const buttons = document.querySelectorAll("button")
const firstVal = document.querySelector("#firstVal")
const secondVal = document.querySelector("#secondVal")
const output = document.querySelector(".output")


buttons[0].addEventListener('click', function () {
    arithmetic(firstVal.value, secondVal.value, add)
})

buttons[1].addEventListener('click', function () {
    arithmetic(firstVal.value, secondVal.value, subtract)
})

buttons[2].addEventListener('click', () => {
    arithmetic(firstVal.value, secondVal.value, multiply)
})

buttons[3].addEventListener('click', () => {
    arithmetic(firstVal.value, secondVal.value, divide)
})



function arithmetic(num1, num2, operator){
    let c = 0
    if(operator == add){
       c = add(num1, num2)
       output.innerHTML = c  
    }
    else if(operator == subtract){
        c = subtract(num1, num2)
        output.innerHTML = c
    }
    else if(operator == multiply){
        c = multiply(num1,num2)
        output.innerHTML = c
    }
    else{
        c = divide(num1, num2)
        output.innerHTML = c
    }
}



function add(a, b){
    return +a + +b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}


