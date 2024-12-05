function analyzeArrayElements(arr) {
    let evenCount = 0; // Количество чётных чисел
    let oddCount = 0;  // Количество нечётных чисел
    let zeroCount = 0; // Количество нулей
    let otherCount = 0; // Количество элементов, не являющихся числами

    arr.forEach(element => {
        if (typeof element === "number" && !isNaN(element)) {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        } else {
            otherCount++;
        }
    });

    console.log(`Чётных чисел: ${evenCount}`);
    console.log(`Нечётных чисел: ${oddCount}`);
    console.log(`Нулей: ${zeroCount}`);
    console.log(`Не числовых элементов: ${otherCount}`);
}

const exampleArray = [0, 1, 2, 3, 4, 5, "hello", null, undefined, 0];
analyzeArrayElements(exampleArray);
