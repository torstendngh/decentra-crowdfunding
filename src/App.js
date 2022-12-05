import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import './vars.css'
import './normalize.css'
import './pages/CommonPageStyles.css'
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Page Flex">
          <Routes>
            <Route index element={<DiscoverPage/>}/>
            <Route path="project" element={<ProjectPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
