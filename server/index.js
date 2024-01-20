import express from 'express';
import cros from 'cors';
import authRouter from './routes/authRouter.js';
import DBConnection from './database/db.js';



//create server
const app = express();

const PORT = 8000;
app.use(cros());
app.use(express.json());

app.use('/auth', authRouter);

//start server
DBConnection();
app.listen(PORT, () => console.log(`Server started at port ${PORT}`)) 