
window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
    })
    let form = document.querySelector("form")
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let pilot = document.querySelector("input[name=pilotName]")
        let pilotValue = pilot.value
        let copilot = document.querySelector("input[name=copilotName]")
        let copilotValue = copilot.value
        let fuel = document.querySelector("input[name=fuelLevel]")
        let fuelValue = fuel.value
        let cargo = document.querySelector("input[name=cargoMass]")
        let cargoValue = cargo.value

        formSubmission(document, list, pilotValue, copilotValue, fuelValue, cargoValue);
    })
});