// Dynamic Types

//Man tror att age är satta för endast Integer, men det stämmer inte, du kan lägga vad som helst dataType
let age: any = 25
age = true
age = 'hello'
age = {names: 'oshi'}

let mixed: any[] = []

mixed.push(5)
mixed.push('mario')
mixed.push(true)
console.log(mixed)

//objects
let ninja : {names: (string|boolean), age: any } // testade lägga i union :)
ninja = {
    names: true,
    age: '23'
}

console.log(ninja)

//I just fixed tsconfig