import React from 'react'
import logo from '../Images/logo.svg'
import { Icon } from 'react-icons-kit'
import {chevronsLeft} from 'react-icons-kit/feather/chevronsLeft'
import {grid} from 'react-icons-kit/feather/grid'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import {gift} from 'react-icons-kit/feather/gift'
import {user} from 'react-icons-kit/feather/user'
import {lock} from 'react-icons-kit/feather/lock'
import {settings} from 'react-icons-kit/feather/settings'
import {box} from 'react-icons-kit/feather/box'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import {users} from 'react-icons-kit/feather/users'
import {codepen} from 'react-icons-kit/feather/codepen'
import {briefcase} from 'react-icons-kit/feather/briefcase'
import {award} from 'react-icons-kit/feather/award'
import {headphones} from 'react-icons-kit/feather/headphones'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

export const Sidebar = () => {
    return (
       
        // main sidebar component
        <div className='sidebar' data-simplebar>
           
            {/* sidebar header with logo */}
            <div className='sidebar-header'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='toggle-icon'>
                    <Icon icon={chevronsLeft} size={20}/>
                </div>
            </div>
            {/* main dashboard link */}
            <div className='dashboard-link'>
                <div className='icon-text'>
                    <div className='icon'>
                        <Icon icon={grid} size={20}/>
                    </div>
                    <div className='text'>Dashboards</div>
                </div>
                <div className='toggle-icon'>
                    <Icon icon={chevronRight} size={14}/>
                </div>
            </div>
            {/* crafted div */}
            <div className='crafted-div'>
                <div className='heading-text'>CRAFTED</div>
                <div className='links-box'>
                    {/* pages */}
                    <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={gift} szie={18}/>
                            </div>
                            <div className='text'>Pages</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* account */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={user} szie={18}/>
                            </div>
                            <div className='text'>Account</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* authentication*/}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={lock} szie={18}/>
                            </div>
                            <div className='text'>Authentication</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* utilities */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={settings} szie={18}/>
                            </div>
                            <div className='text'>Utilities</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* widgets */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={box} szie={18}/>
                            </div>
                            <div className='text'>Widgets</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* apps div */}
            <div className='crafted-div'>
                <div className='heading-text'>APPS</div>
                <div className='links-box'>
                    {/* projects */}
                    <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={award} szie={18}/>
                            </div>
                            <div className='text'>Projects</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* eCommerce */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={shoppingCart} szie={18}/>
                            </div>
                            <div className='text'>eCommerce</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* support center*/}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={headphones} szie={18}/>
                            </div>
                            <div className='text'>Support Center</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* user management */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={users} szie={18}/>
                            </div>
                            <div className='text'>User Mangement</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* subscriptions */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={briefcase} szie={18}/>
                            </div>
                            <div className='text'>Subscriptions</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* apps div */}
            <div className='crafted-div'>
                <div className='heading-text'>APPS</div>
                <div className='links-box'>
                    {/* projects */}
                    <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={award} szie={18}/>
                            </div>
                            <div className='text'>Projects</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* eCommerce */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={shoppingCart} szie={18}/>
                            </div>
                            <div className='text'>eCommerce</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* support center*/}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={headphones} szie={18}/>
                            </div>
                            <div className='text'>Support Center</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* user management */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={users} szie={18}/>
                            </div>
                            <div className='text'>User Mangement</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                     {/* subscriptions */}
                     <div className='link'>
                        <div className='icon-text'>
                            <div className='icon'>
                                <Icon icon={briefcase} szie={18}/>
                            </div>
                            <div className='text'>Subscriptions</div>
                        </div>
                        <div className='toggle-icon'>
                            <Icon icon={chevronRight} size={14}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='docs-and-components'>
                <Tippy content={<p style={{textAlign:'center',padding:5+'px',fontSize:12+'px'}}>200+ inhouse components<br></br> and 3rd party plugins</p>}>
                    <span>Docs & Components</span>
                </Tippy>
            </div>
            
        </div>
        // end of sidebar component
    )
}
