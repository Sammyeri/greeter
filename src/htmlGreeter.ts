import { Greeter } from "./greeter";

export class htmlGreeter extends Greeter{
    tagName: string;

    constructor(greeting: string, name:string, tagName: string = "h1"){
        super(greeting, name);
        this.tagName = tagName;
    }

    greet(): string {
        return `<${this.tagName}>${this.greeting}, ${this.name}!</${this.tagName}>`;
    };
}