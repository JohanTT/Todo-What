import React from 'react'
import '../css/home.css'
import Nav from './Nav';

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
                <div class="image" data-label="Star"><img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt="" name="showTime" class=""></img></div>
              </a>
              <a class="image-link">
                <div class="image" data-label="Sun"><img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt="" name="showTime" class=""></img></div>
              </a>
              <a class="image-link">
                <div class="image" data-label="Tree"><img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt="" name="showTime" class=""></img></div>
              </a>
              <a class="image-link">
                <div class="image" data-label="Sky"><img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt="" name="showTime" class=""></img></div>
              </a>
            </div>
          </div>
    </div>
  )
}

export default Home