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
          <a class="image-link" href='https://github.com/JohanTT/LTDT-2.3' target="_blank" rel="noreferrer">
            <div class="image" data-label="My"><img src={LTDT} alt="" name="showTime" ></img></div>
          </a>
          <a class="image-link" href='https://github.com/JohanTT/CTQM-Phone-Final/tree/final' target="_blank" rel="noreferrer">
            <div class="image" data-label="Best"><img src={Phone} alt="" name="showTime" ></img></div>
          </a>
          <a class="image-link" href='https://github.com/JohanTT/CTQM-Shoes' target="_blank" rel="noreferrer">
            <div class="image" data-label="Projects"><img src={LTWin} alt="" name="showTime" ></img></div>
          </a>
          <a class="image-link" href='https://github.com/JohanTT/CTQM-WEB-Done/tree/master' target="_blank" rel="noreferrer">
            <div class="image" data-label="as Leader"><img src={LTWeb} alt="" name="showTime" ></img></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home