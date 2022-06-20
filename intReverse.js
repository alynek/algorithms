// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(num){

    let numberConvertedToString = ''

    let isNegative = Math.sign(num)

    for(n of num.toString()){
        numberConvertedToString = n + numberConvertedToString
        
    }
    
    if(isNegative === -1){
        numberConvertedToString = '-' + numberConvertedToString
    }

    return parseInt(numberConvertedToString)
}