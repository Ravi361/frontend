import axios from "axios"
import React from "react"
class Newblog extends React.Component{
    constructor(){
        super()
        this.state={
            author:"",
            image:"",
            title:"",
            description:""
        }
    }
    handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handlesubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/newblog',this.state).then((data)=>console.log(data))
      window.location='/allblogs'
    }
    render(){
        return(
            <div className="container m-5">
                <h1>New Blog</h1>
                <form onSubmit={this.handlesubmit}>
                    <div className="form-group m-2">
                    <input className="form-control"
                        onChange={this.handlechange}
                        type="text" required
                        value={this.state.author}
                        name="author"
                        placeholder="author"/>
                    </div>
                    <div className="form-group m-2">
                    <input className="form-control"
                        onChange={this.handlechange}
                        type="text" required
                        value={this.state.image}
                        name="image"
                        placeholder="image"/>
                        </div>
                        <div className="form-group m-2">
                    <input className="form-control"
                      onChange={this.handlechange}
                      type="text" required
                      value={this.state.title}
                      name="title"
                      placeholder="title"/>
                      </div>
                      <div className="form-group m-2">
                    <textarea className="form-control"
                    onChange={this.handlechange}
                    value={this.state.description}
                    name="description" required
                    placeholder="description"></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Newblog