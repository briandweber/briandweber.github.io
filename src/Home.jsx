import Nav from "./Nav"
import PageContent from "./PageContent"
import MobileNav from "./MobileNav"
import PrimarySearchAppBar from "./SearchAppBar"
import gamesterDesktop from './assets/images/gamesterDesktop.png';
import gamesterAppImage from './assets/images/gamesterAppImage.png';
import CarCarLogo from './assets/images/CarCarLogo.png';
import CarCarAppImage from './assets/images/CarCarAppImage.png';

function Home() {
    return (
        <>
            <div className="home-wrapper">
                <div className="primary-search-app-bar">
                    <PrimarySearchAppBar />
                </div>
                <div className="mobile-nav">
                    <MobileNav />
                </div>
                <div className="nav-page-content-wrapper">

                    <div className="navigation">
                        <Nav />
                    </div>
                    <div className="page-content">
                        <div className="content-items">
                            <div id="About" className="about">
                                <p>Greetings! Explore my portfolio to see some of the projects I've worked on, and feel free to reach out if you'd like to collaborate or have any questions. Let's build something truly useful together!</p>
                            </div>
                            <div id="Projects" className="projects">
                                <h3>PROJECTS</h3>
                                <section className="card-container">
                                    <img src={gamesterDesktop} className="background-image" alt="Gamester Logo"/>
                                    <img src={gamesterAppImage} className="overlay" alt="Gamester Screenshot" />
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
                                </section>
                                <section className="card-container">
                                    <a href="https://gitlab.com/briandweber/project-beta" target="_blank">
                                        <img src={CarCarLogo} className="background-image" alt="CarCar Logo" />
                                        <img src={CarCarAppImage} className="overlay" alt="CarCar Logo" />
                                    </a>
                                </section>
                                <section className="card-container">
                                    <a href="https://gitlab.com/briandweber/project-beta" target="_blank">
                                        <img src={CarCarLogo} className="background-image" alt="CarCar Logo" />
                                        <img src={CarCarAppImage} className="overlay" alt="CarCar Logo" />
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
