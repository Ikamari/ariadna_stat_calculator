// React
import React from "react";

const stat = (increase, decrease, statName, statPoints) => {
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
    const { increase, decrease, add, remove, stats} = props;
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
            <div className="calculator-available-points">
                Нераспределенные очки: {stats.unused}<br/>
                Количество очков: {stats.initial}
            </div>
        </div>
            <div className="points-manipulation-block">
                Очки:
                <input type="number" min="0" className="points-manipulation-input" id="pointsInput"/>
                <div
                    className="points-manipulation-button"
                    onClick={() => add(document.getElementById("pointsInput").value)}
                >Добавить</div>
                <div
                    className="points-manipulation-button"
                    onClick={() => remove(document.getElementById("pointsInput").value)}
                >Убрать</div>
            </div>
        </div>
    )
};

export default (props) => CalculatorGUI(props);