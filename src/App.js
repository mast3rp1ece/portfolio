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
import PostPublication from './components/projects/PostPublication';
import Eventer from './components/projects/Eventer';
import Generator from './components/projects/Generator';


function App() {
  return (
    <Router basename='/finalhomework'>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='projects'>
          <Route index element={<Projects/>}/>
          <Route path='signform' element={<SignForm/>}/>
          <Route path='publication' element={<PostPublication/>}/>
          <Route path='eventer' element={<Eventer/>}/>
          <Route path='generator' element={<Generator/>}/>
        </Route>
        <Route path='contacts' element={ <Contacts />} />
        <Route path='skills' element={ <Skills />} />
        <Route path='works' element={ <Works />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
