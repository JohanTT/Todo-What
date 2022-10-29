import React from 'react'
import Nav from './Nav'
import '../css/about.css'
import Picture from '../image/CVT.webp'

function about() {
  return (
    <div>
        <Nav/>
        <div id="CVT-CV">
          <div id="about-me">
              {/* <!-- đôi lời về bản thân --> */}
              <div class="content-section text-white">
                  <div>
                      <h2 class="section-heading">About <span>Me</span></h2>
                      <ul id="info">
                          <li>Họ và tên: Cao Việt Thắng</li>
                          <li>Ngày sinh: 05/09/2002</li>
                          <li>Giới tính: Nam</li>
                          <li>Quê quán: Hóc Môn, TP.HCM</li>
                          <li>Gmail: thejohan39@gmail.com</li>
                          <li>Đang học tại: Trường Đại Học Sư Phạm TP.HCM</li>
                          <li>Ngành học: Công nghệ thông tin</li>
                      </ul>
                      <p class="readmonre">ReadMore <a class="about-text" href='https://johantt.github.io/First-CV/' target="_blank" rel="noreferrer">MyCV</a></p>
                  </div>
                  <img src={Picture} alt="Ảnh đại diện" class="avatar"></img>
              </div>
          </div>
          <div id="footer">
              <div class="contact-list">
                  <a href="https://www.facebook.com/cao.vietthag/"><i class="fa fa-facebook"></i></a>
                  <a href="https://github.com/JohanTT"><i class="fa fa-github"></i></a>
              </div>
              <p class="copyright">by Johan</p>
          </div>
      </div>
    </div>
  )
}

export default about