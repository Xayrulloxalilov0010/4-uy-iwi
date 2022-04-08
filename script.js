function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
console.log(random(20, 30));
console.log(random(10, 20));
console.log(random(1, 5));
let misol = +prompt('Nechta misol ishlagingiz kevoti')
for (let i = 0; i < misol; i++) {
    let num1 = random(20, 30)
    let num2 = random(10, 20)
    let sym = random(1, 5)
    let question = ''
    let result = 0
    if (sym == 1) {
        question = +prompt(`${num1} + ${num2} = ?`)
        result = num1 + num2
    }
    else if (sym == 2) {
        question = +prompt(`${num1} - ${num2} = ?`)
        result = num1 - num2
    }
    else if (sym == 3) {
        question = +prompt(`${num1} / ${num2} = ?`)
        result = num1 / num2
    }
    else if (sym == 4) {
        question = +prompt(`${num1} * ${num2} = ?`)
        result = num1 * num2
    }
    else if (sym == 5) {
        question = +prompt(`${num1} % ${num2} = ?`)
        result = num1 % num2
    }
    if (question == result) {
        console.log(`Sizning javob to'g'ri ${result}`);
    } else {
        console.log(`Sizning javob noto'g'ri: ${question}. To'g'ri javob: ${result}`);
    }
}