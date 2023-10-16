import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/food.jpg'


export default function LandingPage() {

    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">Foods You Choose - COSC-431</p>
            <div className="buttons text-center box-center">

            <Link to="/LoginPage">
                <button className="primary-button" id="reg_btn"><span>Log In</span></button>
            </Link>

            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}