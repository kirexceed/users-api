const { getUsers } = require('./controllers');
const express = require('express');
var cors = require('cors')

const { PORT } = require('./config/config');
const router = express.Router();

// const corsOptions = {
// 	origin: 'http://localhost:3000',
// 	optionsSuccessStatus: 200
//   }

const app = express();
//console.log('get users', getUsers().then(res => console.log(res)))
app.use(express.json());
app.use(cors())

router.get('/',  (req,res)=>   getUsers().then(x=>res.status(200).send(x))
	 
);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})