import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./logo.png"

const Header = () => (
  <header
    style={{
      background: `lightgrey`,
      marginBottom: `1.4rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1260,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Logo" width="400px" />
        </Link>
      </h1>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
