import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import UserData from '../data/data.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clascisabout from '../assets/image/clasic-403.jpg'
import { Icon } from '@iconify/react';

function About() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='home-background'>
            <NavBar />
            <div className="container">
                <div className="about-head">
                    <div className="about-1">
                        {UserData.map((data) => (
                            <div className="user-info" key={data.id || data.name}>
                                <h1 className="fade-in-left">Name : <p>{data.name}</p></h1>
                                <h1 className="fade-in-left">nick name : <p>{data.nickname}</p></h1>
                                <h1 className="fade-in-left">Dob : <p>{data.dob}</p></h1>
                                <h1 className="fade-in-left">Place of Birth : <p>{data.placeOfBirth}</p></h1>
                                <h1 className="fade-in-left">Profession : <p>{data.majorProfession}</p></h1>
                                <h1 className="fade-in-left">OtherProfessions : <p>{data.otherProfessions}</p></h1>
                                <h1 className="fade-in-left">About : <p>{data.about}</p></h1>
                                <h1 className="fade-in-left">achievements : <p>{data.achievements}</p></h1>

                                <div className="slider">
                                    <h3>🎶 My songs 🎶</h3>
                                    <Slider {...sliderSettings}>
                                        {data.songs.map((song, index) => (
                                            <div key={index}>
                                                <h3 className="fade-in-up">{song.name}</h3>
                                                <div className="video-wrapper fade-in-up">
                                                    <iframe
                                                        width="100%"
                                                        height="500"
                                                        style={{borderRadius:'20px'}}
                                                        src={song.videoUrl.replace("watch?v=", "embed/")}
                                                        title={song.name}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                    <a href='https://www.youtube.com/channel/UCFuffduOnJdhPzVghkh_vPw'>
                                        Click to see
                                    <Icon icon="line-md:youtube-filled" width="34" height="34"  />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="about-img fade-in-right">
                        <img style={{height:'100%',borderRadius:'20px'}} src={clascisabout} className='img-about' alt="deepthi" />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default About;
