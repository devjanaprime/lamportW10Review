import React, { Component } from 'react';
import InventoryList from '../InventoryList/InventoryList';

class Inventory extends Component{
    state = {
        currentItem: {
            color: '',
            description: '',
            size: ''
        },
        items: []
    } //end state

    addItem = () =>{
        console.log( 'in addItem' );
        this.setState({
            items: [ ...this.state.items, this.state.currentItem ]
        }) //end set state
    } // end addItem

    handleChangeFor = ( event, property )=>{
        // console.log( 'in handleChangeFor:', property, event.target.value );
        this.setState({
            currentItem: { 
                ...this.state.currentItem,
                [property]: event.target.value
            }
        }) //end set state
    } //end handleChangeFor

    render(){
        return(
            <div id="Inventory">
                <div>
                    <h1>Add Item</h1>
                    <input type="text" placeholder="size" 
                        onChange={ ( event )=>this.handleChangeFor( event, "size" ) }>
                    </input>
                    <input type="text" placeholder="color"
                        onChange={ ( event )=>this.handleChangeFor( event, "color" ) }>
                    </input>
                    <input type="text" placeholder="description"
                        onChange={ ( event )=>this.handleChangeFor( event, "description" ) }>
                    </input>
                    <button onClick={ this.addItem }>Add Item</button>
                </div>
                <h3>{JSON.stringify( this.state ) }</h3>
                <InventoryList />
            </div>
        ) //end return
    } // end render
} //end class

export default Inventory;