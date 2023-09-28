import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap'
import Triangle from '../Assets/Images/png/Triangle.png'
import img1 from '../Assets/Images/png/img1.png'
import img2 from '../Assets/Images/png/img2.png'
import img3 from '../Assets/Images/png/img3.png'
import img4 from '../Assets/Images/png/img4.png'
import img5 from '../Assets/Images/png/img5.png'
import { Rating } from "./Icons";

const ClientsSay = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className="bg_secondary pt-5 pb-5">
                <Container className="py-lg-4 py-0">
                    <Row>
                        <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in">
                            <h2 className='fs-40 ff-primary fw-500 fc-black'>What our Clients Say</h2>
                        </div>

                        <Slider {...settings} className="py-lg-5">
                            <div className="pb-5 px-4">
                                <Row>
                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img1} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Darrell Steward</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img2} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Savannah Nguyen</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} data-aos="zoom-in " data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img3} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Esther Howard</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center align-items-center mt-5 d-md-flex d-none">
                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img4} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Jenny Wilson</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img5} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Wade Warren</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>



                            </div>


                            <div className="pb-5">
                                <Row>
                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img1} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Darrell Steward</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img2} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Savannah Nguyen</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img3} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Esther Howard</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center align-items-center mt-5 d-md-flex d-none md-pb-5 pb-0">
                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img4} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Jenny Wilson</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="400">
                                        <div className="bg_secondary mt-5">
                                            <div className="clientsBox position-relative">
                                                <img className="triangle" src={Triangle} alt="" />
                                                <p className="mb-0 ff-primary fs-16 fw-400">Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                            </div>
                                            <div className="d-flex align-items-center posetion gap-2">
                                                <img className="border-radius-50" src={img5} alt="" />
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 fs-20 fw-400 ff-primary fc-grey">Wade Warren</p>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default ClientsSay