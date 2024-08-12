import Nav from "./Nav"
import PageContent from "./PageContent"
import MobileNav from "./MobileNav"
import PrimarySearchAppBar from "./SearchAppBar"
import gamesterLogo from './assets/images/gamesterLogo.png';
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
                                    <img src={gamesterLogo} className="background-image" alt="Gamester Logo"/>
                                    <img src={gamesterAppImage} className="overlay" alt="Gamester Screenshot" />
                                    {/* <div className='overlay-tech'>
                                            <div className="project-description">
                                                <h2>Gamester</h2>
                                                <h3>April 2024 - June 2024</h3>
                                            <a href="https://fastapi.tiangolo.com/" target="_blank"><button>FastAPI</button></a>
                                            <a href="https://react.dev" target="_blank"><button>React</button></a>
                                            <a href="https://docs.python.org/3/" target="_blank"><button>Python</button></a>
                                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><button>Javascript</button></a>
                                            <a href="https://www.docker.com/" target="_blank"><button>Docker</button></a>
                                            <a href="https://www.postgresql.org/docs/" target="_blank"><button>PostgreSQL</button></a>
                                            <div className='overlay-git'>
                                                <a href="https://gitlab.com/briandweber/module3-project-gamma" target="_blank"><button className='github-button'>View Code on GitLab</button></a>
                                                <a href="https://github.com/briandweber/module3-project-gamma" target="_blank"><button className='gitlab-button'>View Code on GitHub</button></a>
                                            </div>
                                        </div>
                                    </div> */}
                                </section>
                                {/* <section className="card-container">
                                    <a href="https://gitlab.com/briandweber/project-beta" target="_blank">
                                        <img src={CarCarLogo} className="background-image" alt="CarCar Logo" />
                                        <div className="overlay-carcar">

                                        </div>
                                        <img src={CarCarAppImage} className="overlay-carcar" alt="CarCar Logo" />
                                    </a>
                                </section> */}
                                <section className="card-container">
                                    <img src={CarCarLogo} className="background-image" alt="Gamester Logo"/>
                                    <img src={CarCarAppImage} className="overlay" alt="Gamester Screenshot" />
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
