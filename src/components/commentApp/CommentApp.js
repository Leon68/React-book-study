import React, { Component } from 'react'

import ComentInput from '../commentInput/CommentInput'
import ComentList from '../commentList/CommentList'

import './commentApp.scss'

class CommentApp extends Component {
    constructor() {
        super()
        this.state= {
            comments: []
        }

    }
    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })

    }
    render() {

        return(
            <div className="wrapper">
                <ComentInput onSubmit={ this.handleSubmitComment.bind(this)}/>
                <ComentList comments={ this.state.comments }/>
            </div>
        )
    }
}


export default CommentApp
