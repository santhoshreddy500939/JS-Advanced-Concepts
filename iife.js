console.log("Welcome to IIFE");

//Immediately Invoked Function Expression

//Arrow Function
(()=>{
    console.log("IIFE Arrow Function");
})()




console.log("Function Named");
//Function Named
(function printHello()
{
    console.log("Hello");
})()


//Main Benefits of IIFE.
//Reason1:Does not pollute global Object namespace 

let age=32;
const name="santhosh";

(function doesntEffectGlobalVaraibles() {
  let age = 23;
  const name = "santhosh Reddy";

  console.log(age);
  console.log(name);
})()
console.log(age);
console.log(name);

// Reason2 : Private Variables and Methods using CLosures for IIFE

const ananymousFunction=(function closureIIFE()
{

    let counter=0;
    const credits=(counter)=>{console.log(`I have ${counter}`)}
    return ()=>{counter++; credits(counter)}
})()

ananymousFunction();
ananymousFunction();
ananymousFunction();
//cannot Directly access the credits function...



