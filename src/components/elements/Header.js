import React from 'react';

import RMDBlogo from '../images/reactMovie_logo.png';
import TMDBlogo from '../images/tmdb_logo.svg';

import {
    StyledHeader,
    StyledRMDBlogo,
    StyledTMDBlogo
} from '../styles/StyledHeader';

//1.learn how to create a styled basic styled component
//2.learn how to handle props in styled components
//3.create a global style with styled components

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledRMDBlogo src={RMDBlogo} alt="rmdb-logo" />
            <StyledTMDBlogo src={TMDBlogo} alt="tmdb-logo" />
        </div>
    </StyledHeader>
)

export default Header;