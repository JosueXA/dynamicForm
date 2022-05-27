import React, { useState } from 'react';
import '../App.css';

const defaultState = {
  nombre: "",
  email: "",
  telefono: ""
};

function Checkbox({ onChange, onRemove, check }) {
  return (
    <div className='ctnt-checkbox'>
      <input
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        value={check}
        type="checkbox"
        onChange={e => onChange("checkbox", e.target.value)}
      />
      <button className='btn btn-alt' onClick={onRemove}>Eliminar</button>
    </div>
  );
}


export default function AddCheckbox () {

  const [ rows, setRows ] = useState([defaultState]);


  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index]= {
      ...copyRows[index],
      [name]: value
    };
    setRows(copyRows);
  };


  const handleOnAdd = () => {
    setRows(rows.concat(defaultState));
  };


  const handleOnRemove = index => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };


  return (
    <div className='wrapper-checkboxes'>
      {rows.map((row, index) => (
        <Checkbox
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}
      <button className='btn btn-add' onClick={handleOnAdd}>Agregar un checkbox</button>
    </div>
  );


}
