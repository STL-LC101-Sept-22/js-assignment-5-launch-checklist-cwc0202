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
    if (isNaN(testInput)) return "Not a Number";
    if (testInput == "") return "Empty";
    return "Is a Number"

}


// <div  id="faultyItems" data-testid="faultyItems">
//     <ol>
//         <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
//         <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
//         <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
//         <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
//     </ol>
// </div>
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = document.getElementById('faultyItems')
    faultyItems.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
`
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    launchStatus.innerHTML = "Shuttle is ready for launch";
    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }
    if (cargoLevel > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }
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
