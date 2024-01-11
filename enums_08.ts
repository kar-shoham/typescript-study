enum SeatChoice {
    AISLE = 10,
    MIDDLE, // automatically assigned value 11 and so on...
    WINDOW
}
// however, if we give string value, then have to give value for all ...



const enum SeatChoice2 {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window'
}// adding this const before will generate a lot lesser lines of code in thee generated js 
// (the one without const, generates a very complex iffy in js)

const seatNo: SeatChoice = SeatChoice.AISLE

console.log(seatNo)

export {}