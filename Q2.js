function countLetterA(str) {
    const count = (str.match(/a/gi) || []).length;
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

const string = prompt("Digite uma string:");
countLetterA(string);
