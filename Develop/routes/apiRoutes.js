// Link the Data

var notesData = require("../db/db.json");
var fs = require('fs')

// ============
// start routing
module.exports = function(app) {

    // API get
    app.get("/api/notes", function(req, res) {

        console.log('NOTES DATA--->', notesData)
        res.json(notesData);
    });
  
    // API POST request
  
    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        const data = json.stringify(newNote)
        notesData.push(newNote);
        fs.writeFile('./db/db.json',data,function(err){
            if(err) console.log(err)
            res.json(newNote);
        })
    });



    // app.post("/api/notes", function)










  
  };
  
