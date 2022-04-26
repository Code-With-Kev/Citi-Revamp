import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className="login__top">
            <div className="login__top--username">
                <p className="login__text login__text--top">User ID</p>
                <input type="text" className="login__input" placeholder='User ID'/>
            </div>
            
            <div className="login__top--password">
                <p className="login__text login__text--top">Password</p>
                <input type="password" className="login__input" placeholder='Password'/>
            </div>
        </div>

        <div className="login__remember">
            <input id="checkbox" type="checkbox" />
            <p className='login__text login__remember--text'>Remember User ID?</p>
        </div>

        <div className="login__buttons">
            <button className="btn btn--extend circleFill">Sign On </button>
            <button className="btn btn--extend circleFill">Sign On With QR Code</button>
        </div>

        <div className="login__forgot">
            <p className="login__text login__text--blue">Register / Activate</p>
            <p className="login__text login__text--blue"> Forgot <a href="">User ID</a> or <a href="">Password</a></p>
        </div>


    </div>
  )
}

export default Login