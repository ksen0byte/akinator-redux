import React, {Component} from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faRedo, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faTimes);
library.add(faRedo);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
