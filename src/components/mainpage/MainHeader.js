import React from 'react';
import { Divider } from '@material-ui/core';
import Clock from './Clock';
import HeaderMenu from '../HeaderMenu';

const MainHeader = () => {
    return (
        <div>
            <div className="mainHeader">
                <div className="time">
                    <Clock />
                </div>
                <HeaderMenu />
            </div>
            <Divider />
        </div>
    )
}

export default MainHeader;