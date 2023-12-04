import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useLocation } from 'react-router-dom';

export default function SavedRecipePage() {
    const location = useLocation();
    const data = location.state?.data || [];

    const newData = data[0];

    const recipeName = newData.recipeName;
    const ingredients = newData.ingredients.split(",");
    const steps = newData.instructions.split(",");


    const username = "AAA";


    const handleDeleteRecipe = async (e) => {
        e.preventDefault();
        console.log('Delete button clicked');

        const params = new URLSearchParams();
        params.append('recipeName', recipeName);
        params.append('ingredients', ingredients);
        params.append('steps', steps);
        params.append('username', window.username);

        const response = await fetch(`http://localhost:3001/deleteRecipe?${params.toString()}`);
            if (!response.ok) {
                throw new Error('Network" response was not ok');
            }

        const data = await response.json();
        console.log(data);

        if (data == "Invalid"){
            alert("Error Deleting Recipe");
        }

        else{
            alert("Recipe Deleted");
        }
    }

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
                    <button id="sub_btn" type="submit" onClick={handleDeleteRecipe}>Delete</button>
                </p>
            </form>

            <Link to="/home">
                <button className="primary-button">Back</button>
            </Link>
        </div>
    );
}
