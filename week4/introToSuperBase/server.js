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

//==================================================
//To interact with our database and use SQL in the server, we need the pg package
//We are going to use pg to connect our database to the server and to write SQL queries
//I need to import pg
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

//We are going to "import" our connection string stored in the .env file, so we can use it in the server file
const dbConnectionString = process.env.DATABASE_URL;

//We need to set up a database pool to properly connect our database and server by creating a query pool
const db = new pg.Pool({
  connectionString: dbConnectionString,
});
