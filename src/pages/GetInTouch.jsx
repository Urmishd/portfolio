import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
// import { Axios, db } from '../firebase/firebaseConfig'

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState()
  const datasave = (event) => {
    event.preventDefault();
    const data = { name, email, mobile }
    console.log(data)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className='w-50 mt-5'>
              <div className='mb-5'>
                <h1 className='text-danger fw-bold'>Let's Talk</h1>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" name='name' placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="Email" name='email' placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="number" name='email' placeholder="Mobile" onChange={(e) => { setMobile(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="DONE" />

                </Form.Group>
                <Button variant="primary" type="submit" onClick={datasave}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className='col-6'>
            <div>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_isbiybfh.json"  
             background="transparent"  
             speed="1"  
             loop 
             autoplay>
             </lottie-player>
            </div>
            <div className='text-center mt-5'>
              <div className='d-flex justify-content-center '>
                <h1 className='text-secondary'>Contact Me</h1>
              </div>
              <div>
                <span>
                <i class="fa-solid fa-envelope"></i> &nbsp;
                  <a  className='mail text-danger text-decoration-none' href="mailto: urmishdholariya777@gmail.com" title='sent mail'>urmishdholariya777@gmail.com</a>
                </span>
              </div>
              <div>
                <span>
                <i class="fa-solid fa-phone"></i> &nbsp;
                  <a  className='mail text-danger text-decoration-none' href="tel: +919428453718">9428453718</a>
                </span>
              </div>
            </div>
             
          </div>
        </div>
      </div>


    </>
  )
}

export default GetInTouch