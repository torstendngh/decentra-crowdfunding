import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import './vars.css'
import './normalize.css'
import './pages/CommonPageStyles.css'
import ProjectPage from './pages/ProjectPage';
import FundedByMePage from "./pages/FundedByMePage";
import MyProjectsPage from "./pages/MyProjectsPage";
import SearchPage from "./pages/SearchPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Page Flex">
          <Routes>
            <Route index element={<DiscoverPage/>}/>
            <Route path="funded-by-me" element={<FundedByMePage/>}/>
            <Route path="my-projects" element={<MyProjectsPage/>}/>
            <Route path="search" element={<SearchPage/>}/>

            <Route path="project" element={<ProjectPage/>}/>
            <Route path="create-project" element={<CreateProjectPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
