function printNumbers(start, end) {
    let current = start;

    const intervalId = setInterval(function () {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        }
        current++; 
    }, 1000); 
}

// Пример вызова функции:
printNumbers(5, 15); // Выведет числа от 5 до 15 каждую секунду
