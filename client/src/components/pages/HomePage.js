import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../../App.css'

export default function HomePage() {
    const history = useNavigate();
    const [appleChecked, setAppleChecked] = useState(false);
    const [onionsChecked, setOnionsChecked] = useState(false);
    const [potatoesChecked, setPotatoesChecked] = useState(false);
    const [gptData, setGptData] = useState([]);

    const handleCheckboxChange = (ingredient) => {
        switch (ingredient) {
            case 'apple':
                setAppleChecked(!appleChecked);
                break;
            case 'onions':
                setOnionsChecked(!onionsChecked);
                break;
            case 'potatoes':
                setPotatoesChecked(!potatoesChecked);
                break;
            default:
                break;
        }
    };

    const handleSearchClick = async (e) => {
        try {
            e.preventDefault();
            console.log('Search button clicked');
            const selectedIngredients = [];
            if (appleChecked) selectedIngredients.push('apple');
            if (onionsChecked) selectedIngredients.push('onions');
            if (potatoesChecked) selectedIngredients.push('potatoes');
            // Fetch data from the "/getGPT" endpoint
            const response = await fetch(`http://localhost:3001/getGPT?keyword=${selectedIngredients}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            await setGptData(data.name);

            // Redirect to "/result"
            history('/result', { state: { data } });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Search Recipes</h1>
            <form action="/home">
                <div></div>
                <p>
                    <label>Apples</label><br/>
                    <input type="checkbox" name="apple" checked={appleChecked} onChange={() => handleCheckboxChange('apple')}/>
                </p>
                <p>
                    <label>Onions</label><br/>
                    <input type="checkbox" name="onions" checked={onionsChecked} onChange={() => handleCheckboxChange('onions')}/>
                </p>
                <p>
                    <label>Potatos</label><br/>
                    <input type="checkbox" name="potatoes" checked={potatoesChecked} onChange={() => handleCheckboxChange('potatoes')}/>
                </p>
                <p>
                <button className="primary-button" onClick={handleSearchClick}> Search </button>
                </p>
            </form>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}