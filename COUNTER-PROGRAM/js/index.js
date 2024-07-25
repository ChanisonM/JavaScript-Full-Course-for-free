// decreaseBtn = document.getElementById("decreaseBtn")
// resetBtn = document.getElementById("resetBtn")
// increaseBtn = document.getElementById("increaseBtn")
countLable = document.getElementById("countLable")

let count = 0




function increaseBtn(){
    count++
    document.getElementById("countLable").innerHTML = count
}

function decreaseBtn(){
    count--
    document.getElementById("countLable").innerHTML = count
    // if (count < 0){
    //     count = 0
    //     document.getElementById("countLable").innerHTML = count

    // }

}

function resetBtn(){
    count = 0
    document.getElementById("countLable").innerHTML = 0
}


