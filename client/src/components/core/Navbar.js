import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UploadVideo from 'components/videos/UploadVideo';
import { HamburgerIcon, NotificationIcon } from 'components/icons';
import { openSidebar, closeSidebar } from 'reducers/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'styles/Avatar';
import Search from './Search';
import logo from 'assets/header.png';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${(props) => props.theme.grey};
    z-index: 99;
    padding: 0.7rem 1.5rem;

    input {
        width: 500px;
    }

    ul {
        list-style: none;
        display: flex;
        position: relative;
        top: 2px;
    }

    li svg {
        margin-right: 1.7rem;
        position: relative;
        top: 3px;
    }

    img {
        position: relative;
        top: 3px;
    }

    @media screen and (max-width: 1000px) {
        input {
            width: 400px;
        }
    }

    @media screen and (max-width: 850px) {
        input {
            width: 280px;
        }
    }

    @media screen and (max-width: 500px) {
        li svg {
            width: 30px;
            height: 30px;
            margin-right: 1.7rem;
            position: relative;
            top: 0px;
        }
    }
`;

const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 1093px) {
        display: block;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const Logo = styled.div`
    span {
        position: relative;
        top: 1px;
    }
`;

const Navbar = () => {
    const dispatch = useDispatch();

    const { data: user } = useSelector(state => state.user);
    const { sidebar: open } = useSelector(state => state.sidebar);

    const handleToggleSidebar = () => {
        open ? dispatch(closeSidebar()) : dispatch(openSidebar());
    };

    return (
        <Wrapper>
            <Logo className="flex-row">
                <Hamburger onClick={handleToggleSidebar}>
                    <HamburgerIcon />
                </Hamburger>
                <span>
                    <Link to="/">
                        <img src={logo} alt="Logo" width="120" />
                    </Link>
                </span>
            </Logo>

            <Search />

            <ul>
                <li>
                    <UploadVideo />
                </li>
                <li>
                    <NotificationIcon />
                </li>
                <li>
                    <Link to="/feed/my_videos">
                        <Avatar className="pointer" src={user.avatar} alt="user-avatar" />
                    </Link>
                </li>
            </ul>
        </Wrapper>
    );
}

export default Navbar;