// very similar to type aliases

interface User{
    name: string;
    id: number;
}

// let user : User = {
//     name: 'Shoham',
//     id: 168
// }


//* can do smt like reopening of interface (CANT DO THAT IN TYPE)
interface User{
    email: string
}
// now interface needs all 3 fields 


interface Admin extends User{
    role: 'admin' | 'ta' | 'learner'
}
// to do same thing in type will take doing the weird User & {...} thing
