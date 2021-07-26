import React, {Component,createRef} from "react";

class QuantityIncrement extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        alert("Incremented");
        return(
            <div>

                <input type = "text"></input>
                <button onClick = {this.incrementQuantity}>+</button>


            </div>
        )

    }


}

export default QuantityIncrement;