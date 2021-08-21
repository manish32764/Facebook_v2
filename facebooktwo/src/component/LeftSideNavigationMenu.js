import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, useRouteMatch} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;

    font-weight: bold;
    color: rgb(75, 75, 75);
    font: sans-serif;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;

        font-weight: bold;
        color: rgb(75, 75, 75);
        font: sans-serif;
    }
`;

const LeftSideMenu = () => {

    return (
        <div className="main-left-nav">
            <div className="main-left-nav-item">
                <StyledLink to="/manish">My Timeline</StyledLink> 
            </div>
            <div className="main-left-nav-item">Covid-19 Information Center</div>
            <div className="main-left-nav-item">Friends</div>
            <div className="main-left-nav-item">Pages</div>
            <div className="main-left-nav-item">Groups</div>
            <div className="main-left-nav-item">Watch</div>
            <div className="main-left-nav-item">Jobs</div>
            <div className="main-left-nav-item">Blood Donations</div>
            <div className="main-left-nav-item">
            <StyledLink to="/">NewsFeed</StyledLink>
            </div>
            <div className="main-left-nav-item">
                <StyledLink to="/search">Search</StyledLink>
            </div>
        </div>

    );
};

export default LeftSideMenu;