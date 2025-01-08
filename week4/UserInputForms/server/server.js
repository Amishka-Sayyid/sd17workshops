import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.listen(port, function () {
  console.log(`sever running on ${port}`);
});

app.use(express.json()); // ensure this is present so the server can understand JSON data
app.use(cors());

app.post("/messages", express.json(), (req, res) => {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});
