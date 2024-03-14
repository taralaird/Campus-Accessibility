export default function checkPredictorErrors(numFloors, numElevators, barrierFreeWashrooms, genderNeutralWashrooms, automaticButtonEntry) {
    if (isNaN(numFloors)|| isNaN(numElevators)||numFloors<=0||numElevators<0) {
        return true;
    } else if (!(barrierFreeWashrooms === 1 || barrierFreeWashrooms === 0)) {
        return true;
    } else if (!(genderNeutralWashrooms === 1 || genderNeutralWashrooms === 0)) {
        return true;
    } else if (!(automaticButtonEntry === 1 || automaticButtonEntry === 0)) {
        return true;
    } else {
        return false;
    }
};
