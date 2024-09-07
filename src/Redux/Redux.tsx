import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply, divide } from "./Counter/CounterSlice";
import { RootState } from "./store"; // Import RootState from your store
import Other from "./Other";
import css from './x.module.css'

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
          Decrement
        </button>
        <span className={css['y']}>{count}</span>
        <button
          style={{ margin: "0px 120px" }}
          onClick={() => dispatch(decrement())}
        >
          Increment
        </button>
        <button
          style={{ margin: "0px 120px" }}
          onClick={() => dispatch(divide())}
        >
          Divide
        </button>
        <button
          onClick={() => dispatch(multiply())}
          style={{ margin: "0px 120px" }}
        >
          Multiply
        </button>
      </div>
      <Other/>
    </div>
  );
}
