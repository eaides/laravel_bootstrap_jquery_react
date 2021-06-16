require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import MainReact from './MainReact';

ReactDOM.render(
    <React.StrictMode>
        <MainReact />
    </React.StrictMode>,
    document.getElementById('mainAppReact')
);

// console.log($);
$( document ).ready(function() {
    // alert('done by jquery ready');
});
