import WorkInProgress from "../components/WorkInProgress"
import { useEffect } from "react";

function SearchPage() {

  useEffect(() => {
    document.title = "Crowdfund • Search";
  }, [])

  return (
    <WorkInProgress text={"Search"}/>
  )
}

export default SearchPage
