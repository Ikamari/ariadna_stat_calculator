//React
import React, { Component } from 'react';
//Components
import Calculator from './components/Calculator'

export default  class App extends Component {
    render() {
        return(
            <div className="app">
                <Calculator/>
            </div>
        )
    }
}
