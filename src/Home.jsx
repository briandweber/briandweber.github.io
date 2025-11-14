import Nav from "./Nav"
import PageContent from "./PageContent"
import MobileNav from "./MobileNav"
import PrimarySearchAppBar from "./SearchAppBar"
import gamesterLogo from './assets/images/gamesterLogo.png';
import gamesterAppImage from './assets/images/gamesterAppImage.png';
import CarCarLogo from './assets/images/CarCarLogo.png';
import CarCarAppImage from './assets/images/CarCarAppImage.png';
import GitLinks from "./GitLinks";

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
                                    <img src={gamesterAppImage} className="overlay" alt="Gamester Screenshot"/>
                                    <div className="button-overlay">
                                        <div className="app-date">April/2024 - May/2024</div>
                                        <div className="app-description">GAMESTER - Create and manage tournaments, list a venue for hosting, as well as registering users for tournament participation.</div>
                                        <div className="app-git"><GitLinks /></div>
                                        <div className="app-tech">Python React FastAPI PostgreSQL CSS</div>
                                    </div>
                               </section>
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
