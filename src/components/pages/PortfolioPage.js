import React from 'react';
import ProjectList from '../ProjectList';

export default function Home() {
  return (
    <div className='mr-1'>
      <div className="jumbotron">
        <h1 class="d-flex display-5 justify-content-center">Projects!</h1>
      </div>
      <div className="jumbotron justify content-center">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
            <ProjectList></ProjectList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
