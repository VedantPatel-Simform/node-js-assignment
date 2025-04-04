const SHOP_SCHEDULE = require("../data").SHOP_SCHEDULE;
const {
  formatTime,
  compareTime,
  getDay,
  convertToMinutes,
} = require("../utils");

const date = new Date();
const currentTime = formatTime(date);
const day = getDay();

try {
  const todaySchedule = SHOP_SCHEDULE.find((schedule) => schedule.day === day);
  if (!todaySchedule) {
    console.log("Shop is closed today.");
  } else {
    const { open, close } = todaySchedule;

    const isOpen =
      compareTime(open, currentTime) && compareTime(currentTime, close);

    if (isOpen) {
      const closeTimeInMinutes = convertToMinutes(close);
      const currentTimeInMinutes = convertToMinutes(currentTime);
      const hoursRemaining = Math.floor(
        (closeTimeInMinutes - currentTimeInMinutes) / 60
      );
      const minutesRemaining = (closeTimeInMinutes - currentTimeInMinutes) % 60;

      console.log(
        `Open. The shop will be closed within ${hoursRemaining} hrs ${minutesRemaining} mins.`
      );
    } else {
      const openTimeInMinutes = convertToMinutes(open);
      const currentTimeInMinutes = convertToMinutes(currentTime);
      const hoursRemaining = Math.floor(
        ((openTimeInMinutes - currentTimeInMinutes + 1440) % 1440) / 60 // 1 day = 1440 mins
      );

      const minutesRemaining =
        ((openTimeInMinutes - currentTimeInMinutes + 1440) % 1440) % 60;

      console.log(
        `Closed. The shop will be open after ${hoursRemaining} hrs ${minutesRemaining} mins.`
      );
    }
  }
} catch (err) {
  console.log("Error: ", err.message);
}
