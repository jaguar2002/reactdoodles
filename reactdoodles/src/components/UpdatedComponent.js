import React from "react";

const UpdatedComponent = (OriginalComponent,incrementNbr) =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count : 0,
            }
            this.clickHandler = this.clickHandler.bind(this);
        }
        clickHandler(){
            this.setState({count : this.state.count + incrementNbr});
        }
        render(){
            return <OriginalComponent count = {this.state.count} incrementCount = {this.clickHandler}/>
        }
    }
    return NewComponent;
}
 
export default UpdatedComponent;