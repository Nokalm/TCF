interface ICommands{
    [command: string]: (...args: any[]) => Promise<any>
}