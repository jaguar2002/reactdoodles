import React from {react};

class ErrorBoundaries extends React.Component{

    constructor(props){
        super(props);
        this.state = {hasError = false}
    }

    static getDerivedStateFromError(){
        return{hasError: true};
    }

    componentDidCatch(error,info){

     logErrorToMyService(error,info);

    }

render(){ 
    if(this.state.hasError){
        return <h1 style = "color:red">Error</h1>
    }
    return this.props.children;
    }
}