// Link the Data

var noteData = require("../server");

// ============
// start routing

module.exports = function(app) {
    // API get
    app.get("/api/notes", function(req, res) {
      res.json(noteData);
    });
  
    // API POST request
  
    app.post("/api/notes", function(req, res) {
        noteData.push(req.body);
        res.json(true);
    });
  
  };
  
