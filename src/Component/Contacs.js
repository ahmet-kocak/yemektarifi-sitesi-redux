import React from 'react'
import Header from './HeaderContacs';
import LeftContacs from './LeftContacs';
import MiddleContacs from './MiddleContacs';


export const Contacs = () => {
    return (
  <div className="container">
  <Header/>
  <LeftContacs/>
  <MiddleContacs/>
  </div>
);
}
