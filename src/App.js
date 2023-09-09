import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import './reset.css';
import './App.css';
import Skills from './components/Skills';
import Works from './components/Works';
import Projects from './components/Projects';
import SignForm from './components/projects/SignForm';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={ <Projects/>}>
          <Route path='signform' element={<SignForm/>}/>
        </Route>
        <Route path='/contacts' element={ <Contacts />} />
        <Route path='/skills' element={ <Skills />} />
        <Route path='/works' element={ <Works />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
