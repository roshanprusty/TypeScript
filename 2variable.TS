let greetings: string = "Hello world";

// greetings.toLowercase(); //here i have done spell mistake of calling the function --- Here TS suggest actual spell
console.log(greetings);

//number
// let userID: number=3213.8;
let userID= 123.6; //you can avoid writing :Data type ---bcz typescript is smart enough that automatically it can find.
// userID. //here after writing the userID. the mathematical related function displays

// let temp; //when you hover this it will show any because it totally depend on the function return which is not good way. If we want string then any devloper can come and can do mesh on this. Here in this type of scenario we should use this  -->
let temp: string;
function TempValue(){
    return "HELLO";
}
temp = TempValue(); 

console.log(temp);
export{}