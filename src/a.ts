// const a : number = 10;
// // a="Amit";
// console.log(a);

// function add ( a:number, b:number){
//     return "Amit";
// }
// function add2 ( a:number, b:number):number{
//     return a+b;
// }
// function runScript(fn:()=>void ){
//     setTimeout(fn, 2000);
// }

// runScript(function (){
//     console.log("Amit")
// })


// // "noImplicitAny": false,      
// function myF (a,b){
//     return a;

// }

// function add3 ( fn:(a:number,b:string)=>number):number{
//     setTimeout(fn,1000)
//     return 3;
// }

// add3(myF);


interface User {
    firstName : string,
    lastName : string,
    age : number
    email?:string       //email may or may be passed
}


function isLegal (user:User){
    if(user.age>18){
        console.log("18+")
        return true;
    }
    else{
        return false;
    }
}
function Greet (user:User){
    console.log("Welcome "+user.firstName)
}


isLegal({
    firstName:"Amit",
    lastName:"Kumar",
    age:22,
    
})
Greet({
    firstName:"Amit",
    lastName:"Kumar",
    age:19
})