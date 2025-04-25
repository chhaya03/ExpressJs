<h1>Express.js</h1>
Express.js is a web application framework for Node.js. It's designed to simplify the process of building web applications and APIs.

<h1> What Is Express.js?</h1>
1) A minimal and flexible framework built on top of Node.js.<br>
2) elps you build server-side applications, RESTful APIs, and websites.<br>
3) It handles things like routing, middleware, request/response handling, and more.

<h1>⚙️ Why Use Express.js?</h1>
1) Simplicity: Less code to write compared to plain Node.js.<br>
2) Routing system: Easy to define routes like /home, /about, etc.<br>
3) Middleware support: Easily handle requests, authentication, errors, etc.<br>
4) Fast: Built on Node.js, which is non-blocking and asynchronous.<br>
5) Community support: Tons of tutorials, packages, and support available.


<h1>🚀 Common Use Cases:</h1>
1) Building REST APIs<br>
2) Creating web apps<br>
3) Backend for mobile apps<br>
4) Handling form submissions and user authentication <br><br><br>



Line | Description<br>
const express = require('express'); | Loads the Express.js framework.<br>
const app = express(); | Creates an app instance, which you’ll use to define routes and middleware.<br>
app.get('/', ...) | Defines a GET route for the root URL (/). When someone visits http://localhost:3000/, it sends back a plain message.<br>
app.get('/about', ...) | Another GET route for /about. This will return "about page !" when accessed.<br>
app.listen(3000, ...) | Starts the server and listens for requests on port 3000.


<h1>🧩 What is Middleware?</h1>
Middleware functions are functions that have access to the request (req) and response (res) objects in an Express app. They can:
Modify the request or response<br>
End the request-response cycle<br>
Call the next middleware in the stack using next()<br><br>

Middleware functions are used for handling tasks that happen between receiving a request and sending a response.

<h2>📦 Middleware Syntax:</h2>
app.use((req, res, next) => {<br>
  // Do something with the request or response<br>
  console.log('Middleware running');<br>
  next(); // Pass control to the next middleware or route handler<br>
});

<h2>🔄 How It Works (Flow):</h2>
When a request comes in:<br>
Request ➡️ Middleware 1 ➡️ Middleware 2 ➡️ Route Handler ➡️ Response

<h2>Built-in Middleware:</h2>
Express provides some built-in middleware like:<br>
express.static() – to serve static files<br>
express.json() – to parse JSON bodies<br>
express.urlencoded() – to parse URL-encoded data

<h2>💡 Why Use Middleware?</h2>
Logging<br>
Authentication/Authorization<br>
Parsing JSON, forms, etc.<br>
Error handling<br>
Serving static files<br>
Security (like Helmet.js)
