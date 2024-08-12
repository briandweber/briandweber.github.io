import GitLinks from "./GitLinks";
import FollowLinks from "./FollowLinks";
import Tabs from "./Tabs.jsx";
import Resume from './assets/Resume.pdf';

export default function Nav() {
    return (
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
          <div className='footer'>
            <h3>Designed in <a href="https://excalidraw.com/" target='_blank'>Excalidraw</a>, coded in <a href="https://react.dev/" target='_blank'>React </a>with <a href="https://visualstudio.microsoft.com/" target='_blank'>VS Code, </a>built with <a href="https://vitejs.dev/" target='_blank'>ViteJS, </a> styled with <a href="https://mui.com/material-ui/" target='_blank'>Material UI </a> as well as custom <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS,</a> and deployed with <a href="https://pages.github.com/" target='_blank'>Github Pages.</a></h3>
          </div>
          <div className="copyright">
            <h4>© Brian D. Weber 2024</h4>
          </div>
        </div>
  );
}
