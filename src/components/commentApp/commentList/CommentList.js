import React, { Component } from 'react'

import Comment from '../comment/Comment'

import './index.scss'
class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    render() {
        return(
            <div className='comment-list'>
                { this.props.comments.map((comment,i) =>
                    <Comment comment={ comment } key={i}/>
                )}
            </div>
        )
    }
}


export default CommentList
