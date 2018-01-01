import React, { Component } from 'react'

import './index.scss'

class Comment extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="comment-wrapper">
                <span>{ this.props.comment.username }</span>:
                <p>{ this.props.comment.content}</p>
                <hr/>
            </div>

        )
    }
}


export default Comment
