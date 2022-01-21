// const { EventEmitter } = require("events");
// const { existsSync } = require("fs");
// const { dbDumpFile } = require("../src/config/config");
// const { writeFile } = require("../utils/fs");
// const { prettifyJsonToString } = require("../utils/prettifyJsonToString");
// const User = require("./User");

// class Database extends EventEmitter {
//   constructor() {
//     super();

//     this.idToUsers = [];
//   }

//   async initFromDump() {
//     if (existsSync(dbDumpFile) === false) {
//       return;
//     }

//     const dump = require(dbDumpFile);
//     console.log(dump);
//     if (typeof dump.idToUsers === "object") {
//       this.idToUsers = [];

//       for (let id in dump.idToUsers) {
//         const user = dump.idToUsers[id];
//         this.idToUsers[id] = new User(
//           user.id,
//           user.gender,
//           user.firstname,
//           user.lastname,
//           user.borthDate,
//           user.email,
//           user.phone,
//           user.city,
//           user.picture
//         );
//       }
//       console.log("state", this.idToUsers);
//     }
//   }

//   async remove(userId) {
//     // const imgRaw = this.idToUser[imgId];
//     // const img = new Img(imgRaw.id, imgRaw.mimetype, imgRaw.size, imgRaw.createdAt);
//     // await img.removeOriginal();
//     // delete this.idToUser[imgId];
//     // this.emit('changed');
//     // return imgId;
//   }

//   find() {
//     let allUsers = this.idToUsers.map((user) => user);

//     return shuffle(allUsers);
//   }

//   toJSON() {
//     return {
//       idToUsers: this.idToUsers,
//     };
//   }
// }

// const db = new Database();

// db.initFromDump();

// db.on('changed', () => {
// 	writeFile(dbDumpFile, prettifyJsonToString(db.toJSON()));
// })

// module.exports = db;

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(
  "/Users/aberia/Desktop/pets/db/usersdb.sql");

module.exports = db;
