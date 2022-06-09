import React from 'react'
import { RiInstagramLine, RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri'
import { nanoid } from 'nanoid'

function Social() {
    const social = [
        {
            id: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jason-b-warren/',
            icon: RiLinkedinBoxLine
        },
        {
            id: 'Github',
            url: 'https://github.com/JasonxWarren',
            icon: RiGithubLine
        },
    ]

    const socialArray = social.map(icon => {
        return(
            <a
                key={nanoid()}
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
