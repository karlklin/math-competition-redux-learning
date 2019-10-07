const operationsDict = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
}

export function correctAnswer(item) {
    return operationsDict[item.operator](item.a, item.b);
}

export function isCorrect(item) {
    return correctAnswer(item) === item.answer;
}