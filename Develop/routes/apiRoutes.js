// Link the Data

var noteData = require("../public/assets/js/index");

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
  
  
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      tableData.length = 0;
      waitListData.length = 0;
  
      res.json({ ok: true });
    });
  };
  
