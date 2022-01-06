import React from 'react'
import { Navbar } from './Navbar'
import { Statistics } from './Statistics'

export const Rightside = () => {
    return (
        <div className='rightside-container'>
            <Navbar/>
            <Statistics/>
        </div>
    )
}
