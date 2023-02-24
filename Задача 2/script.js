// Многоквартирный дом характеризуется следующими тремя показателями: 
// этажность (1-25), число подъездов (1-10), 
// количество квартир на лестничной площадке (1-20). 
// Скрипт запрашивает эти показатели и номер квартиры. 
// Выводится номер подъезда, в котором находится указанная квартира. 
// При вводе некорректных данных предусмотреть генерацию исключительных ситуаций.

const MAX_FLOORS = 25;
const MAX_ENTRANCES = 10;
const MAX_FLATS = 20;

function getFloors() {
let floors = prompt(`Введите этажность дома (от 1 до ${MAX_FLOORS}):`);
if (floors < 1 || floors > MAX_FLOORS || isNaN(floors)) {
alert('Некорректное значение этажности!');
return getFloors(); 
}
return floors;
}

function getEntrances() {
let entrances = prompt(`Введите число подъездов (от 1 до ${MAX_ENTRANCES}):`);
if (entrances < 1 || entrances > MAX_ENTRANCES || isNaN(entrances)) {
alert('Некорректное значение числа подъездов!');
return getEntrances();
}
return entrances;
}

function getFlats() {
let flats = prompt(`Введите количество квартир на лестничной площадке (от 1 до ${MAX_FLATS}):`);
if (flats < 1 || flats > MAX_FLATS || isNaN(flats)) {
alert('Некорректное значение количества квартир на лестничной площадке!');
return getFlats(); 
}
return flats;
}

function getFlatNumber(maxFlatNumber) {
let flatNumber = prompt(`Введите номер квартиры (от 1 до ${maxFlatNumber}):`);
if (flatNumber < 1 || flatNumber > maxFlatNumber || isNaN(flatNumber)) {
alert('Некорректный номер квартиры!');
return getFlatNumber(maxFlatNumber); 
}
return flatNumber;
}

function findEntrance() {
let floors = getFloors();
let entrances = getEntrances();
let flats = getFlats();
let maxFlatNumber = floors * entrances * flats;
let flatNumber = getFlatNumber(maxFlatNumber);

let entranceNumber = Math.ceil(flatNumber / (flats * floors));
alert(`Квартира находится в ${entranceNumber} подъезде`);
}

findEntrance();