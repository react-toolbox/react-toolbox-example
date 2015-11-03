// Stateless React Component
import React from 'react';
import {AppBar , Button } from 'react-toolbox';
import style from './style';

const MainAppBar = (props) => {
  return (
    <AppBar flat>
      <h1 className={style.title}>React Toolbox Example</h1>
      <Button className={style.button} kind="floating" icon="add" accent/>
    </AppBar>
  );
};

export default MainAppBar;
