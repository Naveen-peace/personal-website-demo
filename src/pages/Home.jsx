import React, { useEffect } from 'react';
import NavBar from '../layouts/NavBar';
import heroimg from '../assets/image/heroimg.png';
import ButtonComponent from '../components/ButtonComponent';
import Footer from '../layouts/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleNavigate = (path)=>{
    navigate(path);
  }

  // useEffect(() => {
  //   const textElement = document.getElementById('typing-text');
  //   const text = "Nenu Mee Deepthi Sunaina";
  //   let i = 0;
  
  //   function typeCharacter() {
  //     if (i < text.length) {
  //       textElement.innerHTML += text.charAt(i);
  //       i++;
  //       setTimeout(typeCharacter, 200); // Adjust typing speed here
  //     }
  //   }
  
  //   typeCharacter();
  // }, []);

  return (
    <section className='home-background'>
      <NavBar />
      <div className="container">
        <div className="deepthi-home">
          <div className="home-content">
            <h1 className="fade-in-text">Hie Guys</h1>
            <h2 className="slide-in-text">Nenu Mee Deepthi Sunaina</h2>
            <p className="zoom-in-text">
              Welcome to my website! Explore my journey, work, and latest updates.
              Let's connect and share the love for creativity and entertainment.
            </p>
            <ButtonComponent onClick={() => handleNavigate('/about')} customClass="home-button" label="See More" width={"176px"} height={"56px"} />
          </div>
          <div className="home-img">
            <img src={heroimg} alt="Deepthi Sunaina" className="hero-image fade-in-image" />
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Home;
