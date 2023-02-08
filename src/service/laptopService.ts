import { Laptop } from "../model/laptop";
import { AppDataSource } from "../data-source";
class laptopService {
  private laptopRepository;
  constructor() {
    this.laptopRepository = AppDataSource.getRepository(Laptop);
  }
  save = async (laptop) => {
    return await this.laptopRepository.save(laptop);
  };
  getAll = async () => {
    let sql = `select * from laptop join brand on laptop.brand = brand.idBrand`;
    return await this.laptopRepository.query(sql);
  };
  findById = async (id) => {
    let laptop = await this.laptopRepository.findOneBy({ idLaptop: id });
    if (!laptop) {
      return null;
    } else {
      return laptop;
    }
  };
  remove = async (id) => {
    let laptop = await this.laptopRepository.findOneBy({ idLaptop: id });
    if (!laptop) {
      return null;
    } else return this.laptopRepository.delete({ idLaptop: id });
  };
  update = async (id, newLaptop) => {
    let laptop = await this.laptopRepository.findOneBy({ idLaptop: id });
    if (!laptop) {
      return null;
    } else {
      return await this.laptopRepository.update({ idLaptop: id }, newLaptop);
    }
  };
  searchByName = async (value)=>{
    let sql = `select * from laptop where laptop.name like "%${value}%"`
    let laptop = this.laptopRepository.query(sql)
    if(!laptop){
        return null
    }
    else{
        return laptop
    }
  }
  searchByBrand = async (value)=>{
    let sql = `select * from laptop join brand on laptop.brand = brand.idBrand where brand.nameBrand like "%${value}%"`
    let laptop = this.laptopRepository.query(sql)
    if(!laptop){
        return null
    }
    else{
        return laptop
    }
  }
  
sortUpByPrice = async ()=>{
    let sql =  `select * from laptop join brand on laptop.brand = brand.idBrand order by laptop.price ASC`
    let laptop = await this.laptopRepository.query(sql)
    return  laptop
    
  }
  sortDownByQuantity = async ()=>{
    let sql = `select * from laptop order by laptop.quantity DESC`
    let laptop = await this.laptopRepository.query(sql)
    return laptop
    
  }
}
export default new laptopService();
