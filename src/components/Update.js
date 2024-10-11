import React, { useState } from 'react';

const UpdateItemExample = () => {
  const initialData = [
    { id: 1, name: "john" },
    { id: 2, name: "sara" },
    { id: 3, name: "vishwa" },
    { id: 4, name: "susam" }
  ];

  const [people, setPeople] = useState(initialData);
  const [editName, setEditName] = useState("");

  const updateItem = (id) => {
    setPeople(
      people.map((person) =>
        person.id === id ? { ...person, name: editName } : person
      )
    );
    setEditName(""); // Clear input after updating
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Update name"
            />
            <button type="button" onClick={() => updateItem(id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateItemExample;

