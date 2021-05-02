interface IService{
    [event:string]: (...args: any[])=> void;
}

export interface ServiceConstructor{
    new (): IService
}

export default IService;