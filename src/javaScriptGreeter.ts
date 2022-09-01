import { Greeter } from "./greeter";

export class javaScriptGreeter extends Greeter {
    greet(): string {
        return `console.log('${this.greeting}, ${this.name}!')`;
    }
}