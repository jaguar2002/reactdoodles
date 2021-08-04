import React,{Component} from 'react';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age : 0
        };
        this.renderAge = this.renderAge.bind(this);
    }
    renderAge(event){
        this.setState({value:event.target.value});
        if(value < 13){
            throw new Error("age invalid");
        }
    }
    displayAge(event){
        alert("age submitted ");
        event.preventDefault();
    }

    render(){
        return(
        <div>
        <p>Username</p>
        <input type = "text"></input> 
        <p>Password</p>
        <input type = "text"></input>
        <p>Age</p>
        <input type = "text" value = {this.state.age} onChange = {this.renderAge}></input>
        <button onClick = {this.displayAge}>Submit</button>
        </div>
        )
    }

}

export default LoginPage;