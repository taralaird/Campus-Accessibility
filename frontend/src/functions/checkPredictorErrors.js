export default function checkPredictorErrors(numFloors, numElevators, barrierFreeWashrooms, genderNeutralWashrooms, automaticButtonEntry) {
    if (isNaN(numFloors)|| isNaN(numElevators)||numFloors<=0||numElevators<0) {
        return true;
    } else if (!(barrierFreeWashrooms === true || barrierFreeWashrooms === false)) {
        return true;
    } else if (!(genderNeutralWashrooms === true || genderNeutralWashrooms === false)) {
        return true;
    } else if (!(automaticButtonEntry === true || automaticButtonEntry === false)) {
        return true;
    } else {
        return false;
    }
};
