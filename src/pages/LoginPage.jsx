import './LoginPage.css'
import {ReactComponent as ConnectSVG} from './../svg/undraw_dreamer_re_9tua.svg';
import { useEffect } from "react";

function LoginPage() {

  useEffect(() => {
    document.title = "Crowdfund • Login";
  }, [])

  return (
    <div className="LoginPage">
      <ConnectSVG className="Background"/>
      <div className="FormContainer">
        <p className="Title">Login</p>
        <form action="">
          <label for="fname">E-mail</label>
          <input required type="email" id="fname" name="fname" placeholder="username@domain.com"></input>
          <label for="lname">Password</label>
          <input required type="password" id="lname" name="lname" placeholder="password"></input>
          <button className="LoginButton" type="submit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.2197 8.96967L10.75 13.4393L8.78033 11.4697C8.48744 11.1768 8.01256 11.1768 7.71967 11.4697C7.42678 11.7626 7.42678 12.2374 7.71967 12.5303L10.2197 15.0303C10.5126 15.3232 10.9874 15.3232 11.2803 15.0303L16.2803 10.0303C16.5732 9.73744 16.5732 9.26256 16.2803 8.96967C15.9874 8.67678 15.5126 8.67678 15.2197 8.96967Z" fill="currentColor"/>
            </svg>
            Sign In
          </button>
        </form>
        <p className="Or">- or -</p>
        <button className="CreateAccountButton">
          Create Account
        </button>
      </div>
    </div>
  )
}

export default LoginPage
