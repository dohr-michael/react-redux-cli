#!/usr/bin/env node --harmony


const fs = require( 'fs' ),
      _  = require( 'lodash' );

const allCmd = fs.readdirSync( `${__dirname}/commands` ).map( f => f.replace( '.js', '' ) );

if( process.argv.length < 3 || allCmd.indexOf( process.argv[ 2 ] ) === -1 ) {
    console.error( `Usage: rr <${allCmd.join( ' | ' )}>` );
} else {
    const cmd = [ process.argv[ 0 ], `rr ${process.argv[ 2 ]}`, ...process.argv.slice( 3 ) ];
    require( `${__dirname}/commands/${process.argv[ 2 ]}` ).parse( cmd );
}

