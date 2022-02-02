import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

export default function Main(){
    return (
        <div className="main-content">
        <h1 className="main-header">Fun Facts about React</h1>
        <ul className="main-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
    )
}