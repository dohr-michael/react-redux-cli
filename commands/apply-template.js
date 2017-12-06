const fs = require( 'fs' );


const templateFolder = `${__dirname}/../templates`;

function replaceStr( value, consts ) {
    return Object.keys( consts ).reduce( ( acc, c ) => acc.split( c ).join( consts[ c ] ), value );
}


module.exports = function( source, destination, consts ) {
    const sourceFolder = `${templateFolder}/${source}`;
    const sourceFiles = fs.readdirSync( sourceFolder );

    const destFolder = replaceStr( destination, consts );
    destFolder.split( '/' ).reduce( ( acc, c ) => [ ...acc, (acc.length === 0 ? c : `${acc[ acc.length - 1 ]}/${c}`) ], [] ).forEach( d => {
        if( !fs.existsSync( d ) ) fs.mkdirSync( d );
    } );

    sourceFiles.forEach( f => {
        const content = replaceStr( fs.readFileSync( `${sourceFolder}/${f}` ).toString(), consts );
        const filename = replaceStr( `${destFolder}/${f}`, consts );
        if( !fs.existsSync( filename ) ) {
            fs.writeFileSync( filename, content );
        }
    } );

};
