import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer>
      <div className="container">
      <div className="line"></div>
        <div className="footer-1">
          <h4>❤️Made For Deepthi Sunaina❤️</h4>
        </div>
        <div className="footer-1">
          <a href="https://www.instagram.com/deepthi_sunaina?igsh=MXZ2Nm1wd2hzZzI2"><Icon icon="line-md:instagram" width="24" height="24" /></a>
          <a href="https://www.facebook.com/DeepthiSunainaOfficial"><Icon icon="line-md:facebook" width="24" height="24" /></a>
          <a href="https://www.youtube.com/@deepthisunainaofficial"><Icon icon="line-md:youtube" width="24" height="24" /></a>
          <a href="https://x.com/deepthisunaina7"><Icon icon="bi:twitter-x" width="24" height="24" /></a>
          <a href="deepthisunaninaofficial@gmail.com"><Icon icon="line-md:email" width="24" height="24" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer