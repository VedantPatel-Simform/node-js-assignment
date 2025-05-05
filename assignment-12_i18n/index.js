const express = require("express");
const i18n = require("i18n");
const app = express();

i18n.configure({
  locales: ["en", "hi"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  queryParameter: "lang",
  autoReload: true,
  updateFiles: false,
});

app.use(i18n.init);

app.get("/", (req, res) => {
  res.send(`
    <h1>${res.__("greeting")}</h1>
    <p>${res.__("welcome")}</p>
  `);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
