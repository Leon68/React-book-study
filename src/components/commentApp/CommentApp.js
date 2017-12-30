import React, { Component } from 'react'

import ComentInput from '../commentInput/CommentInput'
import ComentList from '../commentList/CommentList'

import './commentApp.scss'

class CommentApp extends Component {
    render() {
        return(
            <div className="wrapper">
                <ComentInput/>
                <ComentList/>
            </div>
        )
    }
}


export default CommentApp
