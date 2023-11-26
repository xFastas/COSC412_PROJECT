import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useLocation } from 'react-router-dom';

export default function ResultsPage() {
    const location = useLocation();
    const data = location.state?.data || [];
    const recipeName = data["name"];
    const ingredients = data["ingredients"];
    const steps = data["steps"];

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">{recipeName}</h1>

            <div className="recipe-details">
                <div className="section-title">Ingredients:</div>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="recipe-details">
                <div className="section-title">Steps:</div>
                <ol>
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
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
    );
}
