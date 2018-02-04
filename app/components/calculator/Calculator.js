// React
import React, { Component } from 'react'
// Components
import GUI from './CalculatorGUI'
// Helpers
import calculatePrice from '../../helpers/StatPointPriceCalculator'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        const stats = this.props.statsData

        // Set used points value (1 stat = +1 used point)
        this.state={
            used: stats.elements,
        }

        // Something unusual here: pull all stats in state with map
        stats.name.map((stat) => {
            this.state={
                ...this.state,
                [stat]: 1
            }
        })
    }

    decrementStatPoint(stat) {
        const statPoints = this.state[stat]
        if (statPoints > 1) {
            const usedPoints = this.state.used
            const price = calculatePrice(statPoints, 0)
            this.setState({
                used: usedPoints - price,
                [stat]: statPoints - 1
            })
        }
    }

    incrementStatPoint(stat) {
        const statPoints = this.state[stat]
        const usedPoints = this.state.used
        const initialPoints = this.props.getPoints()
        const price = calculatePrice(statPoints, 1)

        console.log(statPoints, usedPoints, price, stat);
        if (initialPoints >= usedPoints + price) {
            this.setState({
                used: usedPoints + price,
                [stat]: statPoints + 1
            })
        }
    }

    render() {
        return(
            <div>
                <GUI
                    stats={this.state}
                    statsData={this.props.statsData}
                    initialPoints={this.props.getPoints()}
                    editPoints={(value) => this.props.editPoints(value)}
                    increment={(statName) => this.incrementStatPoint(statName)}
                    decrement={(statName) => this.decrementStatPoint(statName)}
                />
            </div>
        )
    }
}
