import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
    HomeIcon,
    TrendingIcon,
    SubIcon,
    HistoryIcon,
    WatchIcon,
} from 'components/icons';

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        padding: 0;
        margin: 0;
    }

    svg {
        width: 30px;
        height: 30px;
        fill: ${(props) => props.theme.darkGrey};
    }

    img {
        width: 26px;
        height: 26px;
        object-fit: cover;
        border-radius: 13px;
    }
`;

const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${(props) => props.theme.grey};
    border-top: 1px solid ${(props) => props.theme.darkGrey};
    display: none;
    padding: 0.8rem 1rem;

    .active svg {
        fill: ${(props) => props.theme.primaryColor};
    }

    @media screen and (max-width: 500px) {
        display: block;
    }
`;

const BottomBar = () => {
    return (
        <Wrapper>
            <Icons>
                <NavLink activeClassName="active" exact to="/">
                    <HomeIcon />
                </NavLink>

                <NavLink activeClassName="active" exact to="/feed/trending">
                    <TrendingIcon />
                </NavLink>

                <NavLink activeClassName="active" exact to="/feed/subscriptions">
                    <SubIcon />
                </NavLink>

                <NavLink activeClassName="active" exact to="/feed/history">
                    <HistoryIcon />
                </NavLink>

                <NavLink activeClassName="active" exact to="/feed/liked_videos">
                    <WatchIcon />
                </NavLink>
            </Icons>
        </Wrapper>
    );
}

export default BottomBar;