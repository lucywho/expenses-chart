import data from "../data.json";
import BarItem from "./BarItem";

export default function Graph() {
  /*
   * For functions/variables that do not use anything from
   * within the component's scope, we can extract the outside of the
   * function component
   *
   * We can improve this code by making use of the `reduce`
   * function which takes in a `reducer` callback tasked
   * with finding the max `amount`
   *
   * Furthermore, we only need a variable outside of the component
   * which stores the result of the `reduce`
   */
  const calcBiggestAmount = () => {
    let amountArray = [];

    data.map(item => {
      amountArray.push(item.amount);
      return amountArray;
    });

    return Math.max(...amountArray);
  };

  const isBiggest = amount => {
    return amount === calcBiggestAmount();
  };

  return (
    <div className="graph-wrapper">
      <p className="graph-title">Spending - Last 7 days</p>
      <div className="graph">
        {data.map((item, index) => (
          <BarItem
            key={index}
            day={item.day}
            amount={item.amount}
            /* This type of check doesn't make much
             * sense when the thing you're checking
             * is defined inside of the component
             *
             * We can get rid of this check by transforming
             * isBiggest into a boolean variable with its value
             * being computed on each iteration of the `map`
             * function
             */
            biggest={typeof isBiggest === "function" ? isBiggest(item.amount) : () => {}}
          />
        ))}
      </div>
    </div>
  );
}
