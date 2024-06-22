import { useState } from "react";
/*
export default function Hook() {
  function functionCountInitial() {
    console.log("run function");
    return 404;
  }

  const [count, setCount] = useState(functionCountInitial);

  function dec() {
    setCount((x) => x - 1);
    setCount((x) => x - 1);
  }

  const inc = () => {
    setCount(count + 5);
    setCount(count + 20);
  };

  return (
    <>
      <button onClick={dec} className="btn btn-danger">
        -
      </button>
      <span>{count}</span>
      <button onClick={inc} className="btn btn-danger">
        +
      </button>
    </>
  );
}
*/

export default function Hook() {
  const [state, setState] = useState({ count: 6, theme: "blue" });

  const count = state.count;
  const theme = state.theme;

  function dec() {
    setState((x) => {
      return { ...x, count: x.count - 1 };
    })
  }

  function inc (){
    setState((y) => {
        return { ...y, count: y.count + 1 };
    })
  }

  return (
    <>
      <button onClick={dec} className="btn btn-danger">-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={inc} className="btn btn-danger" >+</button>
    </>
  );
}
