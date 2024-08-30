import { useEffect, useState } from "react";

interface abc {
  xyg: (data: number) => [number, number, number];
  hij : number;
}

const List : React.FC <abc> = ({ xyg ,hij} ) => {
  const [val, setVal] = useState<number[]>([]);

  useEffect(() => {
    setVal(xyg(hij));
    console.log(`updating items`);
  }, [xyg])

  return val.map((item) => <div key={item}>{item}</div>);
}
export default List;