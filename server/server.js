const express = require( 'express' );
const app = express();

const port = 5000;
let items = [
    {
        id: 1,
        color: 'red',
        description: 'drop of blood',
        size: 'tiny'
    },
    {
        id: 2,
        color: 'red',
        description: 'cup of blood',
        size: 'small'
    },
    {
        id: 3,
        color: 'red',
        description: 'bucket of blood',
        size: 'medium'
    },
]

app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( items );
})