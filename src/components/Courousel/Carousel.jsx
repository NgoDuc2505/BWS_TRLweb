import './carousel.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState, useRef } from 'react';
import CircleType from 'circletype';

function Carousel() {
  const circleInstance = useRef();

  useEffect(() => {
    if (circleInstance.current) {
      new CircleType(circleInstance.current).radius(100);
    }
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setShowLoading(false);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <ParallaxProvider>
      {showLoading && (
        <div
          className="loading"
          style={{
            opacity: !isLoaded ? '1' : '0',
            display: !isLoaded ? 'flex' : 'none',
            transition: '500ms',
          }}
        >
          <h1>
            <div ref={circleInstance}>Loading Loading Loading Loading Loading</div>
          </h1>
        </div>
      )}

      <div className="carousel-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <Parallax
          translateY={[-30, 20]}
          style={{ width: '100%', height: '100%' }}
        >
          <div className="bg">
            {!isLoaded && (
              <img
                src="img/landscape.jpg"
                onLoad={() => {
                  setIsLoaded(true);
                }}
                className="main-image"
              />
            )}
            <Parallax translateY={['-50px', '50px']}>
              <h1 className="title"> <span>IT Nexus for you !</span></h1>
              <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=48&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+👋;+For a good dev;" />
                <br />
                <p className='infor'>This web is for who are new to programming and the same time <br />
                  is also a place to review knowledge for those <br /> who have learned through programming.</p>
               
                <br />
              

              <Parallax opacity={[-1, 3]}>
                <h2 className="links">
                  <span>Lets start!</span>
                  <div>
                    <FontAwesomeIcon
                      onClick={() => {
                        window.open('https://github.com/caongao999');
                      }}
                      icon={faGithub}
                      style={{ marginRight: '10px', color: '#FF8008' }}
                    />
                    <FontAwesomeIcon
                      onClick={() => {
                        window.open('https://github.com/caongao999');
                      }}
                      icon={faInstagram}
                    />
                  </div>
                </h2>
              </Parallax>
            </Parallax>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default Carousel;
