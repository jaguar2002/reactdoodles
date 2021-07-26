import React, {Component, createRef}from "react";



class A extends React.Component{

    constructor(props){
        super(props)
        this.crapRef = React.createRef();
    }

    screwMe=()=>{
        this.crapRef.current.value++;
    }

    render(){
        return(
            <video ref={this.createRef} width="300" height="200" controls pause>

            <source src={video} type="video/mp4"></source>
  
          </video>
        )
    }

}