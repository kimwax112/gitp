import React, { useState, useEffect } from 'react';
import './Carousel.css'; // 스타일 시트

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = [
    {
      title: '브랜드 디자인으로 검색',
      description: '선호하는 브랜드의 디자인을 검색하여 옷을 디자인하세요.',
      link: '/BrandDP',
      image: 'image/banner-brand search.png',  // 실제 이미지 경로로 수정
      backgroundColor: '#E0F6FF', // 브랜드 디자인 배경색
    },
    {
      title: '디자인 파일 업로드',
      description: '나만의 디자인 파일을 업로드하여 옷을 디자인하세요.',
      link: '/file-upload',
      image: 'image/banner-design file.png', // 실제 이미지 경로로 수정
      backgroundColor: '#DAFFF1', // 브랜드 디자인 배경색
    },
    {
      title: '사이트 제공 템플릿',
      description: '사이트에서 제공하는 템플릿을 선택하여 쉽게 디자인하세요.',
      link: '/clothes',
      image: 'image/banner-templet.png', // 실제 이미지 경로로 수정
      backgroundColor: '#F3E7FF', // 브랜드 디자인 배경색
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  // 점 클릭 시 해당 슬라이드로 이동하는 함수
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

   // 자동 슬라이드 기능
   useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경

    // 컴포넌트가 언마운트될 때 interval을 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container" style={{ backgroundColor: features[currentIndex].backgroundColor }}>
      <div className="carousel">
        <div className="carousel-item">
          <img src={features[currentIndex].image} alt={features[currentIndex].title} />
          <div className="carousel-content">
            <h3>{features[currentIndex].title}</h3>
            <p>{features[currentIndex].description}</p>
            <a href={features[currentIndex].link} className="carousel-button">자세히 보기</a>

            {/* 페이지네이션 점 */}
            <div className="dots-container">
              {features.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
