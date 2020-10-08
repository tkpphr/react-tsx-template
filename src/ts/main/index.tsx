import React,{ useState } from "react";
import * as ReactDOM from "react-dom";
import TestModuleHook from "./TestModuleHook";
import TestModuleClass from "./TestModuleClass";

function App(){
    const [view,setView] = useState("hook");
    return (
        <div>
            <label>View:</label>
            <select value={view} onChange = {(e) => setView(e.target.options[e.target.selectedIndex].value) }>
                <option value="hook">Hook</option>
                <option value="class">Class</option>
            </select>
    { view === "hook" ? <TestModuleHook message="Hello React Hook!"/> : <TestModuleClass message="Hello React Class!"/> }
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("class"));
