import React, { useEffect, useState } from 'react';
import logo from '../assets/image/LOGO.png';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import Drawer from '../components/Drawer.jsx';

function NavBar() {
    const [showScroll, setShowScroll] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleShowNavbar = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }

    return (
        <nav>
            <div className="container">
                <div className="deepthi-nav">
                    <img onClick={() => handleNavigate('/*')} src={logo} alt="Logo" />
                    <div className="nav2">
                        <div className="deepthi-nav1">
                            <h4 onClick={() => handleNavigate('/*')}>Home</h4>
                            <h4 onClick={() => handleNavigate('/about')}>About</h4>
                            <h4 onClick={() => handleNavigate('/gallery')}>Gallery</h4>
                            <h4 onClick={() => handleNavigate('/contact')}>Contact</h4>
                        </div>
                        <div onClick={() => handleNavigate('/fav')} className="nav-icon">
                            <Icon icon="line-md:heart-filled" width="24" height="24" />
                        </div>
                        {/* Menu button */}
                    </div>
                    <button className="menu-button" onClick={handleShowNavbar}>
                        <Icon icon="typcn:th-menu-outline" width="40" height="40" />
                    </button>
                </div>
                <div id="scroll-up" onClick={handleScrollUp} className={showScroll ? 'show-scroll' : ''}>
                    <Icon icon="bi:arrow-up" width="30" height="30" />
                </div>
                <div className="line"></div>
            </div>

            <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <nav className="nav-responsive">
                    <Link to={'/'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to={'/about'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <Link to={'/gallery'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
                    <Link to={'/contact'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    <Link to={'/fav'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/fav' ? 'active' : ''}`}><Icon icon="line-md:heart-filled" width="24" height="24" /></Link>
                </nav>
            </Drawer>
        </nav>
    );
}

export default NavBar;
