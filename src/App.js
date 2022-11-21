import MyBalance from "./components/myBalance"
import VisualSummary from "./components/VisualSummary"

/*
 * If you're using a code formatter tool (e.g. Prettier),
 * make sure to create a configuration file such that
 * everyone working in the repo formats code in the same way
 */

function App() {
    return (
        <div className="App">
            <MyBalance />
            <VisualSummary />

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
