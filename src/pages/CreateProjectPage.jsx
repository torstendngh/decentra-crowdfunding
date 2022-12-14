import WorkInProgress from "../components/WorkInProgress"
import { useEffect } from "react";

function CreateProjectPage() {

  useEffect(() => {
    document.title = "Crowdfund • Create Project";
  }, [])

  return (
    <WorkInProgress text={"Create Project"}/>
  )
}

export default CreateProjectPage
