import React from 'react';
import ReactDOM from 'react-dom';
import TutanakDuzenle from './TutanakDuzenle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TutanakDuzenle />, div);
  ReactDOM.unmountComponentAtNode(div);
});