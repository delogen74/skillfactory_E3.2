function createAdder(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Пример использования:
const addFive = createAdder(5); // Создаём функцию, которая добавляет 5
console.log(addFive(3)); // Результат: 8
console.log(addFive(10)); // Результат: 15

const addTen = createAdder(10); // Создаём функцию, которая добавляет 10
console.log(addTen(5)); // Результат: 15
console.log(addTen(20)); // Результат: 30
