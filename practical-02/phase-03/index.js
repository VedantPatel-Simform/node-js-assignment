const SHOP_SCHEDULE = require("../data").SHOP_SCHEDULE;
const {
  formatTime,
  compareTime,
  getDay,
  convertToMinutes,
  calculateTimeToOpen,
  nextOpenDay,
} = require("../utils");

const date = new Date();
const currentTime = formatTime(date);
const day = getDay();

try {
  // get today's schedule by finding the the shop_schedule
  const todaySchedule = SHOP_SCHEDULE.find((schedule) => schedule.day === day);

  // if today schedule not found means today is holiday, and we need to find next opening day and time for that
  if (!todaySchedule) {
    // get the next open day and days to go
    const { nextOpen, days } = nextOpenDay(day);

    // get the open time for the next open day
    const nextOpenTime = SHOP_SCHEDULE.find(
      (schedule) => schedule.day === nextOpen
    ).open;

    // now get result of next opening time by sending the currentTime, next Open time and days to go
    const result = calculateTimeToOpen(currentTime, nextOpenTime, days);
    console.log(result);
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
