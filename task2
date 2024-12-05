function isPrimeNumber(num) {
    if (num > 1000) {
        console.log("Данные неверны. Введите число меньше или равное 1000.");
        return;
    }

    if (num <= 1) {
        console.log("Число не является простым.");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Число не является простым.");
            return;
        }
    }

    console.log("Число является простым.");
}

// Пример вызовов функции:
isPrimeNumber(2);    // Число является простым.
isPrimeNumber(4);    // Число не является простым.
isPrimeNumber(13);   // Число является простым.
isPrimeNumber(1001); // Данные неверны. Введите число меньше или равное 1000.
isPrimeNumber(0);    // Число не является простым.
isPrimeNumber(1);    // Число не является простым.
