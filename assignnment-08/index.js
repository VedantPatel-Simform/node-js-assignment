const http = require("http");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const querystring = require("querystring");
const port = 3000;
const { cors, helmet } = require("./utils/utils");
const { verifyJwt, generateJwt } = require("./utils/jwt");

const users = [
  {
    name: "admin",
    password: "admin123",
  },
];

http
  .createServer((req, res) => {
    cors(req, res);
    helmet(req, res);

    if (req.method === "GET" && req.url === "/") {
      // open login page on root
      res.writeHead(302, { Location: "/login" });
      res.end();
    } else if (req.method === "GET" && req.url === "/login") {
      // check if user already have valid JWT , if yes, then redirect to user page
      if (verifyJwt(req.headers.cookie?.split("=")[1])) {
        res.writeHead(302, { Location: "/user" });
        res.end();
        return;
      }

      // render login.ejs
      const filePath = path.join(__dirname, "views", "login.ejs");

      fs.readFile(filePath, "utf-8", (err, template) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading form template.");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(ejs.render(template, {}));
      });
    } else if (req.method === "POST" && req.url === "/submit") {
      // handle from data as it comes in streams
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      // when all data is received then this function will run
      req.on("end", () => {
        // querystring is used to handle fromData
        const formData = querystring.parse(body);
        const data = {
          name: formData.name,
          password: formData.password,
        };

        // check if the user is valid
        let flag = 0;
        users.forEach((user) => {
          if (user.name === data.name && user.password === data.password) {
            flag = 1;
          }
        });

        // return response in case user is invalid
        if (flag === 0) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(
            "<h1>Wrong password or username <br> <a href='/login' >Login page</a></h1>"
          );
          return;
        }

        // generate token and set it in cookie
        const token = generateJwt({ name: data.name });
        res.setHeader("Set-Cookie", `authToken=${token}; HttpOnly`);

        // redirect to user page
        res.writeHead(302, { Location: "/user" });
        res.end();
      });
    } else if (req.method === "GET" && req.url === "/user") {
      // get the token from cookie
      const cookie = req.headers.cookie;
      const token = cookie ? cookie.split("=")[1] : null;
      const decodedToken = verifyJwt(token);

      // if the token is invalid, then below code runs
      if (!(token || decodedToken)) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(
          "<h1>Unauthorized access <br> <a href='/login' >Login page</a> </h1>"
        );
        return;
      }

      // render user.ejs if valid token
      const filePath = path.join(__dirname, "views", "user.ejs");
      fs.readFile(filePath, "utf-8", (err, template) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading form template.");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(ejs.render(template, decodedToken));
      });
    } else if (req.method === "GET" && req.url === "/logout") {
      // if user wants to logout , then the cookie is removed and redirect to login
      res.setHeader("Set-Cookie", "authToken=; HttpOnly");
      res.writeHead(302, { Location: "/login" });
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
