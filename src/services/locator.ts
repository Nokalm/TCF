import IEventHandlers from "./iEvents";
import IService from "./iService";

class Locator implements IService{
    eventHandlers: IEventHandlers;
    commands: ICommands;
    
    constructor(){
        this.eventHandlers={
            getService: (tool:string, id:number) => console.log(`id: ${id} = ${tool}`)
        }

        this.commands={
            getSupportedToolTypes: () => { return new Promise((resolve, reject)=>resolve(["coucou"]))}
        }
    }
}

export default Locator;