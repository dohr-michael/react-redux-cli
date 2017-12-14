const snake = require( 'snake-case' );


module.exports = function( cmpName, additions = {} ) {
    const sk = snake( cmpName );
    const cml = sk.split( '_' ).reduce( ( acc, c ) => {
        if( acc.length > 0 ) return acc + c.substr( 0, 1 ).toUpperCase() + c.substring( 1 );
        return c;
    }, '' );
    return Object.assign( {
        '$CMP$'       : cmpName,
        '$CMP_FILE$'  : sk.split( '_' ).join( '-' ),
        '$CMP_CAMEL$' : cml,
        '$CMP_SUFFIX$': '',
    }, additions || {} );
};
