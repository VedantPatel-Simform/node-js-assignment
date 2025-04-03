const http = require("http");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const querystring = require("querystring");

const port = 3000;

// Create the server
http
  .createServer((req, res) => {
    // Redirect from `/` to `/register`
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(302, { Location: "/register" });
      res.end();
    }

    // Route for showing the registration form
    else if (req.method === "GET" && req.url === "/register") {
      const filePath = path.join(__dirname, "views", "form.ejs");

      fs.readFile(filePath, "utf-8", (err, template) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading form template.");
          return;
        }
        res.statusCode = 200;
        res.end(ejs.render(template, {}));
      });
    }

    // Handle form submission
    else if (req.method === "POST" && req.url === "/submit") {
      let body = "";
      req.on("data", (chunk) => {
        console.log("data come");
        console.log("DATA = ", chunk); // data come as buffer
        body += chunk; // js automatically type coersion to string
      });

      req.on("end", () => {
        console.log(body);
        const formData = querystring.parse(body); // Convert the query string to an object

        const data = {
          name: formData.name,
          email: formData.email,
        };

        const filePath = path.join(__dirname, "views", "submitted.ejs");

        fs.readFile(filePath, "utf-8", (err, template) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading submitted template.");
            return;
          }

          res.statusCode = 200;
          res.end(ejs.render(template, data));
        });
      });
    }

    // if the user try to access other routes
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
