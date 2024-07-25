subscribe = document.getElementById('subscribe')
visaBtn = document.getElementById('visaBtn')
masterCardBtn = document.getElementById('masterCardBtn')
paypalBtn = document.getElementById('paypalBtn')

// submit = document.getElementById('submit')
subResult = document.getElementById('subResult')
paymentResult = document.getElementById('paymentResult')


function func_submit(){
    if(subscribe.checked){
        subResult.innerHTML = `You are subscribe`
    }else{
        subResult.innerHTML = `You are not a subscribe`
        paymentResult.innerHTML = `You are not a Card `
    }

    if(visaBtn.checked){
        paymentResult.innerHTML = `You are choose visa`
    }else if(masterCardBtn.checked){
        paymentResult.innerHTML = `You are choose Master`
    }else if(paypalBtn.checked){
        paymentResult.innerHTML = `You are choose Paypal`
    }
}

function func_reset(){
    document.querySelector('input[name="subscribe"]:checked').checked = false;
    document.querySelector('input[name="card"]:checked').checked = false;
    
    subResult.innerHTML = ''
    paymentResult.innerHTML = ''

   
}