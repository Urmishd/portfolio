import React from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const notify = () => toast("Ready for Download");
    const whatsapp = () => toast("let's chat");
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 self'>
                        <p className='text-secondary'>WELCOME TO MY WORLD</p>
                        <h3 className='name'>Hi, I'm Urmish Patel</h3>
                        <section class="animation">
                            <div class="second">Web Developer.</div>
                            <div class="first">Frontend Developer.</div>
                            <div class="second">Web Developer.</div>
                        </section>
                        <div className='d-flex'>
                            <a className='text-decoration-none' download="CV.pdf" href='../assets/urmish+resume1.pdf' title='Click and Download Resume'>
                                <Button onClick={notify} variant="contained" color="primary" sx={[{ width: "150px", height: "50px" }]}>CV</Button>
                            </a>
                            <ToastContainer color='balck' />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a className='text-decoration-none'href='https://wa.me/919428453718?text=hello%20'target='_blank' >
                                <Button onClick={whatsapp} variant="outlined" color="primary" sx={[{ width: "150px", height: "50px" }]}>Get Startrd</Button>
                            </a>
                            <ToastContainer />
                        </div>
                        
                    </div>
                    <div className='col-6'>
                        <div className='svg'>
                            <lottie-player
                                src="https://assets2.lottiefiles.com/private_files/lf30_obidsi0t.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay></lottie-player>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home