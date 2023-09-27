import React from 'react'
import { Container } from 'react-bootstrap'

const Path = () => {
  return (
      <>
          <section className='bg_gradient mt-5 pt-5 pb-5'>
              <Container >
                  <div className='cvSection'>
                      <div className='d-flex flex-column justify-content-center align-items-center pt-5 mt-3'data-aos="zoom-in">
                          <h2 className='text-center fc-white ff-primary fs-40 fw-500 max-w-669'>Your Path to Success Starts Here: Build Your CV Today</h2>
                          <p className='ff-primary fs-16 fw-400 fc-white max-w-615 mt-2 text-center'> Our CV builder not only provides a user-friendly interface but also offers valuable guidance along the way.</p>
                      </div>
                      <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in">
                          <button className='pathbtn ff-primary fs-16 fw-600'>Get Started</button>
                      </div>
                  </div>
                  
              </Container>
              
      </section>
      </>
  )
}

export default Path