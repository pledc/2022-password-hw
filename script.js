let PassLength
let hasUpper
let hasLower
let hasNumbers
let hasSpecChars


//prompt ask user to input a number//
const Passprompt = () => {
passLength = prompt('How long do you want your password?')
hasUpper =confirm('do you want uppercase characters?')
hasLower =confirm('do you want lowercase characters?')
hasNumbers =confirm('do you want numbers?')
hasSpecChars =confirm('do you want special characters?')
    console.log(passLength, hasLower, hasNumbers, hasUpper, hasSpecChars)
    if(isNaN(passLength)===true || passLength <8 || passLength >128 ) {
        alert ('your password needs to be between 8 and 128')
        Passprompt()
    }
}


// how password get generate//
const passGenerate = () => {

let lowerString = 'abcdefghijklmnopqrstuvwzyz'
let upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numString = '123456789'
let specString = '!@#$%^&*()'
let chosenString = ''
let password = ''

// check condition if password have lowercase, if yes then generate the message//
if(hasLower === true) {
    chosenString += lowerString
}
// check condition if password have uppercase, if yes then generate the message//
if(hasUpper === true) {
    chosenString += upperString
}
// check condition if password have number, if yes then generate the message//
if(hasNumbers === true) {
    chosenString += numString
}
// check condition if password have special character, if yes then generate the message//
if(hasSpecChars === true) {
    chosenString += specString
}

for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * chosenString.length)
    let randomChar = chosenString[randomIndex]
    console.log(randomChar)
}
 console.log(password)
    return password


let tentativePassword
const passVerify = () => {
    tentativePassword = passGenerate()
//run function if have lowercase character generate message with lowercase character included//   
    if(hasLower) {
        let verifiedLower = false
        for (let i = 0; i < passLength; i++) {
            let possibleLower = tentativePassword [i]
            if (possibleLower == 'abcdefghijklmnopqrstuvwxyz') {
            verifiedLower = true
            }
    }
}

//if no lowercase detect return 'no lowercase character'//  
    if(verifiedLower === false) {
        console.log('no lowecase characters!')
        passVerify()
    }
}




//run function if have special character generate message with special character included//
if (hasSpecChars) {
    let verifiedSpecChars = false
    for (let i = 0; i < array.length; i++) {
        let possibleSpecChars = tentativePassword [i]
        if (verifiedSpecChars == '!@#$%^&*()'){
            verifiedSpecChars = true
        }
    }
 //if no special character detect return 'no special character'//   
if (verifiedSpecChars === false) {
    console.log ('no special characters')
    passVerify()
    }
}

//run function if have numbers generate message with numbers included//
if (hasNumbers) {
    let verifiedNumbers = false
    for (let i = 0; i < array.length; i++) {
        let possibleNumber = tentativePassword [i]
        if (verifiedNumbers == '0123456789'){
            verifiedNumbers = true
        }
    }
//if no numbers detect return 'no numbers'//       
if (verifiedNumbers === false) {
    console.log ('no numbers!')
    passVerify()
    }
}    

//run function if have uppercase character generate message with uppercase character included//
if(hasUpper) {
        let verifiedUpper = false
        for (let i = 0; i < passLength; i++) {
            let possibleUpper = tentativePassword [i]
            if (verifiedUpper == 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            verifiedUpper = true
        }
    }
//if no uppercase detect return 'no uppercase character'//        
    if(verifiedUpper === false) {
        console.log('no uppercase characters!')
        passVerify()
    }   
}
//display final message on screen//
return tentativePassword

}

//when generate button click, random combination appear on sreen//
document.getElementById('generate').addEventListener('click', () => { 
    Passprompt()
    let newPassword = passVerify()
    console.log (newPassword)
    document.getElementById('password').innerHTML = newPassword
 
})