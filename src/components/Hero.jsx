import offer from "../images/offer.png"
import Login from "./Login"

const Hero = () => {
  return (
        <div className="hero">
            
            
            <div className="hero__content">
                <div className="hero__content--offer">
                    <div className="hero__left">
                        <p className="hero__left--heading">CITI® CREDIT CARDS</p>
                        <p className="hero__left--title">Choose the right Citi® <br /> credit card for you</p>
                        <p className="hero__left--description">Whether you want Cash Back, Great Airline Miles, Rewards <br /> for Costco Members, or a Low Intro Rate, the choice is all yours.</p>
                        <button className="btn circleFill">Learn More</button>
                    </div>
                    
                    
                    <div className="hero__middle">
                        <img className="hero__image" src={offer} alt="offer" />
                    </div>
                </div>
                
                
                <div className="hero__right">
                    <Login />
                </div>
            
            
            </div>
        </div>
  )
}

export default Hero