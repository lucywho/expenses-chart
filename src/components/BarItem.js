export default function BarItem(props) {
    const height = props.amount * 3

    return (
        <div className="day-info">
            <div className="day-total">${props.amount}</div>
            <div
                className={`bar ${props.biggest ? "big" : ""} `}
                style={{
                    height: `${height}px`,
                }}
            ></div>
            <div className="day">{props.day}</div>
        </div>
    )
}
