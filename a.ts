// const a : number = 10;
// // a="Amit";
// console.log(a);




function runScript(fn:()=>void ){
    setTimeout(fn, 2000);
}

runScript(function (){
    console.log("Amit")
})