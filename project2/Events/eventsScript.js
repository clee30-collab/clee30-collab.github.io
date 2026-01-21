document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     AURA FOLLOW
  ====================== */
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

  /* ======================
     NAVIGATION
  ====================== */
  document.querySelectorAll(".navButton").forEach(button => {
    button.addEventListener("click", (e) => {
      const link = button.getAttribute("href") || button.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });

  /* ======================
     CAFE STATUS
  ====================== */
  function updateStatus() {
    const el = document.getElementById("countdownWords");
    if (!el) return;

    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hours = PST.getHours();

    let statusText = "";
    if (hours >= 7 && hours < 16) statusText = "cafe is open";
    else if (hours >= 16 && hours < 17) statusText = "bar opening soon";
    else if (hours >= 17 && hours < 23) statusText = "bar is open";
    else statusText = "cafe opening soon";

    el.textContent = statusText;
  }

  /* ======================
     CLOCK
  ====================== */
  function updateClock() {
    const el = document.getElementById("liveClock");
    if (!el) return;

    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));

    const pad = n => String(n).padStart(2, "0");
    let hrs = PST.getHours();
    const mins = pad(PST.getMinutes());
    const secs = pad(PST.getSeconds());

    const ampm = hrs >= 12 ? "pm" : "am";
    hrs = hrs % 12 || 12;

    el.textContent = `${hrs}:${mins}:${secs} ${ampm} pst`;
  }

  /* ======================
     TITLE UNDERLINE
  ====================== */
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

  /* ======================
     AURA DAY / NIGHT COLOR
  ====================== */
  function updateAuraColors() {
    const aura = document.querySelector(".aura");
    const inner = document.querySelector(".innerAura");
    if (!aura || !inner) return;

    const now = new Date();
    const PST = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hours = PST.getHours();

    const isDay = hours >= 5 && hours < 17;

    aura.classList.toggle("nightAura", !isDay);
    inner.classList.toggle("nightInnerAura", !isDay);
  }

  /* ======================
     INIT + INTERVALS
  ====================== */
  updateStatus();
  updateClock();
  updateTitleUnderline();
  updateAuraColors();

  setInterval(updateStatus, 30000);
  setInterval(updateClock, 1000);
  setInterval(updateTitleUnderline, 30000);
  setInterval(updateAuraColors, 60000);

});
