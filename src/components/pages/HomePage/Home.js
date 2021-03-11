import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import Pricing from './../../Pricing';

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjFour}/>
            <HeroSection {...homeObjThree}/>       
            <HeroSection {...homeObjTwo}/>            
            <Pricing/>  
        </div>
    )
}

export default Home
