import React from "react";

export default function Labels() {
  return (
    <div className='pages'>
      <div className='pages_wrapper'>
        <div
          id='page-1'
          className='page page--welcome page--intro'>
          <h1 className='message'>I.E Software</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'>
          <h1 className='message'>No se que</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-3'
          className='page page--sounds page--hidden'>
          <h1 className='message'>Estoy haciendo</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-4'
          className='page page--battery page--hidden'>
          <h1 className='message'>Pero estoy</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-5'
          className='page page--construction page--hidden'>
          <h1 className='message'>Aprendiendo</h1>
          <p className='message--sub'>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Similique, accusamus.
          </p>
        </div>
      </div>
    </div>
  );
}
