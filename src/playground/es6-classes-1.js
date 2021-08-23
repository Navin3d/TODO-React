class Person {
    constructor(name = "Anonymous", age = 18) {
        this.name = name
        this.age = age
    }
    getGreetings() {
        return `hi welcome ${this.name}!`;
    }
    getDetails() {
        return `hi my name is ${this.name} and age is ${this.age}...`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeTown) {
        super(name, age);
        this.homeTown = homeTown
    }
    getGreetings() {
        let greetings = super.getGreetings();

        this.homeTown ? greetings += ` from ${this.homeTown}.` : greetings += " from Nowere...";

        return greetings;
    }
}

const me = new Traveler("Navin", 18, "TCR");

const other = new Traveler();

console.log(me.getGreetings());

console.log(other.getGreetings());
