import axios from 'axios'
import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'


class Courses extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            courses: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/course')
        .then(res => 
            this.setState({
                courses: res.data
            })
        )
    }
    render() {
        const {courses} = this.state
        return <CourseGrid courses = {courses}/>
    }
} 


export default Courses