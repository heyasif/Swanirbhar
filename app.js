const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerConfig = require("./swaggerConfig");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// Routes
require("./routes/auth.routes")(app);
require("./routes/course.routes")(app);
require("./routes/progress.routes")(app);

// Swagger API documentation
swaggerConfig(app);

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Course Management API" });
});

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
