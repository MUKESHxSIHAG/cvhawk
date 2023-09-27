import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import JobApply from '../Assets/Images/png/JobApply.png'
import { Tick } from './Icons'
const JobApplying = () => {
  return (
      <>
          <section className='position-relative'>
              <div className='blur pos2'></div>
              <Container className='pt-5 pb-5 position-relative'>
                  <Row className='justify-content-center align-items-center pt-md-5 pt-0 pb-5'>
                      <Col lg={6} data-aos="fade-right">
                          <div>
                              <img className='w-100' src={JobApply} alt="" />
                      </div>
                      </Col>

                      <Col lg={6} data-aos="fade-left">
                          <div className='pt-md-0 mt-5'>
                              <h2 className='fs-40 fw-500 ff-primary fc-darkblack max-w-558 mb-0'>Resume trailoring based on the <span className='fc-primary whitespace'>job you’re applying </span>for</h2>
                              <p className='fs-16 fw-400 ff-primary fc-black opacity-75 mt-3'>Quickly ensure that your resume covers key skills and experience by pasting the job ad you’re applying for</p>
                              <div className='d-flex gap-2 mt-2'>
                                  <Tick/>
                                  <p className='mb-0 fs-16 fw-400 fc-black ff-primary'>Skills and experience analysis</p>
                              </div>
                              <div className='d-flex gap-2 mt-2'>
                                  <Tick/>
                                  <p className='mb-0 fs-16 fw-400 fc-black ff-primary'>Actionable Checklist of what else to add to your resume</p>
                              </div>
                              <div className='d-flex gap-2 mt-2'>
                                  <Tick/>
                                  <p className='mb-0 fs-16 fw-400 fc-black ff-primary'>Instant comparison between your resume and the job posting</p>
                              </div>
                      </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      
      </>
  )
}

export default JobApplying