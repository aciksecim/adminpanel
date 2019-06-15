import React from 'react';
import ReactDOM from 'react-dom';
import SandikEkle from './SandikEkle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SandikEkle />, div);
  ReactDOM.unmountComponentAtNode(div);
});