#!/usr/bin/env node --harmony


const fs = require( 'fs' ),
      _  = require( 'lodash' );

console.log( __dirname );

const allCmd = fs.readdirSync( `${__dirname}/commands` ).map( f => f.replace( '.js', '' ) );

if( process.argv.length < 3 || allCmd.indexOf( process.argv[ 2 ] ) === -1 ) {
    console.error( `Usage: rcl <${allCmd.join( ' | ' )}>` );
} else {
    const cmd = [ process.argv[ 0 ], `rcl ${process.argv[ 2 ]}`, ...process.argv.slice( 3 ) ];
    require( `${__dirname}/commands/${process.argv[ 2 ]}` ).parse( cmd );
}

