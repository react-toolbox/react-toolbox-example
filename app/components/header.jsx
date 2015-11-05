import React from 'react';
import style from './style';

// require components separated to get in the build
// just what you are using
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';

const MainAppBar = (props) => {
  return (
    <AppBar className={style.appbar} flat>
      <h1 className={style.title}>React Toolbox Example</h1>
      <Button className={style.button} kind="floating" icon="add" accent/>
    </AppBar>
  );
};

export default MainAppBar;
