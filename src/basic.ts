// const a : number = 10;
// // a="Amit";
// console.log(a);

// function add ( a:number, b:number){
//     return "Amit";
// }
// function add2 ( a:number, b:number):number{
//     return a+b;
// }
// function runScript(fn: () => void) {
//   setTimeout(fn, 2000);
// }

// runScript(function () {
//   console.log("Amit");
// });

// "noImplicitAny": false,
// function myF(a, b) {
//   return a;
// }

// function add3(fn: (a: number, b: string) => number): number {
//   setTimeout(fn, 1000);
//   return 3;
// }

// add3(myF);

// interface User {
//     firstName : string,
//     lastName : string,
//     age : number
//     email?:string       //email may or may be passed
// }

// function isLegal (user:User){
//     if(user.age>18){
//         console.log("18+")
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function Greet (user:User){
//     console.log("Welcome "+user.firstName)
// }

// isLegal({
//     firstName:"Amit",
//     lastName:"Kumar",
//     age:22,

// })
// Greet({
//     firstName:"Amit",
//     lastName:"Kumar",
//     age:19
// })

// const product = (a: number, b: number): Number => {
//   return a * b;
// };
// console.log(product(12, 23));

const fproduct = (
  fn: (a: number, b: number) => number,
  callback: (result: number) => void
): void => {
  setTimeout(() => {
    const r = fn(3, 4); // Example arguments for the function
    console.log(r);
    const result = r - 25;
    callback(result);
  }, 2000);
};

// Example usage
const multiply = (a: number, b: number): number => a * b;

const result = fproduct(multiply, (result) => {
  console.log(result);
});
