// 1) Callback 
type GreetingCallback = (message: string) => void;

const greet = (callback: GreetingCallback): void => {
    callback("Hello from callback!");
};
greet((message) => { //call the function
    console.log(message)
});



//2. Delayed Greeting 
type DelayedCallback = (message: string) => void;

const sayHelloLater = (callback: DelayedCallback): void => {
    setTimeout(() => callback("Hi, I am late!"), 2000);
};
sayHelloLater((message) => {
    console.log(message)
});


// 3. Math Callback-
type SumCallback = (sum: number) => void;

const addNumbers = (num1: number, num2: number, callback: SumCallback): void => {
    callback(num1 + num2);
};

addNumbers(12, 34, (sum) => {
    console.log(sum)
});


// 4. Uppercase Callback-
type UppercaseCallback = (value: string) => void;

const makeUppercase = (input: string, callback: UppercaseCallback): void => {
    callback(input.toUpperCase());
};

makeUppercase("sonal", (value) => {
    console.log(value)
});


//5. Pizza Order-
type PizzaStatusCallback = (status: string) => void;

const orderPizza = (callback: PizzaStatusCallback): void => {
    setTimeout(() =>
        callback("Your pizza is ready!"), 3000);
};
orderPizza((status) => {
    console.log(status)
});


//6.Multiple messages-
type MessageCallback = (message: string) => void;

const sendMessages = (callback: MessageCallback): void => {
    callback("Hello World!");
    callback("Good Morning!");
    callback("Have a good day!");
};
sendMessages((message) => {
    console.log(message)
});


//7. Download Stimulation-
type DownloadedCallback = (text: string) => void;

const download = (url: string, callback: DownloadedCallback): void => {

    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
};
download("https://sonal.com", (text) => {
    console.log(text)
});

//8.Success and Error Callback-
type SuccessCallback = () => void;
type ErrorCallback = () => void;

const numbers = (success: SuccessCallback, error: ErrorCallback): void => {
    Math.random() > 2 ? success() : error()
};
numbers(() => {
    console.log("Success callback executed");
},
    () => {
        console.log("Error callback executed");
    });


//9. Math with Different Operations-
type Operator = "add" | "subtract" | "multiply" | "divide";
type MathResultCallback = (result: number) => void;

const calculator = (a: number, b: number, operator: Operator, callback: MathResultCallback): void => {
    let result = 0;

    if (operator === "add") result = a + b;
    if (operator === "subtract") result = a - b;
    if (operator === "multiply") result = a * b;
    if (operator === "divide") result = a / b;
}

