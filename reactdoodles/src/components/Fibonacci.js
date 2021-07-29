import React from "react";


class Fibonnaci extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counter1: 0,
            counter2: 1
        }
        this.increment = this.increment.bind(this);
    }

    increment(){
        const sum = this.state.counter1 + this.state.counter2;
        this.setState({counter1 : sum , counter2:this.state.counter1});
    }

    render(){
        return(
            <div>
            <p>{this.state.counter1}</p>
            <button onClick = {this.increment}>Increment</button>
            </div>
        )
    }

}

export default Fibonnaci;