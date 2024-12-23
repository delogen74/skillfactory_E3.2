const power = (x, n) => {
    if (n < 0) {
        return "Степень должна быть натуральным числом (n ≥ 0).";
    }

    return x ** n;
};

// Пример использования:
console.log(power(2, 3)); // Результат: 8 (2 * 2 * 2)
console.log(power(5, 0)); // Результат: 1 (любое число в степени 0 равно 1)
console.log(power(7, 2)); // Результат: 49 (7 * 7)
console.log(power(10, -1)); // Результат: "Степень должна быть натуральным числом (n ≥ 0)."
