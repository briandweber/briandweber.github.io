import Nav from "./Nav"
import PageContent from "./PageContent"
import PrimarySearchAppBar from "./SearchAppBar"

function Home() {
    return (
        <>
            {/* <PrimarySearchAppBar /> */}
            <div className="navigation">
                <Nav />
            </div>
            <div className="page-content">
                <PageContent />
            </div>
        </>
    )
}

export default Home
