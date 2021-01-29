//  create express dependancy
var express = require("express");
// =========

// tell node to create express server
var app = express();

// =========
// create listening port
var PORT = process.env.PORT || 8080;

// =========
// handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// =========
// create routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =========
// start listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

