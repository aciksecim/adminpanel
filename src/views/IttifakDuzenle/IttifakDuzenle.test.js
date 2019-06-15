import React from 'react';
import ReactDOM from 'react-dom';
import IttifakDuzenle from './IttifakDuzenle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IttifakDuzenle />, div);
  ReactDOM.unmountComponentAtNode(div);
});