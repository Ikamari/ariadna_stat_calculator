//React
import React, { Component } from 'react';
//Components

export default  class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vesselAdditionalPoints: 0,
            essenceAdditionalPoints: 0
        }
    }

    render() {
        return(
            <div className="app">
            </div>
        )
    }
}
