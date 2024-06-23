const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require("./db/dbconnect");
const Tourna = require("./db/tourDetails");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("tournaImage"));

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

app.post("/uploadDetails", upload.single("file"), async (req, resp) => {
  console.log("Request received");
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);

  if (!req.file) {
    return resp.status(400).send("No file uploaded.");
  }

  const { org, game, date } = req.body;
  const image = req.file.filename;

  try {
    const newTourney = new Tourna({
      org,
      game,
      date,
      image,
    });

    const result = await newTourney.save();
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.status(500).send("Error saving details");
  }
});

app.get("/showDetails", async (req, resp) => {
  const result = await Tourna.find();
  resp.send(result);
});
app.listen(4666, () => {
  console.log("Everything should be working fine ig");
});
