import Nav from "./Nav"
import PageContent from "./PageContent"

function Home() {
    return (
        <>
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
