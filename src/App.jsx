import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './style/Main.css';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={AboutMe} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
