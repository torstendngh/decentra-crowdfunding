import WorkInProgress from "../components/WorkInProgress"

function LoginPage() {
  return (
    <div>
      <form action="">
        <label for="fname">Email:</label><br />
        <input type="text" id="fname" name="fname"></input><br/>
        <label for="lname">Password:</label><br/>
        <input type="password" id="lname" name="lname"></input><br />
        <input type="submit" value="Accept"></input>
      </form>
    </div>
  )
}

export default LoginPage
