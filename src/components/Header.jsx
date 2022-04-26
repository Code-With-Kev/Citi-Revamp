import React from 'react'
import logo from "../images/citilogoredesign.png"
import location from "../images/location.svg"
import globe from "../images/globe.svg"
import '../sass/sass.css'

const Header = () => {
  return (
    <div>
        <div class="header">
            <img src={logo} alt="logo" class="header__logo" />
            <div class="header__icon-box">
                <div class="header__icon-box--section">
                    <img src={location} alt="location icon" class="header__icon header__icon--left" />
                    <p class="header__icon-text">ATM/BRANCH</p>
                </div>
                <div class="header__icon-box--section">
                    <img src={globe} alt="globe icon" class="header__icon header__icon--right" />
                    <div class="header__icon-text">ESPAÑOL</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header