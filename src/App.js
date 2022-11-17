import logo from "./logo.svg"

function App() {
    return (
        <div className="App">
            <img src={logo} alt="logo" />
            My balance $921.48 Spending - Last 7 days mon tue wed thu fri sat
            sun Total this month $478.33 +2.4% from last month
            <div class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://www.frontendmentor.io/profile/lucywho">
                    @lucywho
                </a>
                .
            </div>
        </div>
    )
}

export default App
