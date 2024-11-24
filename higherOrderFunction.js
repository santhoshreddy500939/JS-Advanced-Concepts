console.log("Welcome to Higher Order Functions");



//*******Blind Logic to HigherOrderFunction************
//Always function logic should be dependent only on argumnets and static values


function PureHigherOrderFunctions(arg)
{
    //All logic here must be dependent only on args, followed by static values;
}
//Decoupled and Independent 
//Can be Added to Utility Functions


//Rules for Higher Order Functions.

//1.The Same Input always gives same output.
//2.No side Effects.

function pureFunction(x,y)
{
// sameOutputForEverySameInput

return x+y;
}
console.log("Pure Function Sum is :",pureFunction(1,2));


const z=2;
function ImpureFunction(x,y)
{
    //function logic always dependent on the outside Variable . So Impure Function
    return x+y+z;
}
console.log("Sum inside Impure Function is :",ImpureFunction(1,2));


//Very Important Thing.
        // Function should have atleast one parameter.


//pure Functions cannot access outside Variables,
//What makes a Impure Function
    //1.Accessing Outside variable inside function logic.
    //2.No side Effects Like Api calling.
    //3.Data Manipulation(which includes external variable or dependent on external things..)
    //4. Dom Manipulation.
    //5.Console statements.



//Examples of Pure Functions.
const s=1
function example1(inc)
{
    inc+=1;
    return inc;
}

console.log("First Example:", example1(s))

const names=["s","a"];
function example2(passedArray)
{

    //all logic completely dependent on arguments 
    return [...passedArray,"nthosh"]//directly we have not written any external logic
}

console.log("Example 2 :",example2(names))

