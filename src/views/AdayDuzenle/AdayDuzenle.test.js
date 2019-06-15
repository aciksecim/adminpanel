import React from 'react';
import ReactDOM from 'react-dom';
import AdayDuzenle from './AdayDuzenle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdayDuzenle />, div);
  ReactDOM.unmountComponentAtNode(div);
});