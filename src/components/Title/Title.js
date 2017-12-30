import React ,{ Component } from 'react'
class Lesson extends Component {
    render() {
        const  { lesson }= this.props
        const {number} = this.props
        return(
            <div onClick={() => {console.log(`${number} - ${ lesson.title}`)}}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>)
    }
}

class LessonsList extends Component {
    render() {
        const {lessons} = this.props
        return(
            <div>
                {lessons.map((lesson,i) =>  <Lesson key = { i } number = { i } lesson={ lesson } />)}
            </div>
        )
    }
}

export default LessonsList