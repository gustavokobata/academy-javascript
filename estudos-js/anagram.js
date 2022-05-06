let words = ['CaRs', 'poTatos', 'creams', 'foR', 'four', 'racs', 'scream', 'scar'];

function combineAnagrams(words) {
    changedWords = words.map(words => words = words.toUpperCase())
    alphaWords = changedWords.map(words => words = words.split("").sort().join(""))
    let compareWords = alphaWords
    return alphaWords
    for (i = 0; i = alphaWords.length; i++){
        
    }
}

console.log(combineAnagrams(words));