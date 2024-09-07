import React, { useEffect } from 'react';

const MarkerLayer = ({ map }) => {
  useEffect(() => {
    if (!map) return;

    const capitals = [
      { name: "北京市", center: [116.407394, 39.904211] },
      { name: "重庆市", center: [106.551643, 29.562849] },
      // 更多数据
    ];

    capitals.forEach(capital => {
      const marker = new window.AMap.Marker({
        position: capital.center,
        title: capital.name
      });
      marker.setMap(map);
    });

    return () => {
      // 清除所有标记
      map.clearMap();
    };
  }, [map]);

  return null;
};

export default MarkerLayer;
