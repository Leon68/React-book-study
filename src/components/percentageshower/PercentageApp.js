import React, { Component } from 'react'
import Input from './Input'
import PercentageShower from './PercentageShower'

class PercentageApp extends Component {

    constructor(){
        super()
        this.state= {
            num: 0
        }
    }
    handleInput(number) {
        this.setState({
            num: number,
        })
    }
    render () {
        return (
            <div>
                <Input onInput={this.handleInput.bind(this)}/>
                <PercentageShower num={ this.state.num }/>
            </div>
        )
    }
}

export default PercentageApp
