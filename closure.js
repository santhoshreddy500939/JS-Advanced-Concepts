console.log("Js Advanced Concepts");
console.log("Hi!..... Welcome to Js Advanced Concepts");


//Closures
        // Child Function has Access to Parent Function even after Parent Function is closed

        function Parent()
        {
            let x=1;
            console.log("Parent Value:",x)
             function Child()
            {
                const y=2;
                console.log("Accessing Parent Value",x);
                console.log("Child Value:",y);
                x++;
                console.log("Accessing Parent Value",x);

            }

            return Child;
        }

        let result=Parent()

        result()//observe here Parent function is called and executed in above line 
                             //Child Fucntion is getting access to Parent even after its execution is Finished;
                             //i.e, gettng access to x varaible of parent 
        
        
        result()// the values which where changed in previous result calling ...again undergoes
                    // changes but to previously changed values
                    // Holding up values in previous change and calling...

//===================================***********************============







//Immediately Invoked Function (IIFE)


const MainFunction=(()=>{
 console.log("Inside Main Function")

 let i=1;
 return function()
 {
   console.log("Inside the Sub Function");
    i++
   console.log("i Value:",i);
 }
 



})()
MainFunction()
MainFunction()//we are just executing the child function.






