import React from 'react'
import { Container } from 'react-bootstrap'
import CvNavbar from './CvNavbar'
import Paper from '../Assets/Images/png/Paper.png'
import Brick from '../Assets/Images/png/Brick.png'
import Ball from '../Assets/Images/png/Ball.png'
import C from '../Assets/Images/png/C.png'
import Tablet from '../Assets/Images/png/Tablet.png'
const Header = () => {
    return (
        <>
            
            <header className='bg_main position-relative min-vh-100 overflow-x-hidden'>
                <img className='position-absolute hero1 d-md-block d-none' src={Paper} alt="Paper" />
                <img className='position-absolute hero2 d-md-block d-none' src={Paper} alt="Paper" />
                <img className='position-absolute hero3 d-md-block d-none' src={Paper} alt="Paper" />
                <img className='position-absolute hero4 d-md-block d-none' src={Paper} alt="Paper" />
                <div className='backgroundBlur position-absolute'></div>
                <img className='position-absolute brick d-sm-block d-none' src={Brick} alt="Brick" />
                <img className='position-absolute ball d-sm-block d-none' src={Ball} alt="Brick" />
                <img className='position-absolute c d-sm-block d-none' src={C} alt="Brick" />
                <img className='position-absolute tablet d-sm-block d-none' src={Tablet} alt="Brick" />
            
            <CvNavbar/>
                <Container className='position-relative pt-5 mt-4'>
                   
                    <div className='d-flex flex-column justify-content-center align-items-center pt-5' data-aos="fade-right">
                        <h2 className='ff-primary fs-40 fc-black fw-600 text-center max-w-623 pt-5 mb-0'>
                            Unlock Your Potential with a Professional <span className='whitespace'>CV Builder</span>
                        </h2>
                        <p className='max-w-565 ff-primary fs-16 fw-400 fc-dark text-center mt-3'>Our user-friendly platform guides you through the process, allowing you to customize every section to align with your unique career goals.</p>
                    </div>
                    <div className='d-flex flex_column justify-content-center align-items-center gap-3 mt-5' data-aos="fade-left">
                        <button className='ff-primary bg_primary fc-white fs-16 fw-600 headerbtn'>Get Started</button>
                        <button className='ff-primary bg_primary fc-white fs-16 fw-600 headerbtn'>Watch Demo</button>
                    </div>
                </Container>

            </header>


        </>
    )
}

export default Header