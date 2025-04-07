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

  // if today's schedule not found in the list of schedule , then the shop is closed
  if (!todaySchedule) {
    console.log("Shop is closed today.");
  } else {
    const { open, close } = todaySchedule;

    const isOpen =
      compareTime(open, currentTime) && compareTime(currentTime, close);
    // basically currentTime > open and currentTime < close

    // if isOpen

    if (isOpen) {
      const closeTimeInMinutes = convertToMinutes(close); // convert the time into minutes in 24hr format
      const currentTimeInMinutes = convertToMinutes(currentTime); // convert the time into minutes in 24hr format

      // calculate the remaining hrs
      const hoursRemaining = Math.floor(
        (closeTimeInMinutes - currentTimeInMinutes) / 60
      );

      // calculate the remaining mins
      const minutesRemaining = (closeTimeInMinutes - currentTimeInMinutes) % 60;

      console.log(
        `Open. The shop will be closed within ${hoursRemaining} hrs ${minutesRemaining} mins.`
      );
    } else {
      // same logic here
      const openTimeInMinutes = convertToMinutes(open);
      const currentTimeInMinutes = convertToMinutes(currentTime);
      const hoursRemaining = Math.floor(
        (openTimeInMinutes - currentTimeInMinutes) / 60
      );

      const minutesRemaining = (openTimeInMinutes - currentTimeInMinutes) % 60;

      console.log(
        `Closed. The shop will be open after ${hoursRemaining} hrs ${minutesRemaining} mins.`
      );
    }
  }
} catch (err) {
  console.log("Error: ", err.message);
}
