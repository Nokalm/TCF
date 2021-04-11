import IEvents from "./iEvents";
import IService from "./iService";

class Tool implements IService {

    eventHandlers: IEvents;
    commands: ICommands;

    constructor(){
        this.eventHandlers={
            getTools: (tool:string, id:number) => console.log(`id: ${id} = ${tool}`)
        }

        this.commands={
            getSupportedToolTypes: () => { return new Promise((resolve, reject)=>resolve(["coucou"]))}
        }
    }


}
export default Tool;