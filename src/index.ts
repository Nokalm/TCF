import Dispatcher from "./client";
import Tool from "./services/tool";

const dispatcher = new Dispatcher([{name:'Tool', constructor: Tool}]);
dispatcher.services['Tool']['getTools']();
