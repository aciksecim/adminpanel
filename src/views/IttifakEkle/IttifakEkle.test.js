import React from 'react';
import ReactDOM from 'react-dom';
import IttifakEkle from './IttifakEkle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IttifakEkle />, div);
  ReactDOM.unmountComponentAtNode(div);
});