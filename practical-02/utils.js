const SHOP_SCHEDULE = require("./data").SHOP_SCHEDULE;

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function getDay() {
  const currentDate = new Date();
  const day = currentDate.toLocaleString("en-US", {
    weekday: "short",
  });
  return day;
}

function compareTime(time1, time2) {
  const time1InMinutes = convertToMinutes(time1);
  const time2InMinutes = convertToMinutes(time2);

  return time1InMinutes < time2InMinutes;
}

function convertToMinutes(time) {
  const [hour, minute] = time.split(":");
  const period = time.slice(-2).toUpperCase();
  let hours = parseInt(hour);
  let minutes = parseInt(minute);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }
  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

function calculateTimeToOpen(currTime, openTime, dayGap) {
  const currMinutes = convertToMinutes(currTime);
  const openMinutes = convertToMinutes(openTime);

  let totalMinutes = dayGap * 24 * 60 + (openMinutes - currMinutes);
  if (totalMinutes < 0) totalMinutes += 7 * 24 * 60; // wrap around a week just in case

  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  let response = `Close. The shop will open in`;
  if (days > 0) response += ` ${days} day${days > 1 ? "s" : ""}`;
  if (hours > 0) response += ` ${hours} hr${hours > 1 ? "s" : ""}`;
  if (minutes > 0) response += ` ${minutes} min${minutes > 1 ? "s" : ""}`;

  return response.trim();
}

function nextOpenDay(day) {
  const openDays = SHOP_SCHEDULE.map((schedule) => schedule.day);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  if (day === "Sat" || day === "Sun") {
    return { nextOpen: "Mon", days: day === "Sat" ? 2 : 1 };
  }
  const currentIndex = weekDays.indexOf(day);
  const nextOpen = weekDays.find(
    (day, i) => openDays.includes(day) && i > currentIndex
  );

  return { nextOpen, days: weekDays.indexOf(nextOpen) - currentIndex };
}

module.exports = {
  formatTime,
  getDay,
  compareTime,
  convertToMinutes,
  calculateTimeToOpen,
  nextOpenDay,
};
