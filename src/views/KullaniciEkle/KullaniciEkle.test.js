import React from 'react';
import ReactDOM from 'react-dom';
import KullaniciEkle from './KullaniciEkle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KullaniciEkle />, div);
  ReactDOM.unmountComponentAtNode(div);
});