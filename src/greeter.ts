
export class Greeter {
    greeting: string;
    name: string; 

    constructor(greeting : string, name:string){
        this.greeting = greeting;
        this.name = name;
    }
    
    greet() :string {
        return `${this.greeting}, ${this.name}!`
    }
    

}

