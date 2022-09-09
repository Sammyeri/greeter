import {Greeter} from "./greeter";
import {javaScriptGreeter} from "./javaScriptGreeter";
import {loudGreeter} from  "./loudGreeter";
import {htmlGreeter} from "./htmlGreeter";

let greeter = new Greeter("Hello");
let java = new javaScriptGreeter("Welcome");
let loud = new loudGreeter("Hi");
let html = new htmlGreeter("Hey");

console.log(greeter.greet("John"));
console.log(java.greet("Anne"));
console.log(loud.greet("Jen"));
console.log(html.greet("Dean"));