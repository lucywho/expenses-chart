import BarItem from "./BarItem"
import data from "../data.json"

export default function Graph() {
    //calculate biggest amount and send info to BarItem as boolean
    const calcBiggestAmount = (amount) => {
        //do calc here, return true/false

        return amount === 52.36
    }

    const handleOnFocus = () => {
        //set state of day-total here
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
                        biggest={calcBiggestAmount(item.amount)}
                        handleOnFocus={handleOnFocus}
                    />
                ))}
            </div>
        </div>
    )
}
