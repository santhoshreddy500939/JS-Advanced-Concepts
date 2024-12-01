console.log("Welcome to Recursion.js");
// Official Definition of Recursion:
// In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

// Unofficial Definition of Recursion: 
// "Any situation where you do something, and depending on the results, you might do it again."

// In programming, recursion occurs when a function calls itself.

// Any iterator function (aka function with a loop) can be recursive instead

function iteratorFunction(i=1)
{
    while(i<=10)
    {

        console.log(i);
        i++;
    }
}
// iteratorFunction()

// recursive functions have 2 parts:
// 1) the recursive call to the function 
// 2) at least one condition to exit

function recursive(i=1)
{
    if(i>10) return;
    console.log(i);
    i++;
    recursive(i)

}

// recursive()

//Fibanocci Series

function Fibanocci(num,arra=[0,1])
{
    console.log("santhosh",arra);
if(num<2) { 
    console.log("hey");
    return [...arra];
}
const [nextToLast,last]=arra.slice(-2)
console.log(nextToLast,last)
return Fibanocci(num-1,[...arra,nextToLast+last])
}

// console.log(Fibanocci(3));


const FibPos=(pos)=>{
    if(pos<2) return pos;
    return FibPos(pos-1)+FibPos(pos-2);
}

console.log(FibPos(3))


//Real TIme Examples Refer Below Link


//https://github.com/gitdagray/js_recursion_examples/blob/main/js/main.js#L50