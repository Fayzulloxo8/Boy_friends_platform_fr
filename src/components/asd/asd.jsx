import React, { useEffect } from 'react';

const YandexAd = () => {
  useEffect(() => {
    // yaContextCb mavjud emas bo‘lsa, uni yaratamiz
    window.yaContextCb = window.yaContextCb || [];
    
    window.yaContextCb.push(() => {
      window.Ya?.Context?.AdvManager?.render({
        blockId: 'R-A-16144690-1',
        renderTo: 'yandex_rtb_R-A-16144690-1'
      });
    });
  }, []);

  return <div id="yandex_rtb_R-A-16144690-1"></div>;
};

export default YandexAd;
