// const str1 = "ana"; 
// const str2 = str1.split("").reverse().join("");

// const strMaiuscula1 = str1.toUpperCase().replace(/ /g, "");
// const strMaiuscula2 = str2.toUpperCase().replace(/ /g, "");

// console.log(strMaiuscula1);
// console.log(strMaiuscula2);

// console.log(strMaiuscula1 == strMaiuscula2);




// const str1 = "A grama é amarga";
// const strMaiuscula1 = str1.toUpperCase().replace(/ /g, "")

// const str2 = strMaiuscula1.split("").reverse().join("");

// if (strMaiuscula1 == str2) {
//     console.log("Essa palavra/frase é um palíndromo!")
// } else {
//     console.log("Essa palavra/frase NÃO é um palíndromo!")
// }


function palindrome(palavraOuFrase){
    str1 = palavraOuFrase.toUpperCase().replace(/ /g, "")
    str2 = str1.split("").reverse().join("")
    if (str1 == str2) {
        return "Essa palavra/frase é um palíndromo!"
    } else {
        return "Essa palavra/frase NÃO é um palíndromo!"
    }
}

console.log(palindrome('A grama é amarga'));