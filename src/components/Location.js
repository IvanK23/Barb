import { useState } from "react";

export default function Location() {
    const [location, setLocation] = useState(localStorage.getItem('location'));
    const divStyle = {
        width: "55%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto"
    }
    function changeHandler(e) {
        const location = e.target.value;
        setLocation(location);
        localStorage.setItem('location', location);
    }
    return (
        // <select onChange={changeHandler} value={location}>
        //     <option value="first">First Location</option>
        //     <option value="second">Second Location</option>
        //     <option value="third">Third Location</option>
        // </select>

        <div style={divStyle} onClick={changeHandler} value={location}>
            {/* <span value="first">1</span> */}
            <input type="radio" value="вулиця Луганська, 30А"></input>
            <input type="radio" value="вулиця Антоновича, 20А"></input>
            <input type="radio" value="вулиця Князя Романа, 10А"></input>
        </div>
        
    );
}