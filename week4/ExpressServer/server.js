import express from "express";

const app = express();

// your routes will go here...

app.listen(3000, function () {
  console.log("Server is listening on port 3000...");
});

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});

//Creating a route to handle a POST request
app.post("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});

// Middleware to parse JSON in the request body
app.use(express.json());

//trial routing

app.get("/hello", (req, res) => {
  res.send("hello how are you!");
});

//handling http get request
// Sample data (array for storing items)
let stationary = ["pen", "pencil", "rubber"];

app.get("/items", (req, res) => {
  res.json(stationary);
});

//handling post request

app.post("/items", (req, res) => {
  const newItem = req.body.stationary;
  stationary.push(newItem);
  res.json(stationary);
});
