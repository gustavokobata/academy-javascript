var words = 'all to you all good you';

function countWords(words) {
    equalWords = words.toLowerCase();
    const separatedWords = equalWords.split(" ");
    const map = Object.create(null);
    for (const str of separatedWords){
        if (map[str]) {
            map[str] += 1;
        } else {
            map[str] = 1;
        }
    }
    return map
}

console.log(countWords(words));