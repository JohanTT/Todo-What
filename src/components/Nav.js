// rfce
import React from 'react'
import '../css/nav.css'

function Nav() {
  return (
    <div class="page">
        {
        window.addEventListener("load", function(){
            var page = document.getElementsByName("showTime");
            page.forEach(tag => {
                tag.style.transform = "translateY(0)";
                tag.style.transition = "1.2s 0.1s cubic-bezier(0.35, 0, 0.07, 1)";
            });
        })
        }
        <div class="page-inner">
            <ul class="page-nav">
                <li class="page-nav-item"><a class="page-nav-link" href="/Home"><span>
                    <div name="showTime" class="">Home</div>
                    </span></a></li>
                <li class="page-nav-item"><a class="page-nav-link" href="/About"><span>
                    <div name="showTime" class="">AboutMe</div>
                    </span></a></li>
                <li class="page-nav-item"><a class="page-nav-link" href="/NoteList"><span>
                    <div name="showTime" class="">TakeNotes</div>
                    </span></a></li>
                <li class="page-nav-item"><a class="page-nav-link" href="/Timeline"><span>
                    <div name="showTime" class="">Timeline</div>
                    </span></a></li>
            </ul>
        </div>
    </div>
  )
}
export default Nav