import {Greeter} from "./greeter";
import {javaScriptGreeter} from "./javaScriptGreeter";
import {loudGreeter} from  "./loudGreeter";
import {htmlGreeter} from "./htmlGreeter";

let greeter = new Greeter("Hello", "John");
let java = new javaScriptGreeter("Welcome", "Anne");
let loud = new loudGreeter("Hi", "Jen");
let html = new htmlGreeter("Hey", "Dean");

console.log(greeter.greet());
console.log(java.greet());
console.log(loud.greet());
console.log(html.greet());