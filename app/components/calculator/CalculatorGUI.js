// React
import React from "react";

const statElement = (increment, decrement, statName, statPoints) => {
    return (
        <div className="calculator-stat" key={`calc-stat-element-${statName}`}>
            <div className="calculator-stat-name">
                {statName}
            </div>
            <div className="calculator-arrow-button calculator-increase-stat" onClick={() => increment(statName)}/>
            <div className="calculator-stat-points">
                {statPoints}
            </div>
            <div className="calculator-arrow-button calculator-decrease-stat" onClick={() => decrement(statName)}/>
        </div>
    )
};

const CalculatorGUI = (props) => {
    let stats = Object.assign({}, props.stats)
    const { increment, decrement, initialPoints, statsData} = props
    const usedPoints = props.stats.used
    delete stats.used

    return (
        <div>
            <div className="calculator">
                <div className="calculator-stats">
                    {Object.keys(stats).map((stat) => (
                        statElement(increment, decrement, stat, stats[stat])
                    ))}
                </div>
                <div className="calculator-available-points">
                    Нераспределенные очки: {initialPoints - usedPoints}<br/>
                    Количество очков: {initialPoints}
                </div>
            </div>
        </div>
    )
};

export default (props) => CalculatorGUI(props)
