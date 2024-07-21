import Greeting from "./Greeting"
import Projects from "./Projects";


export default function PageContent() {
    return (
        <>
                <div className="content-items">
                        <section id="About" className="about">
                                <Greeting />
                        </section>
                        <div id="Projects" className="projects">
                                <h3>PROJECTS</h3>
                                <Projects />
                        </div>
                </div>
        </>
  );
}
