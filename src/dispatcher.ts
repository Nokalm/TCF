import IService from "./services/iService";

interface IServices{
    [name: string]: IService
}

class Dispatcher{
    private services: IServices

    constructor(){
        this.services = {}
    }

    add = (service: IService) => {
        this.services[service.name] = service;
    }
}

export default Dispatcher;