import express from "express";
import cors from "cors";

const app = express();

app.listen(8080, function () {
  console.log(`sever running on 8080`);
});

app.use(express.json()); // ensure this is present so the server can understand JSON data
app.use(cors());

app.post("/messages", (req, res) => {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});
