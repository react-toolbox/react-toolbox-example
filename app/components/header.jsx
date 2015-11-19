import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';
import style from './style';

const MainAppBar = () => (
  <AppBar className={style.appbar} flat>
    <h1 className={style.title}>React Toolbox Example</h1>
    <Button className={style.button} icon="add" floating accent/>
  </AppBar>
);

export default MainAppBar;
