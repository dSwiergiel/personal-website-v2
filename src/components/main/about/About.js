import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ProgressBar from './ProgressBar';

import './about.scss';
const About = () => {
  return (
    <div className='container py-4 px-4'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className='mb-4'>About Me</h1>
          <p>
            You've heard the cliche, the one where from an early age they've
            been interested in knowing how things work, even taking things apart
            to find out. That was me, and many of the skills I've acquired as a
            developer are self-taught coming from this natural interest to learn
            and create!
          </p>
          <p>
            I'm the first in my entire family to attend college and recently
            graduated Summa Cum Laude with a Bachelor's degree in Computer
            Science with a Minor in Applied Mathematics. Its been both a
            challenging yet rewarding experience and I feel fortunate to have
            such a great group of friends who've helped me along the way.
          </p>
          <p>
            I also have a passion for personal finance and investing. Some of my
            early software projects were tools to help with investing. Check out
            the{' '}
            <Link
              to='projects'
              className='real-link'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              project section
            </Link>{' '}
            to see some of them!
          </p>
        </div>
        <div className='col-lg-6'>
          <h1 className='mb-4'>Tech</h1>
          <ProgressBar
            name={'JavaScript & TypeScript'}
            percent={92}
            offset={0}
          ></ProgressBar>
          <ProgressBar
            name={'React w/hooks & Redux'}
            percent={90}
            offset={0}
          ></ProgressBar>
          <ProgressBar
            name={'Bootstrap'}
            percent={89}
            offset={0}
          ></ProgressBar>
          <ProgressBar
            name={'Angular 2+'}
            percent={82}
            offset={0}
          ></ProgressBar>
          <ProgressBar name={'Node.js'} percent={76} offset={0}></ProgressBar>

          <ProgressBar name={'MongoDB'} percent={70} offset={0}></ProgressBar>
          <ProgressBar name={'C#'} percent={67} offset={0}></ProgressBar>
          <ProgressBar
            name={'ASP.NET MVC Core'}
            percent={55}
            offset={0}
          ></ProgressBar>
          <ProgressBar name={'SQL'} percent={44} offset={0}></ProgressBar>
          <ProgressBar name={'jQuery'} percent={40} offset={0}></ProgressBar>
          <div className='d-flex justify-content-between '>
            <h5 className='mb-0 font-weight-bold text-secondary less-letter-spacing'>
              USED IT
            </h5>
            <h5 className='mb-0 font-weight-bold text-secondary less-letter-spacing'>
              USE IT
            </h5>
            <h5 className='mb-0 font-weight-bold text-secondary less-letter-spacing'>
              LOVE IT
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
