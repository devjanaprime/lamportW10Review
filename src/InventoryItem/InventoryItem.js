import React, { Component } from 'react';

class InventoryItem extends Component{
    render(){
        return(
            <span>{ this.props.item.description }</span>
        ) //end return
    } // end render
} //end class

export default InventoryItem;