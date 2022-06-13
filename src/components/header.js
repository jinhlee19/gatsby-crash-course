import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="flex h-24 items-center jusify-between">
    {siteTitle}

    <ul className="flex space-x-4 items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="">Portfolio</Link>
      </li>
      <li>
        <Link to="">Inquiry</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
