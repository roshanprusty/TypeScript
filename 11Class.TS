// class User{
//     email: string
//     private name: string
//     readonly city: "Rourkela"
//     constructor(email: string, name:string){
//         this.email = email;
//         this.name=name;
//     }
// }
class User{
    readonly city: "Rourkela"
    constructor(
        public email: string,
        private name:string
        ){
    }
}

const rnp = new User("roshan@yahoo.com", "roshan"); 
// rnp.city
export{}