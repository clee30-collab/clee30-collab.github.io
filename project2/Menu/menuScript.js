//aura
document.addEventListener("mousemove", (event) => {
    const aura = document.querySelector(".aura");
    const inner = document.querySelector(".innerAura");
    if (!aura || !inner) return;
    const x = event.clientX;
    const y = event.clientY;
    aura.style.left = `${x}px`;
    aura.style.top = `${y}px`;
    aura.style.transform = "translate(-50%, -50%)";
    inner.style.left = `${x}px`;
    inner.style.top = `${y}px`;
    inner.style.transform = "translate(-50%, -50%)";
});

//menus
const coffeeWrapper = document.getElementById("coffeeWrapper");
const cocktailWrapper = document.getElementById("cocktailWrapper");
const coffeeMenu = document.getElementById("coffeeMenu");
const cocktailMenu = document.getElementById("cocktailMenu");

coffeeWrapper.addEventListener("click", () => {
    coffeeMenu.classList.toggle("revealed");
});
cocktailWrapper.addEventListener("click", () => {
    cocktailMenu.classList.toggle("revealed");
});

//return home
document.getElementById("menuButton").addEventListener("click", () => {
    window.location.href = "../Home/coffeeIndex.html";
});

//cafe status
function updateStatus() {
    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hours = PST.getHours();
    //const hours = 20;
    let statusText = "";
    if (hours >= 7 && hours < 16) statusText = "CAFE IS OPEN";
    else if (hours >= 16 && hours < 17) statusText = "BAR OPENING SOON";
    else if (hours >= 17 && hours < 23) statusText = "BAR IS OPEN";
    else statusText = "CAFE OPENING SOON";
    document.getElementById("countdownWords").textContent = statusText;
}

//clock
function updateClock() {
    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const pad = (n) => String(n).padStart(2, "0");
    let hrs = PST.getHours();
    //let hrs = 20;
    const mins = pad(PST.getMinutes());
    const secs = pad(PST.getSeconds());
    const ampm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    document.getElementById("liveClock").textContent = `${hrs}:${mins}:${secs} ${ampm} PST`;
}

//title underline
function updateTitleUnderline() {
    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hours = PST.getHours();
    //const hours = 20;
    const underline = document.getElementById("titleUnderline");
    const coffeeX = 62, coffeeW = 60;
    const barX = 146, barW = 28;
    underline.style.width = "0px";
    if (hours >= 7 && hours < 16) {
        underline.style.width = coffeeW + "px";
        underline.style.transform = `translateX(${coffeeX}px)`;
    } else if (hours >= 17 && hours < 23) {
        underline.style.width = barW + "px";
        underline.style.transform = `translateX(${barX}px)`;
    }
}

//night aura color
function updateAuraColors() {
    const now = new Date();
    
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hours = PST.getHours();
    //const hours = 20;
    const aura = document.querySelector(".aura");
    const inner = document.querySelector(".innerAura");
    const isDay = hours >= 5 && hours < 17;
    if (isDay) {
        aura.classList.remove("nightAura");
        inner.classList.remove("nightInnerAura");
    } else {
        aura.classList.add("nightAura");
        inner.classList.add("nightInnerAura");
    }
}

updateStatus();
updateClock();
updateTitleUnderline();
updateAuraColors();

setInterval(updateStatus, 30000);
setInterval(updateClock, 1000);
setInterval(updateTitleUnderline, 30000);
setInterval(updateAuraColors, 60000);
