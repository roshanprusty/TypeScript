type User = {
    readonly _id: number, //this one only can be read no one cannot change
    name: string,
    email: string,
    isActive: boolean
    creditCard?: number
}

function createUser(user: User): User{
    return {_id: user._id, name:user.name, email: user.email, isActive: user.isActive};
}

console.log(createUser({_id:21, name:"rnp", email: "r@gmail.com", isActive: true}));

let myUser: User ={
    _id: 21,
    name: 'RNP',
    email:'<EMAIL>',
    isActive : false
}
myUser.name="sai"
// myUser._id=55;

type cardNumber ={
    cardNumber: number
}
type cardDate ={
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
export{}