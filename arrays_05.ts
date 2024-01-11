// const heroes = []

// heroes.push('spiderman') // error as y default the array gets type 'never'

// so, we do as

const heroes : string[] = [] // ie heroes is a string array
// const heroes : Array<string> = []> // another way of doing the same thing

heroes.push('spiderman') // no error as the array is now typed as string array
// heroes.push(1) // error as the array is now typed as string array


// can also do as 
type User = {
    name: string
    age: number
}

const myUsers: User[] = [] // ie myUsers is a User array

const coordinates: number[][] = [
    [1,2],
    [3,4]
] // as in type is number[], so that is array of array of numbers



export {}