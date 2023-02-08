import { Brand } from '../model/brand';
import { AppDataSource } from '../data-source';
class BrandService {
    private brandRepository
    constructor(){
this.brandRepository = AppDataSource.getRepository(Brand)
    }
getAll = async()=>{
    return this.brandRepository.find()
}
save = async(brand)=>{
    return this.brandRepository.save(brand)
}

}
export default new BrandService