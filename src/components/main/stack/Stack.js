import React from 'react';
import ProgressBar from './ProgressBar';

const Stack = () => {
  return (
    <section>
      <h1 className='mb-4'>The Stack</h1>
      <div className='mb-3 d-flex justify-content-between'>
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
      <ProgressBar name={'Bootstrap'} percent={89} offset={0}></ProgressBar>
      <ProgressBar name={'Angular 2+'} percent={82} offset={0}></ProgressBar>
      <ProgressBar name={'Node.js'} percent={76} offset={0}></ProgressBar>

      <ProgressBar name={'MongoDB'} percent={70} offset={0}></ProgressBar>
      <ProgressBar name={'C#'} percent={67} offset={0}></ProgressBar>
      <ProgressBar
        name={'ASP.NET MVC Core'}
        percent={55}
        offset={0}
      ></ProgressBar>
      <ProgressBar name={'SQL Server'} percent={44} offset={0}></ProgressBar>
      <ProgressBar name={'Java'} percent={35} offset={0}></ProgressBar>
    </section>
  );
};
export default Stack;
