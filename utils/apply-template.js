const fs = require( 'fs' );


const templateFolder = `${__dirname}/../templates`;

function replaceStr( value, consts ) {
    return Object.keys( consts ).reduce( ( acc, c ) => acc.split( c ).join( consts[ c ] ), value );
}

function copyRec( sourceFolder, destination, consts ) {
    const destFolder = replaceStr( destination, consts );
    destFolder.split( '/' ).reduce( ( acc, c ) => [ ...acc, (acc.length === 0 ? c : `${acc[ acc.length - 1 ]}/${c}`) ], [] ).forEach( d => {
        if( !fs.existsSync( d ) ) fs.mkdirSync( d );
    } );

    const sourceFiles = fs.readdirSync( sourceFolder );

    sourceFiles.forEach( f => {
        if( fs.lstatSync( `${sourceFolder}/${f}` ).isDirectory() ) {
            copyRec( `${sourceFolder}/${f}`, `${destination}/${f}`, consts );
        } else {
            const content = replaceStr( fs.readFileSync( `${sourceFolder}/${f}` ).toString(), consts );
            const filename = replaceStr( `${destFolder}/${f}`, consts );
            if( !fs.existsSync( filename ) ) {
                fs.writeFileSync( filename, content );
            }
        }
    } );
}


module.exports = function( source, destination, consts ) {
    copyRec( `${templateFolder}/${source}`, destination, consts );
};
