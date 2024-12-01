function startSecretNumberGame(low, high) {
    const secretNumber = getRandomWholeNumber(low, high);
    console.log(`Компьютер 1 загадал число: ${secretNumber}`);

    let attempts = 0;
    let guess;

    while (true) {
        attempts++;
        guess = Math.floor((low + high) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}. диапазон: [${low}, ${high}].`)

        if (guess === secretNumber) {
            console.log(`Компьютер 1: Угадал! Количество попыток: ${attempts}.`);
            break;
        } else if (guess < secretNumber) {
            console.log("Компьютер 1: Больше.");
            low = guess + 1;
        } else {
            console.log("Компьютер 1: Меньше.");
            high = guess - 1;
        }
    }

}

function getRandomWholeNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

startSecretNumberGame(1, 100);