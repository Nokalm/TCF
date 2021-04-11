import IEventHandlers from "./iEvents";

interface IService{
    eventHandlers: IEventHandlers
    commands: ICommands 
}

export default IService;