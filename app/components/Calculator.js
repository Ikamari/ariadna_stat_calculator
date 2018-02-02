// React
import React, { Component } from 'react'
// Components
import CalculatorGUI from './CalculatorGUI'
import WikiCode from './WikiCode'
import Warnings from  './Warnings'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            unused: 44,
            initial: 50,
            str: 1,
            ref: 1,
            per: 1,
            int: 1,
            det: 1,
            mag: 1
        }
    }

    addPoints(points) {
        let currentPoints = this.state["unused"];
        let initialPoints = this.state["initial"];
        this.setState({
            ...this.state,
            unused: currentPoints + Number(points),
            initial: initialPoints + Number(points)
        })
    }

    removePoints(points) {
        let currentPoints = this.state["unused"];
        let initialPoints = this.state["initial"];
        this.setState({
            ...this.state,
            unused: currentPoints - Number(points),
            initial: initialPoints - Number(points)
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

    calculatePrice(points, param) {
        return (points + param <= 10 ? 1 :
            (points  + param <= 14 ? 2 :
                (points  + param <= 18 ? 3 :
                    (points  + param <= 22 ? 4 : 5))));
    }

    render() {
        return(
            <div>
                <CalculatorGUI
                    increase={(statName) => this.increasePoints(statName)}
                    decrease={(statName) => this.decreasePoints(statName)}
                    add={(points) => this.addPoints(points)}
                    remove={(points) => this.removePoints(points)}
                    stats={this.state}
                />
                <Warnings
                    stats={this.state}
                />
                <WikiCode
                    str={this.state.str}
                    per={this.state.per}
                    refl={this.state.ref}
                    det={this.state.det}
                    int={this.state.int}
                    mag={this.state.mag}
                />
            </div>
        )
    }
}