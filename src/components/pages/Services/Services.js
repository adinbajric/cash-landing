import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Services() {
    return (
        <div>
            <HeroSection {...homeObjTwo}/>
            
        </div>
    )
}

export default Services
