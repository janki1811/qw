import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'aos/dist/aos.css'; 
import 'animate.css';



const Home = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }
    return (
        <>

            <header id="pt-header" className="pt-header">
                <div className="pt-top">
                    <div className="main-header">
                        <div className="container">
                            <div className="text-right">
                                <div className="header-social">
                                    <ul>
                                        <li>
                                            <a href="https://srk.one/">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://srk.one/">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://srk.one/">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="header-contact">
                                    <ul>
                                        <li>
                                            <a href="tel:+1800-001-658">
                                                <i className="fa-solid fa-phone" style={{ color: '#ffffff' }}></i>
                                                <span>+1800-001-658</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:jankimakrubiya11@gmail.com">
                                                <i className="fa-solid fa-envelope" style={{ color: '#ffffff' }}></i>
                                                <span>srk-daimond@gmail</span>
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-location-pin" style={{ color: '#ffffff' }}></i>
                                            <span>A- 1 Envanto HQ surat</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="pt-wrapper">
                                <div className="header-logo">
                                    <a href="https://srk.one/">
                                        <img src="assets/images/SixtyYears-1.gif" alt="srk-daimond" />
                                    </a>
                                </div>
                                <div className="middle-menu">
                                    <div className="section-item">
                                        <div className="item-content">
                                            <div className="container">
                                                <ul className="items">
                                                    <li className="level parent">
                                                        <a className="level-top" href="https://srk.one/">
                                                            <p>HOME</p>
                                                        </a>
                                                        <ul className="child-menu">
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    HOME 1
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    HOME 2
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/#">
                                                                    HOME 3
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="level parent">
                                                        <a className="level-top" href="https://srk.one/">
                                                            <p>PAGES</p>
                                                        </a>
                                                        <ul className="child-menu">
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    ABOUT US
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    DAIMOND
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/#">
                                                                    OUR STORY
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    OUR SERVICES
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    OUR PROCESS
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="level parent">
                                                        <a className="level-top" href="https://srk.one/">
                                                            <p>PORTFOLIO</p>
                                                        </a>
                                                        <ul className="child-menu">
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    STANDARD
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    MASONRY
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    3 COLUMN WIDE
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    4 COLUMN WIDE
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    PORTFOLIO SINGLE
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="level parent">
                                                        <a className="level-top" href="https://srk.one/">
                                                            <p>BLOG</p>
                                                        </a>
                                                        <ul className="child-menu">
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    GRID STYLE
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    BLOG SIDEBAR
                                                                </a>
                                                            </li>
                                                            <li className="level parent">
                                                                <a className="level-top" href="https://srk.one/">
                                                                    BLOG SINGLE
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="level parent">
                                                        <a className="level-top" href="https://srk.one/">
                                                            <p>CONTACT US</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-menu">
                                    <div className="header-icon">
                                        <ul className="icon">
                                            <li className="search-btn">
                                                <a href="https://srk.one/">
                                                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
                                                </a>
                                            </li>
                                            <li className="toggle-btn">
                                                <div id="menuToggle">
                                                    <input type="checkbox" />
                                                    <span id="span1"></span>
                                                    <span id="span2"></span>
                                                    <span id="span3"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="main-class">
                <div className="item">
                    <div className="main-div">
                        <div className="layout">
                            <div className="image">
                                <a href="https://srk.one/">
                                    <video className="img" autoPlay={true} loop={true}>
                                        <source src="assets/images/srk1.mp4" type="video/mp4" />
                                    </video>
                                </a>
                            </div>
                        </div>
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className="container">
                                <div className="text-content">
                                    <h2>
                                        WELCOME TO THE DAIMOND HUB
                                        <br />
                                        <span>
                                            Welcome To The Epitome Of Daimond
                                        </span>
                                        <br />
                                        <strong>With a legacy of over three decades in the diamond industry, Ram Krishna Exports Pvt. Ltd. is India's leading manufacturer of cut and polished diamonds.</strong>
                                    </h2>
                                    <a className="btn" href="https://www.hiddentechies.com/">
                                        Discover More
                                        <i className="fa-regular fa-gem" style={{ color: '#ffffff' }}></i>
                                    </a>
                                </div>
                            </div>
                            <div className="container">
                                <div className="text-content">
                                    <h2>
                                        WELCOME TO THE DAIMOND HUB
                                        <br />
                                        <span>
                                            Discover Elegance The Beyond Compare
                                        </span>
                                        <br />
                                        <strong>SRK Diamonds are crafted by gifted craftspersons and processed with precise
                                        attention to detail. Every diamond is imagined, cut, polished and graded in-house to the most exacting proportions and standards. </strong>
                                    </h2>
                                    <a className="btn" href="https://www.hiddentechies.com/">
                                        Discover More
                                        <i className="fa-regular fa-gem" style={{ color: '#ffffff' }}></i>
                                    </a>
                                </div>
                            </div>
                            <div className="container">
                                <div className="text-content">
                                    <h2>
                                        WELCOME TO THE DAIMOND HUB
                                        <br />
                                        <span>
                                            Affordble That Diamond Servics Eryone
                                        </span>
                                        <br />
                                        <strong>Luxury is a desirable quality and SRK, being the masters of luxury, 
                                        is connected to the minds of consumers. A true luxury brand, such as SRK, on one hand understands the needs and requirements.</strong>
                                    </h2>
                                    <a className="btn" href="https://www.hiddentechies.com/">
                                        Discover More
                                        <i className="fa-regular fa-gem" style={{ color: '#ffffff' }}></i>
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="element-main">
                <div className="container">
                    <div className="element-wrap">
                        <div className="section-top">
                            <div className="container">
                                <div className="section-inner">
                                    <div className="inner-top">
                                        <div className="title-section">
                                            <h2>Us Our Diamond Bush</h2>
                                        </div>
                                        <div className="button">
                                            <a href="https://srk.one/" className="btn">
                                                <span>About More</span>
                                                <i className="fa-regular fa-gem" style={{ color: '#ffffff' }}></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="inner-bottom">
                                        <div className="pt-title">
                                            <div className="sub-title">
                                                About Us
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-bottom">
                            <div className="container">
                                <div className="inner">
                                    <div className="l-side">
                                        <div className="element-popular">
                                            <div className="first-section">
                                                <div className="heading">
                                                    <h3>Custom Diamond Jewellery Design</h3>
                                                </div>
                                            </div>
                                            <div className="second-section">
                                                <div className="para">
                                                    <ul>
                                                        <li className="item-list">
                                                            <span className="icon">
                                                                <i className="fa-solid fa-check"></i>
                                                            </span>
                                                            <span className="text">
                                                                It is a long established fact that a reader variations  passages available
                                                            </span>
                                                        </li>
                                                        <li className="item-list">
                                                            <span className="icon">
                                                                <i className="fa-solid fa-check"></i>
                                                            </span>
                                                            <span className="text">
                                                                There are many variations of passages If you are to use a passage of
                                                            </span>
                                                        </li>
                                                        <li className="item-list">
                                                            <span className="icon">
                                                                <i className="fa-solid fa-check"></i>
                                                            </span>
                                                            <span className="text">
                                                                Many desktop publishing packages and Rning essentily unchanged  Popurised
                                                            </span>
                                                        </li>
                                                        <li className="item-list">
                                                            <span className="icon">
                                                                <i className="fa-solid fa-check"></i>
                                                            </span>
                                                            <span className="text">
                                                                ous versions have evolved  the years Contrary popular belief Lorem Ipsum
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="third-section">
                                                <p>
                                                    Explore the diversity of diamonds, including white diamonds,
                                                    fancy colored diamonds, and rare varieties such as pink, blue, and green diamonds.
                                                </p>
                                            </div>
                                            <div className="fourth-section">
                                                <div className="element-contain">
                                                    <div className="img-section">
                                                        <div className="img-wrap">
                                                            <div className="img-block">
                                                                <img src="assets/images/dholkia1.jpg" alt="govind dholkia" />
                                                            </div>
                                                            <div className="text-block">
                                                                <h3 className="h-title">Govind Dholakia</h3>
                                                                <p className="p-title">chair man CEO</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sign">
                                                        <div className="signature">
                                                            <img src="assets/images/sign1.png" alt="signature" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="r-side">
                                        <div className="populars">
                                            <div className="image-data" data-aos="fade-right">
                                                <img src="assets/images/daimond1.jpg" alt="daimond" />
                                            </div>
                                            <div className="image-data1" data-aos="fade-left">
                                                <img src="assets/images/daimond.png" alt="daimond" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-element">
                <div className="container">
                    <div className="element-block">
                        <div className="element-widget">
                            <div className="pt-process">
                                <div className="process-media">
                                    <img src="assets/images/procces1.png" alt="process-1"/>
                                </div>
                                <div className="process-content">
                                    <div className="process-details">
                                        <h3 className="process-title">1. Exploration</h3>
                                        <p className="process-desc">Natural diamonds are special because they come from nature itself. Formed layers beneath the surface of Earth, 
                                         diamonds are not found everywhere. In the Exploration process, usually Kimberlite and Lamproite pipes (which are openings in the Earth's surface caused by volcanic activity) are explored to assess the lorem ipsum					
                                        </p>
                                    </div>
                                    <div className="process-img">
                                        <img src="assets/images/p1.jpg" alt="process-1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-process">
                                <div className="process-media">
                                    <img src="assets/images/procces2.png" alt="process-2"/>
                                </div>
                                <div className="process-content">
                                    <div className="process-details">
                                        <h3 className="process-title">2. Mining </h3>
                                        <p className="process-desc">Natural diamonds are special because they come from nature itself. Formed layers beneath the surface of Earth, 
                                         diamonds are not found everywhere. In the Exploration process, usually Kimberlite and Lamproite pipes (which are openings in the Earth's surface caused by volcanic activity) are explored to assess the lorem ipsum					
                                        </p>
                                    </div>
                                    <div className="process-img">
                                        <img src="assets/images/p2.jpg" alt="process-1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-process">
                                <div className="process-media">
                                    <img src="assets/images/procces3.png" alt="process-1"/>
                                </div>
                                <div className="process-content">
                                    <div className="process-details">
                                        <h3 className="process-title">3. Sorting </h3>
                                        <p className="process-desc">Natural diamonds are special because they come from nature itself. Formed layers beneath the surface of Earth, 
                                         diamonds are not found everywhere. In the Exploration process, usually Kimberlite and Lamproite pipes (which are openings in the Earth's surface caused by volcanic activity) are explored to assess the lorem ipsum					
                                        </p>
                                    </div>
                                    <div className="process-img">
                                        <img src="assets/images/p3.jpg" alt="process-1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-process">
                                <div className="process-media">
                                    <img src="assets/images/procces4.png" alt="process-1"/>
                                </div>
                                <div className="process-content">
                                    <div className="process-details">
                                        <h3 className="process-title">4. Cutting & Polishing </h3>
                                        <p className="process-desc">Natural diamonds are special because they come from nature itself. Formed layers beneath the surface of Earth, 
                                         diamonds are not found everywhere. In the Exploration process, usually Kimberlite and Lamproite pipes (which are openings in the Earth's surface caused by volcanic activity) are explored to assess the lorem ipsum					
                                        </p>
                                    </div>
                                    <div className="process-img">
                                        <img src="assets/images/p4.jpg" alt="process-1"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-process">
                                <div className="process-media">
                                    <img src="assets/images/procces5.png" alt="process-1"/>
                                </div>
                                <div className="process-content">
                                    <div className="process-details">
                                        <h3 className="process-title">5. Jewellery Manufacturing </h3>
                                        <p className="process-desc">Natural diamonds are special because they come from nature itself. Formed layers beneath the surface of Earth, 
                                         diamonds are not found everywhere. In the Exploration process, usually Kimberlite and Lamproite pipes (which are openings in the Earth's surface caused by volcanic activity) are explored to assess the lorem ipsum					
                                        </p>
                                    </div>
                                    <div className="process-img">
                                        <img src="assets/images/p5.jpg" alt="process-1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
}

export default Home;