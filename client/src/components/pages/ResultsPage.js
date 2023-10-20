import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function ResultsPage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Result</h1>
            <div>Recipe Goes here...</div>
            <form action="/home">
                <p>
                    <button id="sub_btn" type="submit">Save</button>
                </p>
            </form>
            <Link to="/home">
                <button className="primary-button">Back</button>
            </Link>
        </div>
    )
}