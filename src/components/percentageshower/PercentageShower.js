import React, { Component } from 'react'


class PercentageShower extends Component {
    render () {
        const out = this.props.num*100
        return (
            <div> { out.toFixed(2) + '%'}</div>
        )
    }
}

export default PercentageShower
