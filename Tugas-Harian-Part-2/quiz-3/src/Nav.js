import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";


const Nav = () =>{
  const [theme] = useContext(ThemeContext)
  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link  to="/About">About</Link>
        </li>

        <li>
          <Link  to="/Edit-Buku">Edit-Buku</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav