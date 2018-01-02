import React, {Component} from 'react'

import './index.scss'

class CommentInput extends Component {
    constructor() {
        super()
        this.state= {
            username: '',
            content: '',
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({ username, content})
        }
        this.setState({ content: ''})
    }
    render() {
        return (
            <div className='input-wrapper'>
                <div className="input-user">
                    <label htmlFor="comment-input-user">用户名: </label>
                    <input
                        onChange={ this.handleUsernameChange.bind(this)}
                        value={this.state.username}
                        id="comment-input-user" type="text"/>
                </div>
                <div className="input-content">
                    <label htmlFor="comment-input-content">评论内容:</label>
                    <textarea
                        onChange={ this.handleContentChange.bind(this)}
                        value={this.state.content}
                        name="content" id="comment-inpurt-content" cols="30" rows="10" />
                </div>
                <div className="input-button">
                    <button
                        onClick={ this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}


export default CommentInput
