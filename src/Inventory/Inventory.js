import React, { Component } from 'react';
import InventoryList from '../InventoryList/InventoryList';

class Inventory extends Component{
    render(){
        return(
            <div id="Inventory">
                <h1>Inventory.js</h1>
                <InventoryList />
            </div>
        ) //end return
    } // end render
} //end class

export default Inventory;