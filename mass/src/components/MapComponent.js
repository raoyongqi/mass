import React, { useEffect, useRef } from 'react';
import MassMarksLayer from './MassMarksLayer';
import MarkerLayer from './MarkerLayer';

const MapComponent = ({ showMassMarks }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.AMap) {
      console.error("AMap is not loaded");
      return;
    }

    const map = new window.AMap.Map(mapRef.current, {
      zoom: 4,
      center: [108, 34]
    });

    mapRef.current = map;
  }, []);

  return (
    <div id="map" ref={mapRef} style={{ width: '100vw', height: '100vh' }}>
      {mapRef.current && (
        <>
          {showMassMarks ? <MassMarksLayer map={mapRef.current} /> : <MarkerLayer map={mapRef.current} />}
        </>
      )}
    </div>
  );
};

export default MapComponent;
