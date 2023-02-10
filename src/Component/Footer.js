import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div class="left fBox">
          <ul>
                <li><a href="/">Prompt Generator</a></li>
                <li><a href="/">Dweep Daily</a></li>
                <li><a href="/">All contributer</a></li>
                <li><a href="/">Your data on Dweep.io</a></li>
                <li><a href="/">Contribute to Dweep</a></li>
          </ul>
        </div>
        <div class="right fBox">
          <ul>
            <li><a href="/">Dweep.io</a></li>
            <li><a href="/">Made with love in India</a></li>
            <li><div className='social-icon'>
              <a href='/'><i class="bi bi-linkedin"></i></a>
              <a href='/'><i class="bi bi-instagram"></i></a>
            </div></li>
            <li className='blank-list'></li>
            <li><a href="/">hello@dweep.io</a></li>
          </ul>
        </div>
    </div>
  )
}