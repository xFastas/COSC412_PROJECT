import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Search Recipes</h1>
            <form action="/home">
                <div></div>
                <p>
                    <label>Apples</label><br/>
                    <input type="checkbox" name="apple" required />
                </p>
                <p>
                    <label>Onions</label><br/>
                    <input type="checkbox" name="onions" required />
                </p>
                <p>
                    <label>Potatos</label><br/>
                    <input type="checkbox" name="potatos" requiredc />
                </p>
                <p>
                <Link to="/result">
                <button className="primary-button">Search</button>
                </Link>
                </p>
            </form>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}