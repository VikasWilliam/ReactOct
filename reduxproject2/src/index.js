import React from 'react';
import ReactDOM from 'react-dom';
import {provider} from 'react-redux';
import store from './store/store_file';
import Routing from './component/Routing';

ReactDOM.render(<provider store={store}>
    <Routing/>
</provider>, document.getElementById('root'));