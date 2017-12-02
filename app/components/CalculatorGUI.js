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
    const { increase, decrease, add, stats} = props;
    return (
        <div>
        <div className="calculator">
            <div className="calculator-stats">
                {stat(increase, decrease, "str", stats["str"])}
                {stat(increase, decrease, "ref", stats["ref"])}
                {stat(increase, decrease, "per", stats["per"])}
                {stat(increase, decrease, "int", stats["int"])}
                {stat(increase, decrease, "det", stats["det"])}
                {stat(increase, decrease, "mag", stats["mag"])}
            </div>
            <div className="calculator-available-points">Доступные очки: {stats.unused}</div>
        </div>
            <div className="add-points-block">
                Очки:
                <input type="number" min="0" className="add-points-input" id="addPointsInput"/>
                <div
                    className="add-points-button"
                    onClick={() => add(document.getElementById("addPointsInput").value)}
                >Добавить</div>
            </div>
        </div>
    )
};

export default (props) => CalculatorGUI(props);