import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import clasic49 from '../assets/image/clasic-54.jpg';
import clasic3 from '../assets/image/clasic-3.jpg';
import clasic404 from '../assets/image/clasic-404.jpg';
import clasic361 from '../assets/image/clasic-361.jpg';
import { Icon } from '@iconify/react';

function Contact() {
  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
        <h1 className='contact-text'>❤️Deepthi Sunaina❤️</h1>
        <div className="contact-head">
          <div className="contact-tools">
            <div className="contact-item">
              <a href="https://www.instagram.com/deepthi_sunaina?igsh=MXZ2Nm1wd2hzZzI2">
                <img src={clasic49} alt="deepthi" className='contact-img' />
                <div className="overlay">
                  <Icon icon="line-md:instagram" width="24" height="24" />
                  <span>Instagram</span>
                </div>
              </a>
            </div>
            <div className="contact-item">
              <a href="https://www.facebook.com/DeepthiSunainaOfficial">
                <img src={clasic3} alt="deepthi" className='contact-img' />
                <div className="overlay">
                  <Icon icon="line-md:facebook" width="24" height="24" />
                  <span>Facebook</span>
                </div>
              </a>
            </div>
            <div className="contact-item">
              <a href="https://www.youtube.com/@deepthisunainaofficial">
                <img src={clasic404} alt="deepthi" className='contact-img' />
                <div className="overlay">
                  <Icon icon="line-md:youtube" width="24" height="24" />
                  <span>YouTube</span>
                </div>
              </a>
            </div>
            <div className="contact-item">
              <a href="https://x.com/deepthisunaina7">
                <img src={clasic361} alt="deepthi" className='contact-img' />
                <div className="overlay">
                  <Icon icon="bi:twitter-x" width="24" height="24" />
                  <span>Twitter</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
