import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image'

import { colSectionVars } from './ColSectionVars'
import { motion, useScroll, useTransform } from 'framer-motion';

import './colsection.css'


const ColSection = () => {     
    const navigate = useNavigate()

    return (
        <div className='col-section'>
            {Object.entries(colSectionVars).map(([key, value]) => {
                return (
                    <div className='row' key={key}>
                        <div className='col'>
                            <div className='image'>
                                <img className='image' src={value.image} />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='text'>
                                <h5>Our</h5>
                                <h4>{key}</h4>
                                <p>{value.text}</p>
                                <button 
                                    className='button' 
                                    onClick={() => navigate(`/about`)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default ColSection