import * as React from "react";
import * as ReactDOM from "react-dom";
import TestModule from "./testmodule";

window.addEventListener("load",()=>{
    ReactDOM.render(<TestModule content="Click Me"></TestModule>,document.getElementById("test"));
});