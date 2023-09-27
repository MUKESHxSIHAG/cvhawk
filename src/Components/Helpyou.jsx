import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HelpYou from '../Assets/Images/png/HelpYou.png'
const Helpyou = () => {
  return (
      <>
          <section className='position-relative'>
              <div className='blur pos2'></div>
              <div className='blur pos0'></div>
              <Container className='pt-5 pb-5 position-relative'>
                  <Row className='justify-content-center align-items-center pt-lg-5 pt-0 pb-lg-5 pb-0 mb-lg-5 mb-0 mt-5'>
                      <Col lg={6} data-aos="fade-right">
                          <div>
                              <img className='w-100' src={HelpYou} alt="" />
                          </div>
                      
                      </Col>   
                      
                      <Col lg={6} className='mt-lg-0 mt-5' data-aos="fade-left">
                          <div>
                              <h2 className='fs-40 ff-primary fw-500 fc-darkblack'>We’ll help you</h2>
                              <p className='fs-16 ff-primary fw-400 fc-black mb-0 pt-1'>Once you've booked a session, a confirmation email will be sent to the provided email address, containing all the necessary details, including the date, time, and instructions for the session.</p>
                              <button className='mt-5 fc-white bg_primary headerbtn fw-600 ff-primary fs-16'>Book a Call</button>
                      </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      
      </>
  )
}

export default Helpyou