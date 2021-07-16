import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"#"}>MyBlog</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/allblogs"}>Read Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/newblog"}>New Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
        )
    }
}
export default Navbar