//import packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//start or configure packages
//tell server to use JSON
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//create a root route
app.get("/", (req, res) => {
  res.send("This is the root route!");
});

//set up a port for the server by listening...
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//post method
app.post("/form1Data", function (req, res) {
  console.log("This is the req.body", req.body);
  res.json({ status: "Message Received" });
});

// ------

//creating db pool
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//I need a route to READ data from the database
app.get("/messages", async (req, res) => {
  console.log("This is the req.body", req.body);
  const result = await db.query("SELECT * FROM form2");
  res.json(result.rows);
});

//I need a route to CREATE new data in the database

app.post("/new-data", async (req, res) => {
  console.log("This is the req.body", req.body);

  const { formValues } = req.body;

  const { username, email } = formValues;

  const query = await db.query(
    `INSERT INTO form2(username,email)
         VALUES ($1, $2) RETURNING *`,
    [username, email]
  );

  res.json({
    message: "Data inserted successfully!",
    newData: query.rows[0],
  });
});
