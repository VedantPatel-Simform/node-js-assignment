const timeZones = {
  UTC: { name: "Coordinated Universal Time", offset: 0 },
  GMT: { name: "Greenwich Mean Time", offset: 0 },
  EST: { name: "Eastern Standard Time (USA & Canada)", offset: -5 },
  EDT: { name: "Eastern Daylight Time (USA & Canada)", offset: -4 }, // Daylight Saving Time (DST)
  CST: { name: "Central Standard Time (USA & Canada)", offset: -6 },
  CDT: { name: "Central Daylight Time (USA & Canada)", offset: -5 }, // Daylight Saving Time (DST)
  MST: { name: "Mountain Standard Time (USA & Canada)", offset: -7 },
  MDT: { name: "Mountain Daylight Time (USA & Canada)", offset: -6 }, // Daylight Saving Time (DST)
  PST: { name: "Pacific Standard Time (USA & Canada)", offset: -8 },
  PDT: { name: "Pacific Daylight Time (USA & Canada)", offset: -7 }, // Daylight Saving Time (DST)
  AST: { name: "Atlantic Standard Time", offset: -4 },
  NST: { name: "Newfoundland Standard Time", offset: -3.5 },
  BST: { name: "British Summer Time", offset: 1 },
  CET: { name: "Central European Time", offset: 1 },
  CEST: { name: "Central European Summer Time", offset: 2 }, // Daylight Saving Time (DST)
  EET: { name: "Eastern European Time", offset: 2 },
  EEST: { name: "Eastern European Summer Time", offset: 3 }, // Daylight Saving Time (DST)
  IST: { name: "Indian Standard Time", offset: 5.5 },
  AEST: { name: "Australian Eastern Standard Time", offset: 10 },
  AEDT: { name: "Australian Eastern Daylight Time", offset: 11 }, // Daylight Saving Time (DST)
  NZST: { name: "New Zealand Standard Time", offset: 12 },
  NZDT: { name: "New Zealand Daylight Time", offset: 13 }, // Daylight Saving Time (DST)
  JST: { name: "Japan Standard Time", offset: 9 },
  KST: { name: "Korea Standard Time", offset: 9 },
  SGT: { name: "Singapore Time", offset: 8 },
  ART: { name: "Argentina Time", offset: -3 },
  BRT: { name: "Brasília Time", offset: -3 },
};

module.exports = timeZones;
