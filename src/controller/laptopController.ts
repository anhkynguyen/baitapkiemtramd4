import { Request, Response } from "express";
import laptopService from "../service/laptopService";

class laptopController {
  constructor() {}
  getAll = async (req: Request, res: Response) => {
      let laptop = await laptopService.getAll();
      res.status(200).json(laptop);
  };
  create = async (req: Request, res: Response) => {

    let laptop = req.body;
    await laptopService.save(laptop);
    res.status(200).json("Create Success !");
  };
  delete = async (req: Request, res: Response) => {
    let id = req.params.id;
    await laptopService.remove(id);
    res.status(200).json("delete Success!");
  };
  update = async (req: Request, res: Response) => {
    let id = req.params.id;
    let newLaptop = req.body;

    await laptopService.update(id, newLaptop);
    res.status(200).json("Update Success!");
  };
  searchByName = async (req: Request, res: Response) => {
    let value = req.query.q;
    console.log(value);
    let laptop = await laptopService.searchByName(value);
    res.status(200).json(laptop);
  };
  searchByBrand = async (req: Request, res: Response) => {
    let value = req.query.q;
    let laptop = await laptopService.searchByBrand(value);
    res.status(200).json(laptop);
  };
  
  sortUpByPrice = async (req: Request, res: Response) => {
    let laptop = await laptopService.sortUpByPrice();
    res.status(200).json(laptop);
};
sortDownByQuantity = async (req: Request ,res :Response)=>{
  let laptop = await laptopService.sortDownByQuantity()

  res.status(200).json(laptop)
}
findById = async (req: Request, res: Response) => {
  let id = req.params.id;
  let laptop = await laptopService.findById(id);
  res.status(200).json(laptop);
};

}
export default new laptopController();
