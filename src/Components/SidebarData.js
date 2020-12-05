import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Chart',
        path: '/chart',
        icon: <AiIcons.AiOutlineBarChart />,
        cName: 'nav-text'
    },
    {
        title: 'Graph',
        path: '/graph',
        icon: <BsIcons.BsGraphUp />,
        cName: 'nav-text'
    }
]