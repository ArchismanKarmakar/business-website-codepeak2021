import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Auth
import Login from './auth/Login';
import Register from './auth/Register';
import DashBoard from './user/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Register />} />
        <Route path="/user/profile" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
