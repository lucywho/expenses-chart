import { useCallback, useState } from "react";

export default function BarItem(props) {
  const height = props.amount * 3;

  /*
   * Given that the side effect of the user
   * interacting with this component via hover is
   * purely stylistic, we can make use of separation of
   * concers and address it only in CSS.
   *
   * This change will make the `active` state &
   * the `handleOnFocus` handler obsolete and
   * can be removed.
   */
  const [active, setActive] = useState(false);
  const handleOnFocus = useCallback(() => {
    active ? setActive(false) : setActive(true);
  }, [active]);

  return (
    <div className="day-info">
      {active && <div className="day-total">${props.amount}</div>}
      <div
        className={`bar ${props.biggest ? "big" : ""} ${active ? "active" : ""}`}
        style={{
          height: `${height}px`,
        }}
        onMouseEnter={() => handleOnFocus()}
      ></div>
      <div className="day">{props.day}</div>
    </div>
  );
}
