import React, { Component } from 'react'
class Post extends Component {

    consoleHide(){
        alert(this.p.offsetHeight)
    }
    render () {
        return (
            <p onClick={this.consoleHide.bind(this)}
               ref={(p) => this.p = p}>
                点我告诉你我多高</p>
        )
    }
}

export default Post