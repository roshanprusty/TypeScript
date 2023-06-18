var SeatChoice;
(function (SeatChoice) {
    // While in default first one always get 0 then second one 1 and so on
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var rnpSeat = SeatChoice.AISLE;
console.log(rnpSeat);
