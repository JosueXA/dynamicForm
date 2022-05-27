import React, { useState } from 'react';
import '../App.css';

const defaultState = {};

function Input({ onChange, onRemove, nombre }) {
  return (
    <div className='ctnt-input'>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Campo de texto</label>
        <input 
          type="text" 
          name="name" 
          autocomplete="given-name" 
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={nombre}
          onChange={e => onChange("nombre", e.target.value)}
          placeholder="Input type Text"
        />
      </div>
      <button className='btn btn-alt' onClick={onRemove}>Eliminar</button>

    </div>
  );
}


export default function AddInput () {

  const [ inputs, setInputs ] = useState([defaultState]);


  const handleOnChange = (index, name, value) => {
    const copyInputs = [...inputs];
    copyInputs[index]= {
      ...copyInputs[index],
      [name]: value
    };
    setInputs(copyInputs);
  };


  const handleOnAdd = () => {
    setInputs(inputs.concat(defaultState));
  };


  const handleOnRemove = index => {
    const copyInputs = [...inputs];
    copyInputs.splice(index, 1);
    setInputs(copyInputs);
  };


  return (
    <div className='wrapper-inputs'>
      {inputs.map((row, index) => (
        <Input
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}
      <button className='btn btn-add' onClick={handleOnAdd}>Agregar un campo de texto</button>
    </div>
  );


}
