import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import './components/errorhandling/ErrorBoundary1.js';
//import './components/errorhandling/BuggyCounter1.js';

class ErrorBoundary1 extends React.Component{
  constructor(props){
      super(props);
      this.state = {error:false, errorInfo:null};
  }
  componentDidCatch(error,errorInfo){
      this.setState({
          error:error,
          errorInfo:errorInfo
      })
  }
  render(){
      if(this.state.errorInfo){
          return(
              <div>
                  <h2>Something went wrong</h2>
              </div>
          )
      }
      return this.props.children;
  }
}

class BuggyCounter extends React.Component{

  constructor(props){
      super(props);
      this.state = {counter:0};
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
      this.setState(({counter}) => ({
          counter : counter + 1 
      }));

  
  }
  render(){
      if(this.state.counter === 3){
              throw new Error("I crashed");
      }
      return <h1 onClick = {this.handleClick} > {this.state.counter}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <p><b>Example of Error Boundaries</b></p>
      <hr/>
      <ErrorBoundary1>
        <BuggyCounter/>
        </ErrorBoundary1>i
      
    </div>
  );
}

export default App;
