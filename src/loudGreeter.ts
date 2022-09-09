import { Greeter } from "./greeter";

export class loudGreeter extends Greeter {
    extra: string = "!!";

    addVolume(): void {
        this.extra = this.extra + "!";
    }

    greet(name:string): string {
        return `${this.greeting}, ${name}${this.extra}`;
    }
}