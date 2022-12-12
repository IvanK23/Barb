import { useState } from "react";

export default function Master() {
    const [master, setMaster] = useState(localStorage.getItem('master'));
    const divStyle = {
        width: "55%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto"
    }
    function changeHandler(e) {
        const master = e.target.value;
        setMaster(master);
        localStorage.setItem('master', master);
    }
    return (
        // <select onChange={changeHandler} value={location}>
        //     <option value="first">First Location</option>
        //     <option value="second">Second Location</option>
        //     <option value="third">Third Location</option>
        // </select>

        <div style={divStyle} onClick={changeHandler} value={master}>
            {/* <span value="first">1</span> */}
            <input type="radio" value="Yaroslav"></input>
            <input type="radio" value="Oleg"></input>
            <input type="radio" value="Roman"></input>
        </div>
        
    );
}