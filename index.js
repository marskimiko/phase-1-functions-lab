const hq = 42

function distanceFromHqInBlocks(pickUp) {
    if (pickUp >= hq) {
        return (pickUp - hq);
    }
    else if (pickUp < hq) {
        return (hq - pickUp);
    }
}

function distanceFromHqInFeet(pickUp) {
   return distanceFromHqInBlocks(pickUp) * 264 
}

//distanceFromHqInFeet(53);

function distanceTravelledInFeet(startBlock, destinationBlock) {
    if (startBlock > destinationBlock) {
        return ((startBlock - destinationBlock) * 264)
    }
    else if (startBlock < destinationBlock) {
        return ((destinationBlock - startBlock) * 264)
    }
}

//distanceTravelledInFeet(55, 94);

function calculatesFarePrice(startBlock, destinationBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);

    if (distanceInFeet <= 400){
        return 0
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * .02)
    }
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25
    }
    else if (distanceInFeet > 2500) {
        return 'cannot travel that far'
    }
}