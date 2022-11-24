import data from "../data.json"
import BarItem from "./BarItem"

const biggestAmount = data.reduce(
    (prev, current) => Math.max(prev, current.amount),
    0
)

export default function Graph() {
    return (
        <div className="graph-wrapper">
            <p className="graph-title">Spending - Last 7 days</p>
            <div className="graph">
                {data.map(({ day, amount }, index) => (
                    <BarItem
                        key={index}
                        day={day}
                        amount={amount}
                        biggest={amount === biggestAmount}
                    />
                ))}
            </div>
        </div>
    )
}
