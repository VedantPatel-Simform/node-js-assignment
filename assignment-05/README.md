# Creating a Simple HTTP Server in Node.js

## Code Implementation

The following code creates a basic HTTP server in Node.js:

```javascript
const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("My first Server started !!!\n");
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
```

## Code Explanation

1. **Importing HTTP Module**

   ```js
   const http = require("http");
   ```

   - Loads the built-in `http` module to create an HTTP server.

2. **Creating the Server**

   ```js
   const server = http.createServer((req, res) => { ... });
   ```

   - `http.createServer()` sets up a server that listens for incoming requests.
   - `(req, res) => { ... }` is a callback function that handles requests and sends responses.

3. **Handling Requests and Responses**

   ```js
   res.writeHead(200, { "Content-Type": "text/plain" });
   res.end("My first Server started !!!\n");
   ```

   - `res.writeHead(200, { "Content-Type": "text/plain" });`
     - Sends a response status of `200` (OK) and specifies that the content is plain text.
   - `res.end("My first Server started !!!\n");`
     - Sends a response message to the client and ends the request.

4. **Starting the Server**
   ```js
   .listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```
   - The server starts listening on **port 3000**.
   - When the server starts, it logs a message to indicate it's running.

## How to Run the Server

1. Save the above code in a file named `index.js`.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to start the server:
   ```sh
   node index.js
   ```
   or
   ```sh
   npm start
   ```
4. Open a web browser on:
   ```sh
   http://localhost:3000
   ```
5. You should see the response: **"My first Server started !!!"**
