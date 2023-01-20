import React from 'react'
import './success.css';
import { Navbar } from '../../components';
import Successimg from "../../assets/img/successimg.gif"

function Success() {
    return (
        <div className="succ">
            <Navbar login={true}/>
            <div className='gif' >
                <img src={Successimg} alt="success" />
                <h3>Success</h3>
            </div>
        </div>
    )
}

export default Success