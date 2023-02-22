// Дана функция ggg. Она требует первым параметром число, 
// вторым функцию, которая возводит в квадрат, а третьим параметром функцию, 
// которая возводит в куб. 
// Эти функции есть как Function Declaration - kvadrat, kub. 
// Пусть функция ggg вернет сумму квадрата и куба числа

// выводит в квадтрат
function kvadrat(n) { 
	return n * n;
}
// выводит в куб
function kub(n) {
	return n * n * n;
}

function ggg(num, func1, func2) {
	return (func1(num) + func2(num));
}


console.log(ggg(7,kvadrat, kub));