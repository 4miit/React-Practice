import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply, divide } from "./Counter/CounterSlice";
import { RootState } from "./store"; // Import RootState from your store

export function Counter() {
  // Define the type for the selector using RootState
  const count = useSelector((state: RootState) => state.counterrrr.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ marginTop: "110px", textAlign: "center" }}>
        <u>Redux</u>
      </h1>
      <div style={{ marginTop: "70px" }}>
        <button
          style={{ margin: "0px 120px" }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          style={{ margin: "0px 120px" }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={{ margin: "0px 120px" }}
          onClick={() => dispatch(divide())}
        >
          Multiply
        </button>
        <button
          onClick={() => dispatch(multiply())}
          style={{ margin: "0px 120px" }}
        >
          Divide
        </button>
      </div>
    </div>
  );
}
