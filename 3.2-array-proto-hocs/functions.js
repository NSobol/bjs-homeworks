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
