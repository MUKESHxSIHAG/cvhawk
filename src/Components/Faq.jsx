import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <>
            <Container className='mt-4 pt-5'>
                <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in">
                    <h2 className='text-center fc-darkblack fs-40 ff-primary fw-500'>Frequently Asked Questions</h2>
                </div>

                <Row className='justify-content-center'>
                    <Col lg={9}>

                        <Accordion className=''>
                            <Accordion.Item defaultActiveKey="0" data-aos="fade-right">
                                <Accordion.Header><h3 className='ff-primary fw-400 fc-darkblack fs-24'>Q1. How does the CVhawk work??</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-16 ff-primary fw-400 fc-dark'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" data-aos="fade-left">
                                <Accordion.Header><h3 className='ff-primary fw-400 fc-darkblack fs-24'>Q2. Is the CVhawk completely free to use?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-16 ff-primary fw-400 fc-dark'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" data-aos="fade-right">
                                <Accordion.Header><h3 className='ff-primary fw-400 fc-darkblack fs-24'>Q3. Can I edit my CV after I've saved it?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-16 ff-primary fw-400 fc-dark'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" data-aos="fade-left">
                                <Accordion.Header><h3 className='ff-primary fs-24 fw-400 fc-darkblack'>Q4. Can I import my existing CV into the builder?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-16 ff-primary fw-400 fc-dark'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" data-aos="fade-right">
                                <Accordion.Header><h3 className='ff-primary fw-400 fc-darkblack fs-24'>Q5. Is my personal information safe and secure?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-16 ff-primary fw-400 fc-dark'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" data-aos="fade-left">
                                <Accordion.Header><h3 className='ff-primary fw-400 fc-darkblack fs-24'>Q6. What kind of templates are available in the CV builder?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-16 ff-primary fw-400 fc-dark'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Faq