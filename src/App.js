import React from "react"
import Newblog from './Newblog'
import Allblog from './Allblog'
import Navbar from './Navbar'
import {Route,Switch} from "react-router-dom"
import Edit from './Edit'
class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                 <Switch>
                     <Route exact path="/allblogs"><Allblog/></Route>
                     <Route exact path="/newblog"><Newblog/></Route>
                     <Route exact path="/edit/:id" component={Edit}/>
                 </Switch>
            </div>
        )
    }
}
export default App