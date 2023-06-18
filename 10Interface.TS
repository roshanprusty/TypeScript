interface User{
    readonly email: string,
    userId: number,
    googleId?:string,
    startTrail():string,
    getCoupon(couponname: string): number
}
//reopeninig interface ~ In the interface we can do reopening where as in type we can't that's why realworld scenarion coder mostly prefer interface 
interface User{
    githubToken?: string
}
interface Admin extends User{
    role:"admin" | "ta" | "learner"
}

const rnp:  User ={email:"r18@yahoo.com", userId: 22, 
startTrail:()=>{
    return "RNP"
},
getCoupon: (name: "roshan18") => {return 10},
githubToken: "r!1418"}

const sai:  Admin ={email:"r18@yahoo.com", userId: 22, 
startTrail:()=>{
    return "RNP"
},
getCoupon: (name: "roshan18") => {return 10},
githubToken: "githubTC",
role:"learner"}