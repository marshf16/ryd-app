import React from "react"
import { Link } from "react-router-dom"
import Logo from "../logo.svg"
import "../Home.css"

const Profile = () => {
    return (
        <div className="Profile">
            <h2>Profile</h2>
            <Link className ="Home-link" to= "/">Link to Home</Link>
            <img className="Profile-img" width="275" src={Logo} alt=""/>
        </div>
    )
}

export default Profile