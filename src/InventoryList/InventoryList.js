import React, { Component } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

class InventoryList extends Component{
    render(){
        return(
            <div id="InventoryList">
                <h1>InventoryList.js</h1>
                <InventoryItem />
            </div>
        ) //end return
    } // end render
} //end class

export default InventoryList;