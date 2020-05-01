import React, { Component } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

class InventoryList extends Component{
    render(){
        return(
            <div id="InventoryList">
                <h1>InventoryList.js</h1>
                <ul>
                    { this.props.items.map( ( item, index )=><li key={ index }><InventoryItem item={ item }/></li> ) }
                </ul>
            </div>
        ) //end return
    } // end render
} //end class

export default InventoryList;