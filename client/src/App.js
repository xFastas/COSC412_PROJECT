import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import ResultsPage from './components/pages/ResultsPage'
import './App.css'



//<NavBar/>
export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />  
                    <Route path="/home" element={ <HomePage/> } />
                    <Route exact path="/result" element={ <ResultsPage/> } />
                    <Route exact path="/" element={ <LandingPage/> } />
                </Routes>
            </div>
        </Router>
    )
  }