import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navv = () => {
    return (
        <>
            <div className='container'>
                <div className='row navbg'>
                    <div className='col-9 '>
                        <ul className='list list-unstyled d-flex'>
                      
                        
                           &nbsp;&nbsp;&nbsp;
                            <li><Link className='text-decoration-none text-light' to='/'>Home</Link></li>
                            &nbsp;&nbsp;&nbsp;
                            <li><Link className='text-decoration-none text-light' to='/about'>About</Link></li>
                            &nbsp;&nbsp;&nbsp;
                            <li><Link className='text-decoration-none text-light' to='/getintouch'>Get In Touch</Link></li>
                          
                        </ul>
                    </div>
                    <div className='col-3 icon'>
                        <div className='d-flex align-content-around'>
                            <h5><a className='link' target="blank" href='https://www.linkedin.com/in/urmish-dholariya-b7b107216/' ><i class="fa-brands fa-linkedin"></i></a></h5>
                            &nbsp;&nbsp;&nbsp;
                            <h5><a className='link' target="blank" href='https://github.com/Urmishd'><i class="fa-brands fa-github"></i></a></h5>
                            &nbsp;&nbsp;&nbsp;
                            <h5><a className='link' target="blank" href='https://www.instagram.com/urmish_patel__01/'><i class="fa-brands fa-square-instagram"></i></a></h5>
                            &nbsp;&nbsp;&nbsp;
                            <h5><a className='link' target="blank" href='https://wa.me/919428453718?text=hello%20'><i class="fa-brands fa-whatsapp"></i></a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navv;