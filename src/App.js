import React, { useState } from 'react';
import './App.css';
import AddCheckbox from './components/AddCheckbox';
import AddInput from './components/AddInput';
import AddSelect from './components/AddSelect';


export default function App () {

  return (
    <div className="App">
      <div class="py-12 bg-white info">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Formulario Dinámico</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Esto solo es un prueba para futuros proyectos</p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Tenemos diferentes tipos de inputs para colocar de forma dinámica, si quiere agregar más inputs con respecto la información que necesita solo de click en el botón de Agregar correspecto al input de la derecha</p>
          </div>

        </div>
        <hr/>
      </div>

      <AddInput />
      <AddSelect />
      <AddCheckbox />
    </div>
  );


}
