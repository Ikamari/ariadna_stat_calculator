// React
import React, { Component } from 'react'
// Components
import GUI from './CalculatorGUI'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        const stats = this.props.stats

        // Set used points value (1 stat = +1 used point)
        this.state={
            used: stats.elements,
        }

        // Crazy shit ahead: pull all stats in state
        stats.name.map((stat) => {
            this.state={
                ...this.state,
                [stat]: 1
            }
        })
    }

    decreasePoints(stat) {
        let points = this.state[stat];
        if(points > 1) {
            let unusedPoints = this.state.unused;
            let price = this.calculatePrice(points, 0);
            let stats = this.state;
            stats[stat] = points - 1;
            this.setState({
                ...stats,
                unused: unusedPoints + price
            })
        }
    }

    increasePoints(stat) {
        let points = this.state[stat];
        let unusedPoints = this.state.unused;
        let price = this.calculatePrice(points, 1);
        console.log(points, unusedPoints, price, stat);
        if(price <= unusedPoints) {
            let stats = this.state;
            stats[stat] = points + 1;
            this.setState({
                ...stats,
                unused: unusedPoints - price
            })
        }
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}
