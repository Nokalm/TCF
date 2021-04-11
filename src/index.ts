import Dispatcher from "./dispatcher";
import Tool from "./services/tool";

const dispatcher = new Dispatcher();
const tool = new Tool();
tool.eventHandlers["getTools"]("atmelice", 1);

for(let evt in tool.eventHandlers){
    console.log(evt)
}

console.log(Object.keys(tool))
tool.commands["getSupportedToolTypes"]().then(value=>console.log(value));
console.log(tool.constructor.name);