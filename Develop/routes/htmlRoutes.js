// Depend
var path = require("path");


// ======
// Routes
// ======

module.exports = function(app) {
    // HTML GET request
  
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
    // If no match then default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };
  