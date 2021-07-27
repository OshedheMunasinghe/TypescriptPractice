"use strict";
// Dynamic Types
//Man tror att age är satta för endast Integer, men det stämmer inte, du kan lägga vad som helst dataType
var age = 25;
age = true;
age = 'hello';
age = { names: 'oshi' };
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(true);
console.log(mixed);
//objects
var ninja; // testade lägga i union :)
ninja = {
    names: true,
    age: '23'
};
console.log(ninja);
//I just fixed tsconfig
//hello world
