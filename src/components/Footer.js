import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://medium.com/@ryansiu" className="icon fa-medium"><span className="label">Medium</span></a></li>
            <li><a href="mailto:rsiu05@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
            <li><a href="https://github.com/siuryan" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
        <p className="copyright">&copy; 2019 Ryan Siu</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
