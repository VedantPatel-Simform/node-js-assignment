const { type } = require("os");
const timeZones = require("./timezones");
const { Console } = require("console");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputTimeZone;
let inputTime;
let outputTimeZone;

readline.question("ENTER CURRENT TIME ZONE: ", (name1) => {
  inputTimeZone = name1;
  console.log("Current Time Zone:", inputTimeZone);

  readline.question("ENTER CURRENT TIME (in HH:mm format): ", (time1) => {
    inputTime = time1;
    readline.question("ENTER TIME ZONE TO CONVERT TO: ", (name2) => {
      outputTimeZone = name2;
      readline.close();
      console.log(calculateTime());
    });
  });
});

function calculateTime() {
  const [hrs, min] = inputTime.split(":");
  const inputTimeInMinutes = Number(hrs) * 60 + Number(min);
  const outTimeInMinutes =
    inputTimeInMinutes +
    (+timeZones[outputTimeZone].offset - +timeZones[inputTimeZone].offset) * 60;
  const outputHrs = Math.floor(+outTimeInMinutes / 60);
  const outputMins = +outTimeInMinutes % 60;

  let date = new Date();
  if (outputHrs < 0) {
    date.setDate(date.getDate() - 1);
  }
  return `${Math.abs(outputHrs)}:${Math.abs(
    outputMins
  )} ${date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })}`;
}
