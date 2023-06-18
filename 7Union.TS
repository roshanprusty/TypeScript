let score: number =33;
score: "roshan";
score: true;

type user={
    name: string,
    id:number,
}
type admin={
    userName:string,
    id:number
}
let roshan: user | admin={name:"roshan", id:123};
roshan={userName:"roshan", id:123};

function getDbId(id: number | string){
    if(typeof id === "string") id = (id as string).toLowerCase();
    console.log(`DB id is: ${id}`);
}
getDbId(2);
getDbId("RN");

const data: number[] =[1,2,3];
const data2: string[] =["4","5"];
const data3: number[] | string[] =[1,2,3, 4];
const data4: (number | string)[] =[1,2,3,"5"];
data4.forEach((item)=>{
    console.log(typeof item);
})

let seatAllotment: "asile" | "middle" | "Window";
seatAllotment= "asile"
// seatAllotment= "crew" 
export{};