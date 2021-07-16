import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>,document.getElementById("root"))