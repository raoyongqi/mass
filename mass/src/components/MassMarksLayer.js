import React, { useEffect } from 'react';

const MassMarksLayer = ({ map }) => {
  useEffect(() => {
    if (!map) return;

    const citys = [
      { lnglat: [116.258446, 37.686622], name: '景县', style: 2 },
      { lnglat: [113.559954, 22.124049], name: '圣方济各堂区', style: 2 },
      // 添加更多数据
    ];
    
    const style = {
      url: './logo192.png',
      size: new window.AMap.Size(30, 30),
      anchor: new window.AMap.Pixel(15, 15),
    };

    const massMarks = new window.AMap.MassMarks(citys, {
      opacity: 0.8,
      zIndex: 111,
      cursor: 'pointer',
      style: style,
    });

    massMarks.setMap(map);

    return () => {
      massMarks.setMap(null);
    };
  }, [map]);

  return null;
};

export default MassMarksLayer;
