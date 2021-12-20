import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

class App extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <ThemeProvider>
          <NavBarProvider>
            <Header />
            <NavBar />
            <Switch>
              <Route path="/contacts" component={Contacts} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={AboutMe} />
              <Route path="/" exact component={Home} />
              <Route path="/*" component={NotFound} />
            </Switch>
            <Footer />
          </NavBarProvider>
        </ThemeProvider>
      </LanguageProvider>
    );
  }
}

export default App;
