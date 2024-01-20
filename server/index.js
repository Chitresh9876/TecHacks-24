import express from 'express';
import cros from 'cors';
import router from './routes/routes.js'
import DBConnection from './database/db.js';



//create server
const app = express();

const PORT = 8000;
app.use(cros());

app.use('/', router);

//start server
DBConnection();
app.listen(PORT, () => console.log(`Server started at port ${PORT}`)) 