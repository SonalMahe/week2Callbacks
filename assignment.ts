// 1) Callback 
type GreetingCallback = (message: string) => void;

const greet = (callback: GreetingCallback): void => {
    callback("Hello from callback!");
};
greet((message) => {
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