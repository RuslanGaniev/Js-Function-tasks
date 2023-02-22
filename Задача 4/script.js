// Функция ggg принимает 2 параметра: число и коллбек функцию, 
// которая возводит число в квадрат. 
// Возведите число в 4-тую степень с помощью ggg.

let num = 2;

function ggg(num, callback) {
  return callback(callback(num));
}

let result = ggg(num, function(num) {
  return num * num;
});

console.log(result); 


