import express from 'express'
import MainRouter from './src/routes/master.js';
import * as dotenv from "dotenv";
import dbConnect from './src/config/database.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express();
app.use(cors({
    origin : ["http://localhost:3000"],
    methods: ['GET', 'POST'],
    credentials: true
}))



dotenv.config();
app.use('/uploads', express.static('uploads'))
app.use(cookieParser())
dbConnect();


app.use(express.json({
    limit : '20mb',
}))

app.get('/', (req, res)=>{
    console.log('client hit /')
    res.send('working fine');
})

app.use(MainRouter)

app.listen(process.env.PORT, ()=>{console.log("running on 4000")})