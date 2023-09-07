import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import './reset.css';
import './App.css';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/contacts' element={ <Contacts />} />
        <Route path='/skills' element={ <Skills />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
