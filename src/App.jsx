import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './style/Main.css';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { NavBarProvider } from './context/NavBarContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <NavBarProvider>
          <Header />
          <NavBar />
          <Routes>
            <Route path="contacts" element={ <Contacts /> } />
            <Route path="projects" element={ <Projects /> } />
            <Route path="about" element={ <AboutMe /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
          <Footer />
        </NavBarProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
