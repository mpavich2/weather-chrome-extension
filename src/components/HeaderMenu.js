import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeDrawerOpen } from '../redux/slices/DrawerSlice';

const HeaderMenu = (props) => {
    const handleMenuIconClicked = () => {
        props.dispatch(
            changeDrawerOpen(!props.drawer)
        );
    }

    return (
        <div className="menu">
            <IconButton size="large" onClick={ handleMenuIconClicked }>
                <MenuIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(HeaderMenu);