function updateIranDateTime() {
  const now = new Date();

  const weekday = now.toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran",
    weekday: "long",
  });

  const day = now.toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran",
    day: "numeric",
  });

  const month = now.toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran",
    month: "long",
  });

  const year = now.toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran",
    year: "numeric",
  });

  const formattedDate = `${weekday} ${day} ${month} ${year}`;

  document.getElementById("iran-date").textContent = formattedDate;

  const time = now.toLocaleTimeString("fa-IR", {
    timeZone: "Asia/Tehran",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("iran-time").textContent = time;
}

setInterval(updateIranDateTime, 1000);
updateIranDateTime();
