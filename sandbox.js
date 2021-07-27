//explicit types
// : inte =  så som andra programmerings språk
var character;
var age;
var isLoggedIn;
age = 30;
var ninjas = [];
/*Du kan få error om du pushar upp ninjas array för att du har inte initilize, så som JAVA,
* Du måste säga att ninjas är i tom array och sedan kan du anropa push. */
/*let ninjas: string[] = []
ninjas.push('hello')
console.log(ninjas)*/
//union types , om man vill lägga in mixad datatype
var mixed = [];
//du kan ocskså skapa variabel i union
var uid;
// objects
var ninjaOne;
ninjaOne = {
    names: 'osh',
    age: 23
};
//samma regler, du får inte lägga in en ny variabel om du har skapat tidigare object
var ninjaTwo;
ninjaTwo = {
    names: 'osh',
    age: 20,
    beltColour: 'red'
};
