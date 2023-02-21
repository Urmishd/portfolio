import { Divider } from '@mui/material'
import React from 'react'
import AboutTab from './AboutTab'
const About = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='aboutgif'>
                            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_j9gwl5e2.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay>
                            </lottie-player>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='info d-flex justify-content-start align-content-center'>
                            <h1 className='font-weight-bold '>About Me</h1>
                        </div>
                        <hr />
                        <p className='text-secondary'>As a web developer, I have a passion for creating visually appealing, functional, 
                        and secure websites and web applications. With my expertise in HTML, CSS, JavaScript, React, and database technologies, 
                        I can develop powerful, high-performance websites and applications.</p>
                        <div>

                            <AboutTab />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default About