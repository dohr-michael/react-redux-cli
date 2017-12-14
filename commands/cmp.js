const consts        = require( '../utils/consts' ),
      applyTemplate = require( '../utils/apply-template' );


const prog = require( 'commander' )
    .arguments( '<component-name>' )
    .option( '-t, --target <target>', 'Create component into the `target` folder default: `.`', '.' )
    .action( ( cmpName ) => {
            applyTemplate( 'cmp', prog.target, consts( cmpName ) );
        }
    );


module.exports = prog;
