function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return b === num || num === 0;
}

const num = parseInt(prompt("Informe um número:"));
if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
