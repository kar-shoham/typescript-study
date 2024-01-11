// tuples doesnt exists in the js world

// its basically a specialized array given to us by ts

// let user : (string | number)[] = [1, 'sk']

let user : [string, number] = ['sk', 1] // this is a tuple
// basicallly we can fix the order of the data as well


type RgbType = [number, number, number]
let rgb : RgbType = [255, 123, 122] // another example



// let rgb2 : RgbType = [255, 123, 122, 12] // will give error, as no 4th param is allowed
// rgb.push(12) // but this is working, it shouldnt work :(

console.log(rgb)

