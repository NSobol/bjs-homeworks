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
    let count = 0;
    arr.reduce((sum, item) => {
        if (sum < param) {
            count += 1;
            return sum + item;
        }
    }, 0);
    return count;
}

//Задача 2.

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i]);
}

function memorize(fn, limit) {
    const memory = [];

    return function newF(...args) {
        const value = memory.find(item => compareArrays(item.args, args));

        if (value) {
            return value.result;
        }

        const result = fn(...args);

        if (memory.length > limit) {
            memory.shift();
        }
        memory.push({
            args,
            result
        });
        return result;
    }
}
const mSum = memorize(sum, 2);
