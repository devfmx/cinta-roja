//Ejecución simpre
// console.log(1);
// console.log(2);
// console.log(3);

//Ejecución con callback
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// },3000);
// console.log(3)

//Cuello de botella
console.log(1);
setTimeout(()=>{
    console.log(2);
},3000);
for(let i = 0; i<=9999999999;i++);
console.log(4);