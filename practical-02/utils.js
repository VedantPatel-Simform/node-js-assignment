const SHOP_SCHEDULE = require("./data.js").SHOP_SCHEDULE;

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
  // to get the day in short form
  const currentDate = new Date();
  const day = currentDate.toLocaleString("en-US", {
    weekday: "short",
  });
  return day;
}

function compareTime(time1, time2) {
  // to check if time2 > time1
  // helps to check if shop is open or not
  const time1InMinutes = convertToMinutes(time1);
  const time2InMinutes = convertToMinutes(time2);

  return time1InMinutes < time2InMinutes;
}

function convertToMinutes(time) {
  // like convert 07:00 AM to minutes
  const [hour, minute] = time.split(":");
  const period = time.slice(-2).toUpperCase(); // get the AM / PM
  let hours = parseInt(hour);
  let minutes = parseInt(minute);

  // if time is PM and hrs not equal to 12, then add 12 hrs to it to convert to 24 hr format
  if (period === "PM" && hours !== 12) {
    hours += 12;
  }
  // if time = 12 AM then hrs = 0 , in 24hr format
  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  // return total minutes from 00:00
  return hours * 60 + minutes;
}

function calculateTimeToOpen(currTime, openTime, dayGap) {
  // get the current time in minutes
  const currMinutes = convertToMinutes(currTime);
  // convert the open time in minutes
  const openMinutes = convertToMinutes(openTime);

  // calculate total time to open , including days , dayGap = total days to go to open time
  let totalMinutes = dayGap * 24 * 60 + (openMinutes - currMinutes);

  // convert the minutes to day i.e minutes / (total hrs in day * total mins in hrs)
  const days = Math.floor(totalMinutes / (24 * 60));
  // convert minutes into hrs
  // we find the leftover minutes after removing days, that's why we first get the remaining mins in day by `% (24 * 60)` and then divide by 60 to get hrs
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);

  // calculate minutes remaining after accounting hrs
  const minutes = totalMinutes % 60;

  let response = `Close. The shop will open in`;
  if (days > 0) response += ` ${days} day${days > 1 ? "s" : ""}`;
  if (hours > 0) response += ` ${hours} hr${hours > 1 ? "s" : ""}`;
  if (minutes > 0) response += ` ${minutes} min${minutes > 1 ? "s" : ""}`;

  return response.trim();
}

function nextOpenDay(day) {
  // to get the open days from the schedule
  const openDays = SHOP_SCHEDULE.map((schedule) => schedule.day);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  if (day === "Sat" || day === "Sun") {
    return { nextOpen: "Mon", days: day === "Sat" ? 2 : 1 };
  }
  // to get the current index of day
  const currentIndex = weekDays.indexOf(day);

  // to find the next open day, such that the index of open day > index of today and also open day is in open day array
  const nextOpen = weekDays.find(
    (day, i) => openDays.includes(day) && i > currentIndex
  );

  // return the nextOpen day and days = total days remaining for the next open day
  // like today is saturday then next open day is monday , do 2 days to go like that
  // assume today is wed and holiday, next open day is thursday , then today days = index of Thu - index of Wed = 1
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
