/*

function ListGroup() {
  let items = [
    "new york",
    "san francisco",
    "delhi",
    "mumbai",
    
    "patna",
    "chhapra"
  ];
  // items = [];
  
  // if (items.length === 0) {
  //   return (
    //     <>
    //   {'hello world'}
    //       <h1>list items</h1>
    //       <p>no item found</p>
    //     </>
    //   );
    // }
    
    //const message = items.length === 0 ? <p>No items found</p> : null;
    
    const msg = () => {
      return (
        items.length ===0 ? <h1>no item found</h1> : null
      );
    }
    
    const city = items.map((item) => (
      <li key={item} className="list-group-item">
      {item}
      </li>
    ));
    
    return (
      <>
      <h1>-----List items----</h1>
      {msg()}
      <ul className="list-group">{city}</ul>
      </>
    );
  }
  
  import { MouseEvent, useState } from "react";
  
  function ListGroup() {
    let items = [
      "new york",
      "san francisco",
      "delhi",
      "mumbai",
      "patna",
      "chhapra",
    ];
    
    const [selectedIndex,setSelectedIndex ] = useState(-1);
    const [name, setName] = useState('');
    
    
  // items = [];

  // if (items.length === 0) {
    //   return (
      //     <>
      //   {'hello world'}
      //       <h1>list items</h1>
      //       <p>no item found</p>
      //     </>
      //   );
      // }
      
      const message = items.length === 0 ? <p>No items found</p> : null;
      
      const msg = () => {
        return items.length === 0 ? <h1>no item found</h1> : null;
      };
      
      const handleClick = (event: MouseEvent) =>{ 
        console.log("clicked", event)};
        
        const city = items.map((item, index) => (
          <li onClick={handleClick} key={item} className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}>
          {item}
          </li>
        ));
        
        return (
          <>
          <h1>-----List items----</h1>
          {items.length === 0 && <p>No items found</p>}
          
          {msg()}
          {message}
          <ul className="list-group">{city}</ul>
          </>
        );
      }
      
      */
import { useState } from "react";

interface props {
  list: string[];
  h: string;
  onSelectItem: (list: string) => void;
}

function ListGroup({ list, h, onSelectItem }: props) {
  const [selectedIndex,setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{h}</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
              ? "list-group-item active "
              :"list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
