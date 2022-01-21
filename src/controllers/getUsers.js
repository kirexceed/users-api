const db = require("../../entities/Database");
const shuffle = require("../../helpers/shuffle");

function getUsers(){
   
        return new Promise ((resolve, reject) => {
            db.all("SELECT * FROM users", ( err, row ) => {
                if (err) {
                    return reject (`Error while retrieving ${q}`);
                } else {
                   return resolve (row);
                }
            });
        });
  
    
    
};


module.exports = getUsers;
