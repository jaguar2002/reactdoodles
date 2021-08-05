import React,{Component} from 'react';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age: 1
        }
        this.renderAge = this.renderAge.bind(this);
        this.displayAge = this.displayAge.bind(this);
    }

    renderAge(event){
        this.setState({age: event.target.value});
      
    }

    displayAge(event){
        alert("age submitted");
        if(this.state.age < 13){
            //  throw new Error("age invalid");
            alert("age less than 13 is not permitted");
          }
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
                <input type = "text"  onChange = {this.renderAge} value = {this.state.age}></input>
                <button onClick = {this.displayAge}>Submit</button>
            </div>
        )
    }

}

export default LoginPage;