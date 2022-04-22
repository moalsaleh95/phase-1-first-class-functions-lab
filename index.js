// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
}
// console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// selectingDrivers[0](drivers);
// selectingDrivers[1](drivers);
// console.log(selectingDrivers);

function createFareMultiplier(fare) {
    return function () {
        return fare * 5;
    }
}

function fareDoubler(fare) {
    createFareMultiplier(fare);
    return fare * 2;
}

function fareTripler(fare) {
    createFareMultiplier(fare);
    return fare * 3;
}

function selectDifferentDrivers(array, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    }
}