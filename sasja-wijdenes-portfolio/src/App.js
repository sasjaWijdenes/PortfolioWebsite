import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SkillsPage from './Components/SkillsPage';
import WorkHistoryPage from './Components/WorkHistoryPage';
import PortfolioPiecesPage from './Components/PortfolioPiecesPage';
import ContactMePage from './Components/ContactMePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route exact path='/cv' element={<WorkHistoryPage />} />
          <Route exact path='/portfolio' element={<PortfolioPiecesPage />} />
          <Route exact path='/contact' element={<ContactMePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
