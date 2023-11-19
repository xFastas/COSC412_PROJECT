import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { useLocation } from 'react-router-dom';

export default function ResultsPage() {
    const location = useLocation();
    const data = location.state?.data || [];
    const recipeName = data["name"];

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">{recipeName}</h1>
            <div>
            <ul>
                    {data["list"].map((item, index) => (
                        <div>{item}</div>
                    ))}
                </ul>
            </div>
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