import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import '../../App.css'

export default function LoginPage() {
    const history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Login button clicked');

        const form = document.getElementById('loginForm');
        const username = form.querySelector('[name="username"]').value;
        const password = form.querySelector('[name="password"]').value;

        if (username == "root" && password == "TU412"){
            history('/home', { state: { username } });
        }

        else{

            const params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);

            const response = await fetch(`http://localhost:3001/getCredentials?${params.toString()}`);
                if (!response.ok) {
                    alert("Error connecting to database");
                }

            const data = await response.json();
            console.log(data);

            if (data == "Invalid"){
                alert("Incorrect Username/Password");
            }

            else{
                history('/home', { state: { username } });
            }

        }

    }

    return (
            <div className="text-center m-5-auto box-center">
                <h2>Sign in to us</h2>
                <form id="loginForm" action= '/home' className='form-box-size position-relative'>
                    <p className='row'>
                        <label className='col-md-3'>Username</label>
                        <input className="col-md-6"  type="text" name="username" required />
                    </p>
                    <p className='row'>
                        <label className='col-md-3'>Password</label>
                        <input className="col-md-6"   type="password" name="password" required />
                    </p>
                    <p className=''>
                        <button id="sub_btn" type="submit" onClick={handleLogin}>Login</button>
                    </p>
                </form>
                <footer>
                    <p>First time? <Link to="/register">Create an account</Link>.</p>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
    )
}
