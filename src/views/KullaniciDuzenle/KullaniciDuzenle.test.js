import React from 'react';
import ReactDOM from 'react-dom';
import KullaniciDuzenle from './KullaniciDuzenle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KullaniciDuzenle />, div);
  ReactDOM.unmountComponentAtNode(div);
});