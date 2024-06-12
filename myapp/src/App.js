import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return(
        <Router>
           <div className='main-container'>
                <NavBar />
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route exact path='/skills' Component={Skills} />
                    <Route exact path='/projects' Component={Projects} />
                </Routes>
           </div>
        </Router>
    )
};
export default App;
