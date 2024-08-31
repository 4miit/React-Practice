import { createContext } from "react";
import ChildA from './childA'


const fstName = createContext<string>(''); 
const lstName = createContext<string>(''); 
 



export default function Parent2(){



    return (
        <>
        <h1 style={{textAlign:'center',marginTop:'25px'}}>UseContext</h1>
        <fstName.Provider value={'Amit'}>
            <lstName.Provider value={'kumar'}>
                <ChildA/>
            </lstName.Provider>
        </fstName.Provider>
        </>

    );
}

export {fstName,lstName}