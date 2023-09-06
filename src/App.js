import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import './reset.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/contacts' element={ <Contacts />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
