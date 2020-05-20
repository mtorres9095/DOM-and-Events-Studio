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
let rocket = null;





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
    rocketModel = document.getElementById("rocket");
    rocketModel.style.position = 'absolute';
    rocketModel.style.left =  "0px";
    rocketModel.style.bottom =  "0px";
   

    // Takeoff Button function
    takeOffButton.addEventListener("click", function(){
        window.alert("just clicked take off");
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        console.log(takeOffButton);
           currentFligthStatus.innerHTML = "Shuttle in flight."; 
           shuttleFlightScreen.style.background = "blue";
           shuttleHeight.innerHTML = 10000;
        //    shuttleHeight.innerHTML += 10000; add the Take off or up, etc value of innerHTML
    });

    // 
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
        // window.alert("Confirm that you touch the up arrow"); 
        // window.alert(rocketModel.innerHTML); 
        let distFromBottom = (parseInt(rocketModel.style.bottom) + 10) +"px";
        rocketModel.style.bottom = distFromBottom;
        // rocketModel.style.up = 10;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        // rocket. = 10px

    });
    downArrow.addEventListener("click",function(){
        //  window.alert("Confirm that you touch the up arrow"); 
        // window.alert(rocketModel.innerHTML); 
        let distFromBottom = (parseInt(rocketModel.style.bottom) - 10) +"px";
        rocketModel.style.bottom = distFromBottom;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        // rocketModel.style.up = 10;
        // shuttleHeight.innerHTML = this.innerHTML + 10000;
        // rocket. = 10px
    });
    leftArrow.addEventListener("click",function(){
        // window.alert("Confirm that you touch the left arrow");
        //  window.alert("Confirm that you touch the up arrow"); 
        // window.alert(rocketModel.innerHTML); 
        let distFromLeft = (parseInt(rocketModel.style.left) - 10) +"px";
        rocketModel.style.left = distFromLeft;
        // rocketModel.style.up = 10;
        // shuttleHeight.innerHTML = this.innerHTML + 10000;
        // rocket. = 10px 

    });
    rightArrow.addEventListener("click",function(){
        // window.alert("Confirm that you touch the left arrow");
        //  window.alert("Confirm that you touch the up arrow"); 
        // window.alert(rocketModel.innerHTML); 
        let distFromLeft = (parseInt(rocketModel.style.left) + 10) +"px";
        rocketModel.style.left = distFromLeft;
        // rocketModel.style.up = 10;
        // shuttleHeight.innerHTML = this.innerHTML - 10000;
        // rocket. = 10px 

    });
    

};

window.onload = init;
