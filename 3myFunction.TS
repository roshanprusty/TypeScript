function addTwo(num: number): number{
    // num.toUpperCase() --> now we can't do before we was able to do
    return num + 2;
}
let signUpUser=(name: string, age:number, isPaid: boolean)=>{
    return (`Name:${name}, Age:${age}, Is Paid? ${isPaid}`);
}
console.log(addTwo(5));
console.log(signUpUser("roshan",21,true));

const heros =["thor", "spiderman", "ironman"]
heros.map((hero):string =>{
    return `hero is ${hero}`;
})

function consoleError(errmsg:string):void{
    // void: return nothing
    console.log(errmsg);
}
function handleError(errmsg: string): never{
    //never: return nothing which can be similar to void it used for sending the errror.
    throw new Error(errmsg);
}
//if we have to return more than one type
export{};