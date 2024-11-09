// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import UserForm from './UserForm';
import './App.css';
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/form">Form</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    <Route path="/form" element={<UserForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
