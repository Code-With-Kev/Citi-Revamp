import { useState } from "react"
import magnify from "../images/magnify.png"
import NavPopup from "./NavPopup"

const Nav = (props) => {
    const [ nav, setNav ] = useState(0)

  return (
    <div>
        { nav >= 1 &&
            <NavPopup nav={props.nav}/>
        }
        <div class="nav">
            <div class="nav__tabs">
                <a class="nav__tabs--section" onClick={(e)=>setNav(1)}>Credit Cards</a>
                <a class="nav__tabs--section">Banking</a>
                <a class="nav__tabs--section">Lending</a>
                <a class="nav__tabs--section">Investing</a>
                <a class="nav__tabs--section">Wealth Management</a>
                <a class="nav__tabs--section">Open an Account &gt; </a>
            </div>
            <div class="nav__search">
                <img src={magnify} alt="magnify" class="nav__search--icon" />
                <p class="nav__search--text">How can we help?</p>
            </div>
        </div>
    </div>
  )
}

export default Nav