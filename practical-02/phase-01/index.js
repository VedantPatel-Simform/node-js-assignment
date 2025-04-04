const SHOP_SCHEDULE = require("../data").SHOP_SCHEDULE;
const { formatTime, compareTime, getDay } = require("../utils");

const date = new Date();
const currentTime = formatTime(date);
const day = getDay();

try {
  const todaySchedule = SHOP_SCHEDULE.find((schedule) => schedule.day === day);
  if (!todaySchedule) {
    console.log("Shop is closed today.");
  }
  const { open, close } = todaySchedule;

  const isOpen =
    compareTime(open, currentTime) && compareTime(currentTime, close);

  console.log(isOpen ? "Open" : "Closed");
} catch (err) {
  console.log("Error: ", err.message);
}
