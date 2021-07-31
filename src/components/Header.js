import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h2 className="time">5:30 PM</h2>
                <div className="menu">
                    <MenuIcon fontSize="large"/>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Header;