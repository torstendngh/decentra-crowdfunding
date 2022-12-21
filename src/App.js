// React imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'

// Smart Contract & Crypto imports
import { ethers } from 'ethers'
import { hasEthereum } from './utils/ethereum'

// CSS imports
import './vars.css'
import './App.css';
import './normalize.css'
import './pages/CommonPageStyles.css'

// Component imports
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import ProjectPage from './pages/ProjectPage';
import SupportedPage from "./pages/SupportedPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import SearchPage from "./pages/SearchPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";


function App() {

  const [connectedWalletAddress, setConnectedWalletAddressState] = useState('')

  useEffect( () => {
    if(! hasEthereum()) {
      setConnectedWalletAddressState(`MetaMask unavailable`)
      return
    }
    async function setConnectedWalletAddress() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      try {
        const signerAddress = await signer.getAddress()
        setConnectedWalletAddressState(`Connected wallet: ${signerAddress}`)
      } catch {
        setConnectedWalletAddressState('No wallet connected')
        return;
      }
    }
    setConnectedWalletAddress();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Page Flex">
          <Routes>
            <Route index element={<DiscoverPage/>}/>
            <Route path="supported" element={<SupportedPage/>}/>
            <Route path="my-projects" element={<MyProjectsPage/>}/>
            <Route path="search" element={<SearchPage/>}/>

            <Route path="project" element={<ProjectPage/>}/>
            <Route path="create-project" element={<CreateProjectPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
