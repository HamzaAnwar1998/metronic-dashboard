import React from 'react'
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/feather/search'
import {barChart2} from 'react-icons-kit/feather/barChart2'
import {box} from 'react-icons-kit/feather/box'
import {messageSquare} from 'react-icons-kit/feather/messageSquare'
import {grid} from 'react-icons-kit/feather/grid'
import {moon} from 'react-icons-kit/feather/moon'
import {sun} from 'react-icons-kit/feather/sun'
import profile from '../Images/profile.jpg'
import {filter} from 'react-icons-kit/feather/filter'
import {menu} from 'react-icons-kit/feather/menu'

export const Navbar = () => {
    return (
        <div className='navbars-container'>
         <div className='navbar'>
            <div className='toggler'>
                <Icon icon={menu} size={20}/>
            </div>
            <div className='leftside-links'>
                <span className='active'>Dashboard</span>
                <span>Crafted</span>
                <span>Apps</span>
                <span>Layouts</span>
                <span>Resources</span>
                <span>Mega Menu</span>
            </div>
            <div className='rightside-icons'>
                <span>
                    <Icon icon={search} size={18}/>
                </span>
                <span>
                    <Icon icon={barChart2} size={18}/>
                </span>
                <span>
                    <Icon icon={box} size={18}/>
                </span>
                <span>
                    <Icon icon={messageSquare} size={18}/>
                </span>
                <span>
                    <Icon icon={grid} size={18}/>
                </span>
                <span>
                    <Icon icon={moon} size={18}/>
                </span>
                <div className='span-img'>
                    <img src={profile} alt="profile"/>
                </div>
            </div>
         </div>
         {/* navbar2 */}
         <div className='navbar second'>
             <div className='leftside'>
                <h3>Dashboard</h3>
                <p>#XRS-45670</p>
             </div>
             <div className='rightside'>
                 <button className='filter-btn'>
                     <Icon icon={filter} size={14}/> Filter</button>
                 <button className='create-btn'>Create</button>
             </div>
         </div>
        </div>
    )
}
