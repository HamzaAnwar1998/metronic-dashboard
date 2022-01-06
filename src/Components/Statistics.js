import React from 'react'
import { Icon } from 'react-icons-kit'
import {grid} from 'react-icons-kit/feather/grid'
import {barChart2} from 'react-icons-kit/feather/barChart2'
import {award} from 'react-icons-kit/feather/award'
import {layers} from 'react-icons-kit/feather/layers'
import {mail} from 'react-icons-kit/feather/mail'
import {disc} from 'react-icons-kit/feather/disc'

export const Statistics = () => {
    return (
        <div className='stats-activities-reports'>
            <div className='box stats'>
                <div className='sales-statistics'>
                    <div className='text-and-icon'>
                        <h4 className='text'>Sales Statistics</h4>
                        <div className='icon'>
                            <Icon icon={grid} size={16}/>
                        </div>
                    </div>
                    <div className='four-boxes-container'>
                        <div className='myrow'>
                            <div className='mybox sales'>
                                <div className='sales-icon-text'>
                                    <div className='my-icon'>
                                        <Icon icon={barChart2} size={36}/>
                                    </div>
                                    <div className='my-text'>
                                        Weekly<br></br>Sales
                                    </div>
                                </div>
                            </div>
                            <div className='mybox projects'>
                                <div className='projects-icon-text'>
                                    <div className='my-icon'>
                                        <Icon icon={award} size={36}/>
                                    </div>
                                    <div className='my-text'>
                                        New<br></br>Projects
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='myrow'>
                            <div className='mybox orders'>
                                <div className='orders-icon-text'>
                                    <div className='my-icon'>
                                        <Icon icon={layers} size={36}/>
                                    </div>
                                    <div className='my-text'>
                                        Item<br></br>Orders
                                    </div>
                                </div>
                            </div>
                            <div className='mybox bugs'>
                                <div className='bugs-icon-text'>
                                    <div className='my-icon'>
                                        <Icon icon={mail} size={36}/>
                                    </div>
                                    <div className='my-text'>
                                        Bug<br></br>Reports
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box activities'>
                <div className='activities-header'>
                    <div className='text-and-icon'>
                        <h4 className='text'>Activities <br></br>
                        <span>890,344 Sales</span></h4>
                        <div className='icon'>
                            <Icon icon={grid} size={16}/>
                        </div>
                    </div>
                </div>
                <div className='list-box'>
                    <div className='list'>
                        <div className='time'>08:42</div>
                        <div className='icon'
                        style={{color:'#f8a800'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-light'>
                            Outlines keep you honest. And keep structure
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>10:00</div>
                        <div className='icon'
                        style={{color:'#0bb783'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-dark'>
                            AEOL meeting
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>14:37</div>
                        <div className='icon'
                        style={{color:'#ef4758'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-dark'>
                            Make deposit <span style={{color:'#3699ff'}}>USD 700</span>. to ESL
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>16:50</div>
                        <div className='icon'
                        style={{color:'#3699ff'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-light'>
                            Indulging in poorly driving and keep structure keep great
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>21:03</div>
                        <div className='icon'
                        style={{color:'#f64e60'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-dark'>
                            New order placed <span style={{color:'#3699ff'}}>#XF-2356</span>.
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>16:50</div>
                        <div className='icon'
                        style={{color:'#3699ff'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-light'>
                            Indulging in poorly driving and keep structure keep great
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>21:03</div>
                        <div className='icon'
                        style={{color:'#f64e60'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-dark'>
                            New order placed <span style={{color:'#3699ff'}}>#XF-2356</span>.
                        </div>
                    </div>
                    <div className='list'>
                        <div className='time'>10:30</div>
                        <div className='icon'
                        style={{color:'#0bb783'}}>
                            <Icon icon={disc} size={18}/>
                        </div>
                        <div className='text-light'>
                            Finance KPI Mobile app launch preparion meeting
                        </div>
                    </div>
                </div>
            </div>
            <div className='box reports'>
                <div className='reports-box' style={{marginBottom:20+'px'}}>
                    <h4>Generated Box</h4>
                    <span>Finance and accounting reports</span>
                    <div>$24,500</div>
                </div>
                <div className='reports-box sales'>
                    <div className='header'>
                        <h4>Sales <br></br><span>Oct 8 - Oct 26 22</span></h4>
                        <div>$15,300</div>
                    </div>
                    <div className='chart'></div>
                </div>
            </div>
        </div>
    )
}
