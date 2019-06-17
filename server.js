const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");
const path = require("path");

const http = require("http");
const { Seeder } = require("mongo-seeding");

dotenv.config();

// socket io TODO
const chatContoller = require("./controllers/chatConroller");

// api routes
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("db connected"));

mongoose.connection.on("error", err =>
  console.log("db connection error " + err.message)
);

const server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});

console.log(process.env.NODE_ENV);
// seed databse
const seeder = new Seeder({
  database: process.env.MONGO_URI,
  dropDatabase: true
});

const collections = seeder.readCollectionsFromPath(path.resolve("./data"));

seeder.import(collections);

chatContoller.socketio(server);

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", authRoutes);
app.use("/", roomRoutes);

app.get("/", (req, res, next) => res.send("my backend api"));

app.use("/*", (req, res, next) =>
  res.status(500).json({ error: "endpoint does not exist" })
);

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized" });
  }
});
