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
        try{
        const sum = this.state.counter1 + this.state.counter2;
        this.setState({counter1 : sum , counter2:this.state.counter1});
        }
        catch(error){
            <h1>Site down come back later</h1> 
        }
    }

    render(){
        return(
            <div>
            <h1>{this.state.counter1}</h1>
            <button onClick = {this.increment}>Increment</button>
            </div>
        )
    }

}

export default Fibonnaci;