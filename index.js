import express from "express";

import bodyParser from "body-parser";
import translateRouter from "./Routes/ToTranslateRoute.js";

const app = express();

app.use(bodyParser.json());
app.use("/translate", translateRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
