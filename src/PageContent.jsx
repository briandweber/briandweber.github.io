import gamester1 from "./assets/images/gamester1.png"
import gamester2 from "./assets/images/gamester2.png"
import gamester3 from "./assets/images/gamester3.png"
import Greeting from "./Greeting"


export default function PageContent() {
    return (
        <>
        <div className="scroll-container">
                <div className="content-items">
                <section id="About" className="about">
                        <Greeting />
                </section>
                <section id="Experience" className="experience">

                        <h3>EXPERIENCE</h3>
                        <img src={gamester1} alt="" />
                        <img src={gamester2} alt="" />
                        <img src={gamester3} alt="" />
                </section>
                <section id="Projects" className="projects">
                        <h3>PROJECTS</h3>
                        <img src={gamester1} alt="gamester image" />
                        <img src={gamester2} alt="gamester image" />
                        <img src={gamester3} alt="gamester image" />
                </section>
                </div>
        </div>
        </>
  );
}
