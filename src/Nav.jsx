import GitLinks from "./GitLinks";
import FollowLinks from "./FollowLinks";

export default function Nav() {
    return (
    <>
        <GitLinks />
        <div className="nav-title">
          <h1>Brian D. Weber</h1>
          <h2>Full Stack Software Engineer</h2>
        </div>
        <div className="nav-heading">

          <div className="nav-about">
            <a href="#About">About</a>
          </div>
          <div>
            <a href="#Experience">Experience</a>
          </div>
          <div>
            <a href="#Projects">Projects</a>
          </div>
          <div>
            <a href="#Projects">Contact</a>
          </div>

        </div>
        <FollowLinks />

    </>

  );
}
