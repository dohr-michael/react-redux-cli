import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { $CMP$Base } from './$CMP_FILE$-base';
import { Stores } from '../../reducers';


type $CMP$Props = {};

const mapStateToProps = ( store: Stores, props: $CMP$Props ) => ({});

const mapDispatchToProps = ( dispatch: Dispatch<any>, props: $CMP$Props ) => ({});


const $CMP$ = connect( mapStateToProps, mapDispatchToProps )( $CMP$Base );

export { $CMP$Props, $CMP$ };
