import React, { useState } from 'react';
import '../App.css';

const defaultState = {};

function Select({ onChange, onRemove, val }) {
  return (
    <div className='ctnt-select'>
      <div>
        <label for="country" className="block text-sm font-medium text-gray-700">País</label>
        <select
          name="country" 
          autocomplete="country-name" 
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={val}
          onChange={e => onChange("select", e.target.value)}
        >
          <option>Estados Unidos</option>
          <option>Canada</option>
          <option selected>México</option>
        </select>
      </div>
      <button className='btn btn-alt' onClick={onRemove}>Eliminar</button>

    </div>
  );
}


export default function AddSelect () {

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
    <div className='wrapper-selects'>
      {rows.map((row, index) => (
        <Select
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}
      <button className='btn btn-add' onClick={handleOnAdd}>Agregar un campo de selección</button>
    </div>
  );


}
