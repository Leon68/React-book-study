
import React, { Component } from 'react'

class Input extends Component {
    handleInputChange(e){
        this.props.onInput(e.target.value)
    }
    render () {
        return (
            <div>
                <input
                    onChange={this.handleInputChange.bind(this) }
                    type='number' />
            </div>
        )
    }
}

export default Input

