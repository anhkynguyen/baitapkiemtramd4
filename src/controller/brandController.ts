import { Request, Response } from "express";
import brandService from "../service/brandService";

class BrandController {
    constructor(){

    }
    create = async (req:Request, res :Response)=>{
        let brand = req.body
         await brandService.save(brand)
        res.status(200).json('Create Success!')
      
    }
    getAll = async (req:Request, res :Response)=>{
        
      let brand =   await brandService.getAll()
        res.status(200).json(brand)
      
    }
}
export default new BrandController