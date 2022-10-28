import React from 'react'
import Nav from './Nav'
import '../css/timeline.css'
import TieuHoc from '../image/timeline pic/TieuHoc.jpg'
import THCS from '../image/timeline pic/THCS.jpg'
import THPT from '../image/timeline pic/THPT.jpg'
import DH from '../image/timeline pic/DH.png'
import Nam1 from '../image/timeline pic/Nam1.png'
import LTWin from '../image/timeline pic/LTWin.png'
import LTWeb from '../image/timeline pic/LTWEB.png'
import CNPM from '../image/timeline pic/CNPM.png'


function Timeline() {
  return (    
    <div>
      <div class="container py-5">
      <Nav />
        <div class="main-timeline-2">
          <div class="timeline-2 left-2">
            <div class="card">
              <img src={TieuHoc} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Học tại trường Tiểu học Trương Văn Ngài</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2007 - 2012</p>
                <p class="mb-0"></p>
              </div>
            </div>
          </div>
          <div class="timeline-2 right-2">
            <div class="card">
              <img src={THCS} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Học tại trường THCS Đỗ Văn Dậy</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2012 - 2017</p>
                <p class="mb-0"></p>
              </div>
            </div>
          </div>
          <div class="timeline-2 left-2">
            <div class="card">
              <img src={THPT} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Học tại trường THPT Phạm Văn Sáng</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2017 - 2020</p>
                <p class="mb-0">
                </p>
              </div>
            </div>
          </div>
          <div class="timeline-2 right-2">
            <div class="card">
              <img src={DH} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Đỗ vào trường Đại học Sư Phạm Tp. HCM <br></br>Ngành: Công nghệ thông tin</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2020</p>
                <p class="mb-0">Sau khi trải qua 3 năm cấp 3, bản thân nhận thấy tiềm năng phát triển của bản thân đối với các thiết bị máy tính và phần mềm, bản thân quyết định chọn vào theo học ngành được coi là "hot" nhất trong năm đó.</p>
              </div>
            </div>
          </div>
          <div class="timeline-2 left-2">
            <div class="card">
              <img src={Nam1} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Năm 1<br></br>Ngành: Công nghệ thông tin</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2020 - 2021</p>
                <p class="mb-0">Tiếp cận ngôn ngữ C++</p>
              </div>
            </div>
          </div>
          <div class="timeline-2 right-2">
            <div class="card">
              <img src={LTWin} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Năm 2 - Học kỳ 1<br></br>Ngành: Công nghệ thông tin</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2021 - 2022</p>
                <p class="mb-0">Xây dựng chương trình ứng dụng đầu tiên
                <br></br><a href='https://github.com/JohanTT/ATM-CTDL' target='_blank' rel="noreferrer" class="project-link">Mô phòng cây ATM - Cấu trúc dữ liệu</a>
                <br></br><a href='https://github.com/JohanTT/LTDT-2.3' target='_blank' rel="noreferrer" class="project-link">Mô phỏng thuật toán Prim & Dijkstra - Lý thuyết đồ thị</a>
                <br></br><a href='https://github.com/JohanTT/CTQM-Shoes' target='_blank' rel="noreferrer" class="project-link">Quản lý shop giày - Lập trình Winform</a>
                </p>
              </div>
            </div>
          </div>
          <div class="timeline-2 right-2">
            <div class="card">
              <img src={LTWeb} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Năm 2 - Học kỳ 2<br></br>Ngành: Công nghệ thông tin</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2022 - 2022</p>
                <p class="mb-0">Thành thạo trong làm việc nhóm, xây dựng ứng dụng
                <br></br><a href='https://github.com/JohanTT/CTQM-Phone-Final/tree/final' target='_blank'  rel="noreferrer" class="project-link">Phần mềm tính toán chi tiêu - Phát triển ứng dụng Di động</a>
                <br></br><a href='https://github.com/JohanTT/CTQM-WEB-Done/tree/master' target='_blank' rel="noreferrer" class="project-link">Xây dựng WEB cung cấp khóa học online - Phát triển ứng dụng WEB</a>
                </p>
              </div>
            </div>
          </div>
          <div class="timeline-2 left-2">
            <div class="card">
              <img src={CNPM} class="card-img-top" alt='tmp'></img>
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4"> Năm 3<br></br>Ngành: Công nghệ thông tin</h4>
                <p class="text-muted mb-4"><i class="fa fa-clock-o" aria-hidden="true"></i> 2022 - present</p>
                <p class="mb-0">Chọn chuyên ngành là công nghệ phần mềm, và tiến tới tương lai trở thành 1 Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline