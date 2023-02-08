
import express from "express"
import { AppDataSource } from "./src/data-source";
import bodyParser from "body-parser"
import { router } from "./src/router/router";
import cors from "cors"

const app = express()
AppDataSource.initialize().then(()=>{
    console.log("Connected database Success !!!");
    
} );
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended :true}))
app.use('',router);
app.listen(8080,()=>{
    console.log("Server is running!!!");
    
})