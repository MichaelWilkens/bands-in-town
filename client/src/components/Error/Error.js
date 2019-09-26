import React, { Component } from 'react';
import './Error.css';

class Error extends Component {
    render() {
        return (
            <div id='error-wrapper'>
                <div id='error-div'>
                    <h1 id='error-h1'>Whoops! That search did not return anything.</h1>
                    <h2 id='error-h2'>Did you type in the artist correctly?</h2>
                    <h4 id='error-h4'>/?artist="artist name"</h4>
                </div>
            </div>
        )
    }
}

export default Error;