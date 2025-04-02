import React, { useRef, useState, useEffect } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonialsData = [
  {
    img: user_1,
    name: 'William Jackson',
    location: 'Edusity, USA',
    text: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
  },
  {
    img: user_2,
    name: 'Md Arif',
    location: 'XDBS, INDIA',
    text: 'Working at XDBS has been an amazing experience. The professional growth opportunities and supportive team have significantly shaped my career path.'
  },
  {
    img: user_3,
    name: 'Sophia Brown',
    location: 'TechCorp, UK',
    text: 'TechCorp has provided me with the perfect environment to innovate and grow. I\'ve gained invaluable experience working on cutting-edge projects.'
  },
  {
    img: user_4,
    name: 'James Smith',
    location: 'Innovate Solutions, Canada',
    text: 'Innovate Solutions is a place where creativity meets opportunity. The work culture here fosters continuous learning and development.'
  }
];

const Testimonials = () => {
  const slider = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 610);
  let tx = 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 610);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideForward = () => {
    if (isMobile) {
      if (tx > -75) {
        tx -= 25;
      }
    } else {
      if (tx > -50) {
        tx -= 25;
      }
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />

      <div className='slider'>
        <ul ref={slider} style={{ minHeight: '300px' }}>
          {testimonialsData.map((testimonial, index) => (
            <li key={index} className={isMobile ? 'single-slide' : ''} style={{ minHeight: '300px' }}>
              <div className='slide' style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className='user-info'>
                  <img src={testimonial.img} alt='' />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
