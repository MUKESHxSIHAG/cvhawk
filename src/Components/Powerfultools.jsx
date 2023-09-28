import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Powerful from '../Assets/Images/png/Powerful.png'
import Brick from '../Assets/Images/png/Brick.png'
import Ball from '../Assets/Images/png/Ball.png'
import C from '../Assets/Images/png/C.png'
const Powerfultools = () => {
  return (
      <>
          <section className='bg_secondary position-relative'>
              <img className='position-absolute power1' src={Brick } alt="" />
              <img className='position-absolute power2' src={C } alt="" />
              <img className='position-absolute power3' src={Ball } alt="" />
              <Container className='pt-5 pb-3 position-relative'>
                  <Row className='justify-content-center align-items-center pt-3 pb-5'>
                      <Col lg={6} data-aos="fade-right">
                          <div className='d-flex flex-column justify-content-start align-items-start'>
                              <h2 className='ff-primary fc-black fs-40 fw-500 max-w-487 '>Powerful Tools to Create <span className='fc-primary whitespace'>Your Standout CV</span></h2>
                              <p className='ff-primary fs-16 fc-black fw-400 opacity-75 max-w-525 mt-16'>Customize your CV to reflect your <span className='fw-600'>unique personality</span> and professional brand. Choose from a wide range of <span className='fw-600'> professionally designed</span> templates and layouts, allowing you to find the <span className='fw-600'>perfect style</span> that aligns with your industry and career goals.</p>
                          </div>
                      </Col>

                      <Col lg={6} className='mt-lg-0 mt-5' data-aos="fade-left">
                          <div className='d-flex justify-content-start align-items-start'>  <img className='w-100' src={Powerful} alt="Powerful" /></div>
                      </Col>
                  </Row>
              </Container>   
         </section>
    </>
  )
}

export default Powerfultools