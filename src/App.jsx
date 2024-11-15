// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import UserForm from './UserForm';
import Sidebar from './components/sidebar/Sidebar'; // Import Sidebar component
import './App.css';

function App() {
    const apiUrl = 'http://localhost:8080/v1/items'; // Replace with your actual API URL

    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                {/* Sidebar component */}
                <Sidebar apiUrl={apiUrl} />

                {/* Main content area */}
                <div style={{ flex: 1, padding: '20px', overflowY: 'auto', backgroundColor: '#333' }}>
                    {/* Navigation */}
                    <nav style={{ marginBottom: '20px' }}>
                        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/form">Form</Link>
                    </nav>

                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/*<Route path="/about" element={<About />} />*/}
                        {/*<Route path="/contact" element={<Contact />} />*/}
                        <Route path="/form" element={<UserForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
