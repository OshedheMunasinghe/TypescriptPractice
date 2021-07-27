//explicit types

// : inte =  så som andra programmerings språk
let character: string
let age: number
let isLoggedIn: boolean

age = 30

let ninjas: string[] = []
/*Du kan få error om du pushar upp ninjas array för att du har inte initilize, så som JAVA,
* Du måste säga att ninjas är i tom array och sedan kan du anropa push. */

/*let ninjas: string[] = []
ninjas.push('hello')
console.log(ninjas)*/

//union types , om man vill lägga in mixad datatype
let mixed : (string|number)[] = []

//du kan ocskså skapa variabel i union
let uid : string | number


// objects

let ninjaOne : object
ninjaOne = {
    names: 'osh',
    age: 23
}

//samma regler, du får inte lägga in en ny variabel om du har skapat tidigare object
let ninjaTwo : {
    names: string,
    age: number,
    beltColour: string
}

ninjaTwo = {
    names : 'osh',
    age : 20,
    beltColour : 'red'
}
