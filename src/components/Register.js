import React, { useState } from 'react';

function Dropdown() {

  const data = [
    {id:1,name:"john"},
    {id:2,name:"sara"},
    {id:3,name:"vishwa"},
    {id:4,name:"susam"},
  ]

  const [people,setPeople] = useState(data);
  const [newperson,setNewperson] = useState("");

  const removeItem = (id) => {
    const fil = people.filter((ide) => {
        return ide.id !== id;
    });
    setPeople(fil); 
  }

  const ClearAllItems = ()=>{
    setPeople([])
  }
  const addItem = ()=>{
    if(newperson){
        const newId = people.length + 1;
        const newEntry = {id:newId,name:newperson}
        setPeople([...people,newEntry])
        setNewperson("")
    }
  }

    return(
        <div>
            {
                people.map((person)=>{
                    const {id,name} = person
                    return <div key={id}>
                        <h2>{name}</h2>
                        <button type="button" onClick={()=> removeItem(id)}>remove</button>
                    </div>
                })
            }
             <button type="button" onClick={ClearAllItems}>clear</button>
             <input type="text" value={newperson} onChange={(e)=> setNewperson(e.target.value)}></input>
             <button type="button" onClick={addItem}></button>
        </div>
    )

}

 
export default Dropdown;


