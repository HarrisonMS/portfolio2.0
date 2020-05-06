
import React from 'react';
import Me from '../img/me.jpg'

const Home = () => {
	return (
		<div className='home-container'>
      <div className='home-left-cont'>
        <h1 className='home-h1'>I'm Harrison Michael Seaborn</h1>
      </div>
      <div className='home-right-cont'>
      <img className='me-img' src={Me} alt='young harrison' />
        <h4 className='home-h4'>I'm a Full Stack Web Developer, from Spokane, WA</h4>
      </div>
		</div>
	);
};

export default Home;