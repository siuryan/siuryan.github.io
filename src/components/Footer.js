import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><OutboundLink href="https://medium.com/@ryansiu" className="icon fa-medium"><span className="label">Medium</span></OutboundLink></li>
            <li><OutboundLink href="mailto:rsiu05@gmail.com" className="icon fa-envelope"><span className="label">Email</span></OutboundLink></li>
            <li><OutboundLink href="https://github.com/siuryan" className="icon fa-github"><span className="label">GitHub</span></OutboundLink></li>
        </ul>
        <p className="copyright">&copy; 2021 Ryan Siu</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
