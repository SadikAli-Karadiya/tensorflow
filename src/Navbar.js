import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import './App.css'

function Navbar() {
    return (
        <div>
            <NavContainer>
                <Nav>
                    <h3>
                        Tensorflow
                    </h3>
                    <LinkContainer>
                        <NavLink exact activeClassName='activeLink' className='link' to='/'>
                        Home
                        </NavLink>
                        <NavLink exact activeClassName='activeLink' className='link' to='/facedetect'>
                        Face Detect
                        </NavLink>
                        <NavLink exact activeClassName='activeLink' className='link' to='/handdetect'>
                        Hand Detect
                        </NavLink>
                    </LinkContainer>
                </Nav>
            </NavContainer>
        </div>
    )
}

export default Navbar;

const NavContainer = styled.div `
    display: flex;
    align-items: center;
    background: rgb(15, 13, 54);
    height: 60px;
`
const Nav = styled.div `
    display: flex;
    align-items: center;
    width: 100%;

    h3{
        padding-left: 20px;
        display: flex;
        flex: 1;
        color: white;
    }
    
`

const LinkContainer = styled.div `
    display: flex;
    gap: 20px;
    padding: 0 20px;
    .link{
        text-decoration: none;
        color: rgb(195, 195, 199);
        transition: all 0.4s ease;

        &:hover{
            color: white;
        }
    }
`