const consts        = require( '../utils/consts' ),
      applyTemplate = require( '../utils/apply-template' );


const prog = require( 'commander' )
    .arguments( '<component-name>' )
    .option( '-t, --target <target>', 'Create component into the `target` folder default: `.`', '.' )
    .action( ( cmpName ) => {
            const c = consts( cmpName );
            const t = `${prog.target}`;
            applyTemplate( 'module', t, c );
        }
    );


module.exports = prog;
