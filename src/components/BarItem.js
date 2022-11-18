import { useCallback, useState } from "react"

export default function BarItem(props) {
    const [active, setActive] = useState(false)

    const height = props.amount * 3

    const handleOnFocus = useCallback(() => {
        active ? setActive(false) : setActive(true)
    }, [active])

    return (
        <div className="day-info">
            {active && <div className="day-total">${props.amount}</div>}
            <div
                className={`bar ${props.biggest ? "big" : ""} ${
                    active ? "active" : ""
                }`}
                style={{
                    height: `${height}px`,
                }}
                onMouseEnter={() => handleOnFocus()}
            ></div>
            <div className="day">{props.day}</div>
        </div>
    )
}
