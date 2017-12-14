import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { $CMP$Cmp } from './$CMP_FILE$-cmp';
import { Stores } from '../../reducers';
import * as actions from '../../actions';


type $CMP$Props = {};

const mapStateToProps = ( store: Stores, props: $CMP$Props ) => ({});
const mapDispatchToProps = ( dispatch: Dispatch<any>, props: $CMP$Props ) => ({});


const $CMP$ = connect( mapStateToProps, mapDispatchToProps )( $CMP$Cmp );

export { $CMP$Props, $CMP$ };

export * from './$CMP_FILE$-cmp';
