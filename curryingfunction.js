console.log("Currying Functions in Js..");

//currying takes a function which recieves more than one parameter and 
        //break it into series of uniary paramter function 
                //(means function which recieves only one parameter.)


function makeCurry(ingredient1)
{
        return (ingredient2)=>{
                return (ingredient3)=>{
                        return `${ingredient1},${ingredient2},${ingredient3}`
                }
        }
}
const FinalCurry=makeCurry("Vegetables")("Water")("Masala");
console.log(FinalCurry);

//Shortly we Can refactor the above code

const PrepareBedRoom=(FirstItem)=>(SecondItem)=>(ThirdItem)=>{return `${FirstItem} ${SecondItem} ${ThirdItem} `}

const BedRoom=PrepareBedRoom("Bed")("Fan")("Ac");

console.log(BedRoom)

//Partially Applied Curry Function. Functions doesnt complete until all Parmaeters are passed.

const sum=(x)=>(y)=>x+y;
console.log("Partial Executed:",sum(10));//returns y=x+y indicates it needs y also..
console.log("Fully Executed:",sum(10)(20));//returns the Complete Value.
//

function ParentFunction(...args)
{
        return function ChildFunction(...args)
        {
                return function GrandChild(...args)
                {
                        //logic 
                        //Until Unless all the ...args are passed logic will not be executed.
                        console.log("Santhosh",args)
                }
        }
}

console.log("lll====>",ParentFunction("santhosh"))
console.log("mmm=====>",ParentFunction("santhosh")("88"))
const printName=ParentFunction("santhosh")("88");
printName(22)

