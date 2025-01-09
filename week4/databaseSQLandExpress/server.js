import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the root route!");
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});

//==============================================

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

//To use this pool in the seed file, we need to export it
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//I want to add a route that READS data from the database
//When we request data from the database, we don't know how long it is going to take for the request to be fulfilled.
//! We need to make the query asynchronous
app.get("/staff", async (req, res) => {
  //We need to query the database to send us the data from the table
  const query = await db.query(`SELECT * FROM staff`);
  //We need to translate the data into a language our server understands (JSON) and we can also wrangle the data to only give us the "rows" array
  await res.json(query.rows);
});

//I want to add a route that READS data from the database only where the id is 1
//If we are using specific values in our queries, we cannot expose the actual values when querying the database!
//Instead of writing the actual value, we will write a parameter to be the placeholder for that value
//Parameters in SQL work in the same way --> they are placeholders
//We use the $ and a number --> $1, $2, $3...
//Usually, the value replacing the parameter will come from the request
app.get("/staff-1", (req, res) => {
  const query = db.query(
    `SELECT * FROM staff WHERE id = $1 AND staff_name = $2`,
    [req.body.id, req.body.staffName]
  );
  res.json(query);
});
