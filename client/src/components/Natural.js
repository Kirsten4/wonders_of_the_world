import WondersContainer from "../containers/WondersContainer";

const Natural = () => {
    return (
        <div id="grid">
            <header id="header">
                <h1>The 7 Natural Wonders of the World</h1>
                <button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href="http://localhost:3000/";
                }}>🏠<br />Home</button>
                
                <button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href="http://localhost:3000/quiz";
                }}>📝<br />Quiz</button>
            </header>
            <nav id="nav-bar">
            <h2>Nav</h2>
            </nav>
            <section id="content-1">
              <WondersContainer />
            </section>
            <footer id="footer">
              <h3>Footer</h3>
            </footer>
    </div>
    );
}

export default Natural;