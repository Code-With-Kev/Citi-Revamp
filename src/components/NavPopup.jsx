import React from 'react'

const NavPopup = (props) => {
    const { nav } = props
  return (
    <div className='popup'>
        <div className="popup__left">
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">View All Credit Cards</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">See If You're Pre-Selected</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">Balance Transfer Credit Cards</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">0% Intro APR Credit Cards</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">Rewards Credit Cards</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">Cash Back Credit Cards</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">Travel Credit Cards</a>
            </div>
            <div className="popup__item swipeFade">
                <a href="" className="popup__text">Small Business Credit Cards</a>
            </div>      
        </div>
        <div className="popup__right">
            <div className="popup__item swipeFade">
                    <a href="" className="popup__text">Quick Link</a>
                </div>
                <div className="popup__item swipeFade">
                    <a href="" className="popup__text">Citi® Credit Knowledge Center</a>
                </div>
                <div className="popup__item swipeFade">
                    <a href="" className="popup__text">Respond to Mail Offer</a>
                </div>
            </div>
    </div>
  )
}

export default NavPopup