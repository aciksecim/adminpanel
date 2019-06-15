import React from 'react';
import ReactDOM from 'react-dom';
import AdayEkle from './AdayEkle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdayEkle />, div);
  ReactDOM.unmountComponentAtNode(div);
});