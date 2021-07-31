import React, {Component} from 'react';
import UpdatedComponent from './UpdatedComponent';

class HoverClass extends Component{

    render(){
        const {count, incrementCount} = this.props;
        return(
            <div>
                <h2 onClick = {incrementCount}>Hovered {count} times</h2>
            </div> 
        )
    }

}

export default UpdatedComponent(HoverClass,1);