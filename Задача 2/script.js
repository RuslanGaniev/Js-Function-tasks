// Многоквартирный дом характеризуется следующими тремя показателями: 
// этажность (1-25), число подъездов (1-10), 
// количество квартир на лестничной площадке (1-20). 
// Скрипт запрашивает эти показатели и номер квартиры. 
// Выводится номер подъезда, в котором находится указанная квартира. 
// При вводе некорректных данных предусмотреть генерацию исключительных ситуаций.

let floors = Number(prompt("Введите количество этажей (1-25):"));
let entrances = Number(prompt("Введите количество подъездов (1-10):"));
let flatsPerFloor = Number(prompt("Введите количество квартир на лестничной площадке (1-20):"));

// Проверка на корректность введенных данных
if (floors < 1 || floors > 25 || entrances < 1 || entrances > 10 || flatsPerFloor < 1 || flatsPerFloor > 20) {
  throw new Error("Некорректные данные");
}

let flatNumber = Number(prompt("Введите номер квартиры (1-" + floors * entrances * flatsPerFloor + "):"));

// Проверка на корректность введенного номера квартиры
if (flatNumber < 1 || flatNumber > floors * entrances * flatsPerFloor) {
  throw new Error("Некорректный номер квартиры");
}

// Рассчитываем номер подъезда, в котором находится указанная квартира
let flatsPerEntrance = flatsPerFloor * floors;
let entranceNumber = Math.ceil(flatNumber / flatsPerEntrance);


alert("Квартира " + flatNumber + " находится в подъезде " + entranceNumber);


