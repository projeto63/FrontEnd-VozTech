import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Posts',
        path: '/formularioPostagem',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Meus Posts',
        path: '/meusPosts',
        icon: <FaIcons.FaTasks />
    },
    {
        // title: 'Chats',
        // path: '/chats',
        // icon: <FaIcons.FaRocketchat />
    },
    {
        // title: 'Analytics',
        // path: '/analytics',
        // icon: <FaIcons.FaRegChartBar />
    }
]
