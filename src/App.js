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
import PageNotFound from './components/PageNotFound';
import { useSelector } from 'react-redux';
import React, { useState, useEffect} from 'react';



function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const bodyStyle = {
    background: darkMode ? '' : '#dee4e7',
  }
 
  return (
    <Router>
      <div style={bodyStyle} className="App">

        {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (<>
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
          <Route path='/*' element={ <PageNotFound/>}/>
        </Routes>
        </>
        )}
      </div>
    </Router>
  );
}

export default App;
