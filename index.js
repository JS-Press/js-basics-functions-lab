// Code your solution in this file!

function distanceFromHqInBlocks(destinationBlock) {
    
    Number.parseInt(destinationBlock, 10);
    
    if (destinationBlock > 42){
        const distance = destinationBlock - 42;
        return distance;} 
    
    else if (destinationBlock < 42){
        const distance = 42 - destinationBlock;
        return distance;}
}


function distanceFromHqInFeet(destinationBlock) {

    const blocks = distanceFromHqInBlocks(destinationBlock)
    
    const feet = blocks * 264;

    return feet;

}


function distanceTravelledInFeet(start,end) {
    Number.parseInt(start, 10);
    Number.parseInt(end, 10);

    if (start > end){
    const distanceT = start - end;
    return distanceT * 264;
    }
    else if (end > start){
    const distanceT = end - start;
    return distanceT * 264;
    }

}


function calculatesFarePrice(start,end) {

    const travel = distanceTravelledInFeet(start,end);

    if (travel < 400){
        const charge = 0;
        return charge;
    } else if (travel > 400 && travel < 2000) {
        const charge = (travel - 400) * .02;
        return charge;
    } else if (travel > 2000 && travel < 2500) {
        const charge = 25;
        return charge;
    } else if (travel > 2500) {
        const charge = 'cannot travel that far';
        return charge;
    }


}

//return distanceTravelledInFeet(43,48);








//const distance = start - end;
//return distance;
