const { getUsers } = require("./controllers");
const express = require("express");
var cors = require("cors");

const { PORT } = require("./config/config");
const router = express.Router();

// const corsOptions = {
// 	origin: 'http://localhost:3000',
// 	optionsSuccessStatus: 200
//   }

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
	try {
		let users = await getUsers(); 
		res.status(200).send(users)
	} catch (error) {
		res.status(500).send(error)
	}
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
