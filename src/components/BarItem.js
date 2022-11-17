export default function BarItem(data) {
    const height = data.amount * 3

    //handle onfocus

    return (
        <div className="day-info">
            {/* onFocus */}
            <div className="day-total">{data.amount}</div>
            <div
                className={data.biggest ? "bar big" : "bar"}
                style={{
                    height: `${height}px`,
                    width: "100%",
                }}
            ></div>
            <div className="day">{data.day}</div>
        </div>
    )
}
