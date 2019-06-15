import React from 'react';
import ReactDOM from 'react-dom';
import PartiEkle from './PartiEkle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartiEkle />, div);
  ReactDOM.unmountComponentAtNode(div);
});