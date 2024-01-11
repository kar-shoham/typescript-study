var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var seatNo = SeatChoice.AISLE;
console.log(SeatChoice);
