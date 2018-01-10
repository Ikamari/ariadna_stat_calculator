// React
import React, {Component} from 'react'
// Infobox styles
import hexagonStyle from './wiki-infobox-styles/hexagon'
import simpleStyle from './wiki-infobox-styles/simple'

class WikiCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStyle: 0
        }
    }

    changeInfoboxStyle(style) {
        this.setState({
            ...this.state,
            selectedStyle: style
        })
    }

    render() {
        const {str, per, refl, det, int, mag} = this.props;

        return (
            <div className = "wiki-infobox">
            <div className = "wiki-infobox-style-select">
                <div className="infobox-style-option">
                    <label>Стандартный
                        <input type="radio" name="infoboxStyle" onClick={() => this.changeInfoboxStyle(0)} defaultChecked />
                        <span />
                    </label>
                </div>
                <div className = "infobox-style-option">
                    <label>Гексагон
                        <input type = "radio" name = "infoboxStyle" onClick={() => this.changeInfoboxStyle(1)} />
                        <span />
                    </label>
                </div>
            </div>
                <div>
                    <div className = "wiki-infobox-info">infobox</div>
                    <div className = "wiki-infobox-code">
                        {this.state.selectedStyle === 1 ?
                            hexagonStyle(str, per, refl, det, int, mag) :
                            simpleStyle(str, per, refl, det, int, mag)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default WikiCode