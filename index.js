// function distanceFromHqInBlocks(blocks){
//     return Math.abs(blocks - 42);
// }
// distanceFromHqInBlocks(blocks);

// function distanceFromHqInFeet(blocks){
//     return distanceFromHqInBlocks(blocks)* 264;
// }

// function distanceTravelledInFeet(end,start){
//     return Math.abs((end - start)* 264);
// }

// function calculatesFarePrice(end, start){
    
//     let distance = distanceTravelledInFeet(end, start);
//     if (distance < 400){
//         return 0;
//     } else if (distance < 2000){
//         return (distance - 400) * 0.02
//     } else if (distance > 2000 && distance < 2500){
//         return 25;
//     } else{
//         return "cannot travel that far"
// }
// }



function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264
}
function distanceTravelledInFeet(end, start){
    return Math.abs((end - start) * 264)
}

function calculatesFarePrice(end, start){
    let distance = distanceTravelledInFeet(end, start)
    if(distance > 2500){
        return "cannot travel that far"
    } else if (distance > 2000){
        return 25;
    } else if (distance > 400){
        return (distance - 400 )* 0.02
    } else {
        return 0
    }

}