import React from 'react'
import { Link } from 'react-router-dom'

import Nature from './Nature'

function Nav () {
  return (
    <>
      <div className="logo side-nav">
        <div className="picture">
          <img src="./images/logo/RTP Logo Black.png" alt="" />
          <ul className="mainmenu">
            <li><input type="checkbox" id="portfolio" />
              <label htmlFor="portfolio">Portfolio</label>
              <ul className="submenu">
                <li><Link to={Nature} replace>Nature</Link></li>

              </ul>
            </li>
            <li><a href="#">About</a></li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Nav
