require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget")
    div.innerHTML =
        // Here is the HTML formatting for our mission target div.
        `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    let numberInput = Number(testInput)
    if (testInput == "") return "Empty";
    if (isNaN(numberInput)) return "Not a Number";
    return "Is a Number"

}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        alert("All fields are required!")
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please only enter valid data into fields")
    }
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[(Math.floor((Math.random() * planets.length)))]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
