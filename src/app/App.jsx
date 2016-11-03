import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.jsx';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.jsx';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

const App = () => (
  <div>
    <PurpleAppBar />
    <section style={{ padding: 20 }}>
      <SuccessButton label='Success' primary raised />
      <Button label='Primary Button' primary />
    </section>
  </div>
);

export default App;
