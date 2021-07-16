import React from "react"
import axios from 'axios'
class Edit extends React.Component{
    constructor(){
        super()
        this.state={
            author:"",
            description:"",
            image:"",
            title:""
        }
    }
    componentDidMount=()=>{
        axios.get('http://localhost:5000/edit/'+this.props.match.params.id).then((response)=>{
            this.setState({
                author:response.data.author,
                description:response.data.description,
                image:response.data.image,
                title:response.data.title
            })
        })
    }
    handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/edit/'+this.props.match.params.id,this.state)
        window.location='/allblogs'
    }
    render(){
        return(
            <div className="container m-5">
            <h1>Edit Blog</h1>
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
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
        )
    }
}
export default Edit