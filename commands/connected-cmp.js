const consts        = require( '../utils/consts' ),
      applyTemplate = require( '../utils/apply-template' );


const prog = require( 'commander' )
    .arguments( '<component-name>' )
    .option( '-t, --target <target>', 'Create component into the `target` folder default: `.`', '.' )
    .action( ( cmpName ) => {
            const c = consts( cmpName, { '$CMP_SUFFIX$': '-cmp' } );
            const t = `${prog.target}/$CMP_FILE$`;
            applyTemplate( 'cmp', t, c );
            applyTemplate( 'connected-cmp', t, c );
        }
    );


module.exports = prog;
