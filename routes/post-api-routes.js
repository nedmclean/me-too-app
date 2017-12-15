// *** routes for saving data to the db ***

// Dependencies
var db = require("../models");

// Routes 
module.exports = function(app) {


//pushing the location to db

app.put("api/update/:id", function(req, res) {
    var query = {}
    if (req.body.shared_location){
        
    }
})

}
