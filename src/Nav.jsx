import GitLinks from "./GitLinks";
import FollowLinks from "./FollowLinks";
import Tabs from "./Tabs.jsx";
import Resume from './assets/Resume.pdf';
import PrimarySearchAppBar from "./SearchAppBar.jsx";

export default function Nav() {
    return (
    <>
        {/* <PrimarySearchAppBar /> */}
        <div className="nav-title">
          <h1>Brian D Weber</h1>
          <h2>Full Stack Software Engineer</h2>
          <h3>
            Résumé - <a target="_blank" href={Resume}>View</a> | <a href={Resume} download={Resume}>Download</a>
          </h3>
        <Tabs />
        <FollowLinks />
        <div className="git-desktop">
          <GitLinks />
        </div>
        <div className="git-mobile">
          <GitLinks />
        </div>
        </div>
    </>

  );
}
