import React from "react";

const Scroll = (props) => {
    return (
        <div className="pt4" style={{overflowY: 'scroll', border: '5px black solid', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;