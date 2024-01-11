let username : string = "Shoham"; // data type is in all lowercase


// console.log(uername); // shows error clearly unlike js 

// username = 10; // ts shows us error to save from error

// username.toLowercase() // gives us warning that our method is wrong (toLowerCase actually true)

// username.toUpperCase(); // gives us string ke method recommendations only 

let myNum = 10;

// myNum.toUpperCase // shows error as its a number

// console.log(username); 



let userId: number = 102; // remember that number is for both int and float

// the above code is same as 
// let userId: number
// userId = 102

// let userId = 102; // its better to do this as it authmatically takes the :number part 
// more on this later (should use :datatype when not given values, like in functions)

let isLoggedIn : boolean = true; 




// any keyword - basically variable for no typecheck

// used when we dont want a variable to get typechecked, we use ANY, its just a getaway

// try not to use any

let hero;  // any variable is created

hero = 10;


// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any

// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error


export{} // will see why needed later on