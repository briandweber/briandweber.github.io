import Nav from "./Nav"
import PageContent from "./PageContent"
import PrimarySearchAppBar from "./SearchAppBar"

function Home() {
    return (
        <>
            <div className="home-wrapper">
                <PrimarySearchAppBar />
            <div className="navigation">
                <Nav />
            </div>
            <div className="page-content">
                <PageContent />
            </div>
            </div>
        </>
    )
}

export default Home
