import axios from "axios"
import React from "react"
import Blog from './Blog'
class Allblog extends React.Component{
    constructor(){
        super()
        this.state={
           blogarr:[]
        }
    }
    componentDidMount=()=>{
      axios.get('http://localhost:5000/allblogs').then((response)=>{
         const blogar=response.data.map((blog)=>{
             return <Blog author={blog.author}
                          description={blog.description}
                          key={blog._id}
                          id={blog._id}
                          image={blog.image}
                          title={blog.title}/>
         })
         this.setState({
              blogarr:blogar
         })
      })
    }
    render(){
        return(
            <div>
              {this.state.blogarr}
            </div>
        )
    }
}
export default Allblog