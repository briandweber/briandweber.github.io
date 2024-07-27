import Greeting from "./Greeting"
import Projects from "./Projects";


export default function PageContent() {
    return (
        <div className="content-items">
                <section id="About" className="about">
                        <Greeting />
                </section>
                <section id="Projects" className="projects">
                        <div className="project-cards">
                                <h3>PROJECTS</h3>
                                <Projects />
                        </div>
                </section>
        </div>
  );
}
