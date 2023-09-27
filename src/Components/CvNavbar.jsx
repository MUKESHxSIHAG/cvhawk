
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from '../Assets/Images/png/Logo.png'

const CvNavbar = () => {
    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <section className='bg_main'>
            <Container>
                <div className='d-flex justify-content-between py-4 align-items-center' >
                    <div>
                        <img src={Logo} alt="Cv Hawk Logo" />
                    </div>

                    <h3 className='position-relative z-3 d-lg-none text-black' onClick={first ? shownav : hidenav}>  {first ? <RxHamburgerMenu /> : <RxCross1 />}  </h3>
                    <ul className={first ? 'd-flex gap-5 nav_bar pt-2 ps-0' : "d-flex ps-0 gap-5 nav_bar pt-2 show"} >
                       <Link className='d-lg-none d-block'><img src={Logo} alt="Logo" /></Link>
                        <li className='pt-2 bottom-brdr d-flex justify-content-center align-items-center'><Link className='pb-lg-0 pb-4 fc-black ff-primary fs-16 fw-400 textHover' >Home</Link></li>
                        <li className='pt-2 bottom-brdr d-flex justify-content-center align-items-center'><Link className='pb-lg-0 pb-4 fc-black ff-primary fs-16 fw-400 textHover'>About</Link></li>
                        <li className='pt-2 bottom-brdr d-flex justify-content-center align-items-center'><Link className='pb-lg-0 pb-4 fc-black ff-primary fs-16 fw-400 textHover'>We’ll help you</Link></li>
                        <li className='pt-2 d-flex justify-content-center align-items-center'><Link className='pb-lg-0 pb-4 fc-black ff-primary fs-16 fw-400 textHover'>Testimonials</Link></li>
                        <div className='timeline d-lg-none d-block'>
                            <button className='fc-white bg_primary ff-primary fs-16 fw-600 navbtn'>Get in Touch</button>
                        </div>
                    </ul>

                    <div className='timeline d-lg-block d-none'>
                        <button className='fc-white bg_primary ff-primary fs-16 fw-600 navbtn'>Get in Touch</button>
                    </div>

                </div>



            </Container>
        </section>
    )
}

export default CvNavbar
