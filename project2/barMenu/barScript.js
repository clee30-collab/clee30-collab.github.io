document.addEventListener("DOMContentLoaded", () => {

    function updateCountdown() {
        const now = new Date();
        const nowEST = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

        const year = nowEST.getFullYear();
        const month = nowEST.getMonth();
        const day = nowEST.getDate();

        const closeTime = new Date(year, month, day, 17, 0, 0);  
        const openTimeNext = new Date(year, month, day + 1, 7, 0, 0); 

        let remaining;

      
        if (nowEST < closeTime) {
            remaining = 0;
        }
       
        else {
            remaining = openTimeNext - nowEST;
        }

        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining / (1000 * 60)) % 60);
        const seconds = Math.floor((remaining / 1000) % 60);

        const pad = n => String(n).padStart(2, "0");

        document.getElementById("timerTilCoffee").textContent =
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    const menuBack = document.querySelector(".dayMenuBack");
    menuBack.style.cursor = "pointer"; 

    menuBack.addEventListener("click", () => {
        window.location.href = "../coffeeMenu/coffeeIndex.html";
    });
});
