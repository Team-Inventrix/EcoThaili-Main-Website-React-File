import React from 'react';
import Countdown from 'react-countdown';
import bananaTreeImage from './image/banana-tree.png'; 

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <img src={bananaTreeImage} alt="3D Banana Tree" className="banana-tree" />
      <div className="content">
        <h1>Our Bio Banana Product is Coming Soon!</h1>
        <p>We're working hard to bring you an innovative and sustainable banana bio product. Stay tuned for updates!</p>
        {/* <div className="countdown">
          <p>Launching in:</p>
          <Countdown date={new Date('2024-12-31T00:00:00')} /> 
        </div> */}
      </div>
    </div>
  );
};

export default ComingSoon;
