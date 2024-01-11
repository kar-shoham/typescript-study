// tuples doesnt exists in the js world
// its basically a specialized array given to us by ts
// let user : (string | number)[] = [1, 'sk']
var user = ['sk', 1]; // this is a tuple
var rgb = [255, 123, 122]; // another example
// let rgb2 : RgbType = [255, 123, 122, 12] // will give error, as no 4th param is allowed
// rgb.push(12) // but this is working, it shouldnt work :(
console.log(rgb);
