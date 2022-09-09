import { Greeter } from "./greeter";

export class javaScriptGreeter extends Greeter {
    greet(name:string): string {
        return `console.log('${this.greeting}, ${name}!')`;
    }
}