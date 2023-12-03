import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
    const location = useLocation();
    const username = location.state?.username || [];
    console.log("Inside Home Page: "+window.username);



    const history = useNavigate();
    const [appleChecked, setAppleChecked] = useState(false);
    const [onionsChecked, setOnionsChecked] = useState(false);
    const [potatoesChecked, setPotatoesChecked] = useState(false);
    const [butterChecked, setButterChecked] = useState(false);
    const [eggsChecked, setEggsChecked] = useState(false);
    const [milkChecked, setMilkChecked] = useState(false);
    const [flourChecked, setFlourChecked] = useState(false);
    const [sugarChecked, setSugarChecked] = useState(false);
    const [beefChecked, setBeefChecked] = useState(false);
    const [tomatoesChecked, setTomatoesChecked] = useState(false);
    const [chickenChecked, setChickenChecked] = useState(false);
    const [tofuChecked, setTofuChecked] = useState(false);
    const [fishChecked, setFishChecked] = useState(false);
    const [carrotsChecked, setCarrotsChecked] = useState(false);
    const [peppersChecked, setPeppersChecked] = useState(false);
    const [mushroomsChecked, setMushroomsChecked] = useState(false);
    const [cheeseChecked, setCheeseChecked] = useState(false);
    const [celeryChecked, setCeleryChecked] = useState(false);
    const [baconChecked, setBaconChecked] = useState(false);
    const [lemonChecked, setLemonChecked] = useState(false);
    const [riceChecked, setRiceChecked] = useState(false);
    const [turkeyChecked, setTurkeyChecked] = useState(false);
    const [sweetPotatoesChecked, setSweetPotatoesChecked] = useState(false);

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
            case 'butter':
                setButterChecked(!butterChecked);
                break;
            case 'eggs':
                setEggsChecked(!eggsChecked);
                break;
            case 'milk':
                setMilkChecked(!milkChecked);
                break;
            case 'flour':
                setFlourChecked(!flourChecked);
                break;
            case 'sugar':
                setSugarChecked(!sugarChecked);
                break;
            case 'beef':
                setBeefChecked(!beefChecked);
                break;
            case 'tomatoes':
                setTomatoesChecked(!tomatoesChecked);
                break;
            case 'chicken':
                setChickenChecked(!chickenChecked);
                break;
            case 'tofu':
                setTofuChecked(!tofuChecked);
                break;
            case 'fish':
                setFishChecked(!fishChecked);
                break;
            case 'carrots':
                setCarrotsChecked(!carrotsChecked);
                break;
            case 'peppers':
                setPeppersChecked(!peppersChecked);
                break;
            case 'mushrooms':
                setMushroomsChecked(!mushroomsChecked);
                break;
            case 'eggs':
                setEggsChecked(!eggsChecked);
                break;
            case 'cheese':
                setCheeseChecked(!cheeseChecked);
                break;
            case 'celery':
                setCeleryChecked(!celeryChecked);
                break;
            case 'bacon':
                setBaconChecked(!baconChecked);
                break;
            case 'lemon':
                setLemonChecked(!lemonChecked);
                break;
            case 'rice':
                setRiceChecked(!riceChecked);
                break;
            case 'turkey':
                setTurkeyChecked(!turkeyChecked);
                break;
            case 'sweet potatoes':
                setSweetPotatoesChecked(!sweetPotatoesChecked);
                break;
            default:
                break;
        }
    };

    const handleSavedRecipeClick = async (e) => {
        e.preventDefault();
        
        const params = new URLSearchParams();
        params.append('username', window.username);

        const response = await fetch(`http://localhost:3001/getSavedRecipe?${params.toString()}`);
            if (!response.ok) {
                alert("Error connecting to database");
            }
          
        const data = await response.json();
        console.log("Saved Response Data: "+data);
        if (data == "Invalid"){
            alert("You do not have a saved recipe");
        }
        else{
            history('/saved', { state: { data } });  
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
            if (butterChecked) selectedIngredients.push('butter');
            if (eggsChecked) selectedIngredients.push('eggs');
            if (milkChecked) selectedIngredients.push('milk');
            if (flourChecked) selectedIngredients.push('flour');
            if (sugarChecked) selectedIngredients.push('sugar');
            if (beefChecked) selectedIngredients.push('beef');
            if (tomatoesChecked) selectedIngredients.push('tomatoes');
            if (chickenChecked) selectedIngredients.push('chicken');
            if (tofuChecked) selectedIngredients.push('tofu');
            if (fishChecked) selectedIngredients.push('fish');
            if (carrotsChecked) selectedIngredients.push('carrots');
            if (peppersChecked) selectedIngredients.push('peppers');
            if (mushroomsChecked) selectedIngredients.push('mushrooms');
            if (cheeseChecked) selectedIngredients.push('cheese');
            if (celeryChecked) selectedIngredients.push('celery');
            if (baconChecked) selectedIngredients.push('bacon');
            if (lemonChecked) selectedIngredients.push('lemon');
            if (riceChecked) selectedIngredients.push('rice');
            if (turkeyChecked) selectedIngredients.push('turkey');
            if (sweetPotatoesChecked) selectedIngredients.push('sweet potatoes');

            const response = await fetch(`http://localhost:3001/getGPT?keyword=${selectedIngredients}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            await setGptData(data.name);

            history('/result', { state: { data } });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Search Recipes</h1>

            <button className="saved-recipe-button" onClick={handleSavedRecipeClick}>
            Saved Recipe
            </button>

            <form action="/home" className="ingredient-form">
                <div className="ingredient-column">
                    <p>
                        <label>Apples</label><br />
                        <input type="checkbox" name="apple" checked={appleChecked} onChange={() => handleCheckboxChange('apple')} />
                    </p>
                    <p>
                        <label>Onions</label><br />
                        <input type="checkbox" name="onions" checked={onionsChecked} onChange={() => handleCheckboxChange('onions')} />
                    </p>
                    <p>
                        <label>Potatoes</label><br />
                        <input type="checkbox" name="potatoes" checked={potatoesChecked} onChange={() => handleCheckboxChange('potatoes')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Butter</label><br />
                        <input type="checkbox" name="butter" checked={butterChecked} onChange={() => handleCheckboxChange('butter')} />
                    </p>
                    <p>
                        <label>Eggs</label><br />
                        <input type="checkbox" name="eggs" checked={eggsChecked} onChange={() => handleCheckboxChange('eggs')} />
                    </p>
                    <p>
                        <label>Milk</label><br />
                        <input type="checkbox" name="milk" checked={milkChecked} onChange={() => handleCheckboxChange('milk')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Flour</label><br />
                        <input type="checkbox" name="flour" checked={flourChecked} onChange={() => handleCheckboxChange('flour')} />
                    </p>
                    <p>
                        <label>Sugar</label><br />
                        <input type="checkbox" name="sugar" checked={sugarChecked} onChange={() => handleCheckboxChange('sugar')} />
                    </p>
                    <p>
                        <label>Beef</label><br />
                        <input type="checkbox" name="beef" checked={beefChecked} onChange={() => handleCheckboxChange('beef')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Tomatoes</label><br />
                        <input type="checkbox" name="tomatoes" checked={tomatoesChecked} onChange={() => handleCheckboxChange('tomatoes')} />
                    </p>
                    <p>
                        <label>Chicken</label><br />
                        <input type="checkbox" name="chicken" checked={chickenChecked} onChange={() => handleCheckboxChange('chicken')} />
                    </p>
                    <p>
                        <label>Tofu</label><br />
                        <input type="checkbox" name="tofu" checked={tofuChecked} onChange={() => handleCheckboxChange('tofu')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Fish</label><br />
                        <input type="checkbox" name="fish" checked={fishChecked} onChange={() => handleCheckboxChange('fish')} />
                    </p>
                    <p>
                        <label>Carrots</label><br />
                        <input type="checkbox" name="carrots" checked={carrotsChecked} onChange={() => handleCheckboxChange('carrots')} />
                    </p>
                    <p>
                        <label>Peppers</label><br />
                        <input type="checkbox" name="peppers" checked={peppersChecked} onChange={() => handleCheckboxChange('peppers')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Mushrooms</label><br />
                        <input type="checkbox" name="mushrooms" checked={mushroomsChecked} onChange={() => handleCheckboxChange('mushrooms')} />
                    </p>
                    <p>
                        <label>Eggs</label><br />
                        <input type="checkbox" name="eggs" checked={eggsChecked} onChange={() => handleCheckboxChange('eggs')} />
                    </p>
                    <p>
                        <label>Cheese</label><br />
                        <input type="checkbox" name="cheese" checked={cheeseChecked} onChange={() => handleCheckboxChange('cheese')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Celery</label><br />
                        <input type="checkbox" name="celery" checked={celeryChecked} onChange={() => handleCheckboxChange('celery')} />
                    </p>
                    <p>
                        <label>Bacon</label><br />
                        <input type="checkbox" name="bacon" checked={baconChecked} onChange={() => handleCheckboxChange('bacon')} />
                    </p>
                    <p>
                        <label>Lemon</label><br />
                        <input type="checkbox" name="lemon" checked={lemonChecked} onChange={() => handleCheckboxChange('lemon')} />
                    </p>
                </div>
                <div className="ingredient-column">
                    <p>
                        <label>Rice</label><br />
                        <input type="checkbox" name="rice" checked={riceChecked} onChange={() => handleCheckboxChange('rice')} />
                    </p>
                    <p>
                        <label>Turkey</label><br />
                        <input type="checkbox" name="turkey" checked={turkeyChecked} onChange={() => handleCheckboxChange('turkey')} />
                    </p>
                    <p>
                        <label>Sweet Potatoes</label><br />
                        <input type="checkbox" name="sweet potatoes" checked={sweetPotatoesChecked} onChange={() => handleCheckboxChange('sweet potatoes')} />
                    </p>
                </div>
            </form>
            <button className="primary-button" onClick={handleSearchClick}> Search </button>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    );
}
