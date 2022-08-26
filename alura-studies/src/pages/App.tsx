import React from 'react';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style  from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App;
