import MyBalance from "./components/myBalance"
import VisualSummary from "./components/VisualSummary"

function App() {
    return (
        <div className="App">

            {/*
              * Given the design features a max-width for the expenses chart,
              * it would help to group the following two components under
              * the same parent.
              */}
                <MyBalance />
                <VisualSummary />

            <div className="attribution">
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
