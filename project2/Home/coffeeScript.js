document.addEventListener("DOMContentLoaded", () => {

    //animated background
    function updateBackground() {
        const now = new Date();
        const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
        const hours = PST.getHours();
        //const hours = 20;  
        const sky = document.querySelector(".sunSetColor");
        const sun = document.querySelector(".sunCircle");
        const isDay = hours >= 5 && hours < 17;

        if (isDay) {
            sky.classList.remove("nightSky");
            sun.classList.remove("nightSun");
        } else {
            sky.classList.add("nightSky");
            sun.classList.add("nightSun");
        }
    }

    //status of cafe
    function updateStatus() {
        const now = new Date();
        const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
        const hours = PST.getHours();
        let statusText = "";
        if (hours >= 7 && hours < 16) {
            statusText = "CAFE IS OPEN";
        } 
        else if (hours >= 16 && hours < 17) {
            statusText = "BAR OPENING SOON";
        } 
        else if (hours >= 17 && hours < 23) {
            statusText = "BAR IS OPEN";
        } 
        else {
            statusText = "CAFE OPENING SOON";
        }
        document.getElementById("countdownWords").textContent = statusText;
    }

    //clock
    function updateClock() {
        const now = new Date();
        const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
        const pad = n =>
            String(n).padStart(2, "0");
        let hrs = PST.getHours();
        const mins = pad(PST.getMinutes());
        const secs = pad(PST.getSeconds());

        const ampm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs % 12 || 12;

        document.getElementById("liveClock").textContent =
            `${hrs}:${mins}:${secs} ${ampm} PST`;
    }

    updateBackground();
    updateStatus();
    updateClock();
    setInterval(updateBackground, 60000);
    setInterval(updateStatus, 30000);
    setInterval(updateClock, 1000);

//menu button
document.getElementById("menuButton").addEventListener("click", () => {
    window.location.href = "../Menu/menuIndex.html";
});


    //title underline
    function updateTitleUnderline() {
    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hours = PST.getHours();
    //const hours = 20;  
    const underline = document.getElementById("titleUnderline");
    underline.style.width = "0px";
    underline.style.transform = "translateX(0px)";
    const coffeeX = 62;   
    const coffeeW = 60;    
    const barX = 146;       
    const barW = 28;       
    if (hours >= 7 && hours < 16) {
        underline.style.width = coffeeW + "px";
        underline.style.transform = `translateX(${coffeeX}px)`;
    }
    else if (hours >= 17 && hours < 23) {
        underline.style.width = barW + "px";
        underline.style.transform = `translateX(${barX}px)`;
    }
    else {
        underline.style.width = "0px";
    }
    }
    updateTitleUnderline();
    setInterval(updateTitleUnderline, 30000);



});
