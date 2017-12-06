const snake         = require( 'snake-case' ),
      applyTemplate = require( './apply-template' );


const prog = require( 'commander' )
    .arguments( '<component-name>' )
    .option( '-t, --target <target>', 'Create component into the `target` folder default: `.`', '.' )
    .option( '-f, --folder', 'Create component folder', '' )
    .action( ( cmpName ) => {
        const consts = {
            '$CMP$'     : cmpName,
            '$CMP_FILE$': snake( cmpName ).replace( '_', '-' ),
        };
        applyTemplate( 'component', `${prog.target}${prog.folder ? `/$CMP_FILE$` : ''}`, consts );
    }
 );


module.exports = prog;
