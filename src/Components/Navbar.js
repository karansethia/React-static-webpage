import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Reactlogo from "./react.png"

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="logo">
            <img src={Reactlogo} className="page-logo" />
            <h1 className="logo-text">ReactFacts</h1>
            </div>
            <h2 className="header-text">React Course - Project 1</h2>
        </div>
    )
}