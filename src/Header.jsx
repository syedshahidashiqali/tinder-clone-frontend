import React from 'react';

// import css
import './Header.css';

// import person icon from material ui
import PersonIcon from '@material-ui/icons/Person';
// import meassage icon
import ForumIcon from '@material-ui/icons/Forum';
// import icon button to make icon button
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon 
                    fontSize="large" className="header__icon" />
            </IconButton>

            <img
                className="header__logo" 
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                alt="Tinder" />

            <IconButton>
                <ForumIcon 
                    fontSize="large"                className="header__icon" />
            </IconButton>
        </div>
    );
}

export default Header;