import axios from "axios"
import React from "react"
import {Link} from "react-router-dom"
class Blog extends React.Component{
    delete=()=>{
        axios.get('http://localhost:5000/delete/'+this.props.id)
        window.location='/allblogs'
    }
    render(){
        return(
            <div className="container">
                <div className="card mt-5" style={{width:"48rem",margin:"auto"}}>
  <img src={this.props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
    <p className="card-text">{this.props.author}</p>
    <Link to={"edit/"+this.props.id} className="btn btn-primary">Edit</Link>
    <button onClick={this.delete} className="btn btn-primary" style={{marginLeft:"22px"}}>Delete</button>
  </div>
  </div>
  </div>
        )
    }
}
export default Blog