import React, { useState } from 'react';
import '../App.css';

const defaultState = {};

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

  const [ checkboxs, setCheckboxes ] = useState([defaultState]);


  const handleOnChange = (index, name, value) => {
    const copyCheckboxs = [...checkboxs];
    copyCheckboxs[index]= {
      ...copyCheckboxs[index],
      [name]: value
    };
    setCheckboxes(copyCheckboxs);
  };


  const handleOnAdd = () => {
    setCheckboxes(checkboxs.concat(defaultState));
  };


  const handleOnRemove = index => {
    const copyCheckboxs = [...checkboxs];
    copyCheckboxs.splice(index, 1);
    setCheckboxes(copyCheckboxs);
  };


  return (
    <div className='wrapper-checkboxes'>
      {checkboxs.map((row, index) => (
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
