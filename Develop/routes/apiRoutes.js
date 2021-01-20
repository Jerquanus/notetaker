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
    // fix the code below you want to stringify to the file not the notes
  
    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        const data = json.stringify(newNote)
        notesData.push(newNote);
        fs.writeFile('./db/db.json',data,function(err){
            if(err) console.log(err)
            res.json(newNote);
        })
    });



    // re-use the code below to create a function that searches for the id to delete it
    app.get("/api/characters/:character", function(req, res) {
        var chosen = req.params.character;
      
        console.log(chosen);
      
        for (var i = 0; i < characters.length; i++) {
          if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
          }
        }
      
        return res.json(false);
      });









  
  };
  
