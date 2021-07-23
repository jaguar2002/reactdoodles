import React, {Component}from "react";

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: " ",
        address: " "
      };
  
      this.submit = this.submit.bind(this);
    }
    submit() {
      window.alert(this.state.name + this.state.address);
    }
    changeName(e) {
      this.setState({ name: e.target.value });
    }
    changeAddress(e) {
      this.setState({ address: e.target.value });
    }
  
    render() {
      return (
        <form>
          <div>
            UserName
            <input
              type="input"
              value={this.state.name}
              onChange={(e) => this.changeName(e)}
            />
          </div>
  
          <div>
            Password
            <input
              type="input"
              value={this.state.address}
              onChange={(e) => this.changeAddress(e)}
            />
          </div>
          <button onClick={this.submit}>Submit</button>
        </form>
      );
    }
  }