// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOffButton = null;
let landingButton = null;
let missionAbortButton = null;
let upArrow = null;
let downArrow = null;
let rightArrow = null;
let leftArrow = null;
let paragraph = null; 
let currentFligthStatus = null;
let shuttleFlightScreen = null;
let shuttleHeight = null;


window.addEventListener("load", function(){
    console.log("window loaded complete");
});
function init(){
    takeOffButton = document.getElementById("Take off");
    landingButton = document.getElementById("landing");
    missionAbortButton = document.getElementById("missionAbort");
    currentFligthStatus = document.getElementById("flightStatus");
    shuttleFlightScreen = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click", function(){
        window.confirm("Confirm that the shuttle is ready for takeoff.");
           currentFligthStatus.innerHTML = "Shuttle in flight."; 
           shuttleFlightScreen.style.background = "blue";
           shuttleHeight.innerHTML = "10,000";
    });

}
