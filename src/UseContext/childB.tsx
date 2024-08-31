import { useContext } from "react"

import { fstName,lstName } from "./parent"


const ChildB : React.FC = ()=> {

    const name1 = useContext(fstName);
    const name2 = useContext(lstName);

    return (
      <h2 style={{textAlign:`center`,marginTop:'35px'}}> Hey , I am  {name1} {name2} a passionate software devloper</h2>


    )
}

export default ChildB;