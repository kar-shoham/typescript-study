let user = {
    name: "Shoham",
    age:20,
    isStudent: true
}

function  displayUser(user: {name: string, age: number}) {
    console.log(user.name);
    console.log(user.age);
}

// displayUser() // will show error
// displayUser({}) // will show error
displayUser({name: "Shoham", age: 20}) // works perfectly alright



// the first {} is the return type (can be like {name: string, age: number} (obv..))
function displayUser2():{}{
    return {}
}



// a weird behaviour of ts
// displayUser({name: "Shoham", age: 20, isStudent: true}) // doesnt work this time
displayUser(user) // works perfectly alright (but should have stopped me and shown error) 
// but we can clearly see that both are exactly the same thing 




// type alias
// basically creating a data type kinda

type User = {
    name: string
    age: number
}

// so, now can do
function  displayUser3(user: User) {
    console.log(user.name);
    console.log(user.age);
}

// can even do
// type myString = string // works, but why lol ;)




export {}
