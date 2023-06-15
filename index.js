import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import cors from "cors";
import NoteRoute from "./Routes/NotesRoutes.js"

import bodyParser from "body-parser";


dotenv.config();

const port = process.env.PORT || 3000;

await db();

const app = new express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", NoteRoute);

app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT: ${port}`);
});
