// MainBanner.js
import React, { useState, useEffect } from "react";
import { Carousel, Carousel2 } from "../../components";// 첫 번째 배너 컴포넌트, 두 번째 배너 컴포넌트


const MainBanner = () => {
  const [bannerVersion, setBannerVersion] = useState(1); // 기본값은 1

  useEffect(() => {
    const randomVersion = Math.random() < 0.5 ? 1 : 2; // 50% 확률로 배너 선택
    setBannerVersion(randomVersion);
  }, []);

  return (
    <>
      {bannerVersion === 1 ? <Carousel /> : <Carousel2 />} {/* Carouse -> Carousel로 수정 */}
    </>
  );
};

export default MainBanner;