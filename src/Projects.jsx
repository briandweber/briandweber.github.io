import gamesterLogo from './assets/images/gamesterLogo.png';
import gamesterAppImage from './assets/images/gamesterAppImage.png';
import CarCarLogo from './assets/images/CarCarLogo.png';
import CarCarAppImage from './assets/images/CarCarAppImage.png';

export default function Projects () {
    return (
        <>
            <div className="card-container">
                    <img src={gamesterLogo} className="background-image" alt="Gamester Logo"/>
                    <img src={gamesterAppImage} className="overlay" alt="Gamester Logo" />
                    <div className='overlay-tech'>
                        <button>FastAPI</button>
                        <button>React</button>
                        <button>Python</button>
                        <button>Javascript</button>
                        <button>Docker</button>
                        <button>PostgreSQL</button>
                    </div>
                    <div className='overlay-git'>
                        <a href="https://gitlab.com/briandweber/module3-project-gamma" target="_blank"></a><button className='github-button'>GitLab</button>
                        <a href="https://gitlab.com/briandweber/module3-project-gamma" target="_blank"></a><button className='gitlab-button'>GitHub</button>
                    </div>
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
