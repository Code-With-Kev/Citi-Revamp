import '../sass/sass.css'
import alert_icon from "../images/alert.svg"

const Alert = () => {
  return (
    <div>
        <div class="alert">
            <div className="alert__left">
                <img src={alert_icon} alt="alert" class="alert__icon" />
                <p class="alert__text">
                    Elimination of overdraft fees: Get the latest details on Citi’s decision to eliminate consumer overdraft and returned item fees.
                    <a className="alert__link" href="">Learn More</a>
                </p>
            </div>
            <p class="alert__close">X</p>
        </div>

        

    </div>
  )
}

export default Alert