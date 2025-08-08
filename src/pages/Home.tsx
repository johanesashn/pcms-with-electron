import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for handling logout
    console.log("Logout button clicked");
    navigate('/login'); // Navigate to login page after logout
  }

  return (
    <div>
      home page
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
