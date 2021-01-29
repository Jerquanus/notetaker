// Link the Data

var notesData = require("../db/db.json");
var fs = require('fs');
var id = 1;

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
        newNote.id = id;
        id++;
        notesData.push(newNote)
        const data = JSON.stringify(notesData)
        fs.writeFile('./db/db.json',data,function(err){
            if(err) console.log(err)
            res.json(newNote);
        })
    });

    app.delete("/api/notes/:id", function(req, res) {
       const idToDelete = req.params.id
       
       for (var i = 0; i < notesData.length; i++) {
              if (idToDelete == notesData[i].id) {
                notesData.splice(i, 1)

                const data = JSON.stringify(notesData)
                fs.writeFile('./db/db.json',data,function(err){
                    if(err) console.log(err)
                     return res.json(notesData);
                })
                return 
              }
            }
       
       console.log(idToDelete)
      
    });



    // re-use the code below to create a function that searches for the id to delete it
    // app.get("/api/characters/:character", function(req, res) {
    //     var chosen = req.params.character;
      
    //     console.log(chosen);
      
    //     for (var i = 0; i < characters.length; i++) {
    //       if (chosen === characters[i].routeName) {
    //         return res.json(characters[i]);
    //       }
    //     }
      
    //     return res.json(false);
    //   });









  
  };
  
