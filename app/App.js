// React
import React, { Component } from 'react';
// Components
import Calculator from './components/calculator/Calculator';
// Calculator stats
import VesselStats from './components/calculator/stats/VesselStats'
import EssenceStats from './components/calculator/stats/EssenceStats'

export default  class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vesselPoints: 0,
            essencePoints: 0
        }
    }

    editPoints(categoryName, value) {
        const statePropName = categoryName + 'Points'
        this.setState({
            [statePropName]: this.state[statePropName] + value
        })
    }

    getPoints(categoryName) {
        const statePropName = categoryName + 'Points'
        return this.state[statePropName]
    }

    render() {
        return(
            <div className='app'>
                <div className='centered'>
                    <Calculator
                        statsData={VesselStats()}
                        getPoints={() => this.getPoints('vessel')}
                        editPoints={(value) => this.editPoints('vessel', value)}
                    />
                    <Calculator
                        statsData={EssenceStats()}
                        getPoints={() => this.getPoints('essence')}
                        editPoints={(value) => this.editPoints('essence', value)}
                    />
                </div>
            </div>
        )
    }
}
