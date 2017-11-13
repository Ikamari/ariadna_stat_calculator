// React
import React from "react";

const stat = (increase, decrease, statName, statPoints, test = () => {}) => {
    return (
        <div className="calculator-stat">
            <div className="calculator-stat-name">
                {statName}
            </div>
            <div className="calculator-arrow-button calculator-increase-stat" onClick={() => increase(statName)}/>
            <div className="calculator-stat-points">
                {statPoints}
            </div>
            <div className="calculator-arrow-button calculator-decrease-stat" onClick={() => decrease(statName)}/>
        </div>
    )
};

const CalculatorGUI = (props) => {
    const { increase, decrease, stats, test } = props;
    return (
        <div className="calculator">
            <div className="calculator-stats">
                {stat(increase, decrease, "str", stats["str"], test)}
                {stat(increase, decrease, "ref", stats["ref"])}
                {stat(increase, decrease, "per", stats["per"])}
                {stat(increase, decrease, "int", stats["int"])}
                {stat(increase, decrease, "det", stats["det"])}
                {stat(increase, decrease, "mag", stats["mag"])}
            </div>
            <div className="calculator-available-points">Доступные очки: {stats.unused}</div>
        </div>
    )
};

export default (props) => CalculatorGUI(props);