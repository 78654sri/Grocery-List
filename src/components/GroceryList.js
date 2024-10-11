import { useState } from "react";

export default function GroceryList() {
  const [name, setName] = useState("");
  const [qtn, setQtn] = useState(""); 
  const [selected, setSelect] = useState("kilograms");
  const [groceries, setGroceries] = useState([{ id: 1, name: "kili", qtn: 2, selected: "kilograms" }]);

  const addItem = () => {
    if (name.trim() === "" || qtn === "" || qtn <= 0) {
      alert("Please enter both name and a valid quantity");
      return;
    }

    const newItem = {
      id: groceries.length + 1,
      name,
      qtn: parseInt(qtn),
      selected,
    };

    setGroceries([...groceries, newItem]);
    setName('');
    setQtn(''); // Reset quantity input to an empty string
  };

  const ClearAll = () => {
    setGroceries([]);
  };

  const removeItem = (id) => {
    const filteredGroceries = groceries.filter((item) => item.id !== id);
    setGroceries(filteredGroceries);
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="container">
      <h2>Grocery List</h2>
      <div className="cont-2">
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter quantity"
          value={qtn}
          onChange={(e) => setQtn(e.target.value)}
        />
        <select value={selected} onChange={handleChange}>
          <option value="kilograms">kilograms</option>
          <option value="quantity">quantity</option>
          <option value="liters">liters</option>
        </select>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {groceries.map((item) => (
          <div className="cont-3" key={item.id}>
            <li>{item.name} - {item.qtn} {item.selected}</li>
            <button onClick={() => removeItem(item.id)}>remove</button>
          </div>
        ))}
      </ul>
      {groceries.length > 0 && (
        <button className="clear-all-btn" onClick={ClearAll}>Clear All</button>
      )}
    </div>
  );
}
