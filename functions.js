const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats(){
    console.log('in enoughSeats');
    if(seatsInCar >= passengers.length){
       return true;
    } //end enough seats
    else {
        return false;
    } //end not enough seats
    } //end enoughSeats

function getInCar(nameOfPassenger){
    console.log('in getInCar', nameOfPassenger);
    passengers.push(nameOfPassenger);
    return passengers;
} //end

function readyForRoadTrip(){
    console.log('in readyForRoadTrip');
    if(enoughSeats() && tankFull){
        return true;   
    } //end all good
    else{
        return false;
    } //not ready
} //end readyForRoadTrip

getInCar('Sam');
getInCar('Frodo');
getInCar('Sascha');
getInCar('Mila');
getInCar('Miles');


console.log('do we have enough seats?', enoughSeats());
console.log('are we ready for the trip?', readyForRoadTrip());