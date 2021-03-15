import React from 'react';
import {Route,Link} from 'react-router-dom'
import One from './Workplace/One'
import Two from './Workplace/Two'
import Three from './Workplace/Three'

function Workplace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to='/workplace/one'>One</Link></li>
                    <li><Link to='/workplace/two'>Two</Link></li>
                    <li><Link to='/workplace/three'>Three</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>workplace</h3></div>
                <Route path='/workplace/one/' component={One}/>
                <Route path='/workplace/two/' component={Two}/>
                <Route path='/workplace/three/' component={Three}/>

            </div>
        </div>
    )
}

export default Workplace