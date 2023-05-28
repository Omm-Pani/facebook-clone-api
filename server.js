const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const app = express();
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

//Routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//Database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("Database Succesfully connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
