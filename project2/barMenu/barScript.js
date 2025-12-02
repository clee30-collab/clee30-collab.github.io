document.addEventListener("DOMContentLoaded", () => {

    function updateStatus() {
        const now = new Date();
        const nowEST = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

        const hours = nowEST.getHours();

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


    function updateClock() {
        const now = new Date();
        const nowEST = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

        const pad = n => String(n).padStart(2, "0");

        const hrs = pad(nowEST.getHours());
        const mins = pad(nowEST.getMinutes());
        const secs = pad(nowEST.getSeconds());

        document.getElementById("liveClock").textContent = `${hrs}:${mins}:${secs} EST`;
    }


    updateStatus();
    updateClock();

    setInterval(updateStatus, 30000); 
    setInterval(updateClock, 1000);   

    const menuBack = document.querySelector(".dayMenuBack");
    menuBack.style.cursor = "pointer"; 
    menuBack.addEventListener("click", () => {
        window.location.href = "../coffeeMenu/coffeeIndex.html";
    });
});
