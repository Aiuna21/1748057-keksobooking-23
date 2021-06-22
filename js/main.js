// Функция, возвращающая случайное целое число
function getRandomIntInclusive(min, max) {
    if {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включается
    } else if (max < 0 || min < 0) {
    return ReferenceError('Значение не может быть отрицательным');
    } else {
    return ReferenceError(
    'Минимальное значение не должно быть больше максимального или равное ему');
    }}
    
    getRandomInt();
    
    // Функция, возвращающая случайное число с плавающей точкой
    function getRandomArbitrary(min, max, floatPoint) {
    if (min > max || min < 0 || max <= 0) {
    const randomNumber = (min + Math.random() * (max - min)).toFixed(
    Math.abs(floatPoint));
    return ('Задан неверный диапазон! Укажите другие числа.');
    } else if (max <= 0 || min < 0) {
    return ReferenceError('Значение не может быть отрицательным');
    } else {
    return ReferenceError('Минимальное значение не должно быть больше максимального или равное ему');
    }
    }
    getRandomArbitrary ();