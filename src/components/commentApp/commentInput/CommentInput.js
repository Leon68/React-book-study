import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state= {
            username: '',
            content: '',
        }
    }
    componentWillMount(){
        this._loadUsername()
    }
    componentDidMount(){
        this.textarea.focus()
    }

    _saveUsername(username){
        localStorage.setItem('username', username)
    }
    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)

    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
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
                        onBlur={this.handleUsernameBlur.bind(this)}
                        value={this.state.username}
                        id="comment-input-user" type="text"/>
                </div>
                <div className="input-content">
                    <label htmlFor="comment-input-content">评论内容:</label>
                    <textarea
                        onChange={ this.handleContentChange.bind(this)}
                        value={this.state.content}
                        ref={(textarea) => this.textarea = textarea}
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
