import React from "react";

const UpdatedComponent2 = (OriginalComponent) =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                counter1 : 0,
                counter2 : 1
            }
            this.clickHandler = this.clickHandler.bind(this);
        }
        clickHandler(){
            this.setState({counter1:this.state.counter1 + 1});
            if(counter1 % 5 == 0){
                this.setState({counter1:this.state.counter1});
            }
        }
        render(){
            return <OriginalComponent counter1 = {this.state.counter1} incrementCount = {this.clickHandler}/>
        }
    }
    return NewComponent;
}
 
export default UpdatedComponent;