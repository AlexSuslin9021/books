import React from 'react';
import s from './app.module.css'
import {Search} from "../search/search";

function App() {
  return (
    <div className={s.app} >
      <Search/>
    </div>
  );
}

export default App;
