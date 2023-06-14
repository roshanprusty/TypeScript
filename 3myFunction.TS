function addTwo(num: number): number{
    // num.toUpperCase() --> now we can't do before we was able to do
    return num + 2;
}
let signUpUser=(name: string, age:number, isPaid: boolean)=>{
    return (`Name:${name}, Age:${age}, Is Paid? ${isPaid}`);
}
console.log(addTwo(5));
console.log(signUpUser("roshan",21,true));
export{};