// Функция ggg принимает 2 параметра: число и коллбек функцию, 
// которая возводит число в квадрат. 
// Возведите число в 4-тую степень с помощью ggg.

let num = 2;
let cub = 4

function ggg(num, callback) {
  return callback(num, cub);
}

function callback(num, cub) {
	return num ** cub
}

console.log(ggg(num, callback));


