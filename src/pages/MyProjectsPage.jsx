import WorkInProgress from "../components/WorkInProgress"
import { useEffect } from "react";

function MyProjectsPage() {

  useEffect(() => {
    document.title = "Crowdfund • My Projects";
  }, [])

  return (
    <WorkInProgress text={"My Projects"}/>
  )
}

export default MyProjectsPage
