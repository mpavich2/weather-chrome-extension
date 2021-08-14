import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Clock from './Clock';

const Header = () => {
    return (
        <div>
            <div className="header">
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

export default Header;