import React from 'react';
import ReactDOM from 'react-dom';
import PartiDuzenle from './PartiDuzenle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartiDuzenle />, div);
  ReactDOM.unmountComponentAtNode(div);
});