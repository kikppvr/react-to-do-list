import React, {useState} from "react";

function TodoList(){
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");


  const handleSubmit = (event) => {
      event.preventDefault();
      setItems([...items, newItem]);
      setNewItem("");
  };

  const handleDelete = (index) => {
      const newItem = [...items];
      newItem.splice(index,1);
      setItems(newItem);
  }
  

  return (
    <div>
      <h2>To do List</h2>
      <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={newItem} 
          onChange={(event) => setNewItem(event.target.value)}
          />
          <button type="submit">Add Item</button>
      </form>

      <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span> {item}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}


export default TodoList;