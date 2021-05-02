import IService from "./iService";

class Tool implements IService {
    [event: string]: (...args: any[]) => void;
    getTools = () => console.log('tools = nada')
}

export default Tool;