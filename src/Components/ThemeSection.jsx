import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Theme from '../Assets/Images/png/Theme.png'
import Slider from "react-slick";
import { Copies, Customize, Settings, Templates} from './Icons';
import Version from '../Assets/Images/svg/Version.svg'

const ThemeSection = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3, 

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2 ,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className='position-relative'>
                <div className='backgroundBlur2 position-absolute'></div>
                <div className='blur pos1'></div>
                <Container className='pt-lg-5 pt-0 mt-5 pb-md-5 pb-0 position-relative'>
                    <Row className='pb-5 mb-5'>
                        <Col lg={6} sm={12} className='d-flex justify-content-lg-center justify-content-center align-items-center' data-aos="fade-right">
                            <img className='w-100 imageShadow' src={Theme} alt="Cv Image" />
                        </Col>

                        <Col lg={6} >
                            <div className='pt-lg-0 pt-5'>
                                <Slider {...settings} className='d-flex justify-content-center ps-3 align-items-center'>
                                    <div className='d-inline-block '>
                                        <div className='smallBox d-flex flex-column justify-content-center align-items-center text-center'>
                                            <Settings />
                                            <p className='ff-primary fs-22 fc-black fw-500 mb-0 mt-2'>Themes</p>

                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column' >
                                        <div className='smallBox d-flex flex-column justify-content-center align-items-center'>
                                            <Customize />
                                            <p className='ff-primary fs-22 fc-black fw-500 mb-0 mt-2'>Customize</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column' >
                                        <div className='smallBox d-flex flex-column justify-content-center align-items-center'>
                                            <Copies />
                                            <p className='ff-primary fs-22 fc-black fw-500 mb-0 mt-2'>Make Copies</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center flex-column' >
                                        <div className='smallBox d-flex flex-column justify-content-center align-items-center'>
                                            <Templates />
                                            <p className='ff-primary fs-22 fc-black fw-500 mb-0 mt-2'>Templates</p>

                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center flex-column' >
                                        <div className='smallBox d-flex flex-column justify-content-center align-items-center'>
                                            <img src={Version} alt="" />
                                            <p className='ff-primary fs-22 fc-black fw-500 mb-0 text-center mt-2'>Version History</p>

                                        </div>
                                    </div>

                                </Slider>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center ps-3' ><p className='fs-16 ff-primary fw-400 fc-black max-w-499 text-lg-start text-center mt-5 pt-3'>Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p></div>
                        </Col>

                    </Row>
                </Container>
           </section>
        </>
    )
}

export default ThemeSection