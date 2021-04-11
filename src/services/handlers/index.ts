interface IHandlers{
    [id:string]: (...args:any[]) => void
}

export default IHandlers;