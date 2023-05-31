import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa' 

import { SidebarData } from './SidebarData'
import styled from 'styled-components'
import { Box } from '@mui/material'
import "./Sidebar.css"

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(true)
    const showSidebar = () => setClose(!close)
    const Navbar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: #848484;
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #ffffff;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff;
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: 200px;
    height: 100vh;
    background-color: #EE9D66;
    position: fixed;
    top: 0;
    left: ${({ close}) => close ? '0' : '-100%'};
    transition: .6s;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #000000;

    &:hover {
        background-color: #ffebd6;
        color: #654236;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
    `
    return (
        <>
            {/* <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar> */}

            <SidebarMenu close={close}>
                {/* <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose> */}
<Box className="posilogoside"><img className='logoside' src="https://ik.imagekit.io/projetovoztech/vozTech-center.png?updatedAt=1685468716232" alt="Logo do projeto VozTech" /> </Box>
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar

