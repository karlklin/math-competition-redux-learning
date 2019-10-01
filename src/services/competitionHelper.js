export function correctAnswer(item) {
    return eval(`${item.a}${item.operator}${item.b}`);
}

export function isCorrect(item) {
    return correctAnswer(item) === item.answer;
}