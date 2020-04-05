import React from "react"
import { Link } from "react-router-dom"
import Logo from "../book.png"
import "../Home.css"
import UserTable from "../components/UserTable"

const Profile = () => {
    const data = [
        {
          id: '1',
          name: 'Ryan Marshall',
          age: 23,
          gender: 'Male',
        }
      ]

    return (
        <div className="Profile">
            <h2>Profile</h2>
            <Link className ="Home-link" to= "/">Link to Home</Link>
            <img className="Profile-img" width="275" src={Logo} alt=""/>
            <UserTable userData={data} />
        </div>
    )
}

export default Profile