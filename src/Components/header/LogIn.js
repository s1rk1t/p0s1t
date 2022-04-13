import React, {Fragment} from 'react'
import './LogIn.scss';

const LogIn = () => {
  return (
    <Fragment>
        <form className="login">
            <input className="usernameInput" type="text" id="username" name="username" placeholder="User Name" />
            <br />
            <input className="passwordInput" type="password" id="password" name="password" placeholder="Password" />
        </form>
    </Fragment>
  )
}

export default LogIn