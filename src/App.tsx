import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import Register from 'pages/Register/Register'
import Settings from 'pages/Settings/Settings'
import Single from 'pages/Single/Single'
import Write from 'pages/Write/Write'
import TopBar from './components/TopBar/TopBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

function App() {
    const user = true
    return (
        <Router>
            <TopBar user={user} />
            <Routes>
                <Route path="/" element={user ? <Home /> : <Register />} />
                <Route
                    path="/post"
                    element={user ? <Single /> : <Register />}
                />
                <Route
                    path="/write"
                    element={user ? <Write /> : <Register />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/settings"
                    element={user ? <Settings /> : <Register />}
                />
            </Routes>
        </Router>
    )
}

export default App
