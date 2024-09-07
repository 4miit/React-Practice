

import { RootState } from './store';
import { useSelector } from "react-redux";
import css from './x.module.css'

export default function Other() {
  const x = useSelector((state: RootState) => state.counterrrr.value);

  return <div className={css['x']}>Value across component =  {x}</div>;
}
