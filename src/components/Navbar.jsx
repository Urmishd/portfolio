import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import GetInTouch from '../pages/GetInTouch'
import Home from '../pages/Home'
import Navv from './Navv'
const Navbar = () => {
    return (
        <>
        <Navv />
            <div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/getintouch' element={<GetInTouch />} />
                </Routes>
            </div>
        
        </>
    )
}

export default Navbar