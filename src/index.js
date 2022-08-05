import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App'
import {store} from "../src/store/index"

const render=()=>{ReactDOM.render(
        <App />,
         document.getElementById("root")
         );
        }

store.subscribe(render);
render();
