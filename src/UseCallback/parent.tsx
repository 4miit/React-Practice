import List from "./List";
import {useCallback,  useState } from "react";

export default function Parent() {
  const [input, setInput] = useState<number>(0);

  const [theme, setTheme] = useState<Boolean>(false);

  const color = {
    backgroundColor: theme ? `#333` : `#FFF`,
  };

  
  const getItems = useCallback((input: number): [number, number, number] => {
    return [input, input + 1, input + 2];
  }, [input]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}> UseCallback</h1>
      <div style={color}>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
          placeholder="Enter Number"
        />
        <button onClick={() => setTheme((x) => !x)}>toggle theme</button>
        <List xyg={getItems} hij={input} />
      </div>
    </>
  );
}
