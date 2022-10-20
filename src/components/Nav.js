// rfce
import React from 'react'
import '../css/nav.css'

function Nav() {
  return (
    <div>
    <div class="area"></div>
        <nav class="main-menu">
            <ul>
                <li>
                    <a href="Home">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="Login">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Stars Components
                        </span>
                    </a>
                </li>
                <li class="has-subnav">
                    <a href="NoteList">
                       <i class="fa fa-pencil-square-o fa-2x"></i>
                        <span class="nav-text">
                            My Note
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="About">
                       <i class="fa fa-user fa-2x"></i>
                        <span class="nav-text">
                            About Me
                        </span>
                    </a>
                   
                </li>
            </ul>
            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>
  )
}
export default Nav