//const db = require("../../entities/Database");
const shuffle = require("../../helpers/shuffle");

function getUsers() {

    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve({ data: 'a lot of mocked users' })
        }, 4000);
        Math.random() > 0.5 && reject('Some classic error')
        /* db.all("SELECT * FROM users", ( err, row ) => {
            if (err) {
                return reject (`Error while retrieving ${q}`);
            } else {
               return resolve (row);
            }
        }); */
    });
};


module.exports = getUsers;
