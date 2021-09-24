import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="mainHeader">
                <div className="backArrow">
                    <Link to="/" exact="true">
                        <IconButton color="primary" aria-label="arrow back" component="span">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </div>
                <div className="menu">
                    <MenuIcon fontSize="large" />
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Header;