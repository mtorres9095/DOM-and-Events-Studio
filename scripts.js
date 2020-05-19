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
let shuttleHeight = 0;



function init(){

    // Load initiated
    window.addEventListener("load", function(){
        console.log("window loaded complete");
    });
    takeOffButton = document.getElementById("takeoff");
    landingButton = document.getElementById("landing");
    missionAbortButton = document.getElementById("missionAbort");
    currentFligthStatus = document.getElementById("flightStatus");
    shuttleFlightScreen = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    upArrow = document.getElementById("uparrow");
    downArrow = document.getElementById("downarrow");
    leftArrow = document.getElementById("leftarrow");
    rightArrow = document.getElementById("rightarrow");

    takeOffButton.addEventListener("click", function(){
        window.alert("just clicked take off");
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        console.log(takeOffButton);
           currentFligthStatus.innerHTML = "Shuttle in flight."; 
           shuttleFlightScreen.style.background = "blue";
           shuttleHeight.innerHTML = this.innerHTML + 10000;
    });
    landingButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        currentFligthStatus.innerHTML = "The shuttle has landed.";
        shuttleFlightScreen.style.background = "green";
        shuttleHeight.innerHTML = 0;
    });
    missionAbortButton.addEventListener("click", function(){
        window.alert("Confirm that you want to abort the mission.");
        currentFligthStatus.innerHTML = "Mission aborted.";
        shuttleFlightScreen.style.background = "green";
        shuttleHeight.innerHTML = "0";
    });
    upArrow.addEventListener("click",function(){
        window.alert("Confirm that you touch the up arrow"); 
        shuttleHeight.innerHTML = this.innerHTML + 10000;

    });
    downArrow.addEventListener("click",function(){
        window.alert("Confirm that you touch the up arrow"); 
        shuttleHeight.innerHTML = this.innerHTML - 10000;

    });
    leftArrow.addEventListener("click",function(){
        window.alert("Confirm that you touch the up arrow"); 

    });
    rightArrow.addEventListener("click",function(){
        window.alert("Confirm that you touch the up arrow"); 

    });
    

};

window.onload = init;
