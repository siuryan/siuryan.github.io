import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Resume from '../assets/resume.pdf'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="content">
            <div className="inner">
                <h1>Ryan Siu</h1>
                <p>{props.description}&nbsp;</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><OutboundLink href="javascript:work;" onClick={() => {props.onOpenArticle('work')}}>Work</OutboundLink></li>
                <li><OutboundLink href="javascript:about;" onClick={() => {props.onOpenArticle('about')}}>About</OutboundLink></li>
                <li><OutboundLink href="javascript:contact;" onClick={() => {props.onOpenArticle('contact')}}>Contact</OutboundLink></li>
                <li><OutboundLink href={Resume}>Resume</OutboundLink></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
    typeEffect: PropTypes.func
}

export default Header
