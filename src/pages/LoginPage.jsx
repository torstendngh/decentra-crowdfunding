import WorkInProgress from "../components/WorkInProgress"
import './LoginPage.css'
import {ReactComponent as ConnectSVG} from './../svg/undraw_dreamer_re_9tua.svg';

function LoginPage() {
  return (
    <div className="LoginPage">
      <ConnectSVG className="Background"/>
      <div className="FormContainer">
        <p className="Title">Login</p>
        <form action="">
          <label for="fname">E-mail:</label>
          <input type="email" id="fname" name="fname" placeholder="E-mail"></input>
          <label for="lname">Password:</label>
          <input type="password" id="lname" name="lname" placeholder="Password"></input>
          <input type="submit" value="Accept"></input>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
