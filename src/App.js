import './App.scss';
import NavBar from './Components/NavBar';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import {Switch, Route} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
       <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className = "content">
          <Switch>
            <Route path="/" exact>
             <HomePage />
            </Route>
            <Route path="/about" exact>
             <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
             <PortfolioPage />
            </Route>
            <Route path="/blogs" exact>
             <BlogsPage />
            </Route>
            <Route path="/contact" exact>
             <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
