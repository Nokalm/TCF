interface IEventHandlers{
    [event:string]: (...args:any[])=>void;
}

export default IEventHandlers;