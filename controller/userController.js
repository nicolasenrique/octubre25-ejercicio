const fs = require('fs');

let userController = {

    index: function(req, res) {
        res.render('index');
    
    }

};

module.exports = userController;