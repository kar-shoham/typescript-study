type User = {
    readonly _id: string // readonly
    name: string
    age: number,
    gender?: string //optional parameter
}


let user : User = {
    _id: "XXX",
    name: "YYY",
    age: 12
}

// user._id = "ZZZ" // cant do it becasue it is readonly (immutable)


// this is a pure feature of ts and has no code for this in the generated js





// we can create types based on the combination of previously defined types

type Admin = User & {
    isAdmin: boolean
}
// can also have more than 2 types 
// now admin will have type of user + isAdmin wla part...

