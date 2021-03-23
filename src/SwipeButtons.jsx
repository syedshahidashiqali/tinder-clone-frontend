import React from 'react';

// import css
import './SwipeButtons.css'

// import icon buttons
import IconButton from '@material-ui/core/IconButton';

// import all icons that we need
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import Favorite from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';


function SwipeButtons() {
    return(
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <Favorite fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}


export default SwipeButtons;