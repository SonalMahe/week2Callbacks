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
sayHelloLater((message)=>{
    console.log(message)
});


// 3. Math Callback-
type SumCallback = (sum: number) => void;

const addNumbers = (num1: number,num2: number,callback: SumCallback): void => {
  callback(num1 + num2);
};

addNumbers(12, 34 ,(sum)=>{
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
 orderPizza((status)=>{
    console.log(status)
 });


 //6.Multiple messages-
 type MessageCallback = (message: string) => void;

const sendMessages = (callback: MessageCallback): void => {
  callback("Hello World!");
  callback("Good Morning!");
  callback("Have a good day!");
};
sendMessages((message)=>{
    console.log(message)
});