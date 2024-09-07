import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import Slider from 'react-slick';
import UserData from '../data/data';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigate } from 'react-router-dom';

function Gallery() {

    const navigate = useNavigate();

    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 972,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const renderSlider = (images, path) => (
        <Slider {...sliderSettings}>
            {images.map((image, index) => (
                <div key={index} className="slider-all">
                    <div className="slider-item">
                        <img src={image} alt={`Slide ${index}`} className="slider-image fade-in-image" />
                        <div className="hover-overlay">
                            <ButtonComponent
                                customClass="gallery-button"
                                onClick={() => navigateToDetails(path)}
                                label="See More"
                                width={"126px"}
                                height={"36px"}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>

    );


    const navigateToDetails = (path) => {
        navigate(path);
    };

    const traditionalSareesSlider = UserData[0].Gallery[0].traditional[0].sareesslider[0];
    const modernSlider = UserData[0].Gallery[1].modern[0].modernslider[0];
    const classicSlider = UserData[0].Gallery[2].classic[0].classicslider[0];
    // const traditionalSarees = UserData[0].Gallery[0].traditional[1].sarees[0];

    return (
        <section className='home-background'>
            <NavBar />
            <div className="container">
                <div className="gallery">
                    <h2>Traditional</h2>
                    <div className="gallery-head">
                        {renderSlider(Object.values(traditionalSareesSlider), '/gallerytraditional')}
                    </div>

                    <h2>classic</h2>
                    <div className="gallery-head">
                        {renderSlider(Object.values(classicSlider), '/galleryclassic')}
                    </div>

                    <h2>modern</h2>
                    <div className="gallery-head">
                        {renderSlider(Object.values(modernSlider), '/gallerymodern')}
                    </div>


                    {/* <h2>Traditional Sarees</h2>
                {renderSlider(Object.values(traditionalSarees))} */}
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Gallery;
