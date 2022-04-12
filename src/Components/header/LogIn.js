import React, {Fragment} from 'react'

const LogIn = () => {
  return (
    <Fragment>
        <form className="login">
            <input className="usernameInput" type="text" id="username" name="username" placeholder="Enter Your User Name" />
            <br />
            <input className="passwordInput" type="password" id="password" name="password" placeholder="Enter Your Password" />
        </form>
    </Fragment>
  )
}

export default LogIn