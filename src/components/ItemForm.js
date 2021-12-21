import React, { useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")

  function handleNewName(event) {
    setNewName(event.target.value)
  }

  function handleNewCategory(event) {
    setNewCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newName,
      category: newCategory,
    };
    onItemFormSubmit(newItem)
  }
    
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
