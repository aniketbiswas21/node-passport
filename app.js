const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");

const app = express();

//set up a view engine
app.set("view engine", "ejs");

// set up routes
app.use("/auth", authRoutes);

//create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app now listening for requests on port 3000");
});
