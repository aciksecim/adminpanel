import React from 'react';
import ReactDOM from 'react-dom';
import TutanakEkle from './TutanakEkle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TutanakEkle />, div);
  ReactDOM.unmountComponentAtNode(div);
});