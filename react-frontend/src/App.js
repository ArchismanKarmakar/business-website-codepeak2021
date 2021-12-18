import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Auth
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
