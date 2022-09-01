import { Greeter } from "./greeter";

export class loudGreeter extends Greeter {
    extra: string = "!!";

    addVolume(): void {
        this.extra = this.extra + "!";
    }

    greet(): string {
        return `${this.greeting}, ${this.name}${this.extra}`;
    }
}