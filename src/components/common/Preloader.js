import React from "react";
import preloader from "../../assets/images/loader.svg"

let Preloader = () => {
    return (<div>
        <img src={preloader} alt={"loader"}/>
    </div>);
}

export default Preloader;