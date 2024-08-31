
import ListGroup from "./components/listGroup";
import Alert from "./components/Alert";
import Button from "./components/button";
import { useState } from "react";
import Hook from "./components/hookConcept";
import Parent from "./UseCallback/parent";
import Parent2 from "./UseContext/parent";





function App (){

  let items = ["new york", "san francisco", "delhi","mumbai","patna","chhapra",'maker'];
  
   
  const[alertVisibility,setAlertVisiblity] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
    { alertVisibility === true && <Alert onBand={ () => setAlertVisiblity(false) }><span>hello world</span></Alert>}
    <Button color ='success' onclick={ () => setAlertVisiblity(true) } children="button"/>
    <ListGroup list={items} h='RICH CITIES' onSelectItem={handleSelectItem}/>
    <Hook></Hook>
    <Parent></Parent>
    <Parent2/>
    </>
  );
}

export default App;