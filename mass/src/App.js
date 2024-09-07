import React, { useState } from 'react';
import MapComponent from './components/MapComponent';

const App = () => {
  const [showMassMarks, setShowMassMarks] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMassMarks(false)}>Marker Test</button>
      <button onClick={() => setShowMassMarks(true)}>MassMarks Test</button>
      <MapComponent showMassMarks={showMassMarks} />
    </div>
  );
};

export default App;
