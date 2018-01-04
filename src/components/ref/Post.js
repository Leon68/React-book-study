import React, { Component } from 'react'
class Post extends Component {

    consoleHide(){

        console.log(this.p.offsetHeight)
    }
    render () {
        return (
            <p onClick={this.consoleHide.bind(this)}
               ref={(p) => this.p = p}>
                hhhhh</p>
        )
    }
}

export default Post