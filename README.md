React Redux CLI
===============


[![Build Status](https://travis-ci.org/dohr-michael/react-redux-cli.svg?branch=master)](https://travis-ci.org/dohr-michael/react-redux-cli)

When you're using this cli, I suppose than you have this folder architecture :

```
- module
    - actions | actions.ts
    - components
    - epics | epics.ts
    - models | models.ts
    - reducers | reducers.ts (with the Store type of the module expored as Stores)
```


Install
-------

`npm install ts-react-redux-cli`


Peer Dependencies
-----------------


* Project
  * react react-dom @types/react @types/react-dom
  * redux
  * redux-observable rxjs
  * react-redux @types/react-redux
* Test
  * ONGOING


Commands
--------

* __module__ : Create a complete redux module following the description.
* __cmp__ : Create a simple React component with him stylesheet and test.
* __connected-cmp__ : Create a connected component with him stylesheet and test.


