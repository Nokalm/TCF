import IEventHandlers from "./iEvents";
import IService from "./iService";

class Locator implements IService{
    [event: string]: (...args: any[]) => void;
    getService = (tool:string, id:number) => console.log(`id: ${id} = ${tool}`);
    getSupportedToolTypes= () => { return new Promise((resolve, reject)=>resolve(["coucou"]))}
    
}

export default Locator;