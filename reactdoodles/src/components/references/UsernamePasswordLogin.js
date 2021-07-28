import React,{Component}from "react";

class UsernamePasswordLogin extends React.Component{

    constructor(props){
        super(props);
        this.userName = React.createRef();

    }

    focusOnText =()=>{
        this.userName.current.focus();
    }

    render(){
        return(
            <div>
                <label><input type = "text" ref = {this.userName}/></label>
                <button onClick = {this.focusOnText}>enter</button>
            </div>
        )
    }

}

export default UsernamePasswordLogin;