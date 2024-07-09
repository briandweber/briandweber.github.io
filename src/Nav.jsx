import GitLinks from "./GitLinks";
import FollowLinks from "./FollowLinks";
import Tabs from "./Tabs.jsx";

export default function Nav() {
    return (
    <>
        <GitLinks />
        <div className="nav-title">
          <h1>Brian D Weber</h1>
          <h2>Full Stack Software Engineer</h2>
        </div>
        <Tabs />
        <FollowLinks />
    </>

  );
}
