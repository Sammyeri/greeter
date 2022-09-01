import { Greeter }  from "../src/greeter";
import { javaScriptGreeter } from "../src/javaScriptGreeter";
import {loudGreeter} from "../src/loudGreeter";
import {htmlGreeter} from "../src/htmlGreeter";

describe("greeterclass tests",() => {
    test("hello, John should be hello, John!", () =>{
        //setup
        const greeting = "Hello";
        const name = "John";
        const preGreeter =  new Greeter(greeting, name);

        //execute
        let result = preGreeter.greet();

        //evaluate
        expect(result).toBe("Hello, John!");
    });

    test("Welcome, Jacob should be Welcome, Jacob!", () => {
         //setup
         const greeting = "Welcome";
         const name = "Jacob";
         const preGreeter =  new Greeter(greeting, name);
 
         //execute
         let result = preGreeter.greet();
 
         //evaluate
         expect(result).toBe("Welcome, Jacob!");
    });
});

describe("javaScriptGreeter tests", () => {
    test("hello and bob should be console.log('Hello, Bob'!)", () => {
        //setup
        const greeting = "Hello";
        const name = "Bob";
        const preGreeter = new javaScriptGreeter(greeting, name);

        //execute
        const result = preGreeter.greet();

        //evaluate
        expect(result).toBe("console.log('Hello, Bob!')");
    });

    test("Welcome and Andy should be console.log('Welcome, Andy!')", () =>{
        //setup
        const greeting = "Welcome";
        const name = "Andy";
        const preGreeter = new javaScriptGreeter(greeting, name);

        //execute
        const result = preGreeter.greet();

        //evaluate
        expect(result).toBe("console.log('Welcome, Andy!')");
    });
});

describe("loudGreeter tests", () => {
    test("hello, dean with no add volume should be Hello, Dean!!", () => {
        //setup
        const greeting = "Hello";
        const name = "Dean";
        const preGreeter = new loudGreeter(greeting,name);

        //execute
        const result = preGreeter.greet();

        //evaluate
        expect(result).toBe("Hello, Dean!!");
    });

    test("Welcome, Jessica with 3 addVolume should be Welcom, Jessica!!!!!",() => {
        //setup
        const greeting = "Welcome";
        const name = "Jessica";
        const preGreeter = new loudGreeter(greeting, name);

        //execute
        preGreeter.addVolume();
        preGreeter.addVolume();
        preGreeter.addVolume();
        const result = preGreeter.greet();

        //evaluate
        expect(result).toBe("Welcome, Jessica!!!!!");
    });

    test("Hello, Marnie with 1 addVolume should be Hello, Marnie!!!", () => {
        //setup
        const greeting = "Hello";
        const name = "Marnie";
        const preGreeter = new loudGreeter(greeting, name);

        //execute
        preGreeter.addVolume();
        const result = preGreeter.greet();

        //evaluate
        expect(result).toBe("Hello, Marnie!!!");
    });
});

describe("htmlGreeter tests", () => {
    test("hello, Bella, no tag should be <h1>Hello, Bella!</h1>", () => {
        //setup
        const greeting = "Hello";
        const name = "Bella";
        const preGreeter = new htmlGreeter(greeting, name);

        //execute
        const result = preGreeter.greet();

        //evaluate
        expect(result).toBe("<h1>Hello, Bella!</h1>");
    });

    test("welcome, Ben, with tag p should be <p>Welcome, Ben!</p>", () => {
        //setup
        const greeting = "Welcome";
        const name = "Ben";
        const tagName = "p";
        const preGreeter = new htmlGreeter(greeting, name, tagName);

        //execute
        const result = preGreeter.greet();

        //evaulate
        expect(result).toBe("<p>Welcome, Ben!</p>");
    });

    test("Hi, Jen, with tag a should be <a>Hi, Jen!</a>", () => {
        //setup
        const greeting = "Hi";
        const name = "Jen";
        const tagName = "a";
        const preGreeter = new htmlGreeter(greeting, name, tagName);

        //execute
        const result = preGreeter.greet();

        //evalute
        expect(result).toBe("<a>Hi, Jen!</a>");
    });
});