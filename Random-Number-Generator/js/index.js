function generatePassword(length ,includeLowercase,includeUppercase,includeNumbers,includeSymbols) {
   

    const lowercaseChars = "abcdfghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "1234567890"
    const symbolChars = "!@#$%^&*()_+="
    const result = document.getElementById('result')

    let allowedChars =""
    let password = ""

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""
    
    // console.log(allowedChars);
    
    if(length <= 0){
        return '(password length must be at least 1)'
    }
    if(allowedChars.length === 0){
        return 'At least 1 set of character needs to be selected'

    }

    for(let i = 0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return result.innerHTML = password

   
}


const passwordLength = 12
const includeLowercase = true
const includeUppercase = false
const includeNumbers = false
const includeSymbols = false

const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols)

console.log(`Generate Password :  ${password}`);
