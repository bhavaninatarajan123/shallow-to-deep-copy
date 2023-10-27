
var obj={
    name:"anna",
    age:24,
    fav:{
        color:"purple",
        place:"chennai"
    }
}
let sum=(obj)=>{
    let obj2=JSON.parse(JSON.stringify(obj));
    obj2.name="john"
    obj2.fav.color="blue"
    console.log(obj,obj2)
}
sum(obj);


//program 2

// var obj={
//     name:"anna",
//     age:24,
//     fav:{
//         color:"purple",
//         place:"chennai"
//     }
// }
// let sum=(obj)=>{
// let obj2= {...obj};
// obj2.name="anni"
// console.log(obj,obj2)

// }
// sum(obj);




