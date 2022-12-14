import WorkInProgress from "../components/WorkInProgress"
import { useEffect } from "react";
import './CreateProjectPage.css'
import {ReactComponent as StartSVG} from './../svg/undraw_launching_re_tomg.svg';

function CreateProjectPage() {

  useEffect(() => {
    document.title = "Crowdfund • Create Project";
  }, [])

  return (
    <div className="CreateProjectPage">
      <StartSVG className="Background"/>
      <div className="FormContainer">
        <p className="Title">Create Project</p>
        <form action="">
          <label for="pname">Project name</label>
          <input maxlength={35} minlength={10} required type="text" name="pname" placeholder="My New Project"></input>

          <label for="pname">Project details</label>
          <textarea name="pdetails" rows="4" placeholder="Details of project..."></textarea>

          <label for="pcategory">Project category</label>
          <select className="CategoryPicker" name="pcategory">
            <option value="general">General</option>
            <option value="medical">Medical</option>
            <option value="memorial">Memorial</option>
            <option value="emergency">Emergency</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="financialEmergency">Financial Emergency</option>
            <option value="environment">Environment</option>
            <option value="business">Business</option>
            <option value="community">Community</option>
            <option value="competition">Competition</option>
            <option value="creative">Creative</option>
            <option value="event">Event</option>
            <option value="faith">Faith</option>
            <option value="family">Family</option>
            <option value="sports">Sports</option>
            <option value="travel">Travel</option>
            <option value="volunteer">Volunteer</option>
            <option value="wishes">Wishes</option>
          </select>

          <label for="pimage">Project Image</label>
          <input type="file" name="pimage"></input>

          <label for="pgoal">Goal</label>

          <div className="GoalContainer">
            <input required type="number" step={0.001} min={0.001} max={10} placeholder={0.001} name="pgoal"></input> ETH ($1.00)
          </div>

          <button className="CreateProjectButton" type="submit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66438 15.7345C8.90871 15.9075 9.20094 15.9999 9.50032 15.9989V15.9949C9.7826 15.9955 10.0588 15.9132 10.2948 15.7582C10.5307 15.6031 10.7159 15.3822 10.8273 15.1229L11.4403 13.2589C11.5819 12.8366 11.8198 12.4531 12.1351 12.1386C12.4505 11.8241 12.8347 11.5873 13.2573 11.4469L15.0353 10.8689C15.3217 10.7683 15.5691 10.5799 15.7422 10.3305C15.9154 10.0812 16.0055 9.7836 15.9997 9.48009C15.994 9.17659 15.8926 8.88262 15.7102 8.64003C15.5277 8.39744 15.2733 8.21858 14.9833 8.12889L13.2283 7.55889C12.8038 7.41763 12.418 7.1793 12.1018 6.86283C11.7855 6.54637 11.5473 6.1605 11.4063 5.73589L10.8283 3.95889C10.7275 3.67586 10.5411 3.43127 10.2949 3.25908C10.0486 3.0869 9.75492 2.99567 9.45449 2.99809C9.15406 3.00051 8.86184 3.09645 8.61844 3.27258C8.37504 3.44871 8.19255 3.69628 8.09632 3.98089L7.51332 5.77289C7.37273 6.18515 7.14037 6.56012 6.83376 6.8695C6.52715 7.17888 6.1543 7.4146 5.74332 7.55889L3.96632 8.12989C3.75494 8.20382 3.56365 8.32589 3.40757 8.48647C3.25149 8.64704 3.1349 8.84172 3.067 9.05511C2.9991 9.2685 2.98176 9.49475 3.01636 9.716C3.05095 9.93724 3.13652 10.1474 3.26632 10.3299C3.44321 10.5789 3.6941 10.7657 3.98332 10.8639L5.73732 11.4329C6.16295 11.5753 6.54951 11.815 6.86632 12.1329C6.95138 12.2173 7.03088 12.3072 7.10432 12.4019C7.30349 12.6597 7.45735 12.9495 7.55932 13.2589L8.13732 15.0339C8.23579 15.3166 8.42004 15.5615 8.66438 15.7345ZM16.331 20.7819C16.1405 20.6461 15.9971 20.4541 15.921 20.2329L15.593 19.2259C15.5292 19.0344 15.4221 18.8602 15.28 18.7169C15.1375 18.574 14.9635 18.4664 14.772 18.4029L13.781 18.0799C13.5506 18.0026 13.3507 17.8541 13.21 17.6559C13.0727 17.4636 12.9993 17.2331 13 16.9969C13.0003 16.7591 13.0748 16.5274 13.213 16.3339C13.3503 16.1394 13.5456 15.9934 13.771 15.9169L14.777 15.5909C14.964 15.5245 15.1333 15.4162 15.272 15.2742C15.4107 15.1322 15.515 14.9604 15.577 14.7719L15.901 13.7799C15.9772 13.5557 16.1212 13.3606 16.3131 13.2218C16.505 13.0829 16.7352 13.0071 16.9721 13.0048C17.2089 13.0025 17.4406 13.0738 17.6351 13.2089C17.8297 13.344 17.9774 13.5362 18.058 13.7589L18.387 14.7729C18.4514 14.963 18.559 15.1356 18.7012 15.2771C18.8435 15.4187 19.0166 15.5254 19.207 15.5889L20.199 15.9119C20.4277 15.9834 20.628 16.1251 20.7717 16.3169C20.9153 16.5086 20.9949 16.7408 20.9992 16.9803C21.0036 17.2199 20.9324 17.4547 20.7957 17.6516C20.6591 17.8484 20.464 17.9972 20.238 18.0769L19.224 18.4059C19.0339 18.4707 18.8612 18.5781 18.719 18.7199C18.5767 18.8627 18.4695 19.0366 18.406 19.2279L18.084 20.2169C18.0065 20.4472 17.8576 20.6469 17.659 20.7869C17.467 20.9249 17.2365 20.9991 17 20.9989C16.7597 20.9989 16.5256 20.9229 16.331 20.7819Z" fill="currentColor"/>
            </svg>
            Publish Project
          </button>

          <p className="Information">1% fee when funded</p>
        </form>
      </div>
    </div>
  )
}

export default CreateProjectPage
