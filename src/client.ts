import IService, { ServiceConstructor } from "./services/iService";

interface IServices{
    [name: string]: IService
}

class Client{
    public services: IServices

    constructor(servicesObj : {name:string, constructor: ServiceConstructor}[]){
        this.services = {}
        servicesObj.forEach(({name, constructor})=>{
            this.services[name] = new constructor();
        })
    }
}

export default Client;