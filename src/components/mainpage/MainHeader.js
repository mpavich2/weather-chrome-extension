import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider } from '@material-ui/core';
import Clock from './Clock';

const MainHeader = () => {
    return (
        <div>
            <div className="mainHeader">
                <div className="time">
                    <Clock />
                </div>
                <div className="menu">
                    <MenuIcon fontSize="large"/>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default MainHeader;