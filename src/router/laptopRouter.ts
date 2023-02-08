import { Router } from "express";
import laptopController from "../controller/laptopController";
export const laptopRouter = Router()
laptopRouter.get('',laptopController.getAll)
laptopRouter.post('',laptopController.create)
laptopRouter.delete('/:id',laptopController.delete)
laptopRouter.put('/:id',laptopController.update)
laptopRouter.get('/findByName',laptopController.searchByName)
laptopRouter.get('/findByBrand',laptopController.searchByBrand)
laptopRouter.get('/sortUpByPrice',laptopController.sortUpByPrice)
laptopRouter.get('/sortByQuantity',laptopController.sortUpByPrice)
laptopRouter.get('/:id',laptopController.findById)





    


