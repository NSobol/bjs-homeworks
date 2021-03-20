"use strict"
//Задача 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(item => item.name);
}

//getNames();

function getCountReliableWeapons(param) {
    return weapons.filter(item => item.durability > param).length;
}

//getCountReliableWeapons(200);

function hasReliableWeapons(param) {
    return weapons.map(item => item.durability).some(elem => elem > param);
}

//hasReliableWeapons(400);

function getReliableWeaponsNames(param) {
    return (weapons.filter(item => item.durability > param)).map(item => item.name);
}

//getReliableWeaponsNames(280);

function getTotalDamage() {
    return weapons.reduce((prev, cur) => prev + cur.attack, 0);
}

//Задача со звездочкой
function getTotalAcount(arr, param) {
    let result = [];
    arr.reduce((sum, item) => {
        if (sum < param) {
            result.push(item);
            return sum + item;
        }
    }, 0);
    return result.length;
}

//Задача 2.

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i]);
}

function memorize(fn, limit) {

}
