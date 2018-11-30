import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
//import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
            <Header></Header>
            <h1>HI this is third app</h1>
            </div>
            
        
        )}
}

ReactDOM.render( <App/>, document.getElementById('root'));