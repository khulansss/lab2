import React, {useState} from "react";

export default function useStateHook() {
    const [count, setCount] = useState("");
    
   
    return(
        <div >
            
            <button className="border border-black m-3 p-2 " onClick={() => setCount("khulan")}>Click me</button>
            <button className="border border-black m-3 p-2 " onClick={() => setCount("")}>Click me</button>
            <p className="ml-3">{count}</p>
            
            
        </div>
    )
};
