import React, {Component,createRef} from "react";

class QuantityIncrement extends React.Component{

    constructor(props){
        super(props);
        this.quantityRef = React.createRef();
    }

    incrementQuantity =()=>{
        this.quantityRef.current.value++;
    }

    render(){

        alert("Incremented");
        return(
            <div>

               <label>Enter Quantity: <input type = "text"  ref = {this.quantityRef}></input>
                <button onClick = {this.incrementQuantity}>+</button>
               </label>

            </div>
        )

    }


}

export default QuantityIncrement;