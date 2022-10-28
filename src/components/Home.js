import React from 'react'
import '../css/home.css'
import Nav from './Nav'
import LTWin from '../image/timeline pic/LTWin2.png'
import LTWeb from '../image/timeline pic/WEB2.png'
import Phone from '../image/timeline pic/Phone.png'
import LTDT from '../image/timeline pic/LTDT.png'

function Home() {
  return (
    <div class="menu">
      <Nav/>
          <div class="gallery">
            <div class="title">
              <p name="showTime" class="">CAO VIET THANG - Johan</p>
            </div>
            <div class="images">
              <a class="image-link">
                <div class="image" data-label="My"><img src={LTDT} alt="" name="showTime" class=""></img></div>
              </a>
              <a class="image-link">
                <div class="image" data-label="Best"><img src={Phone} alt="" name="showTime" class=""></img></div>
              </a>
              <a class="image-link">
                <div class="image" data-label="Projects"><img src={LTWin} alt="" name="showTime" class=""></img></div>
              </a>
              <a class="image-link">
                <div class="image" data-label="as Leader"><img src={LTWeb} alt="" name="showTime" class=""></img></div>
              </a>
            </div>
          </div>
    </div>
  )
}

export default Home