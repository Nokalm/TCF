import IEventHandlers from "./iEvents";

interface IService{
    name: string
    eventHandlers: IEventHandlers
    commands: ICommands 
}

export default IService;