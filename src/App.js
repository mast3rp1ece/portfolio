import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import './reset.css';
import './App.css';
import Skills from './components/Skills';
import Works from './components/Works';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/contacts' element={ <Contacts />} />
        <Route path='/skills' element={ <Skills />} />
        <Route path='/works' element={ <Works />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
