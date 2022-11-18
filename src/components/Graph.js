import data from "../data.json"
import BarItem from "./BarItem"

export default function Graph() {
    const calcBiggestAmount = () => {
        let amountArray = []
        data.map((item) => {
            amountArray.push(item.amount)
            return amountArray
        })

        return Math.max(...amountArray)
    }

    const isBiggest = (amount) => {
        return amount === calcBiggestAmount()
    }

    return (
        <div className="graph-wrapper">
            <p className="graph-title">Spending - Last 7 days</p>
            <div className="graph">
                {data.map((item, index) => (
                    <BarItem
                        key={index}
                        day={item.day}
                        amount={item.amount}
                        biggest={
                            typeof isBiggest === "function"
                                ? isBiggest(item.amount)
                                : () => {}
                        }
                    />
                ))}
            </div>
        </div>
    )
}
