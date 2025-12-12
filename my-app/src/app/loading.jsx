'use client';

import React from 'react';
import Lottie from 'lottie-react';
import './loading.css';

const animationPath = '/lotties/loading.json';

export default function Loading() {
  return (
    <div className="container text-center mt-5 pt-5">
      <div className="row  pt-5">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
          <Lottie 
          className='loading'
            path={animationPath} 
            loop 
            autoplay 
          />
          <h3 className="sego pb-5 mb-5">Preparando o melhor sabor para você!</h3>
        </div>
      </div>
    </div>
  );
}
