import WorkInProgress from "../components/WorkInProgress"
import { useEffect } from "react";

function FundedByMePage() {

  useEffect(() => {
    document.title = "Crowdfund • Supported";
  }, [])

  return (
    <WorkInProgress text={"Supported"}/>
  )
}

export default FundedByMePage
