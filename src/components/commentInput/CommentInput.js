import React, {Component} from 'react'

class CommentInput extends Component {
    render() {
        return (
            <div className='input-wrapper'>
                <div>
                    <label htmlFor="">用户名: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>评论内容: </label>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}


export default CommentInput
