import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [array, setArray] = useState([...items])
  const [itemAdd, setItemAdd] = useState("")
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleNewName(event) {
    setNewName(event.target.value)
  }

  function handleNewCategory(event) {
    setNewCategory(event.target.value)
  }

  function onItemFormSubmit(newItem) {
    setArray([...items, newItem])
  }
  
  const itemsToDisplay = array.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.includes(search))

  return (
    <div className="ShoppingList">
      <ItemForm category={newCategory} name={newName} onCategoryChange={handleNewCategory} onNameChange={handleNewName} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList
