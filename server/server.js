const express = require( 'express' );
const app = express();

const port = 5000;

app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( 'tweet' );
})