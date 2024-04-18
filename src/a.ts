// const a : number = 10;
// // a="Amit";
// console.log(a);

// function add ( a:number, b:number){
//     return "Amit";
// }
function add2 ( a:number, b:number):number{
    return a+b;
}



// function runScript(fn:()=>void ){
//     setTimeout(fn, 2000);
// }

// runScript(function (){
//     console.log("Amit")
// })

function myF (a:int , b:string){
    return a;

}

function add3 ( fn:(a:int,b:string)=>int):number{
    setTimeout(fn,1000)
    return 3;
}

add3(myF);

