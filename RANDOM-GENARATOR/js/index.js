randomLable_1 = document.getElementById("randomLable_1")
randomLable_2 = document.getElementById("randomLable_2")
randomLable_3 = document.getElementById("randomLable_3")


const min =  1
const max = 6 
let count = 0
let randomNum_1 , randomNum_2 , randomNum_3


randomLable_1.textContent = count
randomLable_2.textContent = count
randomLable_3.textContent = count

function func_randomNumber (){
    randomNum_1 = Math.floor(Math.random() * max)
    randomNum_2 = Math.floor(Math.random() * max)
    randomNum_3 = Math.floor(Math.random() * max)

    randomLable_1.textContent = randomNum_1
    randomLable_2.textContent = randomNum_2
    randomLable_3.textContent = randomNum_3

}