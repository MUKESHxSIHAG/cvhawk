import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLogo from '../Assets/Images/png/FooterLogo.png'
import { Email, Facebook, Instagram, Twitter, Phone } from './Icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='bg_black'>
                <Container>
                    <Row className='pb-5 justify-content-center'>
                        <Col lg={5} data-aos="fade-right">
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <img src={FooterLogo} alt="Footer Logo" />
                                <p className='max-w-373 mb-0 fc-white fs-16 fw-400 ff-primary'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat id facilisis.</p>
                                <ul className='ps-0 d-flex align-items-center justify-content-center gap-4 mt-4' id='social-media'>
                                    <li><a className='tweet' href="https://www.twitter.com/" target='/'><Twitter /></a></li>
                                    <li><a href="https://www.facebook.com/" target='/'><Facebook /></a></li>
                                    <li><a href="https://www.instagram.com/" target='/'><Instagram /></a></li>
                                </ul>
                            </div>

                        </Col>

                        <Col lg={7} data-aos="fade-left">
                            <Row className='pt-5'>
                                <Col lg={4} sm={6}>
                                    <div>
                                        <ul className='mb-0 ps-0'>
                                            <li className='ff-primary fs-16 fw-500 fc-white mb-0'>Quick Links</li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'>Home</Link></li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'>About</Link></li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'>We’ll help you</Link></li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'>Testimonials</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4} sm={6}>
                                    <div className='mt-sm-0 mt-5'>
                                        <ul className='mb-0 ps-0'>
                                            <li className='ff-primary fs-16 fw-500 fc-white mb-0'>Support</li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'><Phone /> +012 345 67890</Link></li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'><Email /> Cvhawk@gmail.com</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className='mt-lg-0 mt-5'>
                                        <ul className='mb-0 ps-0'>
                                            <li className='ff-primary fs-16 fw-500 fc-white mb-0'>Legal</li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0 '>Privacy Policy</Link></li>
                                            <li className='mt-20'><Link className='fs-16 ff-primary fw-400 fc-white mb-0'>Terms & conditions</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className='footerLine'></div>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='text-center ff-primary fs-16 fw-500 fc-white mt-3'>Copyright@CVhawk2023</p>
                </div>

            </footer>
        </>
    )
}

export default Footer