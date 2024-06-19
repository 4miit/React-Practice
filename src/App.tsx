
import ListGroup from "./components/listGroup";
import Alert from "./components/Alert";
import Button from "./components/button";
import { useState } from "react";






function App (){

  let items = ["new york", "san francisco", "delhi","mumbai","patna","chhapra"];
   
  const[alertVisibility,setAlertVisiblity] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
    { alertVisibility === true && <Alert onBand={ () => setAlertVisiblity(false) }><span>hello world</span></Alert>}
    <Button color ='success' onclick={ () => setAlertVisiblity(true) } children='button'/>
    <ListGroup list={items} h='RICH CITIES' onSelectItem={handleSelectItem}/>
    </>
  );
}

export default App;