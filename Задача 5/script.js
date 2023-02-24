// Дана функция ggg. Она требует первым параметром число, 
// вторым функцию, которая возводит в квадрат, а третьим параметром функцию, 
// которая возводит в куб. 
// Эти функции есть как Function Declaration - kvadrat, kub. 
// Пусть функция ggg вернет сумму квадрата и куба числа

// выводит в квадтрат
let ggg = function(a, b, c){
	return b(a) + c(a);};

	let kvadrat = function(n){
	return Math.pow(n, 2)};

	let cub = function(n){
	return Math.pow(n, 3)};


	console.log(ggg(4, kvadrat, cub));