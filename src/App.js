import './App.css';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import './vars.css'
import './normalize.css'
import './pages/CommonPageStyles.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Page Flex">
        <DiscoverPage/>
      </div>
    </div>
  );
}

export default App;
