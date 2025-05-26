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


<h1>Status code :</h1>
Status codes are part of the HTTP protocol and provide information about the outcome of an HTTP request. When a client (such as a browser or an API client) makes a request to a server, the server responds with a status code to indicate whether the request was successful or if there was an issue. These codes are grouped into five categories, each representing different types of responses:<br>

<ol>
  <li>Informational responses (100 – 199)  </li>
<li>Successful responses (200 – 299)  </li>
<li>Redirection messages (300 – 399)  </li>
<li>Client error responses (400 – 499)  </li>
<li>Server error responses (500 – 599)  </li>

</ol>


<h2>1. Informational (1xx):</h2>
100 Continue: The server has received the request headers, and the client should proceed to send the request body.<br>
101 Switching Protocols: The server is switching protocols as requested by the client.

<h2>2. Successful (2xx):</h2>
200 OK: The request was successful, and the server has returned the requested data. This is the most common status code for successful responses.<br>
201 Created: The request has been fulfilled, and a new resource has been created. Typically used when a resource is created via a POST request.<br>
204 No Content: The server successfully processed the request, but there is no content to send in the response (often used for DELETE requests).

<h2>3. Redirection (3xx)
:</h2>
301 Moved Permanently: The requested resource has been permanently moved to a new URL.<br>
302 Found: The requested resource has been temporarily moved to a different URL.<br>
303 See Other: The server recommends the client access a different URL using a GET request.

<h2>4. Client Error (4xx):</h2>
400 Bad Request: The request could not be understood by the server due to malformed syntax.<br>
401 Unauthorized: The client must authenticate themselves to get the requested response.<br>
403 Forbidden: The server understands the request, but it refuses to authorize it.<br>
404 Not Found: The requested resource could not be found on the server.<br>
405 Method Not Allowed: The method specified in the request is not allowed for the resource.


<h2>5. Server Error (5xx):</h2>
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.<br>
501 Not Implemented: The server does not support the functionality required to fulfill the request (e.g., the method used is not supported by the server).<br>
503 Service Unavailable: The server is temporarily unable to handle the request (e.g., due to overload or maintenance).


<h1>model-view-controller:</h1>
Model-View-Controller (MVC) is a software architectural pattern used to separate concerns in an application. In the context of Express.js, which is a web framework for Node.js, the MVC pattern helps organize your code better and makes it easier to maintain, test, and scale.

<h2>🔧 MVC Components in Express.js:</h2>
1. Model (M) – Handles data and business logic
  <ul>
    <li>Represents the data structure (usually interacts with a database).</li>
    <li>Example: Mongoose models for MongoDB.</li>
  </ul>

  2.View (V) – Handles the presentation layer
  <ul>
    <li>What the user sees – usually HTML pages rendered using a templating engine like EJS, Pug, or Handlebars.</li>
  </ul>

   3.Controller (C) – Handles application logic and user input
  <ul>
    <li>Receives input from routes, processes it (possibly calling the model), and returns a response (view or JSON).</li>
  </ul>


  <h2>✅ Folder Structure Example (Express.js + MVC):</h2>
  my-app/<br>
├── models/<br>
│   └── userModel.js<br>
├── views/<br>
│   └── user.ejs<br>
├── controllers/<br>
│   └── userController.js<br>
├── routes/<br>
│   └── userRoutes.js<br>
├── app.js


<h2>✅ Benefits of Using MVC in Express.js:</h2>
1. Clean separation of concerns<br>
2. Easier collaboration for teams (frontend/backend)<br>
3. Scalable and testable architecture



<h1>Multer:</h1>
This is a simple Node.js and Express application demonstrating how to upload files using the Multer middleware.

<h2>🚀 Features:</h2>
Upload single files (e.g., images, documents, etc.)<br>
Save uploaded files in a local upload/ directory<br>
Uses EJS for rendering a basic file upload form


<h2>Technologies Used:</h2>
Node.js<br>
Express.js<br>
Multer<br>
EJS (for templating)


