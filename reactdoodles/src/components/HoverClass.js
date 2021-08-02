import React, {Component} from 'react';
import UpdatedComponent from './UpdatedComponent';

class HoverClass extends Component{

    render(){
        const {counter1, incrementCount} = this.props;
        return(
            <div>
                <h2 onClick = {incrementCount}>Hovered {counter1} times</h2>
            </div> 
        )
    }

}

export default UpdatedComponent(HoverClass);