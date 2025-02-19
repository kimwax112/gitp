import React, { useState, useEffect } from 'react';
import './Carousel2.css'; // 스타일 시트

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 버전2의 슬라이드 내용물
  const features = [
    {
      title: '최신 디자인 보러가기:브랜드 검색',
      description: '브랜드 디자인으로 검색하여 만들어낸 최신 디자인! 다양한 스타일을 확인해보세요!',
      link: '/designer-portfolio',
      image: 'image/banner2-brandsearchdesign.png', 
      designTitle: '(제목)청바지 디자인 ㆍ 2025.02.11',
      backgroundColor: '#E0F6FF',
    },
    {
      title: '최신 디자인 보러가기:디자인 파일 업로드',
      description: '디자인 파일을 업로드하여 만들어낸 최신 디자인을 확인해보세요!',
      link: '/clothing-order',
      image: 'image/banner2-fileuploaddesign.png',
      designTitle: '(제목)원피스 디자인했던거 ㆍ 2025.02.11',
      backgroundColor: '#DAFFF1', 
    },
    {
      title: '최신 디자인 보러가기:템플릿으로 디자인',
      description: '기본 템플릿을 이용해 만들어낸 최신 디자인을 살펴보세요!',
      link: '/customer-support',
      image: 'image/banner2-templatedesign.png',
      designTitle: '(제목)살랑 원피스 디자인들 ㆍ 2025.02.11',
      backgroundColor: '#F3E7FF', 
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
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
    <div className="carousel2-container" style={{ backgroundColor: features[currentIndex].backgroundColor }}>
      <div className="carousel2">
        <div className="carousel2-item">
          <div className="carousel2-content">
            <h3>{features[currentIndex].title}</h3>
            <p className='description2'>{features[currentIndex].description}</p>
            <img src={features[currentIndex].image} alt={features[currentIndex].title} />
            <p className='design-Title2'>{features[currentIndex].designTitle}</p>
            <a href={features[currentIndex].link} className="carousel-button">더 보기</a>

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

export default Carousel2;