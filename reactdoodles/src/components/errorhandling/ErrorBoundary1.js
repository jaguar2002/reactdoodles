import React from 'react';

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

export default ErrorBoundary1;