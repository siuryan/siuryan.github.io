import React from 'react'
import PropTypes from 'prop-types'

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
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href={Resume}>Resume</a></li>
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
