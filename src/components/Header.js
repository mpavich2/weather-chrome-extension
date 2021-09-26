import React from 'react';
import { Divider } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

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
                <HeaderMenu />
            </div>
            <Divider />
        </div>
    )
}

export default Header;