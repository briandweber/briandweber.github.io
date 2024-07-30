import gamesterDesktop from './assets/images/gamesterDesktop.png';
import gamesterAppImage from './assets/images/gamesterAppImage.png';
import CarCarLogo from './assets/images/CarCarLogo.png';
import CarCarAppImage from './assets/images/CarCarAppImage.png';

export default function Projects () {
    return (
        <>
            <div className="card-container">
                <a href="https://gitlab.com/briandweber/module3-project-gamma" target="_blank">
                    <img src={gamesterDesktop} className="background-image" alt="Gamester Logo" />
                    <img src={gamesterAppImage} className="overlay" alt="Gamester Logo" />
                </a>
            </div>
            <div className="card-container">
                <a href="https://gitlab.com/briandweber/project-beta" target="_blank">
                    <img src={CarCarLogo} className="background-image" alt="CarCar Logo" />
                    <img src={CarCarAppImage} className="overlay" alt="CarCar Logo" />
                </a>
            </div>
        </>
    )
}
