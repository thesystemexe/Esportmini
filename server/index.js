const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require("./db/dbconnect");
const Tourna = require("./db/tourDetails");

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "tournaImage/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/details", (req, resp) => {
  Tourna.create({ image: req.file.filename })
    .then((result) => resp.json(result))
    .catch((err) => console.log(err));
});

app.listen(4666, () => {
  console.log("Everything should be working fine ig");
});
