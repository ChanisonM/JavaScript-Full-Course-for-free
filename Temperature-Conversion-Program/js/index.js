const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")

let temp

function func_convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value)
        temp = temp * 9/5 + 32
        result.textContent = temp.toFixed(1) + "°F"
    }else if(toCelsius.checked){
        temp = Number(textBox.value)
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(1) + "°C"


    }else {
        result.textContent = "Select a unit"
        
    }
}


function func_clear(){
    textBox.value = 0
    toFahrenheit.checked = false
    toCelsius.checked = false
    result.textContent = "Select a unit"
}