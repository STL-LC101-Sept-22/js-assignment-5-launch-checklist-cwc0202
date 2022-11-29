// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

// // validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 
// In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a 
// document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings 
// and the document parameter for your HTML document, update the shuttle requirements as described below. Make sure to call your 
// formSubmission() function at the appropriate time in your script.js file!

function validateInput(testInput) {
    if (isNaN(testInput)) "Not a Number";
    if (testInput == "") "Empty";
    return "Is a Number"

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
