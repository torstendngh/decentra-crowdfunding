import WorkInProgress from "../components/WorkInProgress"
import { useEffect } from "react";

function ProfilePage() {

  useEffect(() => {
    document.title = "Crowdfund • Profile";
  }, [])

  return (
    <WorkInProgress text={"Profile"}/>
  )
}

export default ProfilePage
