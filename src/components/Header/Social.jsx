import React from 'react'
import { RiInstagramLine, RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri'

function Social() {
    const social = [
        {
            id: 'Instagram',
            url: 'https://instagram.com',
            icon: RiInstagramLine
        },

        {
            id: 'LinkedIn',
            url: 'https://linkedin.com',
            icon: RiLinkedinBoxLine
        },

        {id: 'Github',
         url: 'https://github.com',
         icon: RiGithubLine},
    ]

    const socialArray = social.map(icon => {
        return(
            <a
                href={icon.url}
                target='_blank'
                className="profile__social-link"
            >
                <icon.icon className="icon"/>
            </a>
        )
        
    })

    return(
        <ul className="profile__social">
            {socialArray}
        </ul>
    )
}

export default Social
