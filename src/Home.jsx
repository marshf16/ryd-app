import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';
import './Home.css';
import Table from './components/Table';

const Home = () => {
  const data = [
    {
      id: '1',
      book: 'JP',
      timeMinutes: 30,
      notes: 'Notes 1',
    },
    {
      id: '2',
      book: 'JP',
      timeMinutes: 30,
      notes: 'Notes 2',
    },
    {
      id: '3',
      book: 'JP',
      timeMinutes: 45,
      notes: 'Notes 3',
    }
  ]

  return (
    <div className="Home">
      <header className="Home-header">
        <p>RYD Application</p>
        <img src={logo} className="Home-logo" alt="logo" />
        <Link className="Home-link" to="/Profile">Link to your Profile Page</Link>
      </header>
      <Table characterData={data} />
    </div>
  );
}

export default Home;
