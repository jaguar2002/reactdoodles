import React from 'react';

class ErrorBoundary extends React.Component{

    constructor(props){

        super(props);
        this.state = {error: false, errorInfo: null}

    }

    componentDidCatch(error,errorInfo){

        this.setState({error:error,errorInfo:errorInfo})

    }


}