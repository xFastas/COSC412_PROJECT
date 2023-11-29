import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../../App.css';

export default function SignUpPage() {
    const history = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Register button clicked');

        const form = document.getElementById('registerForm');
        const username = form.querySelector('[name="username"]').value;
        const password = form.querySelector('[name="password"]').value;

        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);

        const response = await fetch(`http://localhost:3001/registerCredentials?${params.toString()}`);
            if (!response.ok) {
                throw new Error('Network" response was not ok');
            }

        const data = await response.json();
        console.log(data);

        if (data == "Invalid"){
            alert("Username Already Taken");
        }

        else{
            history('/home', { state: { username } });
        }

    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form id="registerForm" action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleRegister}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}